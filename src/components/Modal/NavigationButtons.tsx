import React from 'react';
import ModalStyles from '../../styles/ModalStyles';

type NavigationButtonsProps = {
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
};

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onPrev, onNext, onClose }) => {
  return (
    <>
      <button onClick={onPrev} className={`${ModalStyles.navigationButton} ${ModalStyles.leftButton}`}>
        &lt;
      </button>
      <button onClick={onNext} className={`${ModalStyles.navigationButton} ${ModalStyles.rightButton}`}>
        &gt;
      </button>
      <button onClick={onClose} className={ModalStyles.closeButton}>
        닫기
      </button>
    </>
  );
};

export default NavigationButtons;
