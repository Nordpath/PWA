import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RealTimeClock } from "../../../components/RealTimeClock";
import { StatusBar } from "../../../components/StatusBar";

export const Competitions = (): JSX.Element => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 4,
    minutes: 0,
    seconds: 0,
  });

  const handleBackClick = () => {
    navigate('/menu');
  };

  const handleParticipate = () => {
    alert("🎉 Congratulations! You've entered the competition!\n\nYou're now in the running to win Michel Salgado's signed Real Madrid Champions League Final 2002 jersey. Good luck!");
  };

  const countdownData = [
    { value: timeLeft.days, label: "Day" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes.toString().padStart(2, "0"), label: "Minutes" },
    { value: timeLeft.seconds.toString().padStart(2, "0"), label: "Seconds" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white overflow-hidden w-[390px] h-[844px] relative">
      {/* Header */}
      <header className="flex flex-col w-[390px] items-center gap-3 pt-0 pb-3 px-0 fixed top-0 left-[calc(50.00%_-_195px)] bg-white z-10">
        <div className="relative self-stretch w-full h-11">
          <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
            <RealTimeClock 
              className="w-[54px] h-5 font-default-bold-body font-[number:var(--default-bold-body-font-weight)] text-[#181c1f] text-[length:var(--default-bold-body-font-size)] text-center tracking-[var(--default-bold-body-letter-spacing)] leading-[var(--default-bold-body-line-height)] whitespace-nowrap [font-style:var(--default-bold-body-font-style)]"
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
              aria-label="Go back to menu"
              className="relative w-6 h-6 focus:outline-none focus:ring-2 focus:ring-[#181c1f] focus:ring-offset-2 rounded cursor-pointer hover:opacity-70 transition-opacity"
            >
              <img
                className="relative w-6 h-6"
                alt="Back arrow"
                src="https://c.animaapp.com/mg1do4gcK0ImRy/img/frame-1171277295.svg"
              />
            </button>

            <h1 className="relative w-fit mt-[-1.00px] font-heading-XL font-[number:var(--heading-XL-font-weight)] text-[#181c1f] text-[length:var(--heading-XL-font-size)] tracking-[var(--heading-XL-letter-spacing)] leading-[var(--heading-XL-line-height)] whitespace-nowrap [font-style:var(--heading-XL-font-style)]">
              COMPETITIONS
            </h1>
          </div>

          <button
            className="flex flex-col w-[25px] items-end gap-1.5 relative focus:outline-none focus:ring-2 focus:ring-[#181c1f] focus:ring-offset-2 rounded p-1 cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Open menu"
            aria-expanded="false"
            onClick={() => {
              import('../../../components/HamburgerMenu').then(({ HamburgerMenu }) => {
                const menuContainer = document.createElement('div');
                document.body.appendChild(menuContainer);
                
                const closeMenu = () => {
                  document.body.removeChild(menuContainer);
                };
                
                const React = require('react');
                const { createRoot } = require('react-dom/client');
                const root = createRoot(menuContainer);
                root.render(React.createElement(HamburgerMenu, { onClose: closeMenu, currentScreen: 'competitions' }));
              });
            }}
          >
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
          </button>
        </nav>
      </header>

      {/* Main Content - Scrollable */}
      <div className="pt-[120px] pb-[140px] overflow-y-auto h-full">
        {/* Prize Showcase */}
        <section
          className="flex flex-col w-[358px] h-[218px] items-center justify-end mx-auto mb-6 rounded-2xl bg-[linear-gradient(0deg,rgba(226,226,226,1)_0%,rgba(226,226,226,1)_100%),url(https://c.animaapp.com/mg1do4gcK0ImRy/img/frame-1171277332.png)_50%_50%_/_cover]"
          aria-label="Competition prize showcase"
        >
          <img
            className="absolute top-[-5px] left-[102px] w-[185px] h-[233px]"
            alt="Signed Real Madrid football shirt by Michel Salgado - back view"
            src="https://c.animaapp.com/mg1do4gcK0ImRy/img/pic-signed-real-madrid-football-shirt-new-michel-salgado-2.png"
          />

          <img
            className="relative w-[164px] h-[212px]"
            alt="Signed Real Madrid football shirt by Michel Salgado - front view"
            src="https://c.animaapp.com/mg1do4gcK0ImRy/img/pic-signed-real-madrid-football-shirt-new-michel-salgado-1.png"
          />
        </section>

        {/* Competition Details */}
        <main className="flex flex-col w-[358px] items-start gap-4 mx-auto px-4">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-instrument-sans-20px-semibold font-[number:var(--instrument-sans-20px-semibold-font-weight)] text-[#181c1f] text-[length:var(--instrument-sans-20px-semibold-font-size)] tracking-[var(--instrument-sans-20px-semibold-letter-spacing)] leading-[var(--instrument-sans-20px-semibold-line-height)] [font-style:var(--instrument-sans-20px-semibold-font-style)]">
              WIN ONE OF MY CLASSIC <br />
              REAL SHIRTS!
            </h1>
          </div>

          <p className="relative w-[358px] [font-family:'Instrument_Sans',Helvetica] font-normal text-[#181c1f] text-base tracking-[0] leading-[20.8px]">
            I bet you will feel good when seeing this 😊.. And you will feel even
            better, when you win this signed original home Jersey that I&apos;ve
            worn in the Champions League Final 2002.
            <br />
            <br />
            Participate and become part of the draw – with a little luck, this gem
            is yours!
            <br />
            <br />
            Best, Michél
          </p>

          <button
            onClick={handleParticipate}
            className="flex flex-col w-[358px] items-center gap-4 px-3 py-[18px] relative flex-[0_0_auto] bg-[#181c1f] rounded-lg hover:bg-[#2a2e31] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#181c1f] focus:ring-offset-2 cursor-pointer"
            aria-label="Participate in the competition"
          >
            <span className="relative w-fit mt-[-1.00px] font-font-for-buttons font-[number:var(--font-for-buttons-font-weight)] text-white text-[length:var(--font-for-buttons-font-size)] tracking-[var(--font-for-buttons-letter-spacing)] leading-[var(--font-for-buttons-line-height)] whitespace-nowrap [font-style:var(--font-for-buttons-font-style)]">
              Participate
            </span>
          </button>
        </main>

        {/* Countdown Timer */}
        <section
          className="flex flex-col w-[358px] items-start gap-3 mx-auto px-4 mt-8"
          aria-label="Competition countdown"
        >
          <div className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative w-fit mt-[-1.00px] font-MGP-text-18px font-[number:var(--MGP-text-18px-font-weight)] text-[#181c1f] text-[length:var(--MGP-text-18px-font-size)] tracking-[var(--MGP-text-18px-letter-spacing)] leading-[var(--MGP-text-18px-line-height)] whitespace-nowrap [font-style:var(--MGP-text-18px-font-style)]">
              Ends in
            </h2>
          </div>

          <div
            className="flex items-center justify-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]"
            role="timer"
            aria-live="polite"
            aria-label={`Competition ends in ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, and ${timeLeft.seconds} seconds`}
          >
            {countdownData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-[76px] items-center justify-center gap-1 p-2.5 relative bg-[#181c1f] rounded-md"
              >
                <div className="mt-[-1.00px] relative w-fit [font-family:'Instrument_Sans',Helvetica] font-semibold text-white text-[28px] tracking-[0] leading-[36.4px] whitespace-nowrap">
                  {item.value}
                </div>

                <div className="relative w-fit font-MGP-text-14px font-[number:var(--MGP-text-14px-font-weight)] text-white text-[length:var(--MGP-text-14px-font-size)] text-center tracking-[var(--MGP-text-14px-letter-spacing)] leading-[var(--MGP-text-14px-line-height)] whitespace-nowrap [font-style:var(--MGP-text-14px-font-style)]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="flex flex-col w-[390px] h-[121px] items-center justify-end gap-3 fixed left-[calc(50.00%_-_195px)] bottom-0 bg-[#ffffff1a] backdrop-blur-[16.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(16.7px)_brightness(100%)] z-10">
        <p className="relative self-stretch font-heading-l font-[number:var(--heading-l-font-weight)] text-[#000000] text-[length:var(--heading-l-font-size)] text-center tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] [font-style:var(--heading-l-font-style)]">
          In collaboration with
        </p>

        <button
          onClick={() => window.open('https://www.macron.com/', '_blank', 'noopener,noreferrer')}
          className="flex flex-col h-[79px] items-center justify-center gap-2.5 px-[72px] py-0 relative self-stretch w-full bg-[#1a1918] hover:bg-[#2a2a2a] transition-colors cursor-pointer"
          aria-label="Visit Macron"
        >
          <img
            className="relative w-[246px] h-[70px]"
            alt="Macron logo - collaboration partner"
            src="https://c.animaapp.com/mg1do4gcK0ImRy/img/image-16.svg"
          />
        </button>

        <div className="absolute left-0 bottom-0 w-[390px] h-9">
          <div className="absolute left-[calc(50.00%_-_67px)] bottom-2 w-[134px] h-[5px] bg-white rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};
