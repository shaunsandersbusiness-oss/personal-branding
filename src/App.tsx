/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Check, 
  Plus, 
  Minus,
  ArrowRight,
  Phone
} from 'lucide-react';

// --- Constants ---
const BRAND_GOLD = '#c9a84c';
const CTA_LINK = '#bookingCalendar';

const PHASES = [
  {
    number: "01",
    title: "Build the Brand",
    period: "Days 1-30",
    bullets: [
      "Full marketing strategy — content pillars, brand positioning, posting schedule",
      "Profile optimization — bio, highlights, grid aesthetics, CTAs",
      "First content shoot — 10 professional videos produced"
    ]
  },
  {
    number: "02",
    title: "Create the Content",
    period: "Days 31-60",
    bullets: [
      "Second content shoot — 10 more videos (branding clips, neighborhood tours, market updates)",
      "Content calendar managed and executed",
      "Ad creatives produced for lead generation campaigns"
    ]
  },
  {
    number: "03",
    title: "Turn On the Leads",
    period: "Days 61-90",
    bullets: [
      "Third content shoot — 10 more videos",
      "Facebook & Instagram ad campaigns launched",
      "Audience research, optimization, and weekly reporting",
      "Sales frameworks and DM templates delivered"
    ]
  }
];

const DELIVERABLES = [
  "Full Marketing Strategy — content pillars, brand positioning, posting schedule, target audience",
  "Profile Optimization — bio, highlights, grid aesthetics, CTAs across all platforms",
  "3 Professional Content Shoots — 30 videos over 90 days (10 per month)",
  "3 Ad Creatives — short-form video ads designed for lead generation",
  "Full Ad Campaign Management — Facebook & Instagram setup, audience research, optimization",
  "Sales & Appointment Frameworks — DM templates, lead qualification scripts",
  "Weekly & Monthly Reporting — KPI dashboards and comprehensive performance reviews"
];

const FAQS = [
  {
    q: "How much does the Agent Growth Engine cost?",
    a: "Pricing is customized based on your market, goals, and current presence. Book a free strategy call and we'll build a plan together — no obligation."
  },
  {
    q: "Do I need a big following to start?",
    a: "No. The entire point of the program is to build your brand from the ground up. Most agents we work with start with under 1,000 followers."
  },
  {
    q: "What kind of videos do you create?",
    a: "Everything from personal branding clips and talking heads to neighborhood tours, market updates, listing videos, and ad creatives. 30 total videos over 90 days."
  },
  {
    q: "How much time do I need to commit?",
    a: "About 2-3 hours per month for content shoots. We handle everything else — strategy, editing, posting schedule, ad management, and reporting."
  },
  {
    q: "Do you handle the ad spend too?",
    a: "We manage the campaigns, but ad spend is separate and paid directly to Meta. We'll recommend a budget based on your market and goals."
  },
  {
    q: "What happens after 90 days?",
    a: "You'll have a fully built brand, a library of 30+ professional videos, running ad campaigns, and a lead generation system. Most agents continue with a monthly retainer for ongoing content and campaign management."
  }
];

// --- Components ---

