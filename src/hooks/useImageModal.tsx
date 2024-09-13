import { useState } from 'react';

type UseImageModal = {
  isImageModalOpen: boolean;
  selectedIndex: number | null;
  handleOpenImageModal: (index: number) => void;
  handleCloseImageModal: () => void;
  handlePrevImage: (images: string[]) => void;
  handleNextImage: (images: string[]) => void;
  handleSelectImage: (index: number) => void;
};

const useImageModal = (): UseImageModal => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpenImageModal = (index: number) => {
    setSelectedIndex(index);
    setIsImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedIndex(null);
  };

  const handlePrevImage = (images: string[]) => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) => {
        if (prevIndex === null) return 0;
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      });
    }
  };

  const handleNextImage = (images: string[]) => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) => {
        if (prevIndex === null) return 0;
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      });
    }
  };

  const handleSelectImage = (index: number) => {
    setSelectedIndex(index);
  };

  return {
    isImageModalOpen,
    selectedIndex,
    handleOpenImageModal,
    handleCloseImageModal,
    handlePrevImage,
    handleNextImage,
    handleSelectImage,
  };
};

export default useImageModal;
