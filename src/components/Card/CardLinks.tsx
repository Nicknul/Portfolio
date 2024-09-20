import React from 'react';

interface CardLinksProps {
  github: string;
  notion: string;
}

const CardLinks: React.FC<CardLinksProps> = ({ github, notion }) => {
  return (
    <div className="mt-4">
      <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">
        GitHub
      </a>
      <a href={notion} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Notion
      </a>
    </div>
  );
};

export default CardLinks;
