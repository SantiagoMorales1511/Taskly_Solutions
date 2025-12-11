import React from 'react';
import * as HeroIcons from '@heroicons/react/24/outline';

interface IconProps {
  name: keyof typeof HeroIcons;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className = 'w-6 h-6' }) => {
  const IconComponent = HeroIcons[name] as React.ComponentType<{ className?: string }>;
  
  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} />;
};




