import React from "react";
import { Check, Brain, Shield, Award, Calendar } from "lucide-react";
import { motion } from "motion/react";

export default function TherapyApproach() {
  const approaches = [
    {
      title: "Speech Therapy",
      evidence: "Grounded in developmental linguistics and neurological pathways to retrain speech muscles, improve auditory processing, and build social communication pragmatics.",
    },
    {
      title: "Occupational Therapy",
      evidence: "Utilizes sensory integration theory and motor-learning principles to help children regulate external inputs, build core strength, and gain functional independence.",
    },
    {
      title: "Special Education",
      evidence: "Applies cognitive psychology, structured learning scaffolds, and sensory-friendly pedagogical frameworks to support diverse learning minds.",
    },
    {
      title: "Behaviour Therapy",
      evidence: "Informed by behavioral science, positive reinforcement, and emotional regulation strategies to replace challenging habits with healthy social coping skills.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 md:mb-24">
          <div className="lg:col-span-8 text-left">
            <span className="text-brand-yellow font-bold tracking-wider text-xs uppercase mb-3 block">
              Clinical Methodology
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight">
              Evidence-Based Therapies
            </h2>
            <div className="mt-4 w-12 h-0.5 bg-brand-yellow"></div>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Every method, assessment, and therapy protocol we deploy at Childcare Therapy Centre is supported by verified healthcare research and pediatric science.
            </p>
          </div>
        </div>

        {/* Dynamic Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Scientific Framework Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="h-6 w-6 text-brand-yellow" />
                <h3 className="text-lg font-medium font-display text-white">Interdisciplinary Alignment</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                By integrating <span className="text-white font-semibold">Speech Therapy</span>, <span className="text-white font-semibold">Occupational Therapy</span>, <span className="text-white font-semibold">Special Education</span>, and <span className="text-white font-semibold">Behaviour Therapy</span> under a unified clinical framework, our clinicians address all aspects of development in synergy.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-brand-green" />
                <h3 className="text-lg font-medium font-display text-white">Regular Peer Assessments</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our team meets weekly for interdisciplinary peer reviews to coordinate care, cross-reference progress metrics, and adjust behavioral support strategies.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="h-6 w-6 text-brand-yellow" />
                <h3 className="text-lg font-medium font-display text-white">Standardized Evaluations</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                We utilize globally validated pediatric developmental scales to establish clean, reliable baselines and measure real milestones transparently.
              </p>
            </div>
          </div>

          {/* Academic Approach Detail Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Scientific Support for Our 4 Pillars:</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {approaches.map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/[0.08] transition-all group"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-0.5 h-5 bg-brand-yellow"></div>
                    <h5 className="font-display font-medium text-base text-white group-hover:text-brand-yellow transition-colors">
                      {app.title}
                    </h5>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {app.evidence}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Evidence quote */}
            <div className="pt-6 border-t border-white/10 flex items-center space-x-4">
              <div className="flex-shrink-0 bg-brand-green/20 text-brand-green p-2 rounded-lg">
                <Check className="h-4.5 w-4.5 stroke-[3]" />
              </div>
              <p className="text-xs text-slate-400 leading-normal italic">
                Our child-centric model applies positive reinforcement, sensory integration, and structured therapeutic communication, which peer-reviewed studies show yield significantly higher long-term social success.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
