import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
}) => {
  const baseClasses = 'bg-dark-surface border border-dark-border rounded-xl p-6 transition-all duration-300';
  const hoverClasses = hover ? 'hover:border-primary-green hover:glow-green hover:scale-105' : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};




