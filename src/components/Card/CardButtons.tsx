import React from 'react';
import Button from '../Button';
import CardStyles from '../../styles/CardStyles';

type CardButtonsProps = {
  githubLink: string;
  isSelected: boolean;
  isMobile: boolean;
};

const CardButtons: React.FC<CardButtonsProps> = ({ githubLink, isSelected, isMobile }) => (
  <div className={CardStyles.buttons(isSelected, isMobile)}>
    <Button label="자세히 보기" className={CardStyles.buttonBase} />
    <Button label="GitHub 보기" href={githubLink} className={CardStyles.buttonBase} />
  </div>
);

export default CardButtons;
