import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CONTACT_INFO } from "../data";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Consultation", href: "#consultation" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // height of sticky header + floating gap
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
    <header
      id="main-header"
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 transition-all duration-300 rounded-full border border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.05)] ${
        isScrolled
          ? "bg-white/80 backdrop-blur-[12px] py-1.5 shadow-lg"
          : "bg-white/60 backdrop-blur-[12px] py-2"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Brand Info */}
          <Logo variant="horizontal" iconSize={52} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-display font-medium text-[13px] tracking-[0.02em] text-[#1a1a1a] hover:text-brand-blue transition-colors relative py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#consultation"
              onClick={(e) => handleNavClick(e, "#consultation")}
              className="bg-brand-blue text-white px-6 py-2.5 rounded-full font-display font-medium text-[13px] tracking-[0.02em] hover:bg-brand-blue-hover transition-all shadow-sm hover:shadow hover:-translate-y-0.5 duration-200"
            >
              Book Consultation
            </a>
          </nav>

          {/* Mobile Header Buttons */}
          <div className="flex items-center space-x-4 lg:hidden">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="bg-slate-100/50 p-2.5 rounded-full text-slate-700 hover:text-brand-blue hover:bg-brand-blue/10 transition-colors"
              title="Call Us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-brand-blue p-2 rounded-full focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-[calc(100%+1rem)] left-0 right-0 bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl animate-fade-in overflow-hidden">
          <nav className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-3 rounded-xl font-display font-medium text-[15px] tracking-[0.02em] text-slate-700 hover:bg-slate-50/50 hover:text-brand-blue transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 px-4">
              <a
                href="#consultation"
                onClick={(e) => handleNavClick(e, "#consultation")}
                className="block w-full text-center bg-brand-blue text-white py-3 rounded-full font-display font-medium text-[15px] tracking-[0.02em] hover:bg-brand-blue-hover transition-colors shadow-sm"
              >
                Book Consultation
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
