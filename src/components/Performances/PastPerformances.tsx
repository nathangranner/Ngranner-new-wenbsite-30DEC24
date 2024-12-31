import React from 'react';
import { RoleLink } from './RoleLink';

interface Performance {
  role: string;
  opera: string;
  year: string;
  company: string;
}

const performances: Performance[] = [
  {
    role: 'Radames',
    opera: 'Aïda',
    year: '2025',
    company: 'Dayton Opera'
  },
  {
    role: 'Korey Wise',
    opera: 'The Central Park Five',
    year: '2025',
    company: 'Detroit Opera'
  },
  {
    role: 'Ullman/Grady',
    opera: 'The Shining',
    year: '2025',
    company: 'Portland Opera'
  },
  {
    role: 'Rodolfo',
    opera: 'La Bohème',
    year: '2024',
    company: 'Tacoma Opera'
  },
  {
    role: 'Hans Sachs\'s Trainer',
    opera: 'Vinkensport, or The Finch Opera',
    year: '2024',
    company: 'Opera Parallèle'
  },
  {
    role: 'Bobby Riggs',
    opera: 'Balls',
    year: '2024',
    company: 'Opera Parallèle'
  },
  {
    role: 'Rob Hall',
    opera: 'Everest: Opera in the Planetarium',
    year: '2024',
    company: 'Opera Parallèle'
  },
  {
    role: 'Mario Cavaradossi',
    opera: 'Tosca',
    year: '2023',
    company: 'Opera Orlando'
  },
  {
    role: 'Don José',
    opera: 'Carmen',
    year: '2023',
    company: 'Opera Santa Barbara'
  }
];

export function PastPerformances() {
  return (
    <div>
      <h3 className="text-3xl font-bold font-['Playfair_Display'] mb-8 text-white">
        Principal Roles
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-700">
              <th className="py-4 px-6 text-left font-['Open_Sans'] font-bold text-white">Role</th>
              <th className="py-4 px-6 text-left font-['Open_Sans'] font-bold text-white">Opera</th>
              <th className="py-4 px-6 text-left font-['Open_Sans'] font-bold text-white">Year</th>
              <th className="py-4 px-6 text-left font-['Open_Sans'] font-bold text-white">Company</th>
            </tr>
          </thead>
          <tbody>
            {performances.map((performance, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-700 hover:bg-white/5 transition-colors"
              >
                <td className="py-4 px-6 font-['Open_Sans'] italic text-white">
                  <RoleLink role={performance.role} opera={performance.opera} />
                </td>
                <td className="py-4 px-6 font-['Open_Sans'] italic text-white">{performance.opera}</td>
                <td className="py-4 px-6 font-['Open_Sans'] text-white">{performance.year}</td>
                <td className="py-4 px-6 font-['Open_Sans'] text-white">{performance.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}