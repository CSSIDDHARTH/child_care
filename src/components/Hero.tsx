import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import heroBg from "../assets/hero-bg.png";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
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
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: `url(${heroBg})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      />
      {/* Subtle overlay so background image is clearly visible and crisp */}
      <div className="absolute inset-0 bg-white/15 z-0" />

      {/* Decorative ambient blobs for organic warmth */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl z-0 -mr-20 -mt-20"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl z-0 -ml-20"></div>

      <div className="relative max-w-[90rem] w-full mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-start justify-center min-h-[calc(100vh-160px)]">
        {/* Floating Text Wrapper with Glassmorphism */}
        <div className="flex flex-col items-start text-left bg-white/60 backdrop-blur-xl border border-white/40 p-12 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.1)] max-w-[600px] w-full mt-12 md:mt-0">
          
          

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0f172a] tracking-[-0.03em] leading-[1.15] mb-6 drop-shadow-sm"
          >
            Nurturing Today,<br />
            <span className="text-brand-blue italic font-semibold drop-shadow-sm">Empowering Tomorrow.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="quote-handwriting text-2xl md:text-3xl w-full mb-8"
          >
            "A safe, supportive and stimulating environment for every child to learn, grow and thrive."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-start space-y-4 sm:space-y-0 sm:space-x-4 w-full"
          >
            <button
              onClick={() => handleScrollTo("#consultation")}
              className="bg-brand-blue text-white px-8 py-4 rounded-lg font-display font-medium text-[15px] tracking-[0.02em] hover:bg-brand-blue-hover transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200 text-center flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <span>Book Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button
              onClick={() => handleScrollTo("#services")}
              className="bg-white/90 backdrop-blur-sm border border-stone-200/80 hover:border-brand-blue text-slate-800 hover:text-brand-blue px-8 py-4 rounded-lg font-display font-medium text-[15px] tracking-[0.02em] transition-all duration-200 shadow-sm hover:shadow-md text-center flex items-center justify-center w-full sm:w-auto"
            >
              Our Services
            </button>
          </motion.div>

          {/* Micro-trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 pt-8 border-t border-slate-300/60 grid grid-cols-3 gap-6 w-full"
          >
            <div className="flex flex-col items-start text-left">
              <span className="block text-2xl font-bold font-display text-brand-blue drop-shadow-sm">100%</span>
              <span className="font-display text-[11px] text-slate-600 font-semibold tracking-[0.03em] uppercase mt-1">Evidence-Based</span>
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="block text-2xl font-bold font-display text-brand-green drop-shadow-sm">Direct</span>
              <span className="font-display text-[11px] text-slate-600 font-semibold tracking-[0.03em] uppercase mt-1">Care Plans</span>
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="block text-2xl font-bold font-display text-slate-800 drop-shadow-sm">Warm</span>
              <span className="font-display text-[11px] text-slate-600 font-semibold tracking-[0.03em] uppercase mt-1">Child-First</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
