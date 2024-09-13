import React from 'react';

type NavigationButtonsProps = {
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
};

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onPrev, onNext, onClose }) => {
  return (
    <>
      <button
        onClick={onPrev}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full z-50"
      >
        &lt;
      </button>
      <button
        onClick={onNext}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full z-50"
      >
        &gt;
      </button>
      <button
        onClick={onClose}
        className="fixed top-4 right-4 text-white text-xl bg-black bg-opacity-50 rounded-full px-3 py-1 z-50"
      >
        닫기
      </button>
    </>
  );
};

export default NavigationButtons;
