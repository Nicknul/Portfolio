import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-zinc-800 transition duration-300 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
