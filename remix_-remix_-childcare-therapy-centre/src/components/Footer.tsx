import React from "react";
import { Brain, Phone, MapPin, Mail, Sparkles, Heart } from "lucide-react";
import { CONTACT_INFO } from "../data";
import Logo from "./Logo";

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Consultation", href: "#consultation" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* Upper Footer: Quote Highlight */}
      <div className="bg-slate-950 py-16 text-center text-white px-4 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <blockquote className="testimonial-text font-display font-bold text-xl md:text-2xl lg:text-3xl tracking-tight leading-relaxed max-w-2xl mx-auto text-[#008DD2]">
            "Where every child is understood, supported and empowered."
          </blockquote>
          <p className="text-xs md:text-sm font-semibold tracking-wider text-brand-green uppercase mt-4">
            — Our Promise to Your Family
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand/About Block */}
          <div className="md:col-span-5 text-left space-y-4 dark">
            <Logo variant="horizontal" />

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-serif">
              We provide professional and evidence-based therapeutic care, bringing together speech, sensory, motor, academic, and behavioural sciences to nurture every child's potential.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-brand-yellow pl-3">
              Site Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="hover:text-white transition-colors flex items-center space-x-1"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical Affiliations / Address Summary */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-brand-green pl-3">
              HQ Healthcare Centre
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 font-serif">
                  {CONTACT_INFO.address.complex}, {CONTACT_INFO.address.road}, Near {CONTACT_INFO.address.landmark}, Gokul Nagar, Varanasi - 221004
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="h-5 w-5 text-slate-400 flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-slate-400 hover:text-white transition-colors font-serif">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Brain className="h-5 w-5 text-slate-400 flex-shrink-0" />
                <span className="text-slate-400 font-serif">{CONTACT_INFO.parentOrg}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Childcare Therapy Centre. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="text-slate-600">Unit of Changing Minds Mental Health Care</span>
            <span>•</span>
            <span className="text-slate-600">Clinical Standards 100% Guaranteed</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
