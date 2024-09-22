import React from 'react';

interface ProjectHeaderProps {
  title: string;
  image: string;
  date: string;
  github: string;
  notion: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title, image, date, github, notion }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <img src={image} alt={title} className="w-full h-48 object-cover object-top rounded mb-4" />
      <p className="text-gray-600 mb-2">프로젝트 기간: {date}</p>
      <div className="mt-4">
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">
          GitHub
        </a>
        <a href={notion} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Notion
        </a>
      </div>
    </>
  );
};

export default ProjectHeader;
