import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import TherapyApproach from "./components/TherapyApproach";
import ConsultationForm from "./components/ConsultationForm";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans flex flex-col">
      {/* Sticky Top-level Header Navigation */}
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <TherapyApproach />
        <ConsultationForm />
        <ContactSection />
      </main>

      {/* Trust-oriented Brand Footer */}
      <Footer />
    </div>
  );
}

