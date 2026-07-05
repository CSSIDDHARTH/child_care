import React from "react";
import { MessageSquare, Activity, BookOpen, Smile, ClipboardCheck, Heart } from "lucide-react";
import { SERVICES } from "../data";
import { motion } from "motion/react";

const getIcon = (id: string) => {
  switch (id) {
    case "speech-therapy":
      return <MessageSquare className="h-6 w-6 text-brand-blue" />;
    case "occupational-therapy":
      return <Activity className="h-6 w-6 text-brand-green" />;
    case "special-education":
      return <BookOpen className="h-6 w-6 text-brand-blue" />;
    case "behaviour-therapy":
      return <Smile className="h-6 w-6 text-brand-green" />;
    case "developmental-assessment":
      return <ClipboardCheck className="h-6 w-6 text-brand-blue" />;
    case "parent-counseling":
      return <Heart className="h-6 w-6 text-brand-green" />;
    default:
      return <Activity className="h-6 w-6 text-brand-blue" />;
  }
};

const getBadgeStyle = (id: string) => {
  switch (id) {
    case "speech-therapy":
    case "special-education":
    case "developmental-assessment":
      return "bg-brand-blue/10 text-brand-blue";
    case "occupational-therapy":
    case "behaviour-therapy":
    case "parent-counseling":
      return "bg-brand-green/10 text-brand-green";
    default:
      return "bg-slate-100 text-slate-700";
  }
};

const getCardBackground = (id: string) => {
  switch (id) {
    case "speech-therapy":
      return "bg-gradient-to-br from-blue-50 to-indigo-100/50";
    case "occupational-therapy":
      return "bg-gradient-to-br from-emerald-50 to-teal-100/50";
    case "special-education":
      return "bg-gradient-to-br from-amber-50 to-orange-100/50";
    case "behaviour-therapy":
      return "bg-gradient-to-br from-rose-50 to-pink-100/50";
    case "developmental-assessment":
      return "bg-gradient-to-br from-violet-50 to-purple-100/50";
    case "parent-counseling":
      return "bg-gradient-to-br from-cyan-50 to-sky-100/50";
    default:
      return "bg-white";
  }
};

const getCardBorder = (id: string) => {
  switch (id) {
    case "speech-therapy":
      return "border border-indigo-100/60";
    case "occupational-therapy":
      return "border border-teal-100/60";
    case "special-education":
      return "border border-orange-100/60";
    case "behaviour-therapy":
      return "border border-pink-100/60";
    case "developmental-assessment":
      return "border border-purple-100/60";
    case "parent-counseling":
      return "border border-sky-100/60";
    default:
      return "border border-stone-200/60";
  }
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-[#B8DFF5] to-[#CCE9F8] border-y border-[#A0D4F0]/50">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="label-colorful mb-3 block">
            Clinical Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight heading-gradient">
            Our Comprehensive Therapeutic & Assessment Services
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-brand-blue mx-auto"></div>
          <p className="mt-4 text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
            We offer structured, individualized support across six key clinical areas. Every program is evidence-based and customized.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className={`${getCardBackground(service.id)} ${getCardBorder(service.id)} rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden group flex flex-col`}
            >
              <div>
                {/* Image Header within Rounded Tile container */}
                <div className="p-6 pb-0">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-50 shadow-inner">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 object-center"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-display font-bold text-[#008DD2] mb-4 group-hover:text-[#73C043] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-800 text-base leading-relaxed font-normal">
                    {service.description}
                  </p>
                  
                  {/* Bullet specifics for clinical look */}
                  <div className="mt-8 pt-6 border-t border-slate-200 space-y-3">
                    <p className="text-[11px] font-bold text-slate-600 uppercase tracking-widest mb-3">Scope of Practice</p>
                    {service.id === "speech-therapy" && (
                      <ul className="grid grid-cols-1 gap-1 text-xs text-slate-700 font-medium list-disc list-inside">
                        <li>Articulation & Phonological Disorders</li>
                        <li>Fluency (Stuttering) & Voice modulation</li>
                        <li>Expressive & Receptive Language</li>
                        <li>Alternative & Augmentative Communication (AAC)</li>
                      </ul>
                    )}
                    {service.id === "occupational-therapy" && (
                      <ul className="grid grid-cols-1 gap-1 text-xs text-slate-700 font-medium list-disc list-inside">
                        <li>Fine Motor Coordination & Handwriting</li>
                        <li>Sensory Integration Therapy</li>
                        <li>Gross Motor Planning & Bilateral Coordination</li>
                        <li>Self-Regulation & ADL Independence</li>
                      </ul>
                    )}
                    {service.id === "special-education" && (
                      <ul className="grid grid-cols-1 gap-1 text-xs text-slate-700 font-medium list-disc list-inside">
                        <li>IEP (Individualized Education Program) Design</li>
                        <li>Cognitive development & Pre-academic concepts</li>
                        <li>Sensory-based and adaptive learning methods</li>
                        <li>Conceptual mathematics & Remedial reading</li>
                      </ul>
                    )}
                    {service.id === "behaviour-therapy" && (
                      <ul className="grid grid-cols-1 gap-1 text-xs text-slate-700 font-medium list-disc list-inside">
                        <li>Positive Behavior Support & Intervention Plans</li>
                        <li>Applied Behavior Analysis (ABA) concepts</li>
                        <li>Emotional literacy & Regulating triggers</li>
                        <li>Social play skills & Peer interaction</li>
                      </ul>
                    )}
                    {service.id === "developmental-assessment" && (
                      <ul className="grid grid-cols-1 gap-1 text-xs text-slate-700 font-medium list-disc list-inside">
                        <li>Cognitive & Intellectual Assessments</li>
                        <li>Emotional & Behavioral Evaluation</li>
                        <li>School Readiness & Learning Profiling</li>
                        <li>Diagnostic ADHD & Autism Screening</li>
                      </ul>
                    )}
                    {service.id === "parent-counseling" && (
                      <ul className="grid grid-cols-1 gap-1 text-xs text-slate-700 font-medium list-disc list-inside">
                        <li>Positive Parenting & Co-regulation Strategies</li>
                        <li>Family Counseling & Systemic Support</li>
                        <li>Stress Management & Caregiver Wellness</li>
                        <li>Behavioral Intervention Coaching</li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
