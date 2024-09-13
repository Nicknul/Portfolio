import React from 'react';

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
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-sm text-gray-500">{date}</p>
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className={`mt-2 text-sm ${category === '팀프로젝트' ? 'text-blue-500' : 'text-green-500'}`}>{category}</p>
        <div className="mt-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">
            GitHub
          </a>
          <a href={notion} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Notion
          </a>
        </div>
        <div className="mt-4">
          <p className="text-sm font-semibold">사용 언어:</p>
          <ul className="list-disc list-inside">
            {languages.map((language, index) => (
              <li key={index} className="text-gray-700">
                {language}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
