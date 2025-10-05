import React from "react";
import { useNavigate } from "react-router-dom";
import { RealTimeClock } from "../../../components/RealTimeClock";
import { StatusBar } from "../../../components/StatusBar";

interface EventData {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  backgroundPosition?: string;
  titlePosition?: number;
}

export const EventsListOf = (): JSX.Element => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/about-me');
  };

  const eventsData: EventData[] = [
    {
      id: 1,
      title:
        "Premier Futsal signs former Real Madrid defender Michel Salgado on 3-year deal",
      date: "Jun 27, 2016",
      imageUrl: "https://c.animaapp.com/mg42mo5og6T44p/img/image.png",
      backgroundPosition: "bg-[50%_50%]",
      titlePosition: 169,
    },
    {
      id: 2,
      title:
        "Meet the children of Míchel Salgado and Malula Sanz, a couple in love after 22 years of marriage.",
      date: "Aug 18, 2014",
      imageUrl: "https://c.animaapp.com/mg42mo5og6T44p/img/image-2.png",
      backgroundPosition: "bg-[100%_100%]",
      titlePosition: 147,
    },
    {
      id: 3,
      title:
        "Premier Futsal signs former Real Madrid defender Michel Salgado on 3-year deal",
      date: "Jun 27, 2016",
      imageUrl: "https://c.animaapp.com/mg42mo5og6T44p/img/image-1.png",
      backgroundPosition: "bg-[50%_50%]",
      titlePosition: 169,
    },
  ];

  const handleEventClick = (event: EventData) => {
    alert(`📰 News Article\n\n"${event.title}"\n\nDate: ${event.date}\n\nIn a real app, this would open the full article with detailed content about Michel Salgado's career milestone.`);
  };

  return (
    <div className="bg-white w-[390px] h-[844px] relative overflow-hidden">
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

        <nav className="flex w-[358px] items-center justify-between relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <button 
              onClick={handleBackClick}
              className="relative w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity"
              aria-label="Go back to About Me"
            >
              <img
                className="w-full h-full"
                alt="Back arrow"
                src="https://c.animaapp.com/mg42mo5og6T44p/img/frame-1171277295.svg"
              />
            </button>

            <h1 className="relative w-fit mt-[-1.00px] font-heading-XL font-[number:var(--heading-XL-font-weight)] text-[#181c1f] text-[length:var(--heading-XL-font-size)] tracking-[var(--heading-XL-letter-spacing)] leading-[var(--heading-XL-line-height)] whitespace-nowrap [font-style:var(--heading-XL-font-style)]">
              EVENTS & NEWS
            </h1>
          </div>

          <button
            className="flex flex-col w-[25px] items-end gap-1.5 relative cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Open menu"
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
                root.render(React.createElement(HamburgerMenu, { onClose: closeMenu, currentScreen: 'about-me' }));
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
      <main className="absolute top-[120px] left-0 right-0 bottom-[120px] overflow-y-auto">
        <div className="p-4 space-y-4">
          {eventsData.map((event, index) => (
            <article
              key={event.id}
              className="w-[358px] h-[251px] rounded-2xl overflow-hidden shadow-[2px_4px_5.8px_#00000026] mx-auto cursor-pointer hover:scale-[1.02] transition-transform duration-200 relative"
              onClick={() => handleEventClick(event)}
              style={{ 
                backgroundImage: `url(${event.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: event.backgroundPosition?.replace('bg-', '') || '50% 50%'
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]" />

              <div className="absolute bottom-3 left-3 right-3">
                <h2 className="font-body-m-bold font-[number:var(--body-m-bold-font-weight)] text-white text-[length:var(--body-m-bold-font-size)] tracking-[var(--body-m-bold-letter-spacing)] leading-[var(--body-m-bold-line-height)] [font-style:var(--body-m-bold-font-style)] mb-2">
                  {event.title}
                </h2>

                <time className="font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-white text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]">
                  {event.date}
                </time>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col w-[390px] h-[113px] items-center gap-3 pt-2 pb-0 px-0 fixed left-[calc(50.00%_-_195px)] bottom-0 bg-[#ffffff1a] backdrop-blur-[8.6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8.6px)_brightness(100%)]">
        <p className="relative w-fit mt-[-1.00px] font-heading-l font-[number:var(--heading-l-font-weight)] text-[#000000] text-[length:var(--heading-l-font-size)] tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] whitespace-nowrap [font-style:var(--heading-l-font-style)]">
          In collaboration with
        </p>

        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] bg-[#000000] backdrop-blur-[18.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.35px)_brightness(100%)]">
          <div className="flex flex-col h-[72px] items-start justify-center gap-2.5 pl-0 pr-2.5 py-2.5 relative self-stretch w-full bg-[#000000]">
            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <button
                onClick={() => window.open('https://liveapps.ch', '_blank', 'noopener,noreferrer')}
                className="flex w-[274px] h-[38px] items-center justify-center gap-2.5 p-2.5 relative bg-white hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Visit LiveApps.ch"
              >
                <span className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'D-DIN_Exp-Bold',Helvetica] font-bold text-[#000000] text-xl tracking-[0.40px] leading-[26px] whitespace-nowrap">
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
                  alt="Partner logo"
                  src="https://c.animaapp.com/mg42mo5og6T44p/img/frame-1171277528.svg"
                />
              </button>
            </div>
          </div>

          <div className="absolute w-full left-0 bottom-0 h-9">
            <div className="absolute left-[calc(50.00%_-_67px)] bottom-2 w-[134px] h-[5px] bg-white rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
