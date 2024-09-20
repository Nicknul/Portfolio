import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { cardData } from '../../data/CardData';
import { projectImages } from '../../data/ProjectImages';

const ProjectTemplate: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = cardData.find((project) => project.title.toLowerCase().replace(/\s+/g, '-') === id);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  const galleryImages = projectImages[id as keyof typeof projectImages] || [];
  const handleImageClick = (index: number) => {
    if (window.innerWidth < 1024) {
      setSelectedImage(index);
    }
  };

  return (
    <div className="container mx-auto p-6 pt-20 xl:max-w-[40%] md:max-w-[60%]">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full object-cover rounded mb-4" />
      <p className="text-gray-600 mb-2">프로젝트 기간: {project.date}</p>
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
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">작업 이미지 갤러리</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery image ${index + 1}`}
              onClick={() => handleImageClick(index)}
              className={`w-full object-cover rounded shadow transform transition duration-300 
                ${selectedImage === index ? 'brightness-75' : ''}
                hover:brightness-75 hover:translate-y-[-5px] 
                lg:hover:brightness-75 lg:hover:translate-y-[-5px]
                sm:hover:brightness-75 sm:hover:translate-y-[-5px]`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
