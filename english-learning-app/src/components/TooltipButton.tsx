import React, { type ReactNode } from 'react';
import { getBurmeseTranslation } from '@/data/translations';

interface TooltipButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
}

const TooltipButton: React.FC<TooltipButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  icon,
}) => {
  const burmeseTranslation = getBurmeseTranslation(text);
  
  const baseStyles = 'tooltip-container relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-[#1E3A8A] hover:bg-[#1e40af] text-white focus:ring-[#1E3A8A]',
    secondary: 'bg-[#FFD700] hover:bg-[#fbbf24] text-[#1E3A8A] focus:ring-[#FFD700]',
    outline: 'border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white focus:ring-[#1E3A8A]',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <div className={`tooltip-container ${className}`}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles}`}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </button>
      <span className="tooltip-text">{burmeseTranslation}</span>
    </div>
  );
};

export default TooltipButton;
