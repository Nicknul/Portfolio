import { useState } from 'react';
import { projectImages } from '../data/ProjectImages';

export const useGallery = (id: string | undefined) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isButtonVisible, setIsButtonVisible] = useState<number | null>(null);
  const galleryImages = id ? projectImages[id as keyof typeof projectImages] || [] : [];

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

  return {
    galleryImages,
    selectedImage,
    isModalOpen,
    isButtonVisible,
    handleImageClick,
    openModal,
    closeModal,
  };
};
