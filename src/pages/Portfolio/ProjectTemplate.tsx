import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { cardData } from '../../data/CardData';
import { projectImages } from '../../data/ProjectImages';
import Modal from '../../components/Modal/Modal';
import GalleryItem from '../../components/Gallery/GalleryItem';

const ProjectTemplate: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = cardData.find((project) => project.title.toLowerCase().replace(/\s+/g, '-') === id);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isButtonVisible, setIsButtonVisible] = useState<number | null>(null);

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  const galleryImages = projectImages[id as keyof typeof projectImages] || [];

  const handleImageClick = (index: number) => {
    if (window.innerWidth < 1280) {
      setIsButtonVisible(index);
      setSelectedImage(index);
    }
  };

  const openModal = (index: number) => {
    setSelectedImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setIsButtonVisible(null);
  };

  return (
    <div className="container mx-auto p-6 pt-20 xl:max-w-[40%] md:max-w-[60%]">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-top rounded mb-4" />
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
            <GalleryItem
              key={index}
              src={src}
              index={index}
              selectedImage={selectedImage}
              isButtonVisible={isButtonVisible}
              onClick={handleImageClick}
              onOpenModal={openModal}
            />
          ))}
        </div>
      </div>

      {isModalOpen && selectedImage !== null && <Modal src={galleryImages[selectedImage]} onClose={closeModal} />}
    </div>
  );
};

export default ProjectTemplate;
