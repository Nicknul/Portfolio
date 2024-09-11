import React from 'react';
import ToggleList from '../Toggle/ToggleList';
import ModalImageGallery from './ModalImageGallery';

type ModalContentProps = {
  title: string;
  description: string;
  toggleData: Array<{ title: string; content: string }>;
  images: string[];
};

const ModalContent: React.FC<ModalContentProps> = ({ title, description, toggleData, images }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-4">{description}</p>
      <ToggleList data={toggleData} />
      <ModalImageGallery images={images} />
    </div>
  );
};

export default ModalContent;
