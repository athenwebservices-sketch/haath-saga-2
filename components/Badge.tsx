
import React from 'react';

interface BadgeProps {
  label: string;
  icon?: React.ReactNode;
}

export const TrustBadge: React.FC<BadgeProps> = ({ label, icon }) => (
  <div className="flex flex-col items-center text-center space-y-3 p-6 group">
    <div className="w-12 h-12 rounded-full border border-[#1F305E]/20 flex items-center justify-center text-[#1F305E] group-hover:bg-[#1F305E] group-hover:text-[#F5F5DC] transition-all duration-700">
      {icon || (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1F305E]">
      {label}
    </span>
  </div>
);
