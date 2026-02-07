import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Github, Code2, Share2, Linkedin, Facebook, Twitter, Instagram, Copy } from 'lucide-react';

interface Props {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}

export const ProjectCard: React.FC<Props> = ({ project, isActive, onClick }) => {
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowShareMenu(!showShareMenu);
  };

  const handleSocialShare = (e: React.MouseEvent, platform: string) => {
    e.stopPropagation();
    const url = project.link || window.location.href;
    const text = `Check out ${project.title} by Deb Barman`;
    
    let shareUrl = '';
    
    switch(platform) {
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'instagram':
        // Instagram does not support direct web sharing via URL. We'll copy the link instead.
        navigator.clipboard.writeText(url);
        setShowShareMenu(false);
        alert("Link copied! Open Instagram to share.");
        return; 
      case 'copy':
        navigator.clipboard.writeText(url);
        setShowShareMenu(false);
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    setShowShareMenu(false);
  };

  return (
    <div 
      className={`relative rounded-xl p-[1px] cursor-pointer transition-all duration-300 w-[350px] md:w-[450px] flex-shrink-0 snap-center group h-[300px] ${isActive ? 'scale-[1.02]' : 'hover:scale-[1.01]'}`}
      onClick={onClick}
      onMouseLeave={() => setShowShareMenu(false)}
    >
      {/* Neon Glow Animation Layer (Only visible when active) */}
      <div className={`absolute inset-[-2px] rounded-xl overflow-hidden transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] animate-spin-slow opacity-100 mix-blend-screen" 
             style={{ background: 'conic-gradient(from 0deg, transparent 0 340deg, #7c3aed 360deg)' }}></div>
      </div>
      
      {/* Secondary Glow Blur (Ambient Light) */}
      <div className={`absolute inset-0 bg-purple-500/20 blur-xl transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

      {/* Main Card Content */}
      <div className="relative h-full bg-gamma-card rounded-xl p-6 flex flex-col border border-gray-800/80 z-10 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
             <div className={`p-2 rounded-lg border transition-colors duration-300 ${isActive ? 'bg-purple-900/30 border-purple-500/50' : 'bg-gray-900 border-gray-800'}`}>
               <Code2 className={`w-5 h-5 ${isActive ? 'text-purple-300' : 'text-purple-400'}`} />
             </div>
             <div>
               <h3 className={`font-display font-bold text-lg leading-tight transition-colors ${isActive ? 'text-white' : 'text-gray-200'}`}>
                 {project.title}
               </h3>
               <span className="text-[10px] text-gray-500 uppercase tracking-wider">Project</span>
             </div>
          </div>
          {project.github && (
            <div className="text-gray-600">
               <Github size={20} />
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {project.description}
        </p>
        
        {/* Tech Stack & Links */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-gray-900 text-gray-400 rounded border border-gray-800">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[10px] px-2 py-1 text-gray-500">+ {project.technologies.length - 3}</span>
            )}
          </div>
          
          <div className="flex items-center justify-between border-t border-gray-800 pt-4 relative">
             <div className="text-xs text-gray-500">
                {isActive ? <span className="text-purple-400 animate-pulse">● Active Selection</span> : <span>Click for details</span>}
             </div>

             <div className="flex items-center gap-3">
               {/* Share Button & Popup */}
               <div className="relative">
                 {showShareMenu && (
                    <div 
                      className="absolute bottom-full right-0 mb-3 w-40 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl p-1 z-50 animate-fade-in-up"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button onClick={(e) => handleSocialShare(e, 'linkedin')} className="group w-full flex items-center gap-3 px-3 py-2 text-xs text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
                        <Linkedin size={14} className="text-blue-500 transition-transform duration-300 group-hover:scale-110" /> LinkedIn
                      </button>
                      <button onClick={(e) => handleSocialShare(e, 'facebook')} className="group w-full flex items-center gap-3 px-3 py-2 text-xs text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
                        <Facebook size={14} className="text-blue-600 transition-transform duration-300 group-hover:scale-110" /> Facebook
                      </button>
                      <button onClick={(e) => handleSocialShare(e, 'twitter')} className="group w-full flex items-center gap-3 px-3 py-2 text-xs text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
                        <Twitter size={14} className="text-sky-500 transition-transform duration-300 group-hover:scale-110" /> Twitter
                      </button>
                      <button onClick={(e) => handleSocialShare(e, 'instagram')} className="group w-full flex items-center gap-3 px-3 py-2 text-xs text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
                        <Instagram size={14} className="text-pink-500 transition-transform duration-300 group-hover:scale-110" /> Instagram
                      </button>
                      <div className="h-px bg-gray-700 my-1 mx-2"></div>
                      <button onClick={(e) => handleSocialShare(e, 'copy')} className="group w-full flex items-center gap-3 px-3 py-2 text-xs text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
                        <Copy size={14} className="text-gray-400 transition-transform duration-300 group-hover:scale-110" /> Copy Link
                      </button>
                    </div>
                 )}
                 
                 <button 
                   onClick={handleShareClick}
                   className={`p-2 rounded-lg transition-colors border ${showShareMenu ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' : 'border-transparent hover:bg-gray-800 text-gray-400 hover:text-white'}`}
                   title="Share Project"
                 >
                   <Share2 size={16} />
                 </button>
               </div>

               {project.link && (
                 <a 
                   href={project.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   onClick={(e) => e.stopPropagation()} 
                   className="flex items-center gap-1 text-xs font-semibold text-white hover:text-purple-400 transition-colors bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-lg"
                 >
                   View Live <ExternalLink size={12} />
                 </a>
               )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};