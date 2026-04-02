import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowLeft, CheckCircle2, Lightbulb, Users, Target, TrendingUp } from 'lucide-react';
import { CONTAINER_CLASSES } from '../constants';
import Footer from './Footer';

interface CaseStudyProps {
  projectId: number;
  onBack: () => void;
}

const projectData = {
  1: {
    title: "Caribbean Cinemas Mobile App Redesign",
    tagline: "Optimizing the ticket purchasing flow to reduce friction and abandonment",
    metadata: [
      { label: "Role", value: "UX/UI Designer" },
      { label: "Tools", value: "Figma, UX Research" },
      { label: "Duration", value: "2 Weeks" },
      { label: "Context", value: "Technical Test" },
      { label: "Platform", value: "Mobile (iOS/Android)" },
      { label: "Type", value: "Product Redesign" }
    ],
    heroImage: "https://picsum.photos/seed/cinemas-seats/1600/900",
    overview: {
      text: "Caribbean Cinemas is a market leader in the Caribbean, but its digital product faced critical usability hurdles that alienated users. In the Dominican Republic market, where digital adoption is growing, the app's friction was a significant barrier to conversion. The goal was to transform a high-friction ticketing process into a seamless, user-centered experience.",
      problems: [
        "Fragmented Flow: A long, confusing process with redundant steps.",
        "Spatial Confusion: Poor seat map clarity (unclear aisles, entrances, and layout).",
        "High-Stress UX: A strict 3-minute timer that resets the entire journey.",
        "Conversion Blockers: Mandatory login/registration interrupts the user.",
        "Visual Noise: Lack of hierarchy in buttons and call-to-actions."
      ]
    },
    research: {
      text: "I utilized a research-driven approach to diagnose why users were dropping off. This included manual ticket purchase testing, competitive benchmarking, and analyzing Google Play reviews where users frequently complained about the 'forced login' and 'confusing seat selection'.",
      conversionData: [
        { step: "Movie Selection", value: 100 },
        { step: "Cinema/Time", value: 80 },
        { step: "Seat Selection", value: 20 },
        { step: "Login/Auth", value: 5 },
        { step: "Payment", value: 0 }
      ],
      criticalResult: "Estimated conversion rate: 0%"
    },
    solution: {
      text: "The proposed solution focuses on 'Clarity Over Complexity'. By consolidating the flow and removing mandatory barriers, we create a path of least resistance for the user.",
      improvements: [
        "Early Login/Guest Checkout: Moving authentication to the start or allowing guest purchases.",
        "Consolidated Screens: Reducing the number of steps from 7 to 4.",
        "Visual Seat Map: High-contrast layout for better spatial awareness.",
        "One-Tap Payments: Integration of saved payment methods."
      ]
    },
    uiDesign: {
      text: "The redesign follows a strict visual hierarchy using the brand's primary blue (#005C99) to guide actions. Accessibility was a priority, ensuring touch targets are at least 44px and color contrast meets WCAG AA standards."
    }
  },
  2: {
    title: "Carol Pharmacy — Mobile App Redesign",
    tagline: "Simplifying the health purchasing journey for digital adoption",
    metadata: [
      { label: "Role", value: "UX Designer" },
      { label: "Tools", value: "Figma, User Testing" },
      { label: "Duration", value: "Ongoing" },
      { label: "Context", value: "Health Tech" },
      { label: "Platform", value: "Mobile" },
      { label: "Type", value: "App Redesign" }
    ],
    heroImage: "https://picsum.photos/seed/healthcare/1600/900",
    overview: {
      text: "Carol Pharmacy needed to modernize its digital presence to compete in a rapidly evolving health tech market. The focus was on simplifying the prescription upload and checkout process.",
      problems: [
        "Complex prescription upload flow",
        "Unclear delivery tracking",
        "High friction in guest checkout"
      ]
    },
    research: {
      text: "We conducted user interviews with regular pharmacy customers to understand their pain points when ordering medicine online.",
      conversionData: [
        { step: "Search", value: 100 },
        { step: "Cart", value: 65 },
        { step: "Checkout", value: 30 }
      ],
      criticalResult: "High drop-off at prescription verification"
    },
    solution: {
      text: "A streamlined interface that prioritizes the most common tasks: refilling prescriptions and finding nearby stores.",
      improvements: [
        "One-tap prescription re-order",
        "Real-time delivery tracking",
        "Simplified health profile management"
      ]
    },
    uiDesign: {
      text: "Clean, trustworthy aesthetic using soft blues and clear typography to convey reliability and care."
    }
  },
  3: {
    title: "Humano Seguros — E-Commerce Redesign",
    tagline: "Improving the insurance purchasing experience across the digital journey",
    metadata: [
      { label: "Role", value: "UX/UI Designer" },
      { label: "Tools", value: "Figma, Analytics" },
      { label: "Duration", value: "Ongoing" },
      { label: "Context", value: "Insurance" },
      { label: "Platform", value: "Web/Mobile" },
      { label: "Type", value: "E-Commerce" }
    ],
    heroImage: "https://picsum.photos/seed/ecommerce/1600/900",
    overview: {
      text: "Humano Seguros aimed to increase digital sales by redesigning their e-commerce platform, making it easier for users to compare and buy insurance plans.",
      problems: [
        "Information overload on plan comparisons",
        "Technical jargon confusing users",
        "Mobile responsiveness issues"
      ]
    },
    research: {
      text: "Analysis of sales data and heatmaps revealed that users were getting stuck on the plan comparison page.",
      conversionData: [
        { step: "Landing", value: 100 },
        { step: "Comparison", value: 45 },
        { step: "Purchase", value: 12 }
      ],
      criticalResult: "Comparison page is the main bottleneck"
    },
    solution: {
      text: "A simplified comparison tool with clear 'Best Value' indicators and plain language descriptions.",
      improvements: [
        "Interactive plan comparison grid",
        "Simplified insurance terminology",
        "Mobile-optimized checkout flow"
      ]
    },
    uiDesign: {
      text: "Professional and modern UI that balances corporate trust with digital-first usability."
    }
  }
};

