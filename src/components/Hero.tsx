import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT_INFO } from "../data";
import heroBg from "../assets/hero-bg.png";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964-1.862-1.862-4.335-2.887-6.97-2.888-5.442 0-9.866 4.42-9.869 9.866-.001 1.773.479 3.502 1.391 5.037L1.96 21.047l5.22-1.369zm10.934-7.82c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.174.2-.298.3-.496.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
  </svg>
);

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
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#008DD2] tracking-[-0.03em] leading-[1.15] mb-6 drop-shadow-sm"
          >
            Nurturing Today,<br />
            <span className="text-[#73C043] italic font-semibold drop-shadow-sm">Empowering Tomorrow.</span>
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

          {/* Quick Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="mt-6 flex flex-wrap items-center gap-3 w-full"
          >
            <span className="text-xs font-display font-bold text-slate-500 uppercase tracking-wider block w-full sm:w-auto sm:mr-1">
              Quick Connect:
            </span>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center justify-center space-x-2 bg-brand-blue/10 hover:bg-brand-blue text-brand-blue hover:text-white px-4 py-2.5 rounded-full font-display font-semibold text-xs transition-all duration-200 border border-brand-blue/20 hover:border-brand-blue w-full sm:w-auto cursor-pointer"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Call +91 {CONTACT_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/91${CONTACT_INFO.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white px-4 py-2.5 rounded-full font-display font-semibold text-xs transition-all duration-200 border border-[#25D366]/20 hover:border-[#25D366] w-full sm:w-auto cursor-pointer"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              <span>WhatsApp Chat</span>
            </a>
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
