import React from 'react';
import Button from './Button';

interface CardListButtonsProps {
  onLeftClick: () => void;
  onRightClick: () => void;
}

const CardListButtons: React.FC<CardListButtonsProps> = ({ onLeftClick, onRightClick }) => {
  return (
    <div className="flex justify-between w-full px-4 hidden lg:flex">
      <Button variant="left" onClick={onLeftClick}>
        왼쪽 버튼
      </Button>
      <Button variant="right" onClick={onRightClick}>
        오른쪽 버튼
      </Button>
    </div>
  );
};

export default CardListButtons;
