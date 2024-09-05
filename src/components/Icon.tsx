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
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(iconTextNode)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div className="p-2 relative">
      <div className="fixed bottom-5 right-5 flex items-center space-x-4">
        {isHovered && <div className="bg-gray-200 px-4 py-2 rounded text-sm">{iconTextNode}</div>}
        <img
          src={imgSrc}
          alt={imgAlt}
          width={imgWidth}
          height={imgHeight}
          onClick={handleCopy}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          className="cursor-pointer bg-white rounded-full transition-all duration-300 hover:bg-gray-200"
        />
      </div>
      <div
        className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 text-sm px-4 py-2 bg-black/70 text-white rounded-lg shadow-lg transition-opacity duration-500 ${
          isCopied ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {iconTextNode}이 복사되었습니다.
      </div>
    </div>
  );
};

export default Icon;
