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
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-4">{description}</p>
      <ToggleList data={toggleData} />
      <ModalImageGallery images={images} isMobile={isMobile} />
    </div>
  );
};

export default ModalContent;
