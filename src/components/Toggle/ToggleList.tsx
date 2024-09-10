import React from 'react';
import Toggle from './Toggle';
import { toggleData } from '../../data/ToggleData';

const ToggleList: React.FC = () => {
  return (
    <div className="p-8">
      {toggleData.map((item, index) => (
        <Toggle key={index} title={item.title}>
          <p>{item.content}</p>
        </Toggle>
      ))}
    </div>
  );
};

export default ToggleList;
