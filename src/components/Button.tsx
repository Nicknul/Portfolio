import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  href?: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, href, className }) => {
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-zinc-800 transition duration-300 text-center ${className}`}
    >
      {label}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-zinc-800 transition duration-300 text-center ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
