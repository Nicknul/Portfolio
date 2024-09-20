import React, { useEffect } from 'react';

interface ModalProps {
  src: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ src, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <button onClick={onClose} className="absolute top-4 right-4 text-white">
        ✕
      </button>
      <div className="relative">
        <img src={src} alt="Selected" className="max-w-full max-h-screen rounded" />
      </div>
    </div>
  );
};

export default Modal;
