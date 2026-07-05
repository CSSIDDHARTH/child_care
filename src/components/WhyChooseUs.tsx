import React, { useState, useEffect, useRef, useCallback } from "react";
import { ShieldCheck, ClipboardList, Users, Award, Star, ChevronLeft, ChevronRight, Quote, ExternalLink } from "lucide-react";
import { FEATURES } from "../data";
import { motion, AnimatePresence } from "motion/react";

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

// ─── Review Data ───────────────────────────────────────────────────────────────

const REVIEWS = [
  {
    id: 1,
    name: "Aditya",
    initials: "A.",
    stars: 5,
    date: "3 months ago",
    avatarColor: "from-brand-blue to-blue-400",
    text: "Truly a life-changing centre. The moment you step in, you feel a sense of calm and relief. The centre is not only well-designed and welcoming but, more importantly, delivers exceptional quality care and services. The team is highly effective and experienced — a true gem in their profession. The centre has built a strong reputation and legacy of trust and excellence. You can visit with complete trust. Patients are heard with patience, and guidance is provided with clarity and compassion. The centre has expertise in modern, evidence-based therapies, along with comprehensive treatment at affordable costs. I strongly recommend visiting at least once — your life can truly change in a positive way.",
    source: "Google Reviews",
    url: "https://maps.app.goo.gl/QC4HWCKeWgMjEuHA9",
  },
  {
    id: 2,
    name: "Dinesh",
    initials: "D.",
    stars: 5,
    date: "4 months ago",
    avatarColor: "from-brand-green to-emerald-400",
    text: "Excellent service — not just a name, they truly deliver. The specialists here have a good command over their practice, and what they say surely happens as time passes on. Anyone who needs support must consult them. There is vast knowledge in this area and a genuine commitment to every patient's journey. Dr. Laxman Yadav is exceptionally polite and genuinely listens to his patients. His compassionate approach and thorough guidance make the journey towards wellness much easier. The staff are well-educated, very polite and helpful. Highly recommended! 🙏",
    source: "Google Reviews",
    url: "https://maps.app.goo.gl/oPKj8UjorBmcETLq9",
  },
  {
    id: 3,
    name: "Shivansh",
    initials: "S.",
    stars: 5,
    date: "5 months ago",
    avatarColor: "from-violet-500 to-purple-400",
    text: "I can't recommend this centre highly enough! As a PhD research scholar dealing with chronic insomnia and anxiety from high-pressure academic work, I was struggling to focus, sleep, or even relax despite trying yoga nidra and breathing exercises. In an intensive 10-day program using Mindfulness-Based Therapy (MBT), their evidence-based approach helped me rebuild healthy sleep patterns and regain mental clarity. What stood out was their empathy, personalized strategies, and genuine commitment to my progress. My sleep quality improved dramatically within those 10 days, and I've felt more resilient handling stress ever since. If you're battling similar issues, this is the expert you need: professional, effective, and truly caring.",
    source: "Google Reviews",
    url: "https://maps.app.goo.gl/pEcEsBAsmfPYhkPeA",
  },
  {
    id: 4,
    name: "Aayushi",
    initials: "A.",
    stars: 5,
    date: "2 months ago",
    avatarColor: "from-rose-500 to-pink-400",
    text: "Had a great experience here. The environment is calm and the staff is polite and supportive. It was a very informative visit — the team took time to explain everything clearly and made sure all questions were answered. The warmth and professionalism of everyone there was truly reassuring. I left feeling understood and supported.",
    source: "Google Reviews",
    url: "https://maps.app.goo.gl/nPbuYmSTR9eJnLzRA",
  },
  {
    id: 5,
    name: "Dristi",
    initials: "D.",
    stars: 5,
    date: "6 months ago",
    avatarColor: "from-amber-500 to-yellow-400",
    text: "This is a very nice and welcoming clinic — it never makes the patient feel low and always supports both the patient and family members in understanding the problem and figuring out solutions. The staff are so sweet and kind towards everyone 😊 Had a great experience and would absolutely recommend to any family looking for compassionate, professional care.",
    source: "Google Reviews",
    url: "https://maps.app.goo.gl/Y53varH7syCJWKHf7",
  },
];

const TRUNCATE_LENGTH = 200;

