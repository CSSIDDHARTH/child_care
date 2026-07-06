import React from "react";
import { Brain, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { CONTACT_INFO } from "../data";
import Logo from "./Logo";

const SOCIAL_LINKS = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/phychotherapy/",
    Icon: Facebook,
    hoverColor: "hover:bg-[#1877F2] hover:border-[#1877F2]",
    ariaLabel: "Visit our Facebook page",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/changing_minds/",
    Icon: Instagram,
    hoverColor: "hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-transparent",
    ariaLabel: "Visit our Instagram profile",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dr-laxman-yadav-28594568/",
    Icon: Linkedin,
    hoverColor: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
    ariaLabel: "Visit Dr. Laxman Yadav on LinkedIn",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@laxmanchangingmindscounsel5839",
    Icon: Youtube,
    hoverColor: "hover:bg-[#FF0000] hover:border-[#FF0000]",
    ariaLabel: "Visit our YouTube channel",
  },
];

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

          {/* Social Icons — centred under the quote */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {SOCIAL_LINKS.map(({ id, href, Icon, hoverColor, ariaLabel, label }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                title={label}
                className={`group w-10 h-10 rounded-xl border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${hoverColor}`}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand/About Block */}
          <div className="md:col-span-5 text-left space-y-4 dark">
            <div>
              <Logo variant="horizontal" subtextColor="#94a3b8" />
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2 ml-1">
                An unit of Changing Minds
              </p>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-serif">
              We provide professional and evidence-based therapeutic care, bringing together speech, sensory, motor, academic, and behavioural sciences to nurture every child's potential.
            </p>

            {/* Social Icons — in the brand block */}
            <div className="pt-2 flex items-center gap-2.5">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-600 mr-1">
                Follow us
              </span>
              {SOCIAL_LINKS.map(({ id, href, Icon, hoverColor, ariaLabel, label }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  title={label}
                  className={`group w-8 h-8 rounded-lg border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md ${hoverColor}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
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
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map(({ id, href, Icon, ariaLabel, label, hoverColor }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  title={label}
                  className={`w-6 h-6 rounded-md border border-slate-800 bg-slate-800/50 flex items-center justify-center text-slate-600 hover:text-white transition-all duration-200 hover:scale-110 ${hoverColor}`}
                >
                  <Icon className="h-3 w-3" />
                </a>
              ))}
            </div>
            <span className="text-slate-700">•</span>
            <span className="text-slate-600">Unit of Changing Minds Mental Health Care</span>
            <span>•</span>
            <span className="text-slate-600">Clinical Standards 100% Guaranteed</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
