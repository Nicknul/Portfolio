import React from 'react';
import CardImage from './CardImage';
import CardContent from './CardContent';
import CardButtons from './CardButtons';
import CardStyles from '../../styles/CardStyles';

type CardProps = {
  title: string;
  category: string;
  image: string;
  githubLink: string;
  isSelected: boolean;
  onClick: () => void;
  isMobile: boolean;
  openModal: () => void;
};

const Card: React.FC<CardProps> = ({
  title,
  category,
  image,
  githubLink,
  isSelected,
  onClick,
  isMobile,
  openModal,
}) => (
  <div onClick={onClick} className={CardStyles.container(isSelected, isMobile)}>
    <CardImage image={image} title={title} isSelected={isSelected} isMobile={isMobile} />
    <CardContent title={title} category={category} isSelected={isSelected} isMobile={isMobile} />
    <CardButtons githubLink={githubLink} isSelected={isSelected} isMobile={isMobile} openModal={openModal} />
  </div>
);

export default Card;
