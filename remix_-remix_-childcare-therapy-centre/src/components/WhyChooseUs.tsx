import React from "react";
import { ShieldCheck, ClipboardList, Users, Award, Building, Brain, GraduationCap, Coins } from "lucide-react";
import { FEATURES } from "../data";
import { motion } from "motion/react";

const getFeatureIcon = (id: string) => {
  switch (id) {
    case "expert-team":
      return <Users className="h-7 w-7 text-[#008DD2]" />;
    case "advanced-infra":
      return <Building className="h-7 w-7 text-[#73C043]" />;
    case "psychological-assessments":
      return <Brain className="h-7 w-7 text-[#008DD2]" />;
    case "science-results":
      return <Award className="h-7 w-7 text-[#73C043]" />;
    case "parent-training":
      return <GraduationCap className="h-7 w-7 text-[#008DD2]" />;
    case "cost-effective":
      return <Coins className="h-7 w-7 text-[#73C043]" />;
    default:
      return <ShieldCheck className="h-7 w-7 text-brand-blue" />;
  }
};

const getFeatureIconBg = (id: string) => {
  switch (id) {
    case "advanced-infra":
    case "science-results":
    case "cost-effective":
      return "bg-[#73C043]/10 ring-[#73C043]/20";
    case "expert-team":
    case "psychological-assessments":
    case "parent-training":
      return "bg-[#008DD2]/10 ring-[#008DD2]/20";
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

        {/* Comparative Analysis Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 overflow-x-auto rounded-3xl border border-stone-200/80 bg-white shadow-xl max-w-5xl mx-auto"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-stone-200/80">
                <th className="py-6 px-6 font-display font-bold text-slate-800 text-sm md:text-base uppercase tracking-wider">Comparison Area</th>
                <th className="py-6 px-6 font-display font-bold text-[#008DD2] text-base md:text-lg bg-sky-50/40 border-x border-stone-200/80 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#73C043]"></span>
                    <span>Our Centre</span>
                  </div>
                </th>
                <th className="py-6 px-6 font-display font-bold text-slate-500 text-sm md:text-base text-center md:text-left">Standard Clinics</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-150">
              <tr className="hover:bg-slate-50/40 transition-colors">
                <td className="py-5 px-6 font-display font-bold text-slate-900 text-sm md:text-base">Clinical Team</td>
                <td className="py-5 px-6 bg-sky-50/20 border-x border-stone-200/80 font-normal text-slate-700 text-sm md:text-base">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl leading-none select-none">✅</span>
                    <span className="font-semibold text-slate-900">Expert multi-disciplinary team</span>
                  </div>
                </td>
                <td className="py-5 px-6 font-normal text-slate-500 text-sm md:text-base">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl leading-none select-none">❌</span>
                    <span>Rotating or inexperienced staff</span>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/40 transition-colors">
                <td className="py-5 px-6 font-display font-bold text-slate-900 text-sm md:text-base">Infrastructure</td>
                <td className="py-5 px-6 bg-sky-50/20 border-x border-stone-200/80 font-normal text-slate-700 text-sm md:text-base">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl leading-none select-none">✅</span>
                    <span className="font-semibold text-slate-900">Advanced infrastructure & tools</span>
                  </div>
                </td>
                <td className="py-5 px-6 font-normal text-slate-500 text-sm md:text-base">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl leading-none select-none">❌</span>
                    <span>Outdated, basic clinical facilities</span>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/40 transition-colors">
                <td className="py-5 px-6 font-display font-bold text-slate-900 text-sm md:text-base">Waiting Times</td>
                <td className="py-5 px-6 bg-sky-50/20 border-x border-stone-200/80 font-normal text-slate-700 text-sm md:text-base">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl leading-none select-none">✅</span>
                    <span className="font-semibold text-slate-900">Timely psychological assessments</span>
                  </div>
                </td>
                <td className="py-5 px-6 font-normal text-slate-500 text-sm md:text-base">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl leading-none select-none">❌</span>
                    <span>Long waitlists and delayed evaluations</span>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/40 transition-colors">
                <td className="py-5 px-6 font-display font-bold text-slate-900 text-sm md:text-base">Clinical Focus</td>
                <td className="py-5 px-6 bg-sky-50/20 border-x border-stone-200/80 font-normal text-slate-700 text-sm md:text-base">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl leading-none select-none">✅</span>
                    <span className="font-semibold text-slate-900">Scientifically proven & result-oriented</span>
                  </div>
                </td>
                <td className="py-5 px-6 font-normal text-slate-500 text-sm md:text-base">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl leading-none select-none">❌</span>
                    <span>Generic, unmeasured approaches</span>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/40 transition-colors">
                <td className="py-5 px-6 font-display font-bold text-slate-900 text-sm md:text-base">Family Support</td>
                <td className="py-5 px-6 bg-sky-50/20 border-x border-stone-200/80 font-normal text-slate-700 text-sm md:text-base">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl leading-none select-none">✅</span>
                    <span className="font-semibold text-slate-900">Parent training and guidance</span>
                  </div>
                </td>
                <td className="py-5 px-6 font-normal text-slate-500 text-sm md:text-base">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl leading-none select-none">❌</span>
                    <span>Minimal parent involvement</span>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/40 transition-colors">
                <td className="py-5 px-6 font-display font-bold text-slate-900 text-sm md:text-base">Care Value</td>
                <td className="py-5 px-6 bg-sky-50/20 border-x border-stone-200/80 font-normal text-slate-700 text-sm md:text-base">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl leading-none select-none">✅</span>
                    <span className="font-semibold text-slate-900">Cost-effective care</span>
                  </div>
                </td>
                <td className="py-5 px-6 font-normal text-slate-500 text-sm md:text-base">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl leading-none select-none">❌</span>
                    <span>High out-of-pocket costs and hidden fees</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>

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
