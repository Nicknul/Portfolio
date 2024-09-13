import React, { useEffect } from 'react';
import ModalStyles from '../../styles/ModalStyles';

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
    <div className={ModalStyles.modalOverlay}>
      <div className={ModalStyles.modalContainer}>
        <button onClick={onClose} className={ModalStyles.closeButton}>
          닫기
        </button>
        <div className={ModalStyles.modalContent}>
          <div className={ModalStyles.imageContainer}>
            <img src={imageUrl} alt="Modal 이미지" className={ModalStyles.modalImage} />
          </div>
          <div className={ModalStyles.modalBody}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
