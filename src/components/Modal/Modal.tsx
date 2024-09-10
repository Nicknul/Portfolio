import React, { useEffect } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  imageUrl: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, imageUrl }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white w-4/5 h-4/5 rounded-lg shadow-lg relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg"
        >
          닫기
        </button>
        <div className="overflow-y-auto h-full">
          <div className="w-full h-2/3 bg-gray-200">
            <img src={imageUrl} alt="Modal 이미지" className="object-cover object-top w-full h-full" />
          </div>
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
