import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { StatData } from '../types';

interface Props {
  stats: StatData[];
}

const StatsCards: React.FC<Props> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const percentage = Math.round((stat.value / stat.total) * 100);
        const data = [
          { value: stat.value },
          { value: stat.total - stat.value },
        ];

        return (
          <div key={index} className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm flex items-center gap-4 border border-gray-100 dark:border-gray-700">
            <div className="relative w-20 h-20 flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={28}
                    outerRadius={36}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                    stroke="none"
                  >
                    <Cell fill={stat.color} />
                    <Cell fill={document.documentElement.classList.contains('dark') ? '#374151' : '#e5e7eb'} />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-800 dark:text-gray-100">
                {percentage}%
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">{stat.label}</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}<span className="text-lg text-gray-400">/{stat.total}</span>
              </p>
              <p className="text-xs font-semibold" style={{ color: stat.color }}>
                Ocupados
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;