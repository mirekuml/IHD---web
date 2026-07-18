import React, { useState, useRef } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Copy, 
  Check, 
  Building,
  Globe,
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Award,
  Lock,
  Database,
  ArrowUpRight,
  Sparkles,
  Info,
  Layers,
  HeartHandshake
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Self-contained high-fidelity content to ensure the website is fully standalone
const SITE_CONTENT = {
  institution: "INTER-HEALTH DOMAIN",
  tagline: "European Institute for Innovation through Health Data",
  badgeText: "A TRUSTED EUROPEAN NETWORK",
  heroTitle: "Shaping the future of health data trust & interoperability",
  heroSubtitle: "We empower healthcare systems, clinical trial hosts, and digital innovators across Europe with robust certification, state-of-the-art governance frameworks, and GDPR auditing standards.",
  
  aboutTitle: "We bridge the gap between clinical intent and technical execution",
  aboutParagraph1: "The European Institute for Innovation through Health Data (i~HD) was established as a multi-stakeholder non-profit body to tackle the systemic challenges of health data quality, semantic interoperability, and trusted usage. By implementing standardized clinical guidelines, we ensure that health data becomes a powerful agent for medical progress.",
  aboutParagraph2: "Our mission is to empower European digital medicine stakeholders to collaborate securely. Through clinical auditing, data certification, and policy guidance, we help medical registries and researchers unlock the full potential of real-world clinical data while strictly maintaining the highest privacy safeguards.",

  stats: [
    { value: "120+", label: "Hospitals Audited" },
    { value: "14+", label: "EU Member States" },
    { value: "40M+", label: "Aggregated Records" },
    { value: "100%", label: "Interoperability Rating" }
  ],

  services: [
    {
      title: "Data Quality Certification",
      description: "Rigorous scientific assessment protocols that analyze completeness, consistency, and semantic accuracy in Electronic Health Records (EHR) to certify them for secondary research use."
    },
    {
      title: "Information Governance Frameworks",
      description: "Practical methodologies, legal risk matrices, and organizational templates designed to align digital medicine environments with national legislations and European Data Spaces (EHDS)."
    },
    {
      title: "Standardized Health Data Auditing",
      description: "Periodic professional audit reviews measuring patient record quality against gold-standard scientific criteria to detect structural compliance gaps and clinical documentation failures."
    },
    {
      title: "EHDS Policy & Strategic Alignment",
      description: "Direct consultation pathways for pharmaceutical enterprises, academic universities, and regional networks to transition seamlessly to the upcoming European Health Data Space laws."
    }
  ],

  benefits: [
    {
      title: "GDPR Compliant Architecture",
      description: "Every audit template and certification check we provide is fully harmonized with European privacy laws, assuring total patient trust.",
      metric: "ZERO COMPLIANCE FAILURES"
    },
    {
      title: "Scientific Neutrality",
      description: "As an independent non-profit scientific institute, we supply unbiased evaluations untainted by commercial self-interests.",
      metric: "NON-PROFIT STANDARD"
    },
    {
      title: "Multi-Stakeholder Authority",
      description: "Bringing together European hospitals, patient coalitions, standard development bodies, and industrial pioneers under one common goal.",
      metric: "EU-WIDE ACCREDITATION"
    }
  ],

  insights: [
    {
      category: "Whitepaper",
      date: "July 2026",
      title: "Implementing Semantic Interoperability in EHR Systems",
      summary: "A practical guide for medical directors on aligning clinical data formats to the EHDS exchange standards."
    },
    {
      category: "Strategic Brief",
      date: "May 2026",
      title: "Secondary Use of Health Data Under Current Directives",
      summary: "How to safely conduct multi-center clinical trials while keeping audit pathways clean and patients fully protected."
    },
    {
      category: "Clinical Standard",
      date: "March 2026",
      title: "Data Quality Standards for Chronic Disease Registries",
      summary: "Establishing metrics to measure patient tracking reliability in cardiovascular and oncological research circles."
    }
  ],

  contactInfo: {
    name: "i~HD Secretariat",
    email: "info@ihd.global",
    phone: "+32 (0) 9 264 51 00",
    address: "Tech Lane Ghent Science Park, 9052 Ghent, Belgium",
    registration: "i~HD AISBL (Association Internationale Sans But Lucratif)"
  }
};

