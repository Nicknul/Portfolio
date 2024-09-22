// src/components/Card/CardLinks.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CardLinksProps {
  github: string;
  notion: string;
}

const CardLinks: React.FC<CardLinksProps> = ({ github, notion }) => {
  const navigate = useNavigate();

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mt-4 flex gap-4">
      <button onClick={() => handleLinkClick(github)} className="text-blue-500 hover:underline">
        GitHub
      </button>
      <button onClick={() => handleLinkClick(notion)} className="text-blue-500 hover:underline">
        Notion
      </button>
    </div>
  );
};

export default CardLinks;
