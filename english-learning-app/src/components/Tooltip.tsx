import React, { type ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  burmeseText: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, burmeseText, className = '' }) => {
  return (
    <div className={`tooltip-container inline-block ${className}`}>
      {children}
      <span className="tooltip-text">{burmeseText}</span>
    </div>
  );
};

export default Tooltip;
