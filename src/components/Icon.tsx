import React from 'react';
import HoverText from './HoverText';
import ToastMessage from './ToastMessage';
import useClipboard from '../hooks/useClipboard';
import useHover from '../hooks/useHover';
import iconStyles from '../styles/iconStyles';

interface IconProps {
  iconName: string;
  iconTextNode: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
}

const Icon: React.FC<IconProps> = ({ iconName, iconTextNode, imgSrc, imgAlt, imgWidth, imgHeight }) => {
  const { isHovered, handleMouseOver, handleMouseOut } = useHover();
  const { isCopied, copyToClipboard } = useClipboard(iconTextNode);

  return (
    <div className={iconStyles.container}>
      <div className={iconStyles.iconWrapper}>
        {isHovered && <HoverText text={iconTextNode} />}
        <img
          src={imgSrc}
          alt={imgAlt}
          width={imgWidth}
          height={imgHeight}
          onClick={copyToClipboard}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className={iconStyles.icon}
        />
      </div>
      <ToastMessage message={`${iconTextNode}이 복사되었습니다.`} isVisible={isCopied} />
    </div>
  );
};

export default Icon;
