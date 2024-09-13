import React from 'react';
import ToggleList from '../Toggle/ToggleList';
import ModalImageGallery from './ModalImageGallery';

type ModalContentProps = {
  title: string;
  description: string;
  toggleData: Array<{ title: string; content: string }>;
  images: string[];
  isMobile: boolean;
};

const ModalContent: React.FC<ModalContentProps> = ({ title, description, toggleData, images, isMobile }) => {
  return (
    <div className="p-6 space-y-6">
      {' '}
      {/* 컨테이너에 간격 적용 */}
      {/* 타이틀 섹션 */}
      <div className="border-b pb-4">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
      {/* 토글 섹션 */}
      <div className="border-b pb-4">
        <ToggleList data={toggleData} />
      </div>
      {/* 이미지 갤러리 섹션 */}
      <div className="pt-4">
        <ModalImageGallery images={images} isMobile={isMobile} />
      </div>
    </div>
  );
};

export default ModalContent;
