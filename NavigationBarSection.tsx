import React, { useState } from "react";

export const NavigationBarSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <header className="flex z-[3] flex-col w-[390px] items-center gap-3 pt-0 pb-3 px-0 fixed top-0 left-[calc(50.00%_-_195px)] bg-white">
      <div className="relative self-stretch w-full h-11">
        <img
          className="absolute top-0 left-[calc(50.00%_-_82px)] w-[164px] h-[30px]"
          alt="iPhone notch"
          src="https://c.animaapp.com/mg2nm57yKwYYTJ/img/notch.png"
        />

        <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
          <div className="w-[54px] h-[21px] flex rounded-3xl">
            <time className="mt-px w-[54px] h-5 font-default-bold-body font-[number:var(--default-bold-body-font-weight)] text-[#181c1f] text-[length:var(--default-bold-body-font-size)] text-center tracking-[var(--default-bold-body-letter-spacing)] leading-[var(--default-bold-body-line-height)] whitespace-nowrap [font-style:var(--default-bold-body-font-style)]">
              9:41
            </time>
          </div>
        </div>

        <img
          className="absolute top-[19px] left-[286px] w-[77px] h-[13px]"
          alt="Battery and signal indicators"
          src="https://c.animaapp.com/mg2nm57yKwYYTJ/img/right-side.png"
        />
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
            aria-label="Go back"
          >
            <img
              className="relative w-6 h-6"
              alt="Back"
              src="https://c.animaapp.com/mg2nm57yKwYYTJ/img/frame-1171277295.svg"
            />
          </button>

          <h1 className="relative w-fit mt-[-1.00px] font-heading-XL font-[number:var(--heading-XL-font-weight)] text-[#181c1f] text-[length:var(--heading-XL-font-size)] tracking-[var(--heading-XL-letter-spacing)] leading-[var(--heading-XL-line-height)] whitespace-nowrap [font-style:var(--heading-XL-font-style)]">
            FANFEED
          </h1>
        </div>

        <button
          className="flex flex-col w-[25px] items-end gap-1.5 relative p-1 -m-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded cursor-pointer hover:opacity-70 transition-opacity"
          onClick={() => {
            import('../../../../components/HamburgerMenu').then(({ HamburgerMenu }) => {
              const menuContainer = document.createElement('div');
              document.body.appendChild(menuContainer);
              
              const closeMenu = () => {
                document.body.removeChild(menuContainer);
              };
              
              const React = require('react');
              const { createRoot } = require('react-dom/client');
              const root = createRoot(menuContainer);
              root.render(React.createElement(HamburgerMenu, { onClose: closeMenu, currentScreen: 'fanfeed' }));
            });
          }}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          type="button"
        >
          <span className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px] transition-transform duration-200" />
          <span className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px] transition-opacity duration-200" />
          <span className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px] transition-transform duration-200" />
        </button>
      </nav>
    </header>
  );
};
