import React from 'react';

interface StatusBarProps {
  className?: string;
}

export const StatusBar: React.FC<StatusBarProps> = ({ className = "" }) => {
  return (
    <div className={`absolute top-[17px] right-[14px] flex items-center gap-[6px] ${className}`}>
      {/* Signal bars */}
      <div className="flex items-end gap-[2px]">
        <div className="w-[3px] h-[4px] bg-current rounded-[0.5px]"></div>
        <div className="w-[3px] h-[6px] bg-current rounded-[0.5px]"></div>
        <div className="w-[3px] h-[8px] bg-current rounded-[0.5px]"></div>
        <div className="w-[3px] h-[10px] bg-current rounded-[0.5px]"></div>
      </div>
      
      {/* WiFi icon */}
      <svg width="15" height="11" viewBox="0 0 15 11" fill="none" className="ml-1">
        <path d="M7.5 0C11.64 0 15.225 1.575 15.225 1.575L14.4 2.625C14.4 2.625 11.34 1.275 7.5 1.275C3.66 1.275 0.6 2.625 0.6 2.625L-0.225 1.575C-0.225 1.575 3.36 0 7.5 0Z" fill="currentColor"/>
        <path d="M7.5 2.75C10.395 2.75 12.75 3.85 12.75 3.85L12.075 4.775C12.075 4.775 10.17 3.85 7.5 3.85C4.83 3.85 2.925 4.775 2.925 4.775L2.25 3.85C2.25 3.85 4.605 2.75 7.5 2.75Z" fill="currentColor"/>
        <path d="M7.5 5.5C9.15 5.5 10.275 6.05 10.275 6.05L9.75 6.875C9.75 6.875 8.85 6.425 7.5 6.425C6.15 6.425 5.25 6.875 5.25 6.875L4.725 6.05C4.725 6.05 5.85 5.5 7.5 5.5Z" fill="currentColor"/>
        <circle cx="7.5" cy="9.25" r="1.25" fill="currentColor"/>
      </svg>
      
      {/* Battery */}
      <div className="flex items-center ml-1">
        <div className="w-[22px] h-[11px] border border-current rounded-[2px] relative">
          <div className="absolute inset-[1px] bg-current rounded-[1px]"></div>
        </div>
        <div className="w-[1px] h-[4px] bg-current rounded-r-[1px] ml-[1px]"></div>
      </div>
    </div>
  );
};
