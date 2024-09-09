import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-zinc-800 transition duration-300"
    >
      {label}
    </button>
  );
};

export default Button;
