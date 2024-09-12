import React from 'react';

type ImageModalProps = {
  imageUrl: string;
  onClose: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="relative">
        <img src={imageUrl} alt="확대된 이미지" className="max-w-[90vw] max-h-[90vh] object-contain" />
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-xl">
          닫기
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
