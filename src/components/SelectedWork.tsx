import React, { useState } from 'react';
import { EyeOff, X, Lock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTAINER_CLASSES } from '../constants';
import PortadaCaribbean from '../assets/images/portada-caribbeanCinemas.png';
const PortadaCarol = "https://picsum.photos/seed/healthcare/1000/800";
const PortadaHumano = "https://picsum.photos/seed/ecommerce/1000/800";


const projects = [
  {
    id: 1,
    headerTags: "MOBILE UX REDESIGN / PRODUCT STRATEGY",
    title: "Caribbean Cinemas App Redesign",
    description: "Optimizing the ticket purchasing flow to reduce friction and abandonment.",
    metricLabel: "PROBLEM",
    metricValue: "0% Initial Conversion Rate",
    tags: ["Mobile UX Redesign", "Product Strategy"],
    restricted: false,
    projectNumber: "01/03",
    slug: "caribbean-cinemas-app-redesign",
    accentColor: "#00BFFF"
  },
  {
    id: 2,
    headerTags: "HEALTH TECH / MOBILE APP",
    title: "Carol Pharmacy — Mobile App Redesign",
    description: "A UX-driven redesign focused on simplifying the purchasing journey and increasing adoption of digital channels.",
    metricLabel: "KEY METRIC",
    metricValue: "Expected reduced checkout friction",
    tags: ["UX MATURITY", "CONVERSION"],
    restricted: true,
    projectNumber: "02/03",
    inDevelopment: true,
    slug: "carol-pharmacy-app"
  },
  {
    id: 3,
    headerTags: "HEALTH INSURANCE / E-COMMERCE UX",
    title: "Humano Seguros — E-Commerce Redesign",
    description: "Improving the insurance purchasing experience by simplifying complex flows and reducing friction across the digital journey.",
    metricLabel: "IMPACT",
    metricValue: "Improved UX & Adoption",
    tags: ["HEALTHCARE", "UX DESIGN", "E-COMMERCE"],
    restricted: true,
    projectNumber: "03/03",
    inDevelopment: true,
    slug: "humano-ecommerce-redesign"
  }
];

interface SelectedWorkProps {
  onSelectProject: (id: number) => void;
}