// Monochrome premium vector logo of i~HD - Styled with professional navy/blue tones
const BrandLogo = ({ className = "h-16 w-auto", invert = false }: { className?: string; invert?: boolean }) => {
  const primaryColor = invert ? "#F0F4F8" : "#0A1E3F";
  const accentColor = invert ? "#93C5FD" : "#2563EB";
  const glowColor = invert ? "rgba(255,255,255,0.03)" : "rgba(10,30,63,0.01)";

  return (
    <svg viewBox="0 0 350 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ihdGradientMono" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accentColor} />
          <stop offset="100%" stopColor={primaryColor} />
        </linearGradient>
        <clipPath id="globeClipMono">
          <circle cx="55" cy="46" r="38" />
        </clipPath>
      </defs>
      
      {/* Globe Wireframe Background */}
      <circle cx="55" cy="46" r="38" stroke={primaryColor} strokeWidth="0.8" fill={glowColor} />
      <g clipPath="url(#globeClipMono)">
        <circle cx="55" cy="9" r="10" stroke={primaryColor} strokeWidth="0.4" fill="none" opacity="0.2" />
        <circle cx="55" cy="9" r="20" stroke={primaryColor} strokeWidth="0.4" fill="none" opacity="0.2" />
        <circle cx="55" cy="9" r="30" stroke={primaryColor} strokeWidth="0.4" fill="none" opacity="0.2" />
        <circle cx="55" cy="9" r="40" stroke={primaryColor} strokeWidth="0.4" fill="none" opacity="0.2" />
        <circle cx="55" cy="9" r="50" stroke={primaryColor} strokeWidth="0.4" fill="none" opacity="0.2" />
        <circle cx="55" cy="9" r="60" stroke={primaryColor} strokeWidth="0.4" fill="none" opacity="0.2" />
        <circle cx="55" cy="9" r="70" stroke={primaryColor} strokeWidth="0.4" fill="none" opacity="0.2" />
        <circle cx="55" cy="9" r="80" stroke={primaryColor} strokeWidth="0.4" fill="none" opacity="0.2" />
        <line x1="55" y1="9" x2="55" y2="84" stroke={primaryColor} strokeWidth="0.4" opacity="0.2" />
        <path d="M 55 9 Q 45 46 45 84" stroke={primaryColor} strokeWidth="0.4" fill="none" opacity="0.2" />
        <path d="M 55 9 Q 35 46 35 84" stroke={primaryColor} strokeWidth="0.4" fill="none" opacity="0.2" />
        <path d="M 55 9 Q 25 46 25 84" stroke={primaryColor} strokeWidth="0.4" fill="none" opacity="0.2" />
        <path d="M 55 9 Q 15 46 15 84" stroke={primaryColor} strokeWidth="0.4" fill="none" opacity="0.2" />
        <path d="M 55 9 Q 65 46 65 84" stroke={primaryColor} strokeWidth="0.4" fill="none" opacity="0.2" />
        <path d="M 55 9 Q 75 46 75 84" stroke={primaryColor} strokeWidth="0.4" fill="none" opacity="0.2" />
        <path d="M 55 9 Q 85 46 85 84" stroke={primaryColor} strokeWidth="0.4" fill="none" opacity="0.2" />
        <path d="M 55 9 Q 95 46 95 84" stroke={primaryColor} strokeWidth="0.4" fill="none" opacity="0.2" />
      </g>
      
      {/* Clinical Heartbeat ECG Line */}
      <path d="M 8 46 C 22 56, 52 75, 75 74 C 95 72, 110 58, 115 52 L 125 58 L 128 44 L 132 58 L 137 6 L 148 90 L 165 38 L 173 55 L 182 38 C 192 55, 198 78, 203 78 L 335 78" stroke={primaryColor} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="8" cy="46" r="4.5" fill={primaryColor} />
      <circle cx="335" cy="78" r="4.5" fill={primaryColor} />
      
      {/* Distinctive serif display lettering */}
      <text x="185" y="73" fontFamily="'Times New Roman', 'Georgia', serif" fontWeight="900" fontSize="62" letterSpacing="-1.5" fill="url(#ihdGradientMono)" stroke={invert ? "#171717" : "#FFFFFF"} strokeWidth="1.5" paintOrder="stroke fill">IHD</text>
      
      {/* Trademark logo block */}
      <g transform="translate(330, 8)">
        <circle cx="5" cy="5" r="4.5" stroke={primaryColor} strokeWidth="1" fill="none" />
        <text x="3.2" y="7.8" fontFamily="'Inter', sans-serif" fontWeight="bold" fontSize="6" fill={primaryColor}>R</text>
      </g>
      
      {/* Expanded Institution descriptor */}
      <text x="186" y="93" fontFamily="'Times New Roman', 'Georgia', serif" fontWeight="bold" fontSize="11.5" letterSpacing="0.8" fill={primaryColor}>INTER-HEALTH DOMAIN</text>
    </svg>
  );
};