// ─── Star Rating Component ─────────────────────────────────────────────────────

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "text-brand-yellow fill-brand-yellow" : "text-slate-200 fill-slate-200"}`}
        />
      ))}
    </div>
  );
}

// ─── Individual Review Card ────────────────────────────────────────────────────

function ReviewCard({ review, isActive }: { review: typeof REVIEWS[0]; isActive: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = review.text.length > TRUNCATE_LENGTH;
  const displayText = expanded || !needsTruncation
    ? review.text
    : review.text.slice(0, TRUNCATE_LENGTH).trimEnd() + "…";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -16 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-stone-100 overflow-hidden flex flex-col"
    >
      {/* Decorative top accent strip */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${review.avatarColor} opacity-80`} />

      {/* Card Body */}
      <div className="p-7 md:p-9 flex flex-col flex-grow">
        {/* Quote icon */}
        <div className="mb-5">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/8 flex items-center justify-center">
            <Quote className="h-5 w-5 text-brand-blue/60" />
          </div>
        </div>

        {/* Review text */}
        <p className="testimonial-text text-slate-700 text-[0.9rem] leading-relaxed flex-grow mb-4 font-bold font-display">
          {displayText}
        </p>

        {needsTruncation && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="self-start text-xs font-semibold text-brand-blue hover:text-brand-blue-hover transition-colors mb-5 underline underline-offset-2"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}

        {/* Divider */}
        <div className="border-t border-stone-100 pt-5 mt-auto">
          <div className="flex items-center justify-between gap-3">
            {/* Reviewer Info */}
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.avatarColor} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                <span className="text-white text-sm font-bold">{review.initials}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{review.name}</p>
                <p className="text-xs text-slate-400">{review.date}</p>
              </div>
            </div>

            {/* Stars + Source */}
            <div className="flex flex-col items-end gap-1">
              <StarRating count={review.stars} />
              <a
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-brand-blue transition-colors"
              >
                <ExternalLink className="h-2.5 w-2.5" />
                Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Testimonials Carousel Section ────────────────────────────────────────────

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + REVIEWS.length) % REVIEWS.length);
  }, []);

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Auto-play
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(goNext, 5500);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPaused, goNext]);

  // Visible cards: show 1 on mobile, 2 on md, 3 on lg
  const getVisibleIndices = () => {
    return [
      activeIndex % REVIEWS.length,
      (activeIndex + 1) % REVIEWS.length,
      (activeIndex + 2) % REVIEWS.length,
    ];
  };

  return (
    <div
      className="mt-24 md:mt-32"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Sub-section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <span className="label-colorful mb-3 block">Verified Google Reviews</span>
        <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight heading-gradient">
          Words from Our Families
        </h3>
        <div className="mt-4 w-10 h-0.5 bg-brand-yellow mx-auto" />
        <p className="mt-4 text-sm text-slate-500 leading-relaxed">
          Real experiences from parents and families who trusted us with their children's growth and wellbeing.
        </p>

        {/* Google Rating Badge */}
        <div className="mt-5 inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-2 shadow-sm">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 text-brand-yellow fill-brand-yellow" />
            ))}
          </div>
          <span className="text-xs font-bold text-slate-700">5.0</span>
          <span className="text-xs text-slate-400">·</span>
          <span className="text-xs text-slate-500 font-medium">All 5-Star Reviews on Google</span>
        </div>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {getVisibleIndices().map((reviewIdx, i) => (
              <motion.div
                key={`${reviewIdx}-${activeIndex}`}
                className={`${i === 2 ? "hidden lg:block" : i === 1 ? "hidden md:block" : ""}`}
              >
                <ReviewCard review={REVIEWS[reviewIdx]} isActive={i === 0} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={goPrev}
            className="w-10 h-10 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue hover:text-white text-slate-600 transition-all duration-200 group"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${i === activeIndex
                    ? "w-6 h-2.5 bg-brand-blue"
                    : "w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400"
                  }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="w-10 h-10 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue hover:text-white text-slate-600 transition-all duration-200"
            aria-label="Next review"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-gradient-to-b from-[#FCFBF7] to-[#FEFBF0] overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="label-colorful mb-3 block">
            Clinical Standards
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight heading-gradient">
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

              <h3 className="text-lg md:text-xl font-display font-bold text-[#008DD2] mb-3 leading-snug">
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

        {/* ── Client Reviews / Testimonials ── */}
        <TestimonialsSection />

      </div>
    </section>
  );
}
