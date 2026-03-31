import React from 'react';

const experiences = [
  {
    company: "Humano Seguros",
    role: "UX/UI Designer",
    period: "Apr 2025 - Present",
    description: "At Humano Seguros, I contribute to improving the company’s digital ecosystem by working on the UX-driven redesign of its e-commerce platform, helping simplify complex insurance processes and enhance the overall customer journey."
  },
  {
    company: "Freelance Work",
    role: "UX/UI Designer",
    period: "Jun 2021 - Ongoing",
    description: "Through freelance projects, I collaborated with clients from different industries to design websites, landing pages, and digital interfaces. This experience allowed me to translate business needs into clear user experiences while independently managing the design process from concept to final delivery."
  },
  {
    company: "Utreee — Software Factory",
    role: "Product Designer",
    period: "Jun 2020 – Aug 2021",
    description: "At Utreee, I contributed to the design of digital products, primarily mobile applications, focusing on creating user-centered interfaces that balanced usability and visual identity. My work helped shape product experiences through UX research, interface design, and the development of cohesive digital platforms."
  },
];

export default function ProfessionalJourney() {
  return (
    <div className="py-20" id="experience">
      {/* Section Header */}
      <div className="mb-[2.25rem] flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="max-w-[600px]">
          <h2 className="font-display font-bold text-[32px] md:text-[36px] text-primary-blue mb-2">
            Professional Journey
          </h2>
          <p className="text-lg md:text-xl text-primary-blue leading-relaxed font-raleway font-medium">
            A timeline of my professional growth, highlighting the impact I've made at leading tech companies and creative studios.
          </p>
        </div>
        
        <div className="flex-shrink-0">
          <div className="px-4 py-2 rounded-full border border-primary-blue/20 bg-primary-blue/5">
            <span className="text-xs md:text-sm font-raleway font-bold text-primary-blue tracking-widest uppercase">
              Experience
            </span>
          </div>
        </div>
      </div>

      {/* Experience List */}
      <div className="flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="grid grid-cols-1 md:grid-cols-[22%_78%] gap-4 md:gap-8 items-start"
          >
            {/* Left Column: Company */}
            <div className="relative flex items-center group/company w-fit">
              {/* Dynamic Bullet */}
              <span className="absolute -left-6 w-2 h-2 rounded-full bg-accent-green opacity-0 -translate-x-1 transition-all duration-300 ease-out group-hover/company:opacity-100 group-hover/company:translate-x-0" />
              
              <h3 className="font-raleway font-bold text-xl text-primary-blue transition-all duration-300 group-hover/company:translate-x-1 group-hover/company:text-accent-green">
                {exp.company}
              </h3>
            </div>

            {/* Right Column: Details */}
            <div className="flex flex-col gap-1">
              <h4 className="font-raleway font-bold text-xl text-primary-blue leading-tight">
                {exp.role}
              </h4>
              <span className="font-raleway text-sm text-primary-blue/60 mb-2">
                {exp.period}
              </span>
              <p className="font-raleway text-lg md:text-xl text-primary-blue leading-relaxed font-medium">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
