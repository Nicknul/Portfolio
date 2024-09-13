import React from 'react';

type ImagePreviewProps = {
  images: string[];
  selectedIndex: number;
  onSelectImage: (index: number) => void;
};

const ImagePreview: React.FC<ImagePreviewProps> = ({ images, selectedIndex, onSelectImage }) => {
  return (
    <div className="flex space-x-2 overflow-visible">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`썸네일 이미지 ${index + 1}`}
          onClick={() => onSelectImage(index)}
          className={`w-16 h-16 object-cover cursor-pointer rounded-lg transition-transform duration-300 ${
            index === selectedIndex ? '-translate-y-2' : ''
          }`}
        />
      ))}
    </div>
  );
};

export default ImagePreview;
