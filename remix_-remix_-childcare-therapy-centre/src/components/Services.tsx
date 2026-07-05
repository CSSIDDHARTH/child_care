import React from "react";
import { MessageSquare, Activity, BookOpen, Smile, ArrowUpRight } from "lucide-react";
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
    default:
      return <Activity className="h-6 w-6 text-brand-blue" />;
  }
};

const getBadgeStyle = (id: string) => {
  switch (id) {
    case "speech-therapy":
    case "special-education":
      return "bg-brand-blue/10 text-brand-blue";
    case "occupational-therapy":
    case "behaviour-therapy":
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
    default:
      return "bg-white";
  }
};

const getCardBorder = (id: string) => {
  switch (id) {
    case "speech-therapy":
    case "special-education":
      return "border-2 border-[#008DD2]/20 hover:border-[#008DD2]/80 shadow-[0_12px_30px_rgba(0,141,210,0.07)] hover:shadow-[0_22px_45px_rgba(0,141,210,0.18)]";
    case "occupational-therapy":
    case "behaviour-therapy":
      return "border-2 border-[#73C043]/20 hover:border-[#73C043]/80 shadow-[0_12px_30px_rgba(115,192,67,0.07)] hover:shadow-[0_22px_45px_rgba(115,192,67,0.18)]";
    default:
      return "border-2 border-stone-200/60 shadow-[0_12px_30px_rgba(0,0,0,0.02)]";
  }
};

export default function Services() {
  const handleScrollTo = () => {
    const element = document.querySelector("#consultation");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F7FBFE] border-y border-slate-100">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-brand-blue font-bold tracking-wider text-xs uppercase mb-3 block">
            Clinical Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-slate-900 tracking-tight">
            Our Primary Therapeutic Disciplines
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-brand-blue mx-auto"></div>
          <p className="mt-4 text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We offer structured, individualized support across four primary clinical dimensions. Every program is evidence-based and customized.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${getCardBackground(service.id)} ${getCardBorder(service.id)} rounded-3xl transition-all duration-500 overflow-hidden group flex flex-col justify-between`}
            >
              <div>
                {/* Image Header with Subtle Hover Ken Burns zoom */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      service.id === "speech-therapy" ? "object-top" : "object-center"
                    }`}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  
                  {/* Category Pill */}
                  <span className={`absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm backdrop-blur-md ${getBadgeStyle(service.id)}`}>
                    {getIcon(service.id)}
                    <span className="ml-1.5">{service.title}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-display font-medium text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Bullet specifics for clinical look */}
                  <div className="mt-5 pt-5 border-t border-stone-200/60 space-y-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Scope of Practice Include:</p>
                    {service.id === "speech-therapy" && (
                      <ul className="grid grid-cols-1 gap-1 text-xs text-slate-500 font-medium list-disc list-inside">
                        <li>Articulation & Phonological Disorders</li>
                        <li>Fluency (Stuttering) & Voice modulation</li>
                        <li>Expressive & Receptive Language</li>
                        <li>Alternative & Augmentative Communication (AAC)</li>
                      </ul>
                    )}
                    {service.id === "occupational-therapy" && (
                      <ul className="grid grid-cols-1 gap-1 text-xs text-slate-500 font-medium list-disc list-inside">
                        <li>Fine Motor Coordination & Handwriting</li>
                        <li>Sensory Integration Therapy</li>
                        <li>Gross Motor Planning & Bilateral Coordination</li>
                        <li>Self-Regulation & ADL Independence</li>
                      </ul>
                    )}
                    {service.id === "special-education" && (
                      <ul className="grid grid-cols-1 gap-1 text-xs text-slate-500 font-medium list-disc list-inside">
                        <li>IEP (Individualized Education Program) Design</li>
                        <li>Cognitive development & Pre-academic concepts</li>
                        <li>Sensory-based and adaptive learning methods</li>
                        <li>Conceptual mathematics & Remedial reading</li>
                      </ul>
                    )}
                    {service.id === "behaviour-therapy" && (
                      <ul className="grid grid-cols-1 gap-1 text-xs text-slate-500 font-medium list-disc list-inside">
                        <li>Positive Behavior Support & Intervention Plans</li>
                        <li>Applied Behavior Analysis (ABA) concepts</li>
                        <li>Emotional literacy & Regulating triggers</li>
                        <li>Social play skills & Peer interaction</li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Link inside Service Card */}
              <div className="p-6 md:p-8 pt-0 mt-auto">
                <button
                  onClick={handleScrollTo}
                  className="w-full flex items-center justify-between text-left text-sm font-bold text-brand-blue border border-stone-200/60 hover:border-brand-blue/30 bg-white hover:bg-brand-blue/5 p-4 rounded-lg transition-all duration-200"
                >
                  <span>Request clinical intake for {service.title}</span>
                  <ArrowUpRight className="h-4.5 w-4.5 text-brand-blue" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
