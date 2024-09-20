import React from 'react';
import { useParams } from 'react-router-dom';
import { cardData } from '../../data/CardData';

const ProjectTemplate: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = cardData.find((project) => project.title.toLowerCase().replace(/\s+/g, '-') === id);

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="container mx-auto p-6 pt-20">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded mb-4" />
      <p className="text-gray-600 mb-2">프로젝트 기간: {project.date}</p>
      <p className="text-gray-600 mb-2">카테고리: {project.category}</p>
      <div className="mt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mr-4"
        >
          GitHub
        </a>
        <a href={project.notion} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Notion
        </a>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">사용 언어 및 라이브러리</h2>
        <div className="flex flex-wrap gap-2">
          {project.languages.map((language, index) => (
            <span key={index} className="px-2 py-1 text-xs bg-pink-200 rounded-full">
              {language}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
