import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip, PolarRadiusAxis } from 'recharts';
import { SKILL_CATEGORIES, getLevelValue } from '../constants';

export const PersonalityChart: React.FC = () => {
  // We need to match the specific skills shown in the screenshot or key soft skills
  const specificSkills = [
    'Imagination',
    'Critical Thinking',
    'Self Control',
    'Learn Something New',
    'Play Chess'
  ];
  
  // Find these skills in the data
  const data = SKILL_CATEGORIES
    .flatMap(cat => cat.skills)
    .filter(skill => specificSkills.includes(skill.name))
    .map(skill => ({
      subject: skill.name,
      A: getLevelValue(skill.level),
      fullMark: 100
    }));

  return (
    <div className="w-full h-full min-h-[400px] bg-[#0f0f10] border border-gray-800 rounded-2xl p-6 relative overflow-hidden flex flex-col shadow-2xl">
       {/* Header */}
       <div className="mb-2 relative z-10">
         <div className="p-3 bg-gray-900/50 rounded-lg border border-gray-800/50">
            <p className="text-sm leading-relaxed">
              <span className="text-emerald-400 font-bold tracking-wide">Persona Profile:</span> <span className="text-gray-400">Visualization of legendary Soft Skills, Habits, and Cognitive attributes.</span>
            </p>
         </div>
      </div>
      
      <div className="flex-grow mt-4 relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid stroke="#1f2937" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: '#6b7280', fontSize: 11, fontFamily: 'Inter' }} 
            />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="Trait Strength"
              dataKey="A"
              stroke="#10b981"
              strokeWidth={2}
              fill="#10b981"
              fillOpacity={0.15}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#000', borderColor: '#1f2937', color: '#fff', borderRadius: '8px' }}
              itemStyle={{ color: '#34d399' }}
              cursor={{ stroke: '#374151', strokeWidth: 1 }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};