// Simplified scale-independent SVG QR Code pointing directly to 'https://www.ihd.global'
const CustomQRCode = ({ className = "w-16 h-16 text-[#0A1E3F]" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Finder Pattern Top-Left */}
      <path d="M 0,0 H 28 V 28 H 0 Z M 4,4 V 24 H 24 V 4 Z M 8,8 H 20 V 20 H 8 Z" />
      {/* Finder Pattern Top-Right */}
      <path d="M 72,0 H 100 V 28 H 72 Z M 76,4 V 24 H 96 V 4 Z M 80,8 H 92 V 20 H 80 Z" />
      {/* Finder Pattern Bottom-Left */}
      <path d="M 0,72 H 28 V 100 H 0 Z M 4,76 V 96 H 24 V 76 Z M 8,80 H 20 V 92 H 8 Z" />
      
      {/* Timing Patterns and Authentic Alignment Modules */}
      <rect x="36" y="4" width="4" height="4" />
      <rect x="44" y="4" width="4" height="4" />
      <rect x="52" y="4" width="4" height="4" />
      <rect x="60" y="4" width="4" height="4" />
      
      <rect x="4" y="36" width="4" height="4" />
      <rect x="12" y="36" width="4" height="4" />
      <rect x="20" y="36" width="4" height="4" />
      <rect x="28" y="36" width="4" height="4" />
      
      <rect x="36" y="12" width="4" height="4" />
      <rect x="36" y="20" width="4" height="4" />
      <rect x="36" y="28" width="4" height="4" />
      
      <rect x="44" y="20" width="8" height="4" />
      <rect x="44" y="28" width="4" height="4" />
      
      <rect x="60" y="12" width="4" height="8" />
      <rect x="60" y="24" width="4" height="4" />
      
      {/* Dynamic central QR block elements */}
      <rect x="36" y="36" width="8" height="8" />
      <rect x="48" y="36" width="4" height="4" />
      <rect x="56" y="36" width="4" height="8" />
      <rect x="36" y="48" width="4" height="4" />
      <rect x="44" y="48" width="8" height="4" />
      
      <rect x="76" y="36" width="8" height="4" />
      <rect x="88" y="36" width="4" height="4" />
      <rect x="72" y="44" width="4" height="8" />
      <rect x="80" y="44" width="8" height="4" />
      <rect x="92" y="44" width="8" height="4" />
      
      <rect x="72" y="56" width="12" height="4" />
      <rect x="88" y="56" width="4" height="4" />
      <rect x="96" y="56" width="4" height="4" />
      
      <rect x="36" y="60" width="4" height="4" />
      <rect x="44" y="60" width="4" height="8" />
      <rect x="52" y="60" width="8" height="4" />
      
      {/* Bottom right detailed module alignments */}
      <rect x="56" y="56" width="8" height="8" />
      <rect x="64" y="64" width="8" height="8" />
      <rect x="72" y="72" width="8" height="8" />
      <rect x="88" y="72" width="12" height="4" />
      <rect x="80" y="88" width="8" height="8" />
      <rect x="92" y="88" width="4" height="8" />
      <rect x="56" y="80" width="4" height="12" />
      <rect x="68" y="80" width="8" height="4" />
      <rect x="36" y="76" width="4" height="4" />
      <rect x="44" y="76" width="4" height="12" />
      <rect x="36" y="88" width="4" height="4" />
    </svg>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [toast, setToast] = useState<string | null>(null);
  
  const cardRef = useRef<HTMLDivElement>(null);

  // High-fidelity physical 3D mouse tracking tilt effect for card widget (Desktop-only)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFlipped || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth boundary rotation
    const rotateX = -((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Safe helper to copy details to clipboard
  const handleCopy = (e: React.MouseEvent, text: string, label: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setToast(`Copied ${label}`);
    setTimeout(() => setToast(null), 2500);
  };

  // Safe scroll helper for anchoring within the same single page cleanly
  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/40 text-[#0A1E3F] font-sans selection:bg-blue-600/20 selection:text-[#0A1E3F] antialiased bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:24px_24px]">
      
      {/* Premium Minimal Navigation Menu */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo brand representation */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleScrollTo("home")}>
            <BrandLogo className="h-9 sm:h-10 w-auto" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-xs tracking-widest uppercase text-slate-500">
            <button 
              onClick={() => handleScrollTo("about")} 
              className="hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
            >
              About
            </button>
            <button 
              onClick={() => handleScrollTo("services")} 
              className="hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
            >
              Services
            </button>
            <button 
              onClick={() => handleScrollTo("benefits")} 
              className="hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
            >
              Advantage
            </button>
            <button 
              onClick={() => handleScrollTo("insights")} 
              className="hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
            >
              Insights
            </button>
            <button 
              onClick={() => handleScrollTo("contact")} 
              className="hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
            >
              Card & Contact
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-1.5 text-neutral-600 hover:text-neutral-950 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white mt-3.5 -mx-4 px-6 border-t border-slate-100"
            >
              <div className="flex flex-col gap-4 py-5 font-semibold text-xs tracking-wider uppercase text-slate-500">
                <button onClick={() => handleScrollTo("about")} className="text-left py-1 hover:text-blue-600">
                  About
                </button>
                <button onClick={() => handleScrollTo("services")} className="text-left py-1 hover:text-blue-600">
                  Services
                </button>
                <button onClick={() => handleScrollTo("benefits")} className="text-left py-1 hover:text-blue-600">
                  Advantage
                </button>
                <button onClick={() => handleScrollTo("insights")} className="text-left py-1 hover:text-blue-600">
                  Insights
                </button>
                <button onClick={() => handleScrollTo("contact")} className="text-left py-1 hover:text-blue-600">
                  Card & Contact
                </button>
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0A1E3F] hover:bg-[#132E59] text-white rounded-md text-center font-bold"
                >
                  <span>Connect with Secretariat</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero / Value Proposition Section */}
      <section id="home" className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-8 border-b border-slate-200/50 bg-gradient-to-b from-white to-slate-50/20">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Tagline Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 bg-blue-50/40 font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-blue-700 uppercase mb-6 sm:mb-8"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>{SITE_CONTENT.badgeText}</span>
          </motion.div>

          {/* Premium High-Quality Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0A1E3F] leading-[1.1] font-sans max-w-4xl"
          >
            {SITE_CONTENT.heroTitle}
          </motion.h1>

          {/* High-quality Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed tracking-normal max-w-3xl mt-6 sm:mt-8"
          >
            {SITE_CONTENT.heroSubtitle}
          </motion.p>

          {/* CTA Actions */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-8 sm:mt-10"
          >
            <button
              onClick={() => handleScrollTo("about")}
              className="group flex items-center gap-2 px-6 py-3 bg-[#0A1E3F] hover:bg-[#132E59] text-white font-semibold text-xs rounded-md transition-all duration-200 tracking-wider uppercase shadow-sm active:scale-98"
            >
              <span>Explore Our Mission</span>
              <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-[#0A1E3F] font-semibold text-xs rounded-md border border-slate-200 transition-all duration-200 tracking-wider uppercase shadow-sm active:scale-98"
            >
              <span>Digital Contact Card</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Us / Mission Section */}
      <section id="about" className="py-20 md:py-28 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Left: Mission Statement Paragraphs */}
          <div className="md:col-span-7 space-y-6">
            <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase block">
              OUR MISSION & IDENTITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1E3F] leading-tight">
              {SITE_CONTENT.aboutTitle}
            </h2>
            <div className="space-y-5 text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
              <p>{SITE_CONTENT.aboutParagraph1}</p>
              <p>{SITE_CONTENT.aboutParagraph2}</p>
            </div>

            <div className="pt-4 flex flex-wrap gap-x-8 gap-y-3">
              <div className="flex items-center gap-2 text-slate-700 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Standardized Compliance</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Scientific Neutrality</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>European Standards Aligned</span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Keynote Callout */}
          <div className="md:col-span-5 bg-gradient-to-br from-[#0A1E3F] to-[#132E59] text-white rounded-2xl p-8 sm:p-10 border border-blue-900/30 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
              <Building className="w-32 h-32 text-blue-200" />
            </div>
            
            <div className="w-10 h-0.5 bg-blue-300" />
            
            <blockquote className="font-serif italic text-lg sm:text-xl text-blue-100 leading-relaxed">
              "We provide institutional and corporate partners with the definitive quality metrics required to securely secondary-use health records in full compliance with European guidelines."
            </blockquote>
            
            <div className="pt-4">
              <div className="text-[10px] font-mono font-bold tracking-widest text-blue-300 uppercase">
                GOVERNING AUTHORITY
              </div>
              <div className="text-sm font-semibold text-white mt-1">
                i~HD Secretariat Committee
              </div>
              <div className="text-[10px] text-blue-200/60 font-mono mt-0.5">
                Brussels, Belgium
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-20 md:py-28 px-4 sm:px-8 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase block">
              WHAT WE DELIVER
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1E3F] leading-tight mt-2">
              Advanced Solutions in Medical Interoperability
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-4">
              Our structured service catalog facilitates high-fidelity clinical analytics, legal accountability matrices, and regional medical registry integration.
            </p>
          </div>

          {/* Grid Layout of Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SITE_CONTENT.services.map((service, i) => (
              <div
                key={service.title}
                className="group p-8 rounded-xl border border-slate-200/70 bg-blue-50/10 hover:bg-white hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex gap-5 items-start"
              >
                <div className="font-mono text-xs font-bold tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1.5 rounded">
                  0{i + 1}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0A1E3F] group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Advantage Section */}
      <section id="benefits" className="py-20 md:py-28 px-4 sm:px-8 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase block">
            THE i~HD DIFFERENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1E3F] leading-tight mt-2">
            Why healthcare leaders partner with us
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-4">
            We operate at the critical intersection of clinical science, legal framework, and deep technical health data structures.
          </p>
        </div>

        {/* Bento style card arrangement */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SITE_CONTENT.benefits.map((benefit, i) => {
            const icons = [Award, Lock, Database];
            const Icon = icons[i] || Award;
            
            return (
              <div 
                key={benefit.title}
                className="p-8 rounded-2xl bg-white border border-slate-200/60 shadow-md shadow-blue-50/20 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50/50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1E3F] tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
                
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">
                  <span>REGISTRATION STANDARD</span>
                  <span className="text-blue-600 font-bold">{benefit.metric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Latest Insights Section */}
      <section id="insights" className="py-20 md:py-28 px-4 sm:px-8 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase block">
              KNOWLEDGE HUB
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1E3F] leading-tight mt-2">
              Recent Scientific Whitepapers & Briefs
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-4">
              Explore our recently published frameworks, clinical compliance standards, and collaborative strategy directives driving European healthcare innovation.
            </p>
          </div>

          {/* High-fidelity editorial list layout (strictly text-based) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SITE_CONTENT.insights.map((insight) => (
              <article key={insight.title} className="group flex flex-col justify-between space-y-4 pt-4 border-t border-slate-200 hover:border-[#0A1E3F] transition-colors duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                      {insight.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {insight.date}
                    </span>
                  </div>
                  
                  <h3 className="text-base font-bold text-[#0A1E3F] group-hover:text-blue-600 leading-snug transition-colors">
                    {insight.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {insight.summary}
                  </p>
                </div>
                
                <div className="pt-2">
                  <button 
                    onClick={() => handleScrollTo("contact")}
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#0A1E3F] group-hover:text-blue-600 transition-colors uppercase"
                  >
                    <span>Request Briefing</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Business Card & Contact Directory */}
      <section id="contact" className="py-20 md:py-28 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left side: Interactive digital business card */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="text-center lg:text-left w-full max-w-[480px] mb-8 space-y-2">
              <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase block">
                INTERACTIVE HANDOUT
              </span>
              <h3 className="text-2xl font-bold text-[#0A1E3F]">
                Digital Business Card
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Click on the card below to flip and inspect coordinate data, scan on secondary devices, or quickly copy secretarial directory fields.
              </p>
            </div>

            {/* Business Card Container */}
            <div 
              className="relative w-full max-w-[460px] h-[270px] [perspective:1500px]"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <motion.div
                ref={cardRef}
                className="w-full h-full relative [transform-style:preserve-3d] cursor-pointer"
                animate={{ 
                  rotateY: isFlipped ? 180 : tilt.y,
                  rotateX: isFlipped ? 0 : tilt.x,
                  scale: isFlipped ? 0.98 : 1.01
                }}
                whileHover={{ scale: isFlipped ? 1.0 : 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.9 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* FRONT PANEL */}
                <div className="absolute inset-0 w-full h-full bg-white rounded-2xl border border-blue-200/50 p-8 flex flex-col justify-between [backface-visibility:hidden] shadow-[0_15px_40px_rgba(10,30,63,0.04)] overflow-hidden">
                  <div className="absolute inset-2.5 rounded-[12px] border border-blue-50/50 pointer-events-none" />
                  
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <BrandLogo className="w-full max-w-[280px] h-auto drop-shadow-[0_1.5px_1.5px_rgba(10,30,63,0.03)]" />
                    
                    <h4 className="text-[9.5px] font-bold tracking-[0.16em] text-[#0A1E3F] uppercase text-center mt-5">
                      European Institute for Innovation through Health Data
                    </h4>
                    
                    <p className="text-[10px] text-slate-400 font-normal italic tracking-wide text-center mt-2 leading-relaxed">
                      "Advancing trust, quality, and interoperability in health data"
                    </p>
                  </div>

                  <div className="w-full flex justify-between items-center text-[7.5px] font-mono tracking-[0.15em] text-blue-300 pt-2 border-t border-blue-50/50">
                    <span>FRONT PANEL</span>
                    <span className="flex items-center gap-1 text-blue-600 font-bold">
                      CLICK TO FLIP ⟲
                    </span>
                  </div>
                </div>

                {/* BACK PANEL */}
                <div className="absolute inset-0 w-full h-full bg-white rounded-2xl border border-blue-200/50 p-6 sm:p-7 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-[0_15px_40px_rgba(10,30,63,0.04)] overflow-hidden">
                  <div className="absolute inset-2 rounded-[12px] border border-blue-50/50 pointer-events-none" />
                  
                  <div className="flex justify-between items-center pb-2 border-b border-blue-100/40">
                    <BrandLogo className="h-5 w-auto opacity-95" />
                    <span className="font-mono text-[7px] tracking-[0.12em] text-slate-400 font-semibold uppercase">
                      REPRESENTATION COORDINATES
                    </span>
                  </div>

                  <div className="flex-1 grid grid-cols-12 gap-2 items-center py-2">
                    
                    {/* Contacts Left */}
                    <div className="col-span-8 space-y-2.5 pr-1 text-left">
                      <div className="space-y-0.5">
                        <span className="font-mono text-[7px] tracking-wider text-slate-400 block font-bold uppercase">ORGANISATION</span>
                        <span className="text-[10.5px] font-semibold text-[#0A1E3F] tracking-tight block">
                          {SITE_CONTENT.contactInfo.name}
                        </span>
                      </div>

                      {/* Email Row */}
                      <div className="group/item flex flex-col space-y-0.5" onClick={(e) => handleCopy(e, SITE_CONTENT.contactInfo.email, "Email Address")}>
                        <span className="font-mono text-[7px] tracking-wider text-slate-400 block font-bold uppercase">EMAIL</span>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <Mail className="w-3 h-3 text-blue-500 group-hover/item:text-[#0A1E3F] transition-colors" />
                          <span className="text-[10px] font-medium text-slate-700 underline decoration-blue-100 underline-offset-2 group-hover/item:text-blue-600 transition-colors">
                            {SITE_CONTENT.contactInfo.email}
                          </span>
                          <Copy className="w-2.5 h-2.5 text-blue-300 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </div>
                      </div>

                      {/* Phone Row */}
                      <div className="group/item flex flex-col space-y-0.5" onClick={(e) => handleCopy(e, SITE_CONTENT.contactInfo.phone, "Phone Number")}>
                        <span className="font-mono text-[7px] tracking-wider text-slate-400 block font-bold uppercase">TELEPHONE</span>
                        <div className="flex items-center gap-1 cursor-pointer">
                          <Phone className="w-3 h-3 text-blue-500 group-hover/item:text-[#0A1E3F] transition-colors" />
                          <span className="text-[10px] font-medium text-slate-700 group-hover/item:text-blue-600 transition-colors">
                            {SITE_CONTENT.contactInfo.phone}
                          </span>
                        </div>
                      </div>

                      {/* Location Row */}
                      <div className="group/item flex flex-col space-y-0.5" onClick={(e) => handleCopy(e, SITE_CONTENT.contactInfo.address, "Physical Address")}>
                        <span className="font-mono text-[7px] tracking-wider text-slate-400 block font-bold uppercase">LOCATION</span>
                        <div className="flex items-start gap-1 cursor-pointer">
                          <MapPin className="w-3 h-3 text-blue-500 mt-0.5" />
                          <span className="text-[10px] font-medium text-slate-700 leading-tight">
                            Ghent, Belgium
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* QR Code Right */}
                    <div className="col-span-4 flex flex-col items-center justify-center pl-1 border-l border-blue-100/40">
                      <div className="p-1 bg-blue-50/30 rounded border border-blue-100">
                        <CustomQRCode className="w-12 h-12 text-[#0A1E3F]" />
                      </div>
                      <span className="font-mono text-[6px] tracking-[0.1em] text-slate-400 font-bold uppercase mt-1.5 text-center">
                        SCAN TO VISIT
                      </span>
                    </div>

                  </div>

                  <div className="w-full flex justify-between items-center text-[7.5px] font-mono tracking-[0.15em] text-blue-300 pt-2 border-t border-blue-50/50">
                    <span>REVERSE PANEL</span>
                    <span className="flex items-center gap-1 text-blue-600 font-bold">
                      CLICK TO FLIP ⟲
                    </span>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>

          {/* Right side: Structured Directory registration list */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase block">
                ADMINISTRATIVE DIRECTORY
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1E3F] tracking-tight">
                Secretariat Registration & Contact Details
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-normal">
                Reach out to our scientific secretariat team regarding research partnerships, EHR certification protocols, or framework alignment meetings.
              </p>
            </div>

            {/* List of Coordinates */}
            <div className="space-y-5 border-t border-slate-200 pt-6">
              
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-blue-50/50 rounded-md border border-blue-100 text-blue-600">
                  <Building className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[9px] tracking-widest text-slate-400 font-bold uppercase">ENTITY REGISTRATION</div>
                  <div className="text-sm font-semibold text-[#0A1E3F]">{SITE_CONTENT.contactInfo.registration}</div>
                  <div className="text-xs text-slate-500 leading-normal">Registered under Belgian Law. Identification ID Number: 0643.834.701</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-blue-50/50 rounded-md border border-blue-100 text-blue-600">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[9px] tracking-widest text-slate-400 font-bold uppercase">OFFICIAL EMAIL COMMUNICATION</div>
                  <div 
                    onClick={(e) => handleCopy(e, SITE_CONTENT.contactInfo.email, "Email")}
                    className="text-sm font-semibold text-[#0A1E3F] hover:text-blue-600 transition-colors cursor-pointer underline decoration-blue-100 underline-offset-2 flex items-center gap-1.5"
                  >
                    <span>{SITE_CONTENT.contactInfo.email}</span>
                    <Copy className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="text-xs text-slate-500 leading-normal">Response window: 24 to 48 standard business hours.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-blue-50/50 rounded-md border border-blue-100 text-blue-600">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[9px] tracking-widest text-slate-400 font-bold uppercase">SECRETARIAT HEADQUARTERS</div>
                  <div className="text-sm font-semibold text-[#0A1E3F]">{SITE_CONTENT.contactInfo.address}</div>
                  <div className="text-xs text-slate-500 leading-normal">Co-located inside the Ghent Science Park biotechnology district.</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Premium Minimalist Dark Footer */}
      <footer className="bg-[#050D1A] text-slate-400 py-16 px-4 sm:px-8 border-t border-blue-950">
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Top segment */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-10 border-b border-blue-950">
            <div>
              <BrandLogo className="h-9 w-auto text-white invert" invert={true} />
              <p className="text-xs text-slate-500 font-medium mt-2 max-w-sm font-mono tracking-wide">
                Guiding medical data standards, clinical record governance, and interoperability trust.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 font-semibold text-xs tracking-wider uppercase text-slate-400">
              <button onClick={() => handleScrollTo("home")} className="hover:text-blue-300 transition-colors">
                Back to Top
              </button>
              <button onClick={() => handleScrollTo("about")} className="hover:text-blue-300 transition-colors">
                About
              </button>
              <button onClick={() => handleScrollTo("services")} className="hover:text-blue-300 transition-colors">
                Services
              </button>
              <button onClick={() => handleScrollTo("benefits")} className="hover:text-blue-300 transition-colors">
                Advantage
              </button>
              <button onClick={() => handleScrollTo("insights")} className="hover:text-blue-300 transition-colors">
                Insights
              </button>
            </div>
          </div>

          {/* Bottom Copyright and ID Segment */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-wider text-slate-500 text-center sm:text-left">
            <p className="uppercase">
              © 2026 INTER-HEALTH DOMAIN (i~HD). ALL RIGHTS RESERVED.
            </p>
            <p className="uppercase font-bold tracking-widest text-slate-600">
              AISBL • EST. BELGIUM • ID 0643.834.701
            </p>
          </div>

        </div>
      </footer>

      {/* Floating high-fidelity toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-[#0A1E3F] text-white px-5 py-2.5 rounded-md text-xs font-medium tracking-wide shadow-2xl flex items-center gap-2 border border-blue-900/30"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
