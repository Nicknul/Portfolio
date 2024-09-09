// Button.tsx
import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'left' | 'right';
};

const Button: React.FC<ButtonProps> = ({ onClick, children, className, type = 'button', variant = 'left' }) => {
  const baseStyles = 'py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500';
  const variantStyles = variant === 'left' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white';

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
