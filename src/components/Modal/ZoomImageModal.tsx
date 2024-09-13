import React from 'react';

type ZoomImageModalProps = {
  image: string;
  onClose: () => void;
};

const ZoomImageModal: React.FC<ZoomImageModalProps> = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <img src={image} alt="확대된 이미지" className="max-w-[90vw] max-h-[90vh] object-contain" />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full z-50"
      >
        닫기
      </button>
    </div>
  );
};

export default ZoomImageModal;
