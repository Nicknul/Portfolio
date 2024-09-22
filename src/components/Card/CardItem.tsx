import React from 'react';
import { Link } from 'react-router-dom';
import CardHeader from './CardHeader';

interface CardItemProps {
  id: string;
  image: string;
  date: string;
  title: string;
  category: '팀프로젝트' | '싱글';
  github: string;
  notion: string;
  languages: string[];
}

const CardItem: React.FC<CardItemProps> = ({ id, image, date, title, category, github, notion, languages }) => {
  const pageLink = `/portfolio/${id}`;

  return (
    <Link to={pageLink}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
        <CardHeader
          image={image}
          date={date}
          title={title}
          category={category}
          github={github}
          notion={notion}
          languages={languages}
        />
      </div>
    </Link>
  );
};

export default CardItem;
