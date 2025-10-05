import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RealTimeClock } from "../../../components/RealTimeClock";
import { StatusBar } from "../../../components/StatusBar";

interface NavigationItem {
  id: string;
  icon: string;
  label: string;
  alt: string;
  onClick?: () => void;
}

export const GuestModeComments = (): JSX.Element => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  const navigationItems: NavigationItem[] = [
    {
      id: "blog",
      icon: "https://c.animaapp.com/mg45i8kzP1k6iA/img/icons---home---news.svg",
      label: "News",
      alt: "Icons home news",
      onClick: () => navigate('/news'),
    },
    {
      id: "event",
      icon: "https://c.animaapp.com/mg45i8kzP1k6iA/img/icons---home---about-us.svg",
      label: "About me",
      alt: "Icons home about us",
      onClick: () => navigate('/about-me'),
    },
    {
      id: "inbox",
      icon: "https://c.animaapp.com/mg45i8kzP1k6iA/img/icons---home---inbox.svg",
      label: "Inbox",
      alt: "Icons home inbox",
      onClick: () => setShowModal(true), // Show login modal for restricted feature
    },
    {
      id: "shop",
      icon: "https://c.animaapp.com/mg45i8kzP1k6iA/img/icons---home---shop.svg",
      label: "Shop",
      alt: "Icons home shop",
      onClick: () => setShowModal(true), // Show login modal for restricted feature
    },
    {
      id: "streams",
      icon: "https://c.animaapp.com/mg45i8kzP1k6iA/img/icons---home---stream.svg",
      label: "Streams",
      alt: "Icons home stream",
      onClick: () => navigate('/streams'),
    },
    {
      id: "contest",
      icon: "https://c.animaapp.com/mg45i8kzP1k6iA/img/icons---home---competition.svg",
      label: "Competition",
      alt: "Icons home",
      onClick: () => setShowModal(true), // Show login modal for restricted feature
    },
    {
      id: "settings",
      icon: "https://c.animaapp.com/mg45i8kzP1k6iA/img/icons---home---settings.svg",
      label: "Settings",
      alt: "Icons home settings",
      onClick: () => setShowModal(true), // Show login modal for restricted feature
    },
    {
      id: "vip",
      icon: "https://c.animaapp.com/mg45i8kzP1k6iA/img/icons---home---vip.svg",
      label: "VIP",
      alt: "Icons home VIP",
      onClick: () => setShowModal(true), // Show login modal for restricted feature
    },
    {
      id: "fanfeed",
      icon: "https://c.animaapp.com/mg45i8kzP1k6iA/img/icons---home---fanfeed.svg",
      label: "Fanfeed",
      alt: "Icons home fanfeed",
      onClick: () => navigate('/fanfeed'),
    },
  ];

  const handleCancel = () => {
    setShowModal(false);
    // Navigate back to menu
    navigate('/menu');
  };

  const handleLogin = () => {
    // Navigate to login screen
    navigate('/login');
  };

  const renderNavigationGrid = () => {
    const rows = [];
    for (let i = 0; i < navigationItems.length; i += 3) {
      const rowItems = navigationItems.slice(i, i + 3);
      rows.push(
        <div
          key={`row-${i}`}
          className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]"
        >
          {rowItems.map((item, index) => (
            <button
              key={item.id}
              className="flex flex-col h-[100px] items-center justify-center gap-2 pt-2 pb-3 px-8 relative flex-1 grow rounded-[5px] hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-label={item.label}
              onClick={item.onClick}
            >
              <div className="flex w-[42px] h-[42px] items-center justify-center gap-2.5 p-[9px] relative rounded-[21px]">
                <img
                  className="relative w-10 h-10 mt-[-8.00px] mb-[-8.00px] ml-[-8.00px] mr-[-8.00px]"
                  alt={item.alt}
                  src={item.icon}
                />
              </div>
              <span className="relative w-fit font-instrument-sans-18px font-[number:var(--instrument-sans-18px-font-weight)] text-white text-[length:var(--instrument-sans-18px-font-size)] tracking-[var(--instrument-sans-18px-letter-spacing)] leading-[var(--instrument-sans-18px-line-height)] whitespace-nowrap [font-style:var(--instrument-sans-18px-font-style)]">
                {item.label}
              </span>
            </button>
          ))}
        </div>,
      );
    }
    return rows;
  };

  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%),linear-gradient(0deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.25)_100%),url(https://c.animaapp.com/mg45i8kzP1k6iA/img/guest-mode-comments--likes--settings.png)_50%_50%_/_cover] w-[390px] h-[844px] relative">
      {/* Status Bar */}
      <header className="absolute w-full top-0 left-0 h-11 backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)]">
        <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
          <RealTimeClock 
            className="w-[54px] h-5 font-default-bold-body font-[number:var(--default-bold-body-font-weight)] text-white text-[length:var(--default-bold-body-font-size)] text-center tracking-[var(--default-bold-body-letter-spacing)] leading-[var(--default-bold-body-line-height)] whitespace-nowrap [font-style:var(--default-bold-body-font-style)]"
            textColor="text-white"
          />
        </div>

        <StatusBar className="text-white" />
      </header>

      {/* Navigation Grid */}
      <nav 
        className="flex flex-col w-[358px] items-center gap-8 absolute top-[calc(50.00%_-_158px)] left-[calc(50.00%_-_179px)]"
        role="navigation"
        aria-label="Main menu"
      >
        <div className="flex flex-col items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
          {renderNavigationGrid()}
        </div>
      </nav>

      {/* Powered By Section */}
      <div className="flex flex-col w-[264px] h-[50px] items-start gap-2.5 px-11 py-1.5 absolute top-[1034px] left-[calc(50.00%_+_948px)]">
        <div className="inline-flex items-center justify-center gap-1 pt-0 pb-1 px-0 relative flex-[0_0_auto] opacity-40">
          <span className="relative w-fit mt-[-1.00px] font-MGP-medium-22px font-[number:var(--MGP-medium-22px-font-weight)] text-white text-[length:var(--MGP-medium-22px-font-size)] tracking-[var(--MGP-medium-22px-letter-spacing)] leading-[var(--MGP-medium-22px-line-height)] whitespace-nowrap [font-style:var(--MGP-medium-22px-font-style)]">
            Powered by
          </span>

          <img
            className="relative w-[63px] h-6 mt-[-1914.00px] ml-[-6103.00px]"
            alt="Frame"
            src="https://c.animaapp.com/mg45i8kzP1k6iA/img/frame-1171277222.svg"
          />
        </div>
      </div>

      {/* Bottom Section with Branding */}
      <footer className="flex flex-col w-[390px] items-center gap-3 absolute left-[calc(50.00%_-_195px)] bottom-0">
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
                <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'D-DIN_Exp-Bold',Helvetica] font-bold text-black text-xl tracking-[0.40px] leading-[26px] whitespace-nowrap">
                  FAN EXPERIENCE 3.0
                </div>
              </button>

              <button
                onClick={() => window.open('https://liveapps.ch', '_blank', 'noopener,noreferrer')}
                className="relative w-[94px] h-[38px] hover:opacity-80 transition-opacity cursor-pointer"
                aria-label="Visit LiveApps.ch"
              >
                <img
                  className="relative w-[94px] h-[38px]"
                  alt="Frame"
                  src="https://c.animaapp.com/mg45i8kzP1k6iA/img/frame-1171277528.svg"
                />
              </button>
            </div>
          </div>

          <div className="absolute w-full left-0 bottom-0 h-9">
            <div className="absolute left-[calc(50.00%_-_67px)] bottom-2 w-[134px] h-[5px] bg-white rounded-[100px]" />
          </div>
        </div>
      </footer>

      {/* Modal Overlay */}
      {showModal && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={handleCancel}
            aria-hidden="true"
          />

          {/* Login Modal */}
          <div
            className="flex flex-col w-[273px] items-center justify-center fixed top-[calc(50.00%_-_70px)] left-[calc(50.00%_-_136px)] bg-[#f7f7f7] rounded-lg backdrop-blur-[11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11px)_brightness(100%)] z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="flex flex-col items-center gap-0.5 p-4 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e3e3e3]">
              <p
                id="modal-title"
                className="relative self-stretch mt-[-1.00px] font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-black text-[length:var(--body-m-regular-font-size)] text-center tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] [font-style:var(--body-m-regular-font-style)]"
              >
                🔒 Guest Access Limited
                <br />
                <br />
                You can perform this action as a registered user. Please, sign up or log in to access all features.
              </p>
            </div>

            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <button
                onClick={handleCancel}
                className="flex items-center justify-center gap-2.5 px-4 py-[11px] relative flex-1 self-stretch grow border-r [border-right-style:solid] border-[#e3e3e3] hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                type="button"
                aria-label="Cancel and return to menu"
              >
                <span className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-instrument-sans-16px font-[number:var(--instrument-sans-16px-font-weight)] text-[#e4002b] text-[length:var(--instrument-sans-16px-font-size)] text-center tracking-[var(--instrument-sans-16px-letter-spacing)] leading-[var(--instrument-sans-16px-line-height)] [font-style:var(--instrument-sans-16px-font-style)]">
                  Cancel
                </span>
              </button>

              <button
                onClick={handleLogin}
                className="flex items-center justify-center gap-2.5 px-4 py-[11px] relative flex-1 self-stretch grow hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="button"
                aria-label="Go to login screen"
              >
                <span className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-instrument-sans-16pc-BOLD font-[number:var(--instrument-sans-16pc-BOLD-font-weight)] text-black text-[length:var(--instrument-sans-16pc-BOLD-font-size)] text-center tracking-[var(--instrument-sans-16pc-BOLD-letter-spacing)] leading-[var(--instrument-sans-16pc-BOLD-line-height)] [font-style:var(--instrument-sans-16pc-BOLD-font-style)]">
                  Login
                </span>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Home Indicator */}
      <div className="absolute left-[calc(50.00%_-_195px)] bottom-0 w-[390px] h-9 flex items-end justify-center">
        <div className="mb-2 w-[134px] h-[5px] bg-white rounded-[100px]" />
      </div>
    </main>
  );
};
