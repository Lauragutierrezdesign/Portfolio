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
    title: "Healthcare Portal: Streamlining Patient Onboarding",
    role: "Lead Product Designer",
    year: "2025",
    tools: "Figma, React, Mixpanel",
    context: "Healthcare SaaS",
    heroImage: "https://picsum.photos/seed/healthcare/1600/900",
    overview: "The national healthcare provider struggled with a 40% drop-off rate during the digital onboarding process. Patients found the multi-step forms overwhelming and confusing.",
    overviewGoal: "My goal was to redesign the end-to-end onboarding experience, focusing on accessibility, clarity, and reducing cognitive load while maintaining strict HIPAA compliance.",
    challenge: '"How might we simplify a complex, data-heavy medical registration process into a supportive and intuitive experience for patients of all ages?"',
    painPoints: [
      "High abandonment on insurance verification",
      "Lack of progress transparency",
      "Accessibility barriers for elderly users"
    ],
    researchDesc: "We conducted 15 moderated usability tests and analyzed 10,000+ session recordings to identify the exact friction points in the existing flow.",
    insights: [
      { icon: Users, title: "User Anxiety", desc: "Patients felt anxious about sharing sensitive data without clear privacy indicators." },
      { icon: Lightbulb, title: "Cognitive Load", desc: "Too many questions per screen led to decision fatigue and accidental errors." },
      { icon: TrendingUp, title: "Mobile Friction", desc: "65% of users attempted onboarding on mobile, but the UI wasn't optimized for small screens." }
    ],
    solutionTitle: "A Supportive, Guided Experience",
    solution1Title: "Progressive Disclosure",
    solution1Desc: "We broke down the registration into bite-sized chapters. Each screen focuses on one specific category of information, reducing visual noise and helping users stay focused.",
    solution2Title: "Intelligent Defaults",
    solution2Desc: "By leveraging smart defaults and auto-complete features for addresses and insurance providers, we reduced the average completion time by 3.5 minutes.",
    results: [
      { value: "45%", label: "Increase in completion rate" },
      { value: "-3.5m", label: "Average time saved per patient" },
      { value: "92%", label: "Positive accessibility score" }
    ],
    lessons: [
      "This project reinforced the importance of inclusive design. By testing with users across different age groups and technical proficiencies, we uncovered edge cases that would have otherwise been missed.",
      "I also learned how to balance business requirements (data collection) with user needs (simplicity). Sometimes the best design decision is to push back on \"required\" fields to ensure a better overall experience.",
      "Moving forward, I'll continue to advocate for progressive disclosure in complex enterprise applications, as the data clearly shows its impact on user success."
    ]
  },
  2: {
    title: "Caribbean Cinemas: Mobile App Redesign",
    role: "UX/UI Designer",
    year: "2026",
    tools: "Figma, UX Research, Prototyping",
    context: "Technical test / Conceptual redesign",
    heroImage: "https://picsum.photos/seed/cinemas-seats/1600/900",
    overview: "Caribbean Cinemas is a market leader in the Caribbean, but its digital product faced critical usability hurdles that alienated users. The goal was to transform a high-friction ticketing process into a seamless, user-centered experience.",
    overviewGoal: "My strategy focused on reducing cognitive load and removing forced entry barriers to improve conversion rates and repeat usage.",
    challenge: '"How might we make the ticket purchasing process faster and frictionless to improve conversion rates?"',
    painPoints: [
      "Fragmented Flow: A long, confusing process with redundant steps.",
      "Spatial Confusion: Poor seat map clarity (unclear aisles, entrances, and layout).",
      "High-Stress UX: A strict 3-minute timer that resets the entire journey.",
      "Conversion Blockers: Mandatory login/registration interrupts the user.",
      "Visual Noise: Lack of hierarchy in buttons and call-to-actions."
    ],
    researchDesc: "I utilized a research-driven approach to diagnose why users were dropping off, including manual ticket purchase testing and conversion funnel analysis.",
    insights: [
      { icon: Target, title: "0% Conversion", desc: "In a simulated funnel analysis of 5 users, 0% completed the checkout. The seat selection phase was the catastrophic friction point." },
      { icon: Users, title: "Spatial Stress", desc: "Users struggled to understand the theater layout, leading to hesitation and session timeouts." },
      { icon: Lightbulb, title: "Forced Barriers", desc: "Mandatory login right before payment caused immediate abandonment for first-time users." }
    ],
    solutionTitle: "Clarity Over Complexity",
    solution1Title: "Streamlined IA & Authentication",
    solution1Desc: "Consolidating multiple screens into a progressive, 3-step flow and moving login to the start or allowing 'Guest Checkout' to prevent session timing out.",
    solution2Title: "Visual Seat Map & One-Tap Payments",
    solution2Desc: "High-contrast layout for better spatial awareness and integration of saved payment methods for returning users.",
    results: [
      { value: "High", label: "Reduction in friction" },
      { value: "Fast", label: "One-tap payment flow" },
      { value: "Modern", label: "Brand perception" }
    ],
    lessons: [
      "These improvements are expected to significantly reduce friction in the purchase flow, increase conversion rates, and improve user satisfaction.",
      "A faster and clearer experience encourages repeat usage, strengthens brand perception, and positions the mobile app as the preferred channel for ticket purchases.",
    ]
  },
  3: {
    title: "E-Commerce Checkout: Reducing Cart Abandonment",
    role: "Senior Product Designer",
    year: "2024",
    tools: "Figma, Analytics, A/B Testing",
    context: "Retail E-Commerce",
    heroImage: "https://picsum.photos/seed/ecommerce/1600/900",
    overview: "Reducing cart abandonment through a simplified, frictionless multi-step checkout process for a global retail brand.",
    overviewGoal: "The objective was to identify and eliminate friction points in the checkout journey to boost conversion rates and average order value.",
    challenge: '"How might we create a checkout experience that feels secure yet incredibly fast for both new and returning customers?"',
    painPoints: [
      "Hidden shipping costs revealed late",
      "Complex address entry forms",
      "Lack of mobile-first payment options"
    ],
    researchDesc: "We analyzed user behavior using heatmaps and conducted A/B tests on different checkout structures.",
    insights: [
      { icon: TrendingUp, title: "Cost Shock", desc: "Users abandoned when shipping costs were only shown at the final step." },
      { icon: Lightbulb, title: "Form Fatigue", desc: "Long forms without clear validation caused frustration and errors." },
      { icon: Users, title: "Trust Signals", desc: "Lack of visible security badges on mobile reduced user confidence during payment." }
    ],
    solutionTitle: "Frictionless Checkout Journey",
    solution1Title: "Transparent Pricing",
    solution1Desc: "Showing shipping and tax estimates early in the cart to avoid surprises at the final payment step.",
    solution2Title: "One-Page Checkout",
    solution2Desc: "Implementing a dynamic one-page checkout for returning users with saved preferences, significantly reducing clicks.",
    results: [
      { value: "12%", label: "Improvement in conversion" },
      { value: "20%", label: "Reduction in abandonment" },
      { value: "15%", label: "Increase in mobile orders" }
    ],
    lessons: [
      "Transparency is the best way to build trust in e-commerce.",
      "Mobile-first payment integrations like Apple Pay are no longer optional for high-conversion checkouts.",
      "Continuous A/B testing is essential for fine-tuning the balance between data collection and speed."
    ]
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
      const sections = ['overview', 'research', 'solution', 'results'];
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
    <div className="min-h-screen bg-bg-cream text-primary-blue font-sans selection:bg-accent-blue/30 selection:text-primary-blue">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FF4FA3] z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Sticky Sidebar Nav (Desktop) */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-6">
        {['overview', 'research', 'solution', 'results'].map((section) => (
          <button
            key={section}
            onClick={() => scrollTo(section)}
            className="group flex items-center gap-4 text-left"
          >
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === section ? 'bg-[#FF4FA3] scale-150' : 'bg-primary-blue/20 group-hover:bg-primary-blue/40'}`} />
            <span className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${activeSection === section ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0'}`}>
              {section}
            </span>
          </button>
        ))}
      </div>

      {/* Header / Back Button */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-cream/80 backdrop-blur-md border-b border-primary-blue/10">
        <div className={`${CONTAINER_CLASSES} py-4 flex items-center justify-between`}>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 font-medium text-primary-blue hover:text-[#FF4FA3] transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Work</span>
          </button>
          <div className="font-display font-bold text-lg tracking-tight">
            LAURA GUTIERREZ
          </div>
        </div>
      </nav>

      <main className="pt-32">
        {/* Case Study Hero */}
        <section className={`${CONTAINER_CLASSES} mb-24 md:mb-32`}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl md:text-[56px] leading-[1.1] mb-12 max-w-4xl"
          >
            {data.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 py-8 border-y border-primary-blue/20"
          >
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-primary-blue font-raleway font-bold mb-2">Role</span>
              <span className="font-medium">{data.role}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-primary-blue font-raleway font-bold mb-2">Year</span>
              <span className="font-medium">{data.year}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-primary-blue font-raleway font-bold mb-2">Tools</span>
              <span className="font-medium">{data.tools}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-primary-blue font-raleway font-bold mb-2">Context</span>
              <span className="font-medium">{data.context}</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="aspect-video w-full bg-accent-blue/10 rounded-3xl overflow-hidden relative group"
          >
            <img 
              src={data.heroImage} 
              alt={data.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/20 to-transparent" />
          </motion.div>
        </section>

        {/* Overview & Challenge */}
        <section id="overview" className={`${CONTAINER_CLASSES} mb-24 md:mb-32 scroll-mt-32`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#FF4FA3] mb-6">Overview</h2>
              <p className="text-lg md:text-xl font-raleway font-medium text-primary-blue leading-relaxed mb-8">
                {data.overview}
              </p>
              <p className="text-lg md:text-xl font-raleway font-medium text-primary-blue leading-relaxed">
                {data.overviewGoal}
              </p>
            </div>
            <div className="bg-primary-blue/10 p-8 md:p-12 rounded-3xl border border-primary-blue/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Target size={80} />
              </div>
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#FF4FA3] mb-6">The Challenge</h2>
              <p className="text-lg font-medium mb-6">
                "{data.challenge}"
              </p>
              <ul className="space-y-4">
                {data.painPoints.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg font-raleway font-medium text-primary-blue">
                    <CheckCircle2 size={16} className="text-[#66FF66] mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Research & Process */}
        <section id="research" className="bg-primary-blue/10 py-24 md:py-32 mb-24 md:mb-32 scroll-mt-32">
          <div className={CONTAINER_CLASSES}>
            <div className="mb-16">
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#FF4FA3] mb-6">Research & Process</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-8">Digging into the "Why"</h3>
              <p className="text-lg md:text-xl font-raleway font-medium text-primary-blue max-w-2xl leading-relaxed">
                {data.researchDesc}
              </p>
            </div>

            {/* Sticky Notes / Insights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {data.insights.map((insight, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-primary-blue/5 flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-primary-blue">
                    <insight.icon size={24} />
                  </div>
                  <h4 className="font-display font-bold text-lg">{insight.title}</h4>
                  <p className="text-lg font-raleway font-medium text-primary-blue leading-relaxed">{insight.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Wireframes Gallery */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="aspect-video bg-white rounded-2xl border border-primary-blue/10 overflow-hidden">
                    <img src={`https://picsum.photos/seed/wire1-${projectId}/800/450`} alt="Early Wireframes" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-xs text-primary-blue font-raleway font-medium uppercase tracking-wider">Early Explorations: Testing layout density</p>
                </div>
                <div className="space-y-4">
                  <div className="aspect-video bg-white rounded-2xl border border-primary-blue/10 overflow-hidden">
                    <img src={`https://picsum.photos/seed/wire2-${projectId}/800/450`} alt="Iterated Design" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-xs text-primary-blue font-raleway font-medium uppercase tracking-wider">Final Iteration: Focused on single-task screens</p>
                </div>
              </div>
              <div className="max-w-2xl">
                <p className="text-sm text-primary-blue font-raleway font-medium leading-relaxed italic">
                  "By moving from a single long form to a multi-step progressive disclosure pattern, we reduced the perceived effort by 60% in our second round of testing."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section id="solution" className={`${CONTAINER_CLASSES} mb-24 md:mb-32 scroll-mt-32`}>
          <div className="mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#FF4FA3] mb-6">The Solution</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-8">{data.solutionTitle}</h3>
          </div>

          <div className="space-y-32">
            {/* Solution Block 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary-blue/5"
                >
                  <img src={`https://picsum.photos/seed/solution1-${projectId}/1200/800`} alt="Solution Screen 1" className="w-full h-auto" referrerPolicy="no-referrer" />
                  {/* Callouts */}
                  <div className="absolute top-[20%] right-[10%] flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full bg-[#FF4FA3] animate-pulse" />
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-primary-blue/10 max-w-[180px]">
                      <p className="text-[10px] font-bold uppercase tracking-wider mb-1">Progress Tracker</p>
                      <p className="text-[10px] text-primary-blue font-raleway font-medium leading-tight">Clear visual feedback on remaining steps.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="lg:col-span-5">
                <h4 className="text-xl font-display font-bold mb-4">{data.solution1Title}</h4>
                <p className="text-lg md:text-xl font-raleway font-medium text-primary-blue leading-relaxed">
                  {data.solution1Desc}
                </p>
              </div>
            </div>

            {/* Solution Block 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <h4 className="text-xl font-display font-bold mb-4">{data.solution2Title}</h4>
                <p className="text-lg md:text-xl font-raleway font-medium text-primary-blue leading-relaxed">
                  {data.solution2Desc}
                </p>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary-blue/5"
                >
                  <img src={`https://picsum.photos/seed/solution2-${projectId}/1200/800`} alt="Solution Screen 2" className="w-full h-auto" referrerPolicy="no-referrer" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Reflection */}
        <section id="results" className={`${CONTAINER_CLASSES} mb-24 md:mb-32 scroll-mt-32`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#FF4FA3] mb-6">Impact & Results</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-12">Measurable Success</h3>
              
              <div className="space-y-12">
                {data.results.map((result, i) => (
                  <div key={i}>
                    <span className="block text-5xl md:text-6xl font-display font-bold text-primary-blue mb-2">{result.value}</span>
                    <span className="text-sm uppercase tracking-widest font-bold text-primary-blue font-raleway">{result.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-white p-10 md:p-16 rounded-3xl border border-primary-blue/20 shadow-sm">
                <h4 className="text-xl font-display font-bold mb-8">Expected impact</h4>
                <div className="space-y-6 text-lg md:text-xl font-raleway font-medium text-primary-blue leading-relaxed">
                  {data.lessons.map((lesson, i) => (
                    <p key={i}>{lesson}</p>
                  ))}
                </div>
                <div className="mt-12 pt-12 border-t border-primary-blue/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-blue/20" />
                  <div>
                    <p className="font-bold text-sm">Laura Gutierrez</p>
                    <p className="text-xs text-primary-blue font-raleway font-medium">{data.role}</p>
                  </div>
                </div>
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
