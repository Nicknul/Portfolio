import React from 'react';
import { Link } from 'react-router-dom';
import LanguageBadge from './LanguageBadge';
import CardLinks from './CardLinks';

interface CardItemProps {
  image: string;
  date: string;
  title: string;
  category: '팀프로젝트' | '싱글';
  github: string;
  notion: string;
  languages: string[];
}

const CardItem: React.FC<CardItemProps> = ({ image, date, title, category, github, notion, languages }) => {
  const pageLink = `/portfolio/${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <Link to={pageLink}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <p className="text-sm text-gray-500">{date}</p>
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <p className={`mt-2 text-sm ${category === '팀프로젝트' ? 'text-blue-500' : 'text-green-500'}`}>{category}</p>
          <CardLinks github={github} notion={notion} />
          <div className="mt-4">
            <div className="flex flex-wrap gap-2 mt-2">
              {languages.map((language, index) => (
                <LanguageBadge key={index} language={language} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
