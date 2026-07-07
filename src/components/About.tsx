import React from "react";
import { Check, ShieldCheck, Heart, Award, Brain } from "lucide-react";
import { BENEFITS, CONTACT_INFO } from "../data";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-[#FFF5ED] via-[#FDF9F5] to-[#E8F8EF] overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Info & Parent Org Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-2 text-brand-green font-semibold tracking-wider text-xs uppercase mb-3"
          >
           
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 heading-gradient"
          >
            About Childcare Therapy Centre
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative border-y border-stone-200 py-10 md:py-12 my-10 text-center"
          >
            <p className="quote-handwriting text-3xl md:text-4xl max-w-2xl mx-auto">
              "A safe, supportive and stimulating environment for every child to learn, grow and thrive."
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2 text-xs font-semibold text-slate-500 uppercase tracking-widest">
              <span>Primary Mission Statement</span>
              <span>•</span>
              <span className="quote-handwriting text-base">Childcare Therapy Centre</span>
            </div>
          </motion.div>

          <p className="text-sm text-slate-600 mt-6 font-medium text-center max-w-2xl mx-auto leading-relaxed">
            Childcare Therapy Centre is proud to be an official clinical unit of{" "}
            <span className="text-slate-800 font-bold">{CONTACT_INFO.parentOrg}</span>. We provide academic and evidence-based rehabilitative therapies for children facing developmental challenges.
          </p>
        </div>

        {/* Motto Section & Key Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Motto Column (Left Side) */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            {/* Ambient pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/25 rounded-full blur-3xl -ml-16 -mb-16"></div>

            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-8 block">Our Clinical Core Motto</span>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center font-display font-medium text-lg text-brand-yellow">
                    I
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-medium tracking-tight">
                    Every Child.
                  </h3>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center font-display font-medium text-lg text-brand-yellow">
                    II
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-medium tracking-tight">
                    Every Step.
                  </h3>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center font-display font-medium text-lg text-brand-yellow">
                    III
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-medium tracking-tight">
                    Every Success.
                  </h3>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex items-center space-x-4">
                <div className="bg-white/10 p-2.5 rounded-lg text-white">
                  <Award className="h-5 w-5 text-brand-yellow" />
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  We measure success not by the absolute speed of development, but by the personal victories, step-by-step progress, and clinical accuracy of outcomes for each child.
                </p>
              </div>
            </div>
          </div>

          {/* Key Benefits Column (Right Side) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-[#008DD2] tracking-tight mb-6">
              Our Core Commitments
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base">
              We focus on bringing out the very best in children through meticulous assessment and custom-curated therapies. We are guided by clinical rigor, aiming for outcomes that empower families for life.
            </p>

            <div className="space-y-4">
              {BENEFITS.map((benefit, index) => (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white border border-transparent hover:border-stone-200/50 transition-all"
                >
                  <div className="bg-brand-green/10 text-brand-green p-2 rounded-lg flex-shrink-0 mt-0.5">
                    <Check className="h-5 w-5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold text-[#73C043] mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {benefit.title === "Early Support" &&
                        "Critical intervention during early developmental windows to guide optimal sensory, speech, and physical pathways."}
                      {benefit.title === "Lasting Impact" &&
                        "Nurturing self-sufficiency, social interaction, and emotional stability that remains with the child into adulthood."}
                      {benefit.title === "A Better Tomorrow" &&
                        "Empowering parents with real-world strategies and training, shaping a positive, inclusive future."}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Managing Director Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 md:mt-28"
        >
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Leadership</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight mt-2 heading-gradient">
              Meet Our Managing Director
            </h3>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-stone-100 p-10 flex flex-col items-center text-center">
            {/* Photo — tile style, contained, centred */}
            <div className="w-52 h-52 rounded-2xl overflow-hidden shadow-md border border-stone-200 mb-7 flex-shrink-0">
              <img
                src="/managing director.jpeg"
                alt="Managing Director of Childcare Therapy Centre"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Info — below the photo tile */}
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-green/10 text-brand-green text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <Award className="h-3.5 w-3.5" />
              <span>Managing Director</span>
            </div>
            {/* Director Name */}
            <h5 className="text-lg font-medium text-slate-700 mb-2">Mrs Surbhi Jaiswal</h5>
            {/* Organisation */}
            <h4 className="text-xl font-display font-bold text-slate-800 mb-3">
              Childcare Therapy Centre
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed max-w-lg">
              Our Managing Director leads Childcare Therapy Centre with a deep commitment to providing world-class rehabilitative care for children. With a focus on evidence-based therapies and compassionate leadership, they ensure that every child receives the individualised attention they deserve to reach their fullest potential.
            </p>
            <div className="mt-6 pt-6 border-t border-stone-100 w-full flex items-center justify-center space-x-3">
              <div className="bg-brand-blue/10 p-2 rounded-lg">
                <Brain className="h-4 w-4 text-brand-blue" />
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Committed to clinical excellence &amp; child-centred care
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
