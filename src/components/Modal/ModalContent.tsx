import React from 'react';
// import ToggleList from '../Toggle/ToggleList';
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
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="border-b pb-4">{/* <ToggleList data={toggleData} /> */}</div>
      <div className="pt-4">
        <h3 className="text-gray-700 mb-2">갤러리</h3>
        <ModalImageGallery images={images} isMobile={isMobile} />
      </div>
    </div>
  );
};

export default ModalContent;
