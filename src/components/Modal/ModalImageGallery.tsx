import React, { useState } from 'react';
import ModalImageSlider from './ModalImageSlider';
import ImageModal from './ImageModal'; // 확대 모달 컴포넌트 임포트

type ModalImageGalleryProps = {
  images: string[];
  isMobile: boolean;
};

const ModalImageGallery: React.FC<ModalImageGalleryProps> = ({ images, isMobile }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpenImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      {isMobile ? (
        <ModalImageSlider images={images} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group w-full h-auto">
              <img src={image} alt={`설계 이미지 ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-opacity duration-300 rounded-lg"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => handleOpenImageModal(image)}
                  className="border border-white text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-white hover:text-black"
                >
                  자세히 보기
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {isImageModalOpen && selectedImage && <ImageModal imageUrl={selectedImage} onClose={handleCloseImageModal} />}
    </>
  );
};

export default ModalImageGallery;
