import { PageContent } from "./types";

/**
 * i~HD DIGITAL BUSINESS CARD CONTENT
 * 
 * You can easily modify any of the text values below. 
 * Changes here will propagate instantly across the live preview and exported HTML.
 */
export const initialContent: PageContent = {
  metaTitle: "i~HD | European Institute for Innovation through Health Data",
  badgeText: "TRUSTWORTHY EUROPEAN HEALTH DATA",
  heroTitle: "Maximising the Value of Health Data for Better Care",
  heroSubtitle: "An independent European non-profit organisation guiding hospitals, researchers, industry, and patients to achieve high-quality clinical data, robust information governance, and standards-based interoperability.",
  heroImageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  introTitle: "Our Mission & Credentials",
  introParagraph1: "The European Institute for Innovation through Health Data (i~HD) was established as an independent non-profit body to help overcome key challenges in utilizing health data. We bridge the gap between healthcare providers, clinical researchers, the pharmaceutical industry, and citizens.",
  introParagraph2: "Through our unique methodologies, clinical EHR audits, and data quality certifications, we provide partners with the confidence that they are operating under trustworthy frameworks in full alignment with the European Health Data Space (EHDS) guidelines.",
  aboutImageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
  servicesTitle: "Core Pillars & Strategic Focus",
  servicesSubtitle: "Supporting key stakeholders in the healthcare ecosystem to achieve data excellence, semantic interoperability, and absolute compliance.",
  services: [
    {
      id: "srv-1",
      title: "EHR Data Quality Certification",
      description: "We independently assess the quality, consistency, and completeness of medical data in electronic health record (EHR) systems, preparing healthcare providers for EHDS requirements."
    },
    {
      id: "srv-2",
      title: "Information Governance & EHDS Trust",
      description: "We design secure technical, legal, and ethical governance frameworks to support compliant secondary use of clinical registries and healthcare data pools."
    },
    {
      id: "srv-3",
      title: "Clinical Research & Real-World Data (RWD)",
      description: "We assist research consortia and life sciences companies in accessing high-quality, structured, and trustworthy clinical evidence from real-world medical practice."
    },
    {
      id: "srv-4",
      title: "Interoperability & Semantic Standards",
      description: "We help integrate international semantic standards (such as SNOMED CT, LOINC, and FHIR) to enable seamless, cross-border health data exchange."
    }
  ],
  benefitsTitle: "Why Partner with i~HD",
  benefitsSubtitle: "We bring together Europe's foremost clinical informatics and governance experts to deliver measurable data quality and absolute trust.",
  benefits: [
    {
      id: "ben-1",
      title: "European Policy & Authority",
      description: "As a recognized partner of the European Commission, i~HD-certified networks and hospitals are highly valued in EU-wide research consortia and health spaces."
    },
    {
      id: "ben-2",
      title: "Clinical and Operational Efficiency",
      description: "High-quality, standardized EHR data eliminates redundant diagnostics, accelerates clinical trial recruitment by up to 30%, and reduces physician administration burden."
    },
    {
      id: "ben-3",
      title: "State-of-the-Art Privacy & Compliance",
      description: "Our validated anonymization and pseudonymization assessments ensure 100% GDPR compliance, protecting patient privacy and mitigating security breaches."
    }
  ],
  stats: [
    { id: "stat-1", value: "50+", label: "Audited Hospitals" },
    { id: "stat-2", value: "30%", label: "Faster Study Enrolment" },
    { id: "stat-3", value: "100+", label: "Certified Data Registries" },
    { id: "stat-4", value: "25+", label: "European Joint Projects" }
  ],
  ctaTitle: "Key Facts & Contact Information",
  ctaSubtitle: "i~HD is registered as a non-profit organization under Belgian Law (AISBL / VZW). Below are the direct pathways for official inquiries.",
  ctaButtonText: "Official Portal",
  footerText: "© 2026 i~HD - The European Institute for Innovation through Health Data. An independent, European non-profit organization.",
  contactEmail: "info@ihd.global",
  contactAddress: "i~HD Headquarters, Ghent, Belgium",
  blogs: [
    {
      id: "blog-1",
      title: "AIDAVA: Revolutionizing EHR Curation with AI Virtual Assistants",
      date: "June 24, 2025",
      category: "EU Research",
      summary: "How i~HD is helping lead standards-based semantic mapping within the AIDAVA project to maximize EHR data reuse through innovative automated virtual curation assistants.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "blog-2",
      title: "Standardizing Real-World Evidence with the OMOP Common Data Model",
      date: "September 11, 2025",
      category: "Data Quality",
      summary: "Standardizing health registries using OMOP is vital to supporting cross-border clinical studies. Explore i~HD's new methodology for data certification and quality audits.",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "blog-3",
      title: "Navigating the European Health Data Space (EHDS) Mandates",
      date: "February 03, 2026",
      category: "Policy & Governance",
      summary: "With the newly established EHDS regulations taking effect, i~HD outlines key data governance audits and trustworthiness protocols that hospitals must implement today.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    }
  ]
};
