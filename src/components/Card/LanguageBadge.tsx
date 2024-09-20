import React from 'react';

interface LanguageBadgeProps {
  language: string;
  index: number;
}

const colors = ['bg-pink-200', 'bg-purple-200', 'bg-green-200', 'bg-yellow-200', 'bg-blue-200', 'bg-indigo-200'];

const LanguageBadge: React.FC<LanguageBadgeProps> = ({ language, index }) => {
  return <span className={`px-2 py-1 text-xs ${colors[index % colors.length]} rounded-full`}>{language}</span>;
};

export default LanguageBadge;