const BackgroundElements = () => {
  return (
    <div className="bg-animation" aria-hidden="true">
      {/* Layer 1: Gradient Base */}
      <div className="bg-layer-base"></div>

      {/* Layer 2: Floating Glow Orbs */}
      <div className="bg-layer-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Layer 3: Gold Dust Particles */}
      <div className="bg-layer-particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {/* Layer 4: Horizon Shimmer */}
      <div className="bg-layer-shimmer"></div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        {/* Logo — links to main website */}
        <a href="https://www.regalisrealtymedia.com" className="nav-logo">
          <img 
            src="https://cdn.prod.website-files.com/6695980889d8d99cedb29bc7/677588ce72f981235e0deeb9_Regalis%20Realty%20Logo%20Symbol.png" 
            alt="Regalis Realty Media" 
            className="nav-logo-img" 
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-links" id="navLinks">
          <a href="https://www.regalisrealtymedia.com" className="nav-link">Home</a>
          <a href="https://regalisrealtymedia25.pixieset.com/regalisrealtymediaportfolio/compassphotos/" className="nav-link" target="_blank">Portfolio</a>
          <a href="https://pricing.regalisrealtymedia.com" className="nav-link" id="nav-pricing">Pricing</a>
          <a href="https://calculator.regalisrealtymedia.com" className="nav-link" id="nav-calculator">Calculator</a>
          <a href="https://catalog.regalisrealtymedia.com" className="nav-link" id="nav-catalog">Catalog</a>
          <a href="https://branding.regalisrealtymedia.com" className="nav-link active" id="nav-branding">Branding</a>
          <a href="https://portalguide.regalisrealtymedia.com" className="nav-link" id="nav-portal">Portal</a>
          <a href="https://www.regalisrealtymedia.com/calendar" className="nav-link">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="nav-hamburger" 
          id="navHamburger" 
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span 
            className="hamburger-line" 
            style={isOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}
          ></span>
          <span 
            className="hamburger-line" 
            style={isOpen ? { opacity: 0 } : {}}
          ></span>
          <span 
            className="hamburger-line" 
            style={isOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} id="mobileMenu">
        <a href="https://www.regalisrealtymedia.com" className="mobile-link" onClick={() => setIsOpen(false)}>Home</a>
        <a href="https://regalisrealtymedia25.pixieset.com/regalisrealtymediaportfolio/compassphotos/" className="mobile-link" target="_blank" onClick={() => setIsOpen(false)}>Portfolio</a>
        <a href="https://pricing.regalisrealtymedia.com" className="mobile-link" id="mobile-nav-pricing" onClick={() => setIsOpen(false)}>Pricing</a>
        <a href="https://calculator.regalisrealtymedia.com" className="mobile-link" id="mobile-nav-calculator" onClick={() => setIsOpen(false)}>Calculator</a>
        <a href="https://catalog.regalisrealtymedia.com" className="mobile-link" id="mobile-nav-catalog" onClick={() => setIsOpen(false)}>Catalog</a>
        <a href="https://branding.regalisrealtymedia.com" className="mobile-link active" id="mobile-nav-branding" onClick={() => setIsOpen(false)}>Branding</a>
        <a href="https://portalguide.regalisrealtymedia.com" className="mobile-link" id="mobile-nav-portal" onClick={() => setIsOpen(false)}>Portal</a>
        <a href="https://www.regalisrealtymedia.com/calendar" className="mobile-link" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-10 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <img 
          src="https://cdn.prod.website-files.com/6695980889d8d99cedb29bc7/66c7f601fff376e4c95274b3_Regalis%20Realty%20Main%20Logo%20(1).png" 
          alt="Regalis Main Logo" 
          className="max-w-[200px] h-auto"
          referrerPolicy="no-referrer"
        />
        <div className="space-y-1">
          <p className="text-gold text-[14px] font-medium">Regalis Realty Media</p>
          <p className="text-[#666] text-[12px]">All rights reserved 2025</p>
        </div>
      </div>
    </footer>
  );
};

const Button = ({ children, href, className = '', isLarge = false }: { 
  children: React.ReactNode, 
  href: string, 
  className?: string,
  isLarge?: boolean
}) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(201,168,76,0.3)' }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center bg-gold text-black font-bold rounded-[8px] transition-all duration-300 ${
        isLarge ? 'px-12 py-5 text-[18px]' : 'px-10 py-4 text-[16px]'
      } ${className}`}
    >
      {children}
    </motion.a>
  );
};

const Section = ({ children, className = '', id = '' }: { children: React.ReactNode, className?: string, id?: string }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative z-10 py-20 md:py-[80px] px-6 ${className}`}
    >
      {children}
    </motion.section>
  );
};

const Separator = () => (
  <div className="flex justify-center py-12 md:py-[60px]">
    <div className="w-20 h-[1px] bg-gold/30" />
  </div>
);

interface FAQItemProps {
  faq: typeof FAQS[0];
}

