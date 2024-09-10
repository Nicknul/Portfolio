import React from 'react';
import CardStyles from '../../styles/CardStyles';

type CardContentProps = {
  title: string;
  category: string;
  isSelected: boolean;
  isMobile: boolean;
};

const CardContent: React.FC<CardContentProps> = ({ title, category, isSelected, isMobile }) => (
  <div className="p-4">
    <span className={CardStyles.content(isSelected, isMobile).category}>{category}</span>
    <h3 className={CardStyles.content(isSelected, isMobile).title}>{title}</h3>
  </div>
);

export default CardContent;
