import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-green to-primary-purple text-white hover:from-primary-green-dark hover:to-primary-purple-dark glow-both hover:scale-105 focus:ring-primary-green',
    secondary: 'bg-dark-surface border-2 border-primary-purple text-primary-purple-light hover:bg-dark-surface-light hover:border-primary-purple-light hover:text-white transition-all',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};




