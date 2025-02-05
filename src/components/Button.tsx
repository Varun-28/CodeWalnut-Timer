import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  title?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  children,
  title,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${className} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