const FAQItem: React.FC<FAQItemProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-card-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group hover:bg-gold/[0.03] px-4 transition-all duration-300"
      >
        <span className="text-[18px] font-bold text-white pr-8">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-gold shrink-0"
        >
          <Plus className="w-6 h-6" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-4 text-silver leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StickyMobileBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const hero = document.getElementById('hero');
    if (hero) observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-[1000] lg:hidden bg-black border-t border-gold/20 h-[70px] flex items-center px-4"
        >
          <a 
            href={CTA_LINK}
            className="w-full bg-gold text-black font-bold h-[50px] rounded-[8px] flex items-center justify-center text-[16px]"
          >
            Book Your Free Strategy Call →
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CalendarSection = () => {
  return (
    <div className="calendar-section" id="bookingCalendar">
      <div className="calendar-container">
        <div className="calendar-header">
          <h3 className="calendar-title">Book Your Free Strategy Call</h3>
          <p className="calendar-subtitle">45 minutes with Shaun Sanders — pick a time that works for you</p>
        </div>
        <div className="calendar-frame">
          <iframe 
            src="https://api.leadconnectorhq.com/widget/booking/faLQXXYw2kFifLm95MyU" 
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '900px' }}
            id="r8lRU3DiH3Wu1eY26HeJ_1772584809162"
            title="Booking Calendar"
          >
          </iframe>
        </div>
        <div className="calendar-reassurance">
          <span>🔒 Your information is private</span>
          <span className="reassurance-dot">·</span>
          <span>100% free, no strings attached</span>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-silver overflow-x-hidden">
      <BackgroundElements />
      
      <div className="relative z-10">
        <Navbar />
        <StickyMobileBar />

        <main className="pt-[70px]">
          {/* SECTION 1: HERO */}
          <section id="hero" className="min-h-[calc(100vh-70px)] flex flex-col items-center justify-center px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gold text-[14px] font-bold tracking-[2px] uppercase"
            >
              FOR REAL ESTATE AGENTS READY TO GROW
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[48px] md:text-[64px] font-bold text-white leading-tight tracking-tight text-balance"
            >
              Stop Posting. Start Building.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[20px] text-silver max-w-2xl mx-auto text-balance leading-relaxed"
            >
              The Agent Growth Engine is a 90-day system that builds your brand, creates your content, runs your ads, and fills your calendar with qualified leads.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-4"
            >
              <p className="text-muted text-[14px]">
                Free 45-minute call · No commitment · Limited spots each month
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full pt-8"
            >
              <CalendarSection />
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: WHAT IS PERSONAL BRANDING? */}
        <Section className="bg-white/[0.01]">
          <div className="max-w-[900px] mx-auto text-center space-y-8">
            <h2 className="text-[32px] md:text-[40px] font-bold text-white">What Is Personal Branding?</h2>
            <div className="space-y-6 text-[16px] leading-[1.8] text-silver">
              <p>
                Personal branding is how you position yourself as the go-to agent in your market. It's the difference between being one of hundreds of agents in your area and being THE agent people think of first. In today's market, your online presence is your first impression — and video is the fastest way to build trust before a client ever meets you.
              </p>
              <p>
                We help real estate professionals create a consistent, high-quality video presence that builds authority, attracts clients, and sets you apart from every other agent posting the same static photos and generic market updates.
              </p>
            </div>
          </div>
          <Separator />
        </Section>

        {/* SECTION 3: THE PROBLEM */}
        <Section>
          <div className="max-w-[1000px] mx-auto space-y-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-white text-center">The Problem</h2>
            
            <div className="space-y-12">
              <div className="centered-copy">
                <p>
                  <strong className="text-white">Running ads?</strong> Most agents send paid traffic to a weak profile — low followers, thin content, no social proof. Prospects click, look, and leave. The ad didn't fail. <strong className="text-white">Your profile did.</strong>
                </p>
              </div>

              <div className="centered-copy">
                <p>
                  <strong className="text-white">Posting organically?</strong> Instagram's organic reach is under 5%. With 500 followers, about 25 people see your post. Great content with no distribution is just an <strong className="text-white">expensive hobby.</strong>
                </p>
              </div>

              <div className="centered-copy">
                <p>
                  <strong className="text-white">Door knocking and cold calling?</strong> Those still work — but they don't scale. Meanwhile, the agent in every homeowner's feed is winning the listing before you even ring the doorbell. <strong className="text-white">The market hasn't changed. The way people choose their agent has.</strong>
                </p>
              </div>
            </div>
          </div>
          <Separator />
        </Section>

        {/* SECTION 4: THE SOLUTION */}
        <Section>
          <div className="max-w-[900px] mx-auto text-center space-y-10">
            <h2 className="text-[32px] md:text-[40px] font-bold text-white">The Solution</h2>
            <p className="text-[16px] leading-[1.8] text-silver">
              The Agent Growth Engine is a 90-day system that builds your brand foundation BEFORE turning on lead generation — so every dollar you spend on ads actually converts. We handle everything: the content, the ads, the strategy, and the optimization.
            </p>
            <p className="text-[22px] font-bold text-gold tracking-[1px] uppercase">
              ALL YOU HAVE TO DO IS SHOW UP FOR YOUR SHOOTS.
            </p>
            <div className="pt-6">
              <Button href={CTA_LINK}>
                Book Your Free Strategy Call →
              </Button>
            </div>
          </div>
        </Section>

        {/* SECTION 5: HOW IT WORKS */}
        <Section className="bg-white/[0.01]">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-[32px] md:text-[40px] font-bold text-white">How It Works</h2>
              <p className="text-muted text-[16px]">A 90-day system. Three phases. One outcome: a brand that generates leads.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {PHASES.map((phase, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ borderColor: 'rgba(201,168,76,0.3)' }}
                  className="bg-card-bg border border-card-border p-8 rounded-[12px] space-y-6 group transition-all duration-300"
                >
                  <div className="space-y-2">
                    <span className="text-[48px] font-bold text-gold block group-hover:drop-shadow-[0_0_15px_rgba(201,168,76,0.2)] transition-all">
                      {phase.number}
                    </span>
                    <h3 className="text-[22px] font-bold text-white">{phase.title}</h3>
                    <p className="text-gold/60 text-[14px] font-medium uppercase tracking-wider">{phase.period}</p>
                  </div>
                  <ul className="space-y-4">
                    {phase.bullets.map((bullet, j) => (
                      <li key={j} className="text-silver text-[15px] leading-relaxed flex gap-3">
                        <span className="text-gold mt-1.5 shrink-0">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* SECTION 6: WHAT YOU GET */}
        <Section>
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-white text-center">Everything That's Included</h2>
            
            <div className="space-y-6 max-w-[700px] mx-auto">
              {DELIVERABLES.map((item, i) => (
                <div key={i} className="flex items-start gap-4 text-[18px] text-silver leading-relaxed">
                  <Check className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button href={CTA_LINK}>
                Book Your Free Strategy Call →
              </Button>
            </div>
          </div>
        </Section>

        {/* SECTION 7: WHO THIS IS FOR */}
        <Section className="bg-white/[0.01]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* For You */}
            <div className="bg-card-bg border border-card-border p-8 rounded-[12px] space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl -z-10" />
              <h3 className="text-[24px] font-bold text-gold">This Is For You If...</h3>
              <ul className="space-y-4">
                {[
                  "You're a licensed agent ready to invest in your brand",
                  "You want to stand out in a competitive market",
                  "You're willing to show up for 3 content shoots over 90 days",
                  "You want a proven system, not just \"more posts\"",
                  "You understand that brand-building compounds over time"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-silver">
                    <Check className="w-5 h-5 text-gold shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not For You */}
            <div className="bg-card-bg border border-card-border p-8 rounded-[12px] space-y-8 opacity-80">
              <h3 className="text-[24px] font-bold text-muted">This Isn't For You If...</h3>
              <ul className="space-y-4">
                {[
                  "You're looking for overnight results",
                  "You're not willing to be on camera",
                  "You want to manage everything yourself",
                  "You're not ready to invest in professional growth"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <X className="w-5 h-5 text-[#666] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* SECTION 8: FAQ */}
        <Section>
          <div className="max-w-[800px] mx-auto space-y-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-white text-center">Frequently Asked Questions</h2>
            <div className="space-y-2">
              {FAQS.map((faq, i) => (
                <FAQItem key={i} faq={faq} />
              ))}
            </div>
          </div>
        </Section>

        {/* SECTION 9: FINAL CTA */}
        <Section className="py-32 md:py-[120px] text-center">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="space-y-6">
              <h2 className="text-[36px] md:text-[48px] font-bold text-white">Your Brand Is Your Business.</h2>
              <p className="text-[18px] md:text-[20px] text-silver max-w-2xl mx-auto leading-relaxed">
                In 90 days, you'll have a brand that attracts clients, a content library that works for you 24/7, and a lead generation system that fills your calendar.
              </p>
            </div>
            <div className="flex flex-col items-center gap-6">
              <Button href={CTA_LINK} isLarge>
                Book Your Free Strategy Call →
              </Button>
              <div className="space-y-2">
                <p className="text-muted text-[14px]">Free 45-minute call · No commitment</p>
                <a href="tel:9176838034" className="text-muted text-[14px] hover:text-gold transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-3 h-3" /> (917) 683-8034
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
      </div>
    </div>
  );
}
