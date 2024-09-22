import React from 'react';

interface SkillTagsProps {
  languages: string[];
}

const skillColors: { [key: string]: string } = {
  Typescript: 'bg-blue-200',
  Javascript: 'bg-blue-200',
  HTML: 'bg-blue-200',
  CSS: 'bg-blue-200',
  React: 'bg-blue-200',
  'Next.js': 'bg-yellow-200',
  'Node.js': 'bg-yellow-200',
  NestJS: 'bg-yellow-200',
  Python: 'bg-blue-200',
  FastAPI: 'bg-red-200',
  MySQL: 'bg-green-200',
  SQLite: 'bg-green-200',
  'REST API': 'bg-red-200',
  babel: 'bg-gray-200',
  webpack: 'bg-gray-200',
  'Tailwind CSS': 'bg-blue-200',
};

const SkillTags: React.FC<SkillTagsProps> = ({ languages }) => {
  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-2 mt-2">
        {languages.map((language, index) => (
          <span key={index} className={`px-2 py-1 text-xs ${skillColors[language] || 'bg-gray-200'} rounded-full`}>
            {language}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillTags;
