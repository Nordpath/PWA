import React from "react";

export const MainScreen = (): JSX.Element => {
  return (
    <main
      className="relative w-[390px] h-[844px] overflow-hidden bg-white"
      role="main"
      aria-label="Michel Salgado Login Screen"
    >
      {/* Status Bar */}
      <header className="absolute w-full top-0 left-0 h-11 bg-transparent">
        <div className="absolute top-3.5 left-[calc(50.00%_-_168px)] w-[54px] h-[21px] flex justify-center">
          <time className="w-[54px] h-[21px] flex rounded-3xl">
            <span className="mt-px w-[54px] h-5 font-semibold text-black text-[17px] text-center leading-[22px] whitespace-nowrap">
              9:41
            </span>
          </time>
        </div>

        <div className="absolute top-[17px] right-[14px] flex items-center gap-[6px]">
          {/* Signal bars */}
          <div className="flex items-end gap-[2px]">
            <div className="w-[3px] h-[4px] bg-black rounded-[0.5px]"></div>
            <div className="w-[3px] h-[6px] bg-black rounded-[0.5px]"></div>
            <div className="w-[3px] h-[8px] bg-black rounded-[0.5px]"></div>
            <div className="w-[3px] h-[10px] bg-black rounded-[0.5px]"></div>
          </div>
          
          {/* WiFi icon */}
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none" className="ml-1">
            <path d="M7.5 0C11.64 0 15.225 1.575 15.225 1.575L14.4 2.625C14.4 2.625 11.34 1.275 7.5 1.275C3.66 1.275 0.6 2.625 0.6 2.625L-0.225 1.575C-0.225 1.575 3.36 0 7.5 0Z" fill="black"/>
            <path d="M7.5 2.75C10.395 2.75 12.75 3.85 12.75 3.85L12.075 4.775C12.075 4.775 10.17 3.85 7.5 3.85C4.83 3.85 2.925 4.775 2.925 4.775L2.25 3.85C2.25 3.85 4.605 2.75 7.5 2.75Z" fill="black"/>
            <path d="M7.5 5.5C9.15 5.5 10.275 6.05 10.275 6.05L9.75 6.875C9.75 6.875 8.85 6.425 7.5 6.425C6.15 6.425 5.25 6.875 5.25 6.875L4.725 6.05C4.725 6.05 5.85 5.5 7.5 5.5Z" fill="black"/>
            <circle cx="7.5" cy="9.25" r="1.25" fill="black"/>
          </svg>
          
          {/* Battery */}
          <div className="flex items-center ml-1">
            <div className="w-[22px] h-[11px] border border-black rounded-[2px] relative">
              <div className="absolute inset-[1px] bg-black rounded-[1px]"></div>
            </div>
            <div className="w-[1px] h-[4px] bg-black rounded-r-[1px] ml-[1px]"></div>
          </div>
        </div>
      </header>

      {/* Home indicator */}
      <div className="absolute w-full left-0 bottom-0 h-[34px] flex items-end justify-center">
        <div
          className="mb-2 w-[134px] h-[5px] bg-black rounded-[100px]"
          role="presentation"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full px-8">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center mb-16">
          {/* Geometric Logo */}
          <div className="mb-8">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="text-black">
              <g transform="translate(60,60)">
                {/* Hexagonal geometric pattern */}
                <polygon 
                  points="-30,0 -15,-26 15,-26 30,0 15,26 -15,26" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
                <polygon 
                  points="-15,-26 0,-52 30,-26 15,0 0,26 -30,0" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
                <polygon 
                  points="15,-26 30,-52 60,-26 45,0 30,26 0,0" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
                <polygon 
                  points="30,0 45,-26 75,0 60,26 30,52 0,26" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
                <polygon 
                  points="15,26 30,0 60,26 45,52 15,78 -15,52" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
                <polygon 
                  points="-15,26 0,0 30,26 15,52 -15,78 -45,52" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
                <polygon 
                  points="-30,0 -15,26 -45,52 -60,26 -75,0 -45,-26" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
                <polygon 
                  points="-15,-26 -30,-52 0,-78 15,-52 30,-26 0,0" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
                
                {/* Center star pattern */}
                <g>
                  <line x1="0" y1="-26" x2="0" y2="26" stroke="currentColor" strokeWidth="2"/>
                  <line x1="-22.5" y1="-13" x2="22.5" y2="13" stroke="currentColor" strokeWidth="2"/>
                  <line x1="-22.5" y1="13" x2="22.5" y2="-13" stroke="currentColor" strokeWidth="2"/>
                </g>
              </g>
            </svg>
          </div>

          {/* Brand Name */}
          <h1 className="text-black text-[32px] font-normal tracking-[-0.5px] leading-[38px] mb-2 text-center">
            MÍCHEL SALGADO
          </h1>
          
          {/* Tagline */}
          <p className="text-black text-[16px] font-normal tracking-[0.5px] leading-[20px] text-center">
            PREMIUM FAN ENTERTAINMENT
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full max-w-[330px]">
          {/* Login Button */}
          <button className="w-full h-[56px] bg-[#2c2c2c] rounded-[12px] flex items-center justify-center">
            <span className="text-white text-[18px] font-medium">Login</span>
          </button>

          {/* Continue as Guest Button */}
          <button className="w-full h-[56px] bg-transparent border border-[#e0e0e0] rounded-[12px] flex items-center justify-center">
            <span className="text-[#666666] text-[18px] font-medium">Continue as a guest</span>
          </button>
        </div>

        {/* Footer */}
        <div className="absolute bottom-[120px] left-0 right-0 flex flex-col items-center">
          <p className="text-[#666666] text-[14px] font-normal mb-4">
            In collaboration with
          </p>
          
          <div className="flex items-center gap-4">
            <div className="bg-black px-6 py-3 rounded-[4px]">
              <span className="text-white text-[16px] font-bold tracking-[1px]">
                FAN EXPERIENCE 3.0
              </span>
            </div>
            
            <div className="bg-black px-6 py-3 rounded-[4px]">
              <span className="text-white text-[20px] font-black tracking-[0.5px]">
                LIVE!
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
