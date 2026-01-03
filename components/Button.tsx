
import React from 'react';
import { COLORS } from '../constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center transition-all duration-700 ease-out overflow-hidden uppercase tracking-widest text-[10px] sm:text-xs font-medium";
  
  const variants = {
    primary: `bg-[#1F305E] text-[#F5F5DC] hover:bg-[#CC5500]`,
    secondary: `bg-[#CC5500] text-[#F5F5DC] hover:bg-[#1F305E]`,
    outline: `border border-[#1F305E] text-[#1F305E] hover:border-[#CC5500] hover:text-[#CC5500]`
  };

  const sizes = {
    sm: "px-4 py-2",
    md: "px-8 py-4",
    lg: "px-12 py-5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
    </button>
  );
};
