import React from 'react';
import iconStyles from '../styles/iconStyles';

interface HoverTextProps {
  text: string;
}

const HoverText: React.FC<HoverTextProps> = ({ text }) => {
  return <div className={iconStyles.hoverText}>{text}</div>;
};

export default HoverText;