export default function SelectedWork({ onSelectProject }: SelectedWorkProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProjectId, setModalProjectId] = useState<number | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.inDevelopment) {
      setModalProjectId(project.id);
      setIsModalOpen(true);
      setError('');
      setPassword('');
      return;
    }
    
    if (project.restricted) {
      setModalProjectId(project.id);
      setIsModalOpen(true);
      setError('');
      setPassword('');
    } else {
      onSelectProject(project.id);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'laurauxproject') {
      if (modalProjectId) onSelectProject(modalProjectId);
      setIsModalOpen(false);
      setPassword('');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const selectedProject = projects.find(p => p.id === modalProjectId);
  const isInDevelopment = selectedProject?.inDevelopment;

  return (
    <section className="pt-24 pb-32 bg-bg-cream" id="work">
      <div className={CONTAINER_CLASSES}>
        {/* Section Header (STATIC) */}
        <div className="mb-[2.25rem] flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-[600px]">
            <h2 className="font-display font-bold text-[32px] md:text-[36px] text-primary-blue mb-2">
              Selected work
            </h2>
            <p className="text-lg md:text-xl text-primary-blue leading-relaxed font-raleway font-medium">
              Case studies showcasing my approach to product design, from understanding user needs to delivering scalable and intuitive solutions.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <div className="px-4 py-2 rounded-full border border-primary-blue/20 bg-primary-blue/5">
              <span className="text-xs md:text-sm font-raleway font-bold text-primary-blue tracking-widest uppercase">
                CASE STUDIES
              </span>
            </div>
          </div>
        </div>

        {/* Stacked Cards Container */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="sticky w-full"
              style={{ 
                top: `${4 + index * 2}rem`,
                zIndex: index + 1
              }}
            >
              <div className="group bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,92,153,0.08)] border border-primary-blue/10 overflow-hidden flex flex-col md:flex-row min-h-[450px] transition-transform duration-500 hover:scale-[1.01]">
                {/* Image Section (Left) */}
                <div className="w-full md:w-[45%] h-64 md:h-auto relative overflow-hidden bg-accent-blue/10">
                  {project.restricted ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-primary-blue/70">
                      <EyeOff size={32} strokeWidth={1.5} />
                      <span className="text-sm font-bold tracking-widest uppercase font-raleway">Restricted Access</span>
                    </div>
                  ) : (
                    <img 
                      src={project.id === 1 ? PortadaCaribbean : project.id === 2 ? PortadaCarol : PortadaHumano} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  {/* Overlay for depth */}
                  <div className="absolute inset-0 bg-primary-blue/10 mix-blend-multiply" />
                </div>

                {/* Content Section (Right) */}
                <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold text-primary-blue/70 tracking-[0.3em] font-raleway">
                      PROJECT {project.projectNumber}
                    </span>
                    <div className="px-3 py-1 rounded-full bg-primary-blue/10 text-[10px] font-bold text-primary-blue tracking-wider uppercase font-raleway">
                      {project.headerTags.split(' / ')[0]}
                    </div>
                  </div>

                  <h3 className="font-raleway font-bold text-3xl md:text-4xl text-primary-blue mb-4 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-lg md:text-xl text-primary-blue mb-8 leading-relaxed font-raleway font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[10px] font-bold text-primary-blue/80 border border-primary-blue/20 px-4 py-2 rounded-full tracking-widest uppercase font-raleway"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleProjectClick(project)}
                    className="group/btn inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] font-raleway transition-all duration-300 text-primary-blue hover:gap-5"
                  >
                    {project.inDevelopment ? 'Coming Soon' : project.restricted ? 'Request Access' : 'View Case Study'}
                    <span className="text-xl transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Password Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-primary-blue/40 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-bg-cream rounded-[2rem] shadow-2xl overflow-hidden border border-primary-blue/20"
            >
              <div className="p-8 md:p-10">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 text-primary-blue/70 hover:text-primary-blue transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-blue/10 flex items-center justify-center mb-6">
                    {isInDevelopment ? (
                      <div className="text-primary-blue font-bold text-2xl">🚧</div>
                    ) : (
                      <Lock className="text-primary-blue" size={32} strokeWidth={1.5} />
                    )}
                  </div>
                  
                  <h3 className="font-raleway font-bold text-2xl text-primary-blue mb-2">
                    {isInDevelopment ? 'Proyecto en Desarrollo' : 'Restricted Access'}
                  </h3>
                  <p className="text-primary-blue/80 font-medium mb-8 leading-relaxed">
                    {isInDevelopment 
                      ? 'Este proyecto se encuentra actualmente en desarrollo. ¡Vuelve pronto para ver el caso de estudio completo!'
                      : 'This project is protected. Please enter the password to view the case study.'
                    }
                  </p>

                  {!isInDevelopment && (
                    <form onSubmit={handlePasswordSubmit} className="w-full">
                      <div className="relative mb-4">
                        <input 
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter password"
                          autoFocus
                          className="w-full bg-white border-2 border-primary-blue/20 rounded-2xl px-6 py-4 text-primary-blue placeholder:text-primary-blue/50 focus:outline-none focus:border-primary-blue/50 transition-all font-raleway font-medium"
                        />
                      </div>
                      
                      {error && (
                        <p className="text-red-500 text-sm font-bold mb-4 font-raleway">
                          {error}
                        </p>
                      )}

                      <button 
                        type="submit"
                        className="w-full bg-primary-blue text-white rounded-2xl py-4 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary-blue/90 transition-all group"
                      >
                        Unlock Project
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    </form>
                  )}
                  
                  {isInDevelopment && (
                    <button 
                      onClick={() => setIsModalOpen(false)}
                      className="w-full bg-primary-blue text-white rounded-2xl py-4 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary-blue/90 transition-all group"
                    >
                      Entendido
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
