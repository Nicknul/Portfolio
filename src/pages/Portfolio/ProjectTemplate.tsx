import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { cardData } from '../../data/CardData';
import { projectImages } from '../../data/ProjectImages';

// 모달 컴포넌트 추가
const Modal: React.FC<{ src: string; onClose: () => void }> = ({ src, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div className="relative">
      <img src={src} alt="Selected" className="max-w-full max-h-screen rounded" />
      <button
        onClick={onClose}
        className="absolute top-2 right-2 bg-white text-black rounded-full p-1 hover:bg-gray-200"
      >
        닫기
      </button>
    </div>
  </div>
);

const ProjectTemplate: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = cardData.find((project) => project.title.toLowerCase().replace(/\s+/g, '-') === id);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 모달 상태 추가
  const [isButtonVisible, setIsButtonVisible] = useState<number | null>(null); // 버튼 표시 상태 추가

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  const galleryImages = projectImages[id as keyof typeof projectImages] || [];

  const handleImageClick = (index: number) => {
    // 모바일 및 태블릿(1024px 이하)에서 이미지를 클릭할 때만 버튼을 표시
    if (window.innerWidth < 1280) {
      setIsButtonVisible(index);
      setSelectedImage(index); // 이미지 어두워지도록 설정
    }
  };

  const openModal = (index: number) => {
    setSelectedImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null); // 모달을 닫을 때 선택된 이미지 상태 초기화
    setIsButtonVisible(null); // 버튼 상태도 초기화
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
            <div
              key={index}
              className={`relative group ${window.innerWidth >= 1280 ? 'hover:brightness-75' : ''}`} // 브라우저에서 호버 시 어두워지도록 설정
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                onClick={() => handleImageClick(index)}
                className={`w-full object-cover rounded shadow transform transition duration-300 
                  ${selectedImage === index ? 'brightness-50' : ''}
                  ${window.innerWidth >= 1280 ? 'hover:brightness-50 hover:translate-y-[-5px]' : ''}
                `}
              />
              {/* 태블릿과 모바일에서는 클릭 시 버튼을 나타나게 */}
              {isButtonVisible === index || window.innerWidth >= 1280 ? (
                <button
                  onClick={() => openModal(index)}
                  className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
                >
                  자세히 보기
                </button>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {/* 모달 렌더링 */}
      {isModalOpen && selectedImage !== null && <Modal src={galleryImages[selectedImage]} onClose={closeModal} />}
    </div>
  );
};

export default ProjectTemplate;
