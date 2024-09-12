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
      </div>
      <button
        onClick={onClose}
        className="fixed top-4 right-4 text-white text-xl bg-black bg-opacity-50 rounded-full px-3 py-1"
      >
        닫기
      </button>
    </div>
  );
};

export default ImageModal;
