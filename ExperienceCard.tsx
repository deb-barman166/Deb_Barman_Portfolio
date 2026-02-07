import React from 'react';
import { Experience } from '../types';
import { Calendar, Building2, CheckCircle2, Zap } from 'lucide-react';

interface Props {
  experience: Experience;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export const ExperienceCard: React.FC<Props> = ({ experience, index, isActive, onClick }) => {
  return (
    <div 
      className={`relative rounded-2xl p-[1px] cursor-pointer transition-all duration-300 w-full group ${isActive ? 'scale-[1.01]' : 'hover:scale-[1.005]'}`}
      onClick={onClick}
    >
      {/* Neon Glow Animation Layer (Active) */}
      <div className={`absolute inset-[-2px] rounded-2xl overflow-hidden transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] animate-spin-slow opacity-100 mix-blend-screen" 
             style={{ background: 'conic-gradient(from 0deg, transparent 0 340deg, #06b6d4 360deg)' }}></div>
      </div>
      
      {/* Hover Glow (Inactive) */}
       <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 ${isActive ? 'opacity-0' : ''}`}></div>

      {/* Main Card Content */}
      <div className="relative bg-[#0d121c] rounded-2xl p-6 md:p-8 border border-gray-800/80 z-10 overflow-hidden flex flex-col gap-6">
        
        {/* Header Section */}
        <div>
          <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
            {experience.role}
          </h3>
          
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-4">
            <span className="flex items-center gap-2">
              <Building2 size={16} className="text-cyan-500" />
              {experience.company}
            </span>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span className="px-3 py-1 rounded-md bg-gray-800/50 border border-gray-700 text-xs font-medium">
              {experience.type}
            </span>
          </div>

          {/* Date Bar - Matching Screenshot Style */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#080a0f] border border-gray-800/50 text-sm font-mono text-gray-300 w-full md:w-fit">
             <Calendar size={16} className="text-cyan-500" />
             {experience.period}
          </div>
        </div>

        {/* Highlights List */}
        <div className="space-y-3">
          {experience.highlights.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="mt-1 min-w-[18px]">
                <CheckCircle2 size={18} className="text-emerald-500" />
              </div>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1.5 text-xs font-mono font-medium text-cyan-400 bg-[#121826] border border-gray-800 rounded hover:border-cyan-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Impact Section - Matching Screenshot Style */}
        <div className="mt-2 pt-4 border-t border-gray-800/50">
           <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold text-xs uppercase tracking-widest">
              <Zap size={14} /> Impact
           </div>
           <p className="text-gray-300 text-sm italic mb-3">
             "{experience.impact}"
           </p>
           {/* Progress Bar Visual */}
           <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 w-3/4 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
           </div>
        </div>

      </div>
    </div>
  );
};