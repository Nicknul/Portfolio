import React, { useState } from 'react';

interface IconProps {
  iconName: string;
  iconTextNode: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
}

const Icon: React.FC<IconProps> = ({ iconName, iconTextNode, imgSrc, imgAlt, imgWidth, imgHeight }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(iconTextNode)
      .then(() => {
        alert(`${iconTextNode}이 복사되었습니다.`);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div className="p-2">
      <img
        src={imgSrc}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
        id="icons"
        onClick={handleCopy}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        className="cursor-pointer"
      />
      {isHovered && <div className="bg-gray-200 p-2 rounded">{iconTextNode}</div>}
    </div>
  );
};

export default Icon;
