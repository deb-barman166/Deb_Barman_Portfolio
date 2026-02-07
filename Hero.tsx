import React from 'react';
import { Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full animate-[fadeInUp_1s_ease-out_forwards]">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-gray-300 text-xs font-semibold tracking-widest uppercase">34 Years of Excellence</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tight leading-none opacity-0 animate-[fadeInUp_1.2s_ease-out_0.2s_forwards]">
          DEB BARMAN
        </h1>
        
        <div className="text-xl md:text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mb-8 font-display opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
          UI DESIGNER • AI ENGINEER • CREATIVE LEGEND
        </div>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.7s_forwards]">
          Merging deep-tech logic with legendary creativity. 
          Specializing in <span className="text-white">Python, Gen AI</span>, and <span className="text-white">Professional UI Design</span>.
          Building the future with disciplined observation and imagination.
        </p>

        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-[fadeInUp_1s_ease-out_0.9s_forwards]">
          <a href="#skills" className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            View Skills
          </a>
          <a href="#stats" className="px-8 py-3 bg-transparent border border-gray-700 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors">
            See Analytics
          </a>
        </div>
      </div>
    </section>
  );
};