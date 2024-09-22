import React from 'react';

interface CardLinksProps {
  github: string;
  notion: string;
}

const CardLinks: React.FC<CardLinksProps> = ({ github, notion }) => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex gap-4">
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
