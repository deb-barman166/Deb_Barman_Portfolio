import React, { useEffect, useState } from 'react';
import { ChevronRight, ChevronDown, Terminal } from 'lucide-react';

interface Language {
  name: string;
  percentage: number;
  level: 'ADVANCE' | 'BEGINNER';
  subItems?: Language[];
}

// Data structure reflects the screenshot hierarchy
const languages: Language[] = [
  { 
    name: 'Python', percentage: 95, level: 'ADVANCE',
    subItems: [
      { name: 'Pandas', percentage: 92, level: 'ADVANCE' },
      { name: 'Matplotlib', percentage: 88, level: 'ADVANCE' },
      { name: 'Seaborn', percentage: 85, level: 'ADVANCE' },
      { name: 'Numpy', percentage: 45, level: 'BEGINNER' },
      { name: 'Scikit Learn', percentage: 40, level: 'BEGINNER' },
      { name: 'Pygame', percentage: 42, level: 'BEGINNER' },
      { name: 'PyTorch', percentage: 30, level: 'BEGINNER' },
    ]
  },
  { name: 'HTML', percentage: 60, level: 'BEGINNER' },
  { name: 'CSS', percentage: 60, level: 'BEGINNER' },
  { name: 'JavaScript', percentage: 55, level: 'BEGINNER' },
  { name: 'Java', percentage: 35, level: 'BEGINNER' },
  { name: 'C', percentage: 30, level: 'BEGINNER' },
  { name: 'C++', percentage: 35, level: 'BEGINNER' },
  { name: 'C#', percentage: 30, level: 'BEGINNER' },
  { name: 'PHP', percentage: 40, level: 'BEGINNER' },
  { name: 'MySQL', percentage: 45, level: 'BEGINNER' },
  { name: 'JSON', percentage: 50, level: 'BEGINNER' },
];

interface SkillBarProps {
  lang: Language;
  show: boolean;
  isSub?: boolean;
  isLast?: boolean;
  onToggle?: () => void;
  isOpen?: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ lang, show, isSub = false, isLast = false, onToggle, isOpen }) => {
  const hasSub = lang.subItems && lang.subItems.length > 0;
  
  // Consistent Monochromatic Blue/Cyan Theme
  const barGradient = 'from-cyan-500 via-blue-500 to-blue-600';
  const badgeStyle = lang.level === 'ADVANCE'
    ? 'bg-blue-900/30 text-cyan-300 border-cyan-500/30 shadow-[0_0_8px_rgba(6,182,212,0.15)]'
    : 'bg-gray-800 text-gray-400 border-gray-700';

  return (
    <div className={`relative ${isSub ? 'mt-3 pl-8' : 'mt-5'}`}>
      
      {/* Tree Lines for Sub-items */}
      {isSub && (
        <>
          {/* Vertical line from parent */}
          <div className="absolute left-0 top-[-20px] bottom-0 w-px bg-gray-800 group-last:bottom-auto group-last:h-[24px]"></div>
          {/* Horizontal curve to item */}
          <div className="absolute left-0 top-[22px] w-6 h-px bg-gray-800"></div>
        </>
      )}

      {/* Main Item Container */}
      <div 
        onClick={hasSub ? onToggle : undefined}
        className={`group relative z-10 ${hasSub ? 'cursor-pointer' : ''}`}
      >
        <div className="flex flex-col gap-2">
          {/* Label Row */}
          <div className="flex items-center justify-between pr-2">
            <div className="flex items-center gap-3">
              {/* Expand Icon for Parents */}
              {hasSub && (
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90 text-cyan-400' : 'text-gray-500'}`}>
                   <ChevronRight size={14} />
                </div>
              )}
              
              <span className={`font-display font-medium tracking-wide transition-all duration-300 ${
                isSub 
                  ? 'text-gray-400 text-sm group-hover:text-cyan-200' 
                  : `text-base ${isOpen ? 'text-cyan-400' : 'text-gray-200'} group-hover:text-white`
              }`}>
                {lang.name}
              </span>
              
              <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border transition-colors ${badgeStyle}`}>
                {lang.level}
              </span>
            </div>
            
            <span className="text-xs font-mono text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
              {lang.percentage}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-1 bg-gray-800/60 rounded-full overflow-hidden">
            <div 
              className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${barGradient} shadow-[0_0_10px_rgba(6,182,212,0.4)] transition-all duration-1000 ease-out`}
              style={{ width: show ? `${lang.percentage}%` : '0%' }}
            >
               {/* Shine Effect */}
               <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/40 blur-[4px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LanguageChart: React.FC = () => {
  const [showBars, setShowBars] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setShowBars(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const toggleItem = (name: string) => {
    setExpandedItems(prev => 
      prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
    );
  };

  return (
    <div className="bg-[#0a0a0b] border border-gray-800/80 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
       {/* Background Aesthetics */}
       <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-900/5 rounded-full blur-[120px] pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none"></div>

       {/* Header */}
       <div className="flex items-center gap-4 mb-10 relative z-10 pl-2">
         <div className="w-1 h-10 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
         <div>
            <h3 className="text-2xl font-display font-bold text-white tracking-tight">
              Programming Proficiency
            </h3>
            <p className="text-sm text-gray-500 font-medium tracking-wide flex items-center gap-2">
              <Terminal size={12} /> Technical Stack & Core Logic
            </p>
         </div>
       </div>

       {/* Chart Area */}
       <div className="relative z-10 pl-2">
         {languages.map((lang, index) => {
           const isOpen = expandedItems.includes(lang.name);
           return (
             <React.Fragment key={index}>
               <SkillBar 
                 lang={lang} 
                 show={showBars} 
                 onToggle={() => toggleItem(lang.name)}
                 isOpen={isOpen}
               />
               
               {/* Render Sub-items with Tree Structure */}
               <div className={`relative ml-1 border-l border-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${
                 isOpen ? 'max-h-[1000px] opacity-100 mb-6' : 'max-h-0 opacity-0'
               }`}>
                 {lang.subItems?.map((sub, idx) => (
                   <SkillBar 
                     key={`sub-${idx}`} 
                     lang={sub} 
                     show={showBars && isOpen} 
                     isSub={true} 
                     isLast={idx === lang.subItems!.length - 1}
                   />
                 ))}
               </div>
             </React.Fragment>
           );
         })}
       </div>
    </div>
  );
};