import React from 'react';
import GalleryItem from '../../components/Gallery/GalleryItem';

interface GalleryProps {
  galleryImages: string[];
  selectedImage: number | null;
  isButtonVisible: number | null;
  handleImageClick: (index: number) => void;
  openModal: (index: number) => void;
}

const Gallery: React.FC<GalleryProps> = ({
  galleryImages,
  selectedImage,
  isButtonVisible,
  handleImageClick,
  openModal,
}) => {
  return (
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
  );
};

export default Gallery;
