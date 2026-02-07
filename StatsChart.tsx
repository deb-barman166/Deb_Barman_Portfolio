import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { SKILL_CATEGORIES, getLevelValue } from '../constants';
import { SkillLevel } from '../types';

export const StatsChart: React.FC = () => {
  // Aggregate data for the chart: Average level per category
  const data = SKILL_CATEGORIES.map(cat => {
    const totalScore = cat.skills.reduce((acc, skill) => acc + getLevelValue(skill.level), 0);
    const avgScore = totalScore / cat.skills.length;
    return {
      subject: cat.title.split(' ')[0], // Shorten name
      A: Math.round(avgScore),
      fullMark: 100
    };
  });

  return (
    <div className="w-full h-[400px] bg-gamma-card/50 border border-gray-800 rounded-2xl p-4 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-4 left-4 z-10">
         <h3 className="text-lg font-display font-semibold text-gray-200">Skill Balance</h3>
         <p className="text-xs text-gray-500">Categorical Proficiency Analysis</p>
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#333" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12 }} />
          <Radar
            name="Proficiency"
            dataKey="A"
            stroke="#8b5cf6"
            strokeWidth={2}
            fill="#8b5cf6"
            fillOpacity={0.3}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff' }}
            itemStyle={{ color: '#a78bfa' }}
            cursor={{ stroke: '#666', strokeWidth: 1 }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};