const CaseStudy: React.FC<CaseStudyProps> = ({ projectId, onBack }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState('overview');
  const data = projectData[projectId as keyof typeof projectData] || projectData[1];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'research', 'solution', 'ui-design'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-bg-cream text-primary-blue font-raleway selection:bg-accent-blue/30 selection:text-primary-blue">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FF4FA3] z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Sticky Sidebar Nav (Desktop) */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-6">
        {['overview', 'research', 'solution', 'ui-design'].map((section) => (
          <button
            key={section}
            onClick={() => scrollTo(section)}
            className="group flex items-center gap-4 text-left"
          >
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === section ? 'bg-primary-blue scale-150' : 'bg-primary-blue/20 group-hover:bg-primary-blue/40'}`} />
            <span className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${activeSection === section ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0'}`}>
              {section.replace('-', ' ')}
            </span>
          </button>
        ))}
      </div>

      {/* Header / Back Button */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-cream/80 backdrop-blur-md border-b border-primary-blue/10">
        <div className={`${CONTAINER_CLASSES} py-4 flex items-center justify-between`}>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 font-bold text-primary-blue hover:text-[#FF4FA3] transition-colors group uppercase text-xs tracking-widest"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Work</span>
          </button>
          <div className="font-display font-bold text-lg tracking-tight">
            LAURA GUTIERREZ
          </div>
        </div>
      </nav>

      <main className="pt-32">
        {/* Case Study Hero */}
        <section className={`${CONTAINER_CLASSES} mb-16 md:mb-16`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="font-raleway font-bold text-4xl md:text-[56px] leading-[1.1] mb-6 text-primary-blue">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-primary-blue/80 mb-12 leading-relaxed">
              {data.tagline}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16 py-12 border-y border-primary-blue/10"
          >
            {data.metadata.map((item, i) => (
              <div key={i}>
                <span className="block text-[10px] uppercase tracking-widest text-primary-blue/60 font-bold mb-2">{item.label}</span>
                <span className="font-bold text-sm">{item.value}</span>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="aspect-video w-full bg-accent-blue/5 rounded-[2rem] overflow-hidden relative group shadow-2xl"
          >
            <img 
              src={data.heroImage} 
              alt={data.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary-blue/5 mix-blend-multiply" />
          </motion.div>
        </section>

        {/* Overview & Problem Identification */}
        <section id="overview" className={`${CONTAINER_CLASSES} py-16 md:py-16 scroll-mt-32`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary-blue/40 mb-8">01. Overview</h2>
              <p className="text-lg md:text-xl font-normal text-primary-blue leading-relaxed mb-8">
                {data.overview.text}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-primary-blue/10 shadow-sm">
                <h3 className="font-bold text-lg mb-6">Key problems identified</h3>
                <ul className="space-y-4">
                  {data.overview.problems.map((problem, i) => (
                    <motion.li 
                      key={i} 
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 text-base font-normal text-primary-blue group cursor-default"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-blue/20 mt-2 transition-colors group-hover:bg-primary-blue flex-shrink-0" />
                      {problem}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Methodology */}
        <section id="research" className="bg-white py-16 md:py-16 scroll-mt-32">
          <div className={CONTAINER_CLASSES}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-6">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary-blue/40 mb-8">02. Research & Methodology</h2>
                <p className="text-lg md:text-xl font-normal text-primary-blue leading-relaxed mb-12">
                  {data.research.text}
                </p>
                
                <div className="p-8 bg-bg-cream rounded-2xl border border-primary-blue/5 inline-block">
                  <p className="text-2xl font-bold text-primary-blue">
                    {data.research.criticalResult}
                  </p>
                  <p className="text-xs uppercase tracking-widest font-bold text-primary-blue/60 mt-2">Critical Finding</p>
                </div>
              </div>
              
              <div className="lg:col-span-6">
                <div className="bg-bg-cream p-8 md:p-10 rounded-[2rem] border border-primary-blue/10">
                  <h3 className="font-bold text-lg mb-8">Conversion Analysis</h3>
                  <div className="space-y-6">
                    {data.research.conversionData.map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                          <span>{item.step}</span>
                          <span>{item.value}%</span>
                        </div>
                        <div className="h-2 w-full bg-primary-blue/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-full bg-primary-blue"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proposed Solution */}
        <section id="solution" className={`${CONTAINER_CLASSES} py-16 md:py-16 scroll-mt-32`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary-blue/40 mb-8">03. Proposed Solution</h2>
              <h3 className="text-3xl font-bold mb-6">Clarity Over Complexity</h3>
              <p className="text-lg md:text-xl font-normal text-primary-blue leading-relaxed mb-12">
                {data.solution.text}
              </p>
              
              <ul className="space-y-6">
                {data.solution.improvements.map((improvement, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={14} className="text-primary-blue" />
                    </div>
                    <span className="text-lg font-normal leading-relaxed">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-7">
              <div className="aspect-[4/3] bg-white rounded-[2rem] border border-primary-blue/10 overflow-hidden shadow-xl flex items-center justify-center group">
                <div className="text-center p-12">
                  <div className="w-16 h-16 rounded-full bg-primary-blue/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp size={32} className="text-primary-blue/40" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-blue/40">Placeholder: Flujograma de usuario</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UI Design */}
        <section id="ui-design" className="bg-white py-16 md:py-16 scroll-mt-32">
          <div className={CONTAINER_CLASSES}>
            <div className="max-w-3xl mb-16">
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary-blue/40 mb-8">04. UI Design</h2>
              <h3 className="text-3xl font-bold mb-6">The Reveal</h3>
              <p className="text-lg md:text-xl font-normal text-primary-blue leading-relaxed">
                {data.uiDesign.text}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-[3/4] bg-bg-cream rounded-[2rem] border border-primary-blue/10 flex items-center justify-center group shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-blue/40">Mockup: Home & Selection</p>
              </div>
              <div className="aspect-[3/4] bg-bg-cream rounded-[2rem] border border-primary-blue/10 flex items-center justify-center group shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-primary-blue/40">Mockup: Seat Selection & Payment</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudy;
