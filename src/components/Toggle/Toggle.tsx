import React, { useState } from 'react';

type ToggleProps = {
  title: string;
  children: React.ReactNode;
};

const Toggle: React.FC<ToggleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold cursor-pointer" onClick={toggleContent}>
        {title}
      </h2>
      {isOpen && <div className="mt-2 p-4 bg-gray-100 rounded">{children}</div>}
    </div>
  );
};

export default Toggle;
