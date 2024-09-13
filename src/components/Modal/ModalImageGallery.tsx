import React from 'react';
import ModalImageSlider from './ModalImageSlider';
import ImageModal from './ImageModal';
import GalleryGrid from './GalleryGrid';
import useImageModal from '../../hooks/useImageModal';

type ModalImageGalleryProps = {
  images: string[];
  isMobile: boolean;
};

const ModalImageGallery: React.FC<ModalImageGalleryProps> = ({ images, isMobile }) => {
  const {
    isImageModalOpen,
    selectedIndex,
    handleOpenImageModal,
    handleCloseImageModal,
    handlePrevImage,
    handleNextImage,
    handleSelectImage,
  } = useImageModal();

  return (
    <>
      {isMobile ? (
        <ModalImageSlider images={images} />
      ) : (
        <GalleryGrid images={images} handleOpenImageModal={handleOpenImageModal} />
      )}

      {isImageModalOpen && selectedIndex !== null && (
        <ImageModal
          images={images}
          selectedIndex={selectedIndex}
          onClose={handleCloseImageModal}
          onPrev={() => handlePrevImage(images)}
          onNext={() => handleNextImage(images)}
          onSelectImage={handleSelectImage}
        />
      )}
    </>
  );
};

export default ModalImageGallery;
