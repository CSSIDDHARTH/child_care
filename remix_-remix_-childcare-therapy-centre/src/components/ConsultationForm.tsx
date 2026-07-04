import React, { useState } from "react";
import { Calendar, Phone, ArrowRight, ShieldCheck, Mail, CheckCircle, Loader2 } from "lucide-react";
import { CONTACT_INFO } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    phone: "",
    email: "",
    serviceRequired: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.childName || !formData.phone || !formData.email || !formData.serviceRequired || !formData.message) {
      setError("Please complete all required fields so we may process your clinical intake.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit phone number so our team can reach you.");
      return;
    }

    setIsSubmitting(true);

    const submitData = new URLSearchParams();
    submitData.append("entry.2005620554", formData.parentName);
    submitData.append("entry.1045781291", formData.childName);
    submitData.append("entry.1065046570", formData.phone);
    submitData.append("entry.1166974658", formData.email);
    submitData.append("entry.839337160", formData.serviceRequired);
    submitData.append("entry.1134034844", formData.message);

    try {
      console.log("Outgoing Payload:", Object.fromEntries(submitData.entries()));
      await fetch("https://docs.google.com/forms/d/e/1FAIpQLSfGZ6TjQ0xwIKSFiCReRl89NlIsxRykutA-_u0j40TrIopcCQ/formResponse", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: submitData
      });
      // Since mode is no-cors, we won't get a readable response. Assume success if fetch completes.
      setIsSubmitted(true);
    } catch (err) {
      console.error("Form Fetch Exception:", err);
      setError("Something went wrong while submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      parentName: "",
      childName: "",
      phone: "",
      email: "",
      serviceRequired: "",
      message: ""
    });
    setIsSubmitted(false);
  };

  return (
    <section id="consultation" className="py-20 md:py-28 bg-gradient-to-b from-white to-[#FCFBF7] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Informational Column */}
          <div className="lg:col-span-5 text-left">
            <span className="text-brand-blue font-bold tracking-wider text-xs uppercase mb-3 block">
              Admissions & Intake
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-slate-900 tracking-tight mb-6">
              Begin Your Child’s Journey to Success
            </h2>
            <div className="w-12 h-0.5 bg-brand-blue mb-8"></div>

            <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base font-serif">
              We look forward to partnering with your family. Setting up a consultation allows our clinical team to understand your child's distinct challenges, establish functional developmental baselines, and design an individualized program.
            </p>

            {/* Quick Intake steps */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue/10 text-brand-blue font-display font-semibold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-900 text-base mb-1">Clinical Intake Form</h3>
                  <p className="text-sm text-slate-500">Provide high-level details about your child's developmental profile and specific therapy requirements.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue/10 text-brand-blue font-display font-semibold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-900 text-base mb-1">Practitioner Matching</h3>
                  <p className="text-sm text-slate-500">Our senior therapists review the inquiry and coordinate a 1-on-1 assessment time.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue/10 text-brand-blue font-display font-semibold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-900 text-base mb-1">Comprehensive Evaluation</h3>
                  <p className="text-sm text-slate-500">We complete standard motor, cognitive, and communicative evaluations in a warm play-friendly setting.</p>
                </div>
              </div>
            </div>

            {/* Privacy statement / Clinical trust badge */}
            <div className="bg-[#FCFBF7] border border-stone-200/60 rounded-lg p-4 flex items-center space-x-3">
              <div className="text-brand-green flex-shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Your family's details are strictly confidential and governed by HIPAA-aligned security protocols within Changing Minds Mental Health Care.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-[#FCFBF7] rounded-xl shadow-lg border border-stone-200 p-6 sm:p-8 md:p-10 relative">

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form-view"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-6 md:mb-8 text-center sm:text-left">
                      <h3 className="text-xl md:text-2xl font-display font-medium text-slate-900 mb-2">
                        Request a Clinical Assessment
                      </h3>
                      <p className="text-xs md:text-sm text-slate-500">
                        Fill out the details below. Our senior admissions coordinator will contact you shortly.
                      </p>
                    </div>

                    {error && (
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-6 text-xs md:text-sm text-red-700 font-medium">
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Parent Name */}
                        <div>
                          <label htmlFor="parentName" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                            Parent Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="parentName"
                            name="parentName"
                            required
                            placeholder="e.g., Jane Doe"
                            value={formData.parentName}
                            onChange={handleChange}
                            className="w-full bg-white border border-stone-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-lg px-4 py-3 text-slate-800 text-sm outline-none transition-all duration-150"
                          />
                        </div>

                        {/* Child Name */}
                        <div>
                          <label htmlFor="childName" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                            Child Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="childName"
                            name="childName"
                            required
                            placeholder="e.g., Leo Doe"
                            value={formData.childName}
                            onChange={handleChange}
                            className="w-full bg-white border border-stone-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-lg px-4 py-3 text-slate-800 text-sm outline-none transition-all duration-150"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Phone Number */}
                        <div>
                          <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            placeholder="e.g., 7007687896"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-white border border-stone-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-lg px-4 py-3 text-slate-800 text-sm outline-none transition-all duration-150"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="e.g., jane@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white border border-stone-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-lg px-4 py-3 text-slate-800 text-sm outline-none transition-all duration-150"
                          />
                        </div>
                      </div>

                      {/* Service Required */}
                      <div>
                        <label htmlFor="serviceRequired" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Service Required <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="serviceRequired"
                          name="serviceRequired"
                          value={formData.serviceRequired}
                          onChange={handleChange}
                          className="w-full bg-white border border-stone-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-lg px-4 py-3 text-slate-800 text-sm outline-none transition-all duration-150 cursor-pointer"
                        >
                          <option value="" disabled>Select a service...</option>
                          {/* Note: The 'value' attribute MUST exactly match the Google Form options (case-sensitive). */}
                          <option value="Speech Therapy">Speech Therapy</option>
                          <option value="Behavioral Therapy">Behavioral Therapy</option>
                          <option value="Special Education">Special Education</option>
                          <option value="Occupational Therapy">Occupational Therapy</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Your Message / Specific Concerns <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          placeholder="Please describe your child's current development or main challenges (e.g., speech clarity, motor tasks, sensory sensitivity)..."
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-white border border-stone-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue rounded-lg px-4 py-3 text-slate-800 text-sm outline-none transition-all duration-150 resize-none"
                        ></textarea>
                      </div>

                      {/* Submit CTA */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-blue text-white py-4 px-6 rounded-lg text-base font-bold hover:bg-brand-blue-hover transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-200 mt-6 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:-translate-y-0"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Book a Consultation Today!</span>
                            <ArrowRight className="h-5 w-5" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-view"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                      className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(34,197,94,0.15)]"
                    >
                      <CheckCircle className="h-10 w-10" />
                    </motion.div>

                    <motion.h3
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="text-3xl font-display font-medium text-slate-900 mb-4 tracking-tight"
                    >
                      Thank you!
                    </motion.h3>

                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="text-slate-500 text-base max-w-sm mx-auto leading-relaxed mb-10"
                    >
                      Our admissions coordinator will contact you shortly.
                    </motion.p>

                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      onClick={handleReset}
                      className="text-sm font-semibold text-brand-blue hover:text-brand-blue-hover transition-colors cursor-pointer"
                    >
                      ← Submit another request
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
