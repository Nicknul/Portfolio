// src/components/IconList.tsx
import React from 'react';
import Icon from './Icon';

const iconsData = [
  {
    iconName: 'E-mail',
    iconTextNode: 'jea7730@gmail.com',
    imgSrc: '../../imgs/email.png',
    imgAlt: 'E-mail',
    imgWidth: 48,
    imgHeight: 48,
  },
];

const IconList: React.FC = () => {
  return (
    <div className="flex flex-col items-end">
      {iconsData.map((icon, index) => (
        <Icon
          key={index}
          iconName={icon.iconName}
          iconTextNode={icon.iconTextNode}
          imgSrc={icon.imgSrc}
          imgAlt={icon.imgAlt}
          imgWidth={icon.imgWidth}
          imgHeight={icon.imgHeight}
        />
      ))}
    </div>
  );
};

export default IconList;
