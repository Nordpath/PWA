import React from "react";
import { useNavigate } from "react-router-dom";
import { RealTimeClock } from "../../../../components/RealTimeClock";
import { StatusBar } from "../../../../components/StatusBar";

export const HeaderSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/menu');
  };

  return (
    <header className="flex flex-col w-[390px] items-center gap-3 pt-0 pb-3 px-0 fixed top-0 left-[calc(50.00%_-_195px)] bg-white z-50">
      <div className="relative self-stretch w-full h-11">
        <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
          <RealTimeClock 
            className="w-[54px] h-5 font-default-bold-body font-[number:var(--default-bold-body-font-weight)] text-[length:var(--default-bold-body-font-size)] text-center tracking-[var(--default-bold-body-letter-spacing)] leading-[var(--default-bold-body-line-height)] whitespace-nowrap [font-style:var(--default-bold-body-font-style)]"
            textColor="text-[#181c1f]"
          />
        </div>
        
        <StatusBar className="text-[#181c1f]" />
      </div>

      <nav
        className="flex w-[358px] items-center justify-between relative flex-[0_0_auto]"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <button
            onClick={handleBackClick}
            className="relative w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Go back to menu"
          >
            <img
              className="relative w-6 h-6"
              alt="Back"
              src="https://c.animaapp.com/mg0ppmgsEAHMhd/img/frame-1171277295-1.svg"
            />
          </button>

          <h1 className="relative w-fit mt-[-1.00px] font-heading-XL font-[number:var(--heading-XL-font-weight)] text-[#181c1f] text-[length:var(--heading-XL-font-size)] tracking-[var(--heading-XL-letter-spacing)] leading-[var(--heading-XL-line-height)] whitespace-nowrap [font-style:var(--heading-XL-font-style)]">
            NEWS
          </h1>
        </div>

        <button
          className="flex flex-col w-[25px] items-end gap-1.5 relative p-1 -m-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded cursor-pointer hover:opacity-70 transition-opacity"
          aria-label="Open menu"
          aria-expanded="false"
          type="button"
          onClick={() => {
            const { HamburgerMenu } = require('../../../../components/HamburgerMenu');
            const menuContainer = document.createElement('div');
            document.body.appendChild(menuContainer);
            
            const closeMenu = () => {
              document.body.removeChild(menuContainer);
            };
            
            const React = require('react');
            const { createRoot } = require('react-dom/client');
            const root = createRoot(menuContainer);
            root.render(React.createElement(HamburgerMenu, { onClose: closeMenu, currentScreen: 'news' }));
          }}
        >
          <span className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
          <span className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
          <span className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
        </button>
      </nav>
    </header>
  );
};
