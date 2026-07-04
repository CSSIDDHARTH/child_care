import React from "react";
import { ShieldCheck, ClipboardList, Users, Award } from "lucide-react";
import { FEATURES } from "../data";
import { motion } from "motion/react";

const getFeatureIcon = (id: string) => {
  switch (id) {
    case "safe-env":
      return <ShieldCheck className="h-7 w-7 text-brand-green" />;
    case "indiv-plans":
      return <ClipboardList className="h-7 w-7 text-brand-blue" />;
    case "exp-team":
      return <Users className="h-7 w-7 text-brand-blue" />;
    case "real-results":
      return <Award className="h-7 w-7 text-brand-green" />;
    default:
      return <ShieldCheck className="h-7 w-7 text-brand-blue" />;
  }
};

const getFeatureIconBg = (id: string) => {
  switch (id) {
    case "safe-env":
    case "real-results":
      return "bg-brand-green/10 ring-brand-green/20";
    case "indiv-plans":
    case "exp-team":
      return "bg-brand-blue/10 ring-brand-blue/20";
    default:
      return "bg-slate-100 ring-slate-200";
  }
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-[#FCFBF7] overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-brand-green font-bold tracking-wider text-xs uppercase mb-3 block">
            Clinical Standards
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-slate-900 tracking-tight">
            Why Choose Our Therapy Centre?
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-brand-green mx-auto"></div>
          <p className="mt-4 text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Our practices align with the highest medical standards, ensuring high clinical accuracy and compassionate care.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 md:p-8 border border-stone-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left"
            >
              {/* Premium Icon Frame with ring detail */}
              <div className={`p-4 rounded-lg ring-4 mb-6 flex-shrink-0 flex items-center justify-center ${getFeatureIconBg(feature.id)}`}>
                {getFeatureIcon(feature.id)}
              </div>

              <h3 className="text-lg md:text-xl font-display font-medium text-slate-900 mb-3 leading-snug">
                {feature.title}
              </h3>
              
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* High-trust mini info bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white border border-stone-200/60 rounded-lg p-6 text-center max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-around gap-4"
        >
          <div className="flex items-center space-x-2 text-slate-700">
            <span className="w-2 h-2 rounded-full bg-brand-green"></span>
            <span className="text-xs font-bold uppercase tracking-wider">Certified Clinical Protocols</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-stone-200"></div>
          <div className="flex items-center space-x-2 text-slate-700">
            <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
            <span className="text-xs font-bold uppercase tracking-wider">Compassionate Play-Based Methods</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-stone-200"></div>
          <div className="flex items-center space-x-2 text-slate-700">
            <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
            <span className="text-xs font-bold uppercase tracking-wider">Regular Parental Progress Updates</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
