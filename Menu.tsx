import React from "react";
import { useNavigate } from "react-router-dom";
import { RealTimeClock } from "../../../components/RealTimeClock";
import { StatusBar } from "../../../components/StatusBar";

export const Menu = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: "https://c.animaapp.com/mg1ajrfh1kfsq5/img/icons---home---news.svg",
      label: "News",
      alt: "Icons home news",
      onClick: () => navigate('/news'),
    },
    {
      icon: "https://c.animaapp.com/mg1ajrfh1kfsq5/img/icons---home---about-us.svg",
      label: "About me",
      alt: "Icons home about us",
      onClick: () => navigate('/about-me'),
    },
    {
      icon: "https://c.animaapp.com/mg1ajrfh1kfsq5/img/icons---home---inbox.svg",
      label: "Inbox",
      alt: "Icons home inbox",
      onClick: () => handleRestrictedFeature('/inbox'),
    },
  ];

  // Check if user is a guest (you can implement proper user state management)
  const isGuest = window.location.pathname.includes('continue-as-guest') || 
                  localStorage.getItem('userType') === 'guest' ||
                  sessionStorage.getItem('userType') === 'guest';

  const handleRestrictedFeature = (route: string) => {
    if (isGuest) {
      navigate('/guest-mode');
    } else {
      navigate(route);
    }
  };

  const secondRowItems = [
    {
      icon: "https://c.animaapp.com/mg1ajrfh1kfsq5/img/icons---home---shop.svg",
      label: "Shop",
      alt: "Icons home shop",
      onClick: () => handleRestrictedFeature('/shop'),
    },
    {
      icon: "https://c.animaapp.com/mg1ajrfh1kfsq5/img/icons---home---stream.svg",
      label: "Streams",
      alt: "Icons home stream",
      onClick: () => navigate('/streams'),
    },
    {
      icon: "https://c.animaapp.com/mg1ajrfh1kfsq5/img/icons---home---competition.svg",
      label: "Competition",
      alt: "Icons home",
      onClick: () => handleRestrictedFeature('/competitions'),
    },
  ];

  const thirdRowItems = [
    {
      icon: "https://c.animaapp.com/mg1ajrfh1kfsq5/img/icons---home---settings.svg",
      label: "Settings",
      alt: "Icons home settings",
      onClick: () => handleRestrictedFeature('/settings'),
    },
    {
      icon: "https://c.animaapp.com/mg1ajrfh1kfsq5/img/icons---home---vip.svg",
      label: "VIP",
      alt: "Icons home VIP",
      onClick: () => handleRestrictedFeature('/vip'),
    },
    {
      icon: "https://c.animaapp.com/mg1ajrfh1kfsq5/img/icons---home---fanfeed.svg",
      label: "Fanfeed",
      alt: "Icons home fanfeed",
      onClick: () => navigate('/fanfeed'),
    },
  ];

  const renderMenuItem = (item, index, isFirstRow = false) => {
    const baseClasses =
      "flex flex-col h-[100px] items-center justify-center gap-2 pt-2 pb-3 px-4 relative rounded-[8px] hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/30";
    const firstRowClasses = isFirstRow ? "flex-1" : "w-[114px]";

    return (
      <button
        key={index}
        className={`${baseClasses} ${firstRowClasses}`}
        role="menuitem"
        tabIndex={0}
        aria-label={item.label}
        onClick={item.onClick || (() => console.log(`${item.label} clicked`))}
      >
        <div className="flex w-[42px] h-[42px] items-center justify-center gap-2.5 p-[9px] relative rounded-[21px]">
          <img
            className="relative w-10 h-10"
            alt={item.alt}
            src={item.icon}
          />
        </div>
        <span className="relative w-fit font-body-m-bold font-[number:var(--body-m-bold-font-weight)] text-white text-[length:var(--body-m-bold-font-size)] tracking-[var(--body-m-bold-letter-spacing)] leading-[var(--body-m-bold-line-height)] whitespace-nowrap [font-style:var(--body-m-bold-font-style)] text-center">
          {item.label}
        </span>
      </button>
    );
  };

  return (
    <main className="relative w-[390px] h-[844px] overflow-hidden bg-[url(https://c.animaapp.com/FLHQLvNn/img/home-screen-%281%29.png)] bg-cover bg-[30%_center] cursor-pointer">
      {/* Cover the static time in background image */}
      <div className="absolute top-[14px] left-[27px] w-[54px] h-[21px] bg-black/20 backdrop-blur-sm rounded-full z-10"></div>
      
      <header className="absolute w-full top-0 left-0 h-11 backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] z-20">
        <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
          <RealTimeClock 
            className="w-[54px] h-5 font-default-bold-body font-[number:var(--default-bold-body-font-weight)] text-[length:var(--default-bold-body-font-size)] text-center tracking-[var(--default-bold-body-letter-spacing)] leading-[var(--default-bold-body-line-height)] whitespace-nowrap [font-style:var(--default-bold-body-font-style)] z-30"
            textColor="text-white"
          />
        </div>
        
        <StatusBar className="text-white z-30" />
      </header>

      {/* Menu Grid - Positioned to center around Salgado */}
      <nav
        className="flex flex-col items-center gap-4 absolute top-[150px] left-[calc(50.00%_-_179px)] z-15 w-[358px]"
        role="navigation"
        aria-label="Main menu"
      >
        {/* First Row */}
        <div className="flex items-center justify-between gap-2 w-full">
          {menuItems.map((item, index) => renderMenuItem(item, index, true))}
        </div>

        {/* Second Row */}
        <div className="flex items-center justify-between gap-2 w-full">
          {secondRowItems.map((item, index) => renderMenuItem(item, index))}
        </div>

        {/* Third Row */}
        <div className="flex items-center justify-between gap-2 w-full">
          {thirdRowItems.map((item, index) => renderMenuItem(item, index))}
        </div>
      </nav>

      {/* Footer */}
      <footer className="flex flex-col w-[390px] items-center gap-3 absolute left-0 bottom-0 z-15">
        <h2 className="relative w-fit mt-[-1.00px] font-heading-l font-[number:var(--heading-l-font-weight)] text-white text-[length:var(--heading-l-font-size)] tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] whitespace-nowrap [font-style:var(--heading-l-font-style)]">
          In collaboration with
        </h2>

        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] bg-black backdrop-blur-[18.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.35px)_brightness(100%)]">
          <div className="flex flex-col h-[72px] items-start justify-center gap-2.5 pl-0 pr-2.5 py-2.5 relative self-stretch w-full bg-black">
            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <button
                onClick={() => window.open('https://liveapps.ch', '_blank', 'noopener,noreferrer')}
                className="flex w-[274px] h-[38px] items-center justify-center gap-2.5 p-2.5 relative bg-white hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Visit LiveApps.ch"
              >
                <span className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'D-DIN_Exp-Bold',Helvetica] font-bold text-black text-xl tracking-[0.40px] leading-[26px] whitespace-nowrap">
                  FAN EXPERIENCE 3.0
                </span>
              </button>

              <button
                onClick={() => window.open('https://liveapps.ch', '_blank', 'noopener,noreferrer')}
                className="relative w-[94px] h-[38px] hover:opacity-80 transition-opacity cursor-pointer"
                aria-label="Visit LiveApps.ch"
              >
                <img
                  className="w-full h-full"
                  alt="Live! logo"
                  src="https://c.animaapp.com/FLHQLvNn/img/asset-1-1.svg"
                />
              </button>
            </div>
          </div>

          <div className="absolute w-full left-0 bottom-0 h-9">
            <div className="absolute left-[calc(50.00%_-_67px)] bottom-2 w-[134px] h-[5px] bg-white rounded-[100px]" />
          </div>
        </div>
      </footer>
    </main>
  );
};
