import React from 'react';
import { careers } from '../../data/careerData';

const CareerSection: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold mb-4">CAREER</h2>
    <div className="relative border-l border-gray-300 ml-4">
      {careers.map((career, index) => (
        <div key={index} className="mb-8 ml-8">
          <div className="absolute -left-4 w-8 h-8 bg-green-700 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white font-bold">{index + 1}</span>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{career.company}</h3>
            <span className="text-sm text-gray-500">{career.period}</span>
          </div>
          {career.role && <p className="text-sm text-gray-700">{career.role}</p>}
          <p className="text-sm text-gray-500 mb-1">{career.duration}</p>
          {career.description && <p className="text-sm">{career.description}</p>}
        </div>
      ))}
    </div>
  </section>
);

export default CareerSection;
