import React from "react";
import { Phone, MapPin, Building, Clock, Navigation } from "lucide-react";
import { CONTACT_INFO } from "../data";
import { motion } from "motion/react";

export default function ContactSection() {
  const addressParts = [
    CONTACT_INFO.address.complex,
    CONTACT_INFO.address.road,
    CONTACT_INFO.address.landmark,
    CONTACT_INFO.address.area1,
    CONTACT_INFO.address.area2,
    CONTACT_INFO.address.city,
    CONTACT_INFO.address.stateZip
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-[#EEE8FB] via-[#F4F0FD] to-[#EBF0FC] border-t border-[#D8D0F5]/40">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="label-colorful mb-3 block">
            Location & Contacts
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight heading-gradient">
            We are Here to Support You
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-brand-blue mx-auto"></div>
          <p className="mt-4 text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Get in touch with us directly or visit our premium therapy centre in Varanasi.
          </p>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg p-6 border border-stone-200/60 flex items-start space-x-4 group hover:bg-[#FCFBF7] transition-all"
            >
              <div className="bg-brand-blue/10 text-brand-blue p-3.5 rounded-lg flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Phone Number
                </span>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-xl md:text-2xl font-display font-semibold text-slate-900 hover:text-brand-blue transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Call or WhatsApp for quick admissions support.
                </p>
              </div>
            </motion.div>

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="bg-white rounded-lg p-6 border border-stone-200/60 flex items-start space-x-4 group hover:bg-[#FCFBF7] transition-all"
            >
              <div className="bg-brand-green/10 text-brand-green p-3.5 rounded-lg flex-shrink-0 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                  Our Address
                </span>
                <address className="not-italic text-sm md:text-base text-slate-700 font-serif leading-relaxed space-y-1">
                  {addressParts.map((part, index) => (
                    <p key={index} className="m-0">
                      {part}
                    </p>
                  ))}
                </address>
                <div className="mt-4 pt-4 border-t border-stone-200/60 flex items-center justify-between">
                  <a
                    href="https://maps.google.com/?q=HG+Complex+Chitaipur+Chunar+Road+Varanasi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-green hover:text-brand-green-hover"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    <span>Get Driving Directions</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Organisation Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white rounded-lg p-6 border border-stone-200/60 flex items-start space-x-4 hover:bg-[#FCFBF7] transition-all"
            >
              <div className="bg-brand-blue/10 text-brand-blue p-3.5 rounded-lg flex-shrink-0">
                <Building className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Parent Organisation
                </span>
                <h4 className="text-base font-display font-bold text-[#008DD2]">
                  {CONTACT_INFO.parentOrg}
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  Childcare Therapy Centre is an official operating healthcare unit under the supervision of Changing Minds.
                </p>
              </div>
            </motion.div>

            {/* Timings */}
            <div className="bg-white rounded-lg p-6 border border-stone-200/60 flex items-start space-x-4">
              <div className="bg-amber-50 text-amber-800 p-3.5 rounded-lg flex-shrink-0 border border-amber-100">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Admissions Hours
                </span>
                <h4 className="text-sm font-bold text-[#73C043] font-display">
                  Monday – Saturday: 09:30 AM – 06:30 PM
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Sundays closed. Pre-booking of assessments is highly recommended.
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Map Column */}
          <div className="lg:col-span-7 h-full min-h-[400px] lg:min-h-[500px]">
            <div className="relative rounded-lg overflow-hidden border border-stone-200 shadow-md h-full bg-slate-100 min-h-[400px] lg:min-h-[500px] flex flex-col">
              {/* Map embed iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3183921764724!2d82.9566938!3d25.2798604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31fca6986c7d%3A0xc3b8fbfe4c95b43c!2sChitaipur%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 flex-grow animate-fade-in"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Childcare Therapy Centre Location"
              ></iframe>
              
              {/* Floating map badge with coordinates */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-md border border-stone-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">Varanasi Center</h4>
                  <p className="text-[10px] text-slate-500 font-medium">Chitaipur–Chunar Road, Gokul Nagar</p>
                </div>
                <a
                  href="https://maps.google.com/?q=HG+Complex+Chitaipur+Chunar+Road+Varanasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-blue text-white p-2 rounded-lg hover:bg-brand-blue-hover transition-colors shadow-sm cursor-pointer"
                  title="Open in Maps app"
                >
                  <Navigation className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
