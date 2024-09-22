import React from 'react';
import CardLinks from './CardLinks';
import SkillTags from './SkillTags';

interface CardHeaderProps {
  image: string;
  date: string;
  title: string;
  category: '팀프로젝트' | '싱글';
  github: string;
  notion: string;
  languages: string[];
}

const CardHeader: React.FC<CardHeaderProps> = ({ image, date, title, category, github, notion, languages }) => {
  return (
    <>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-sm text-gray-500">{date}</p>
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className={`mt-2 text-sm ${category === '팀프로젝트' ? 'text-blue-500' : 'text-green-500'}`}>{category}</p>
        <CardLinks github={github} notion={notion} />
        <SkillTags languages={languages} />
      </div>
    </>
  );
};

export default CardHeader;
