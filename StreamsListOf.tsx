import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RealTimeClock } from "../../../components/RealTimeClock";
import { StatusBar } from "../../../components/StatusBar";

interface StreamItem {
  id: number;
  image: string;
  title: string;
  type: "vip" | "free";
  hasPlayButton: boolean;
}

export const StreamsListOf = (): JSX.Element => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"moments" | "live">("moments");

  const handleBackClick = () => {
    navigate('/menu');
  };

  const handleStreamClick = (stream: StreamItem) => {
    if (stream.type === "vip") {
      alert(`🔒 VIP Content\n\n"${stream.title}"\n\nThis is exclusive VIP content. Upgrade to VIP membership to access this stream and many more exclusive videos!`);
    } else {
      alert(`▶️ Playing Stream\n\n"${stream.title}"\n\nIn a real app, this would open the video player and start streaming the content.`);
    }
  };

  const streamItems: StreamItem[] = [
    {
      id: 1,
      image: "https://c.animaapp.com/mg2mda65VvrHuc/img/image-3.png",
      title: "MICHEL SALGADO SPEAKS TO GBC (TAKE THIS STREAM AS FIRST, NOT THE LAST",
      type: "vip",
      hasPlayButton: true,
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mg2mda65VvrHuc/img/image-14.png",
      title: "MICHEL SALGADO ROBERTO CARLOS VISIT GIBRALTAR",
      type: "vip",
      hasPlayButton: true,
    },
    {
      id: 3,
      image: "https://c.animaapp.com/mg2mda65VvrHuc/img/image-1.png",
      title: "LALIGA MEMORY: MICHEL SALGADO",
      type: "free",
      hasPlayButton: true,
    },
    {
      id: 4,
      image: "https://c.animaapp.com/mg2mda65VvrHuc/img/image-2.png",
      title: "MICHEL SALGADO ROBERTO CARLOS VISIT GIBRALTAR",
      type: "vip",
      hasPlayButton: true,
    },
    {
      id: 5,
      image: "https://c.animaapp.com/mg2mda65VvrHuc/img/image.png",
      title: "INSIDE TRAINING – MICHEL SALGADO INTERVIEW 11.05.2023 – PAFOS FC TV",
      type: "free",
      hasPlayButton: true,
    },
  ];

  const liveStreams: StreamItem[] = [
    {
      id: 101,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "LIVE: Michel Salgado Training Session",
      type: "vip",
      hasPlayButton: true,
    },
    {
      id: 102,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "LIVE: Q&A with Michel Salgado",
      type: "free",
      hasPlayButton: true,
    },
  ];

  const currentStreams = activeTab === "moments" ? streamItems : liveStreams;

  const renderStreamCard = (item: StreamItem, index: number) => {
    return (
      <article
        key={item.id}
        className="w-[358px] h-[251px] rounded-2xl overflow-hidden shadow-[2px_4px_5.8px_#00000026] mb-4 mx-auto cursor-pointer hover:scale-[1.02] transition-transform duration-200 relative"
        role="button"
        tabIndex={0}
        aria-label={`Play video: ${item.title}`}
        onClick={() => handleStreamClick(item)}
      >
        <div className="relative w-full h-full">
          <img
            className="w-full h-full object-cover"
            alt={`Video thumbnail for ${item.title}`}
            src={item.image}
          />
          
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]" />
        </div>

        {/* VIP/Free Badge - Only show on moments tab */}
        {activeTab === "moments" && (
          <>
            {item.type === "vip" ? (
              <div className="inline-flex h-7 items-center justify-center gap-1 px-3 py-0 absolute top-3 left-3 bg-[#000000] rounded-[90px] border border-solid border-white">
                <svg className="w-[18px] h-[18px] text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="font-body-s-bold font-[number:var(--body-s-bold-font-weight)] text-white text-[length:var(--body-s-bold-font-size)] text-center tracking-[var(--body-s-bold-letter-spacing)] leading-[var(--body-s-bold-line-height)] [font-style:var(--body-s-bold-font-style)]">
                  VIP
                </span>
              </div>
            ) : (
              <div className="flex w-[52px] h-7 items-center justify-center gap-1 px-3 py-0 absolute top-3 left-3 bg-[#def7ec] rounded-[90px] border border-solid border-[#41a675b2]">
                <span className="font-body-s-bold font-[number:var(--body-s-bold-font-weight)] text-[#046938] text-[length:var(--body-s-bold-font-size)] text-center tracking-[var(--body-s-bold-letter-spacing)] leading-[var(--body-s-bold-line-height)] [font-style:var(--body-s-bold-font-style)]">
                  Free
                </span>
              </div>
            )}
          </>
        )}

        {/* Live Badge - Only show on live tab */}
        {activeTab === "live" && (
          <div className="inline-flex h-7 items-center justify-center gap-1 px-3 py-0 absolute top-3 left-3 bg-red-600 rounded-[90px] border border-solid border-white">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="font-body-s-bold font-[number:var(--body-s-bold-font-weight)] text-white text-[length:var(--body-s-bold-font-size)] text-center tracking-[var(--body-s-bold-letter-spacing)] leading-[var(--body-s-bold-line-height)] [font-style:var(--body-s-bold-font-style)]">
              LIVE
            </span>
          </div>
        )}

        {item.hasPlayButton && (
          <div className="absolute top-[104px] left-[calc(50.00%_-_22px)] w-11 h-11 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
            </svg>
          </div>
        )}

        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-semibold text-base leading-[22.4px] line-clamp-2">
            {item.title}
          </h3>
        </div>
      </article>
    );
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

        <div className="flex w-[358px] items-center justify-between relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <button 
              onClick={handleBackClick}
              className="relative w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity"
              aria-label="Go back to menu"
            >
              <img
                className="relative w-6 h-6"
                alt="Back"
                src="https://c.animaapp.com/mg2mda65VvrHuc/img/frame-1171277295.svg"
              />
            </button>

            <h1 className="relative w-fit mt-[-1.00px] font-heading-XL font-[number:var(--heading-XL-font-weight)] text-[#181c1f] text-[length:var(--heading-XL-font-size)] tracking-[var(--heading-XL-letter-spacing)] leading-[var(--heading-XL-line-height)] whitespace-nowrap [font-style:var(--heading-XL-font-style)]">
              STREAMS
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
                root.render(React.createElement(HamburgerMenu, { onClose: closeMenu, currentScreen: 'streams' }));
              });
            }}
          >
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
          </button>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav
        className="absolute top-[109px] left-[calc(50.00%_-_195px)] w-[390px] h-[35px] flex flex-col"
        role="tablist"
        aria-label="Stream navigation"
      >
        <div className="flex ml-4 w-[358px] h-[34px] relative items-center justify-between">
          <button
            className={`flex flex-col w-[179px] items-center px-3 py-1.5 relative ${
              activeTab === "moments" ? "border-b-2 border-[#181c1f]" : ""
            }`}
            role="tab"
            aria-selected={activeTab === "moments"}
            aria-controls="moments-panel"
            onClick={() => setActiveTab("moments")}
          >
            <div className={`relative w-fit mt-[-2.00px] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] whitespace-nowrap ${
              activeTab === "moments"
                ? "font-body-m-bold font-[number:var(--body-m-bold-font-weight)] text-[#181c1f] [font-style:var(--body-m-bold-font-style)]"
                : "font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[#5e5e5e] [font-style:var(--body-m-regular-font-style)]"
            }`}>
              Moments
            </div>
          </button>

          <button
            className={`flex flex-col w-[179px] items-center px-3 py-1.5 relative ${
              activeTab === "live" ? "border-b-2 border-[#181c1f]" : ""
            }`}
            role="tab"
            aria-selected={activeTab === "live"}
            aria-controls="live-panel"
            onClick={() => setActiveTab("live")}
          >
            <div className={`relative w-fit mt-[-2.00px] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] whitespace-nowrap ${
              activeTab === "live"
                ? "font-body-m-bold font-[number:var(--body-m-bold-font-weight)] text-[#181c1f] [font-style:var(--body-m-bold-font-style)]"
                : "font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[#5e5e5e] [font-style:var(--body-m-regular-font-style)]"
            }`}>
              Live
            </div>
          </button>
        </div>

        <img
          className="h-px w-[390px] self-center object-cover"
          alt=""
          src="https://c.animaapp.com/mg2mda65VvrHuc/img/line-417.svg"
          aria-hidden="true"
        />
      </nav>

      {/* Content Area */}
      <main 
        className="absolute top-[144px] left-0 right-0 bottom-[100px] overflow-y-auto"
        role="tabpanel"
        id={`${activeTab}-panel`}
        aria-labelledby={`${activeTab}-tab`}
      >
        <div className="p-4 space-y-4">
          {currentStreams.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-8 text-center">
              <div className="text-6xl mb-4">📺</div>
              <h2 className="text-xl font-bold text-[#181c1f] mb-2">
                {activeTab === "live" ? "No Live Streams" : "No Recorded Streams"}
              </h2>
              <p className="text-[#5e5e5e]">
                {activeTab === "live" 
                  ? "Check back later for live streaming sessions"
                  : "Recorded streams will appear here"
                }
              </p>
            </div>
          ) : (
            currentStreams.map((item, index) => renderStreamCard(item, index))
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col w-[390px] items-center gap-3 pt-2 pb-0 px-0 fixed left-[calc(50.00%_-_195px)] bottom-0 bg-[#ffffff1a] backdrop-blur-[8.6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8.6px)_brightness(100%)]">
        <div className="relative w-fit mt-[-1.00px] font-heading-l font-[number:var(--heading-l-font-weight)] text-[#000000] text-[length:var(--heading-l-font-size)] tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] whitespace-nowrap [font-style:var(--heading-l-font-style)]">
          In collaboration with
        </div>

        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] bg-[#000000] backdrop-blur-[18.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.35px)_brightness(100%)]">
          <div className="flex flex-col h-[72px] items-start justify-center gap-2.5 pl-0 pr-2.5 py-2.5 relative self-stretch w-full bg-[#000000]">
            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <button
                onClick={() => window.open('https://liveapps.ch', '_blank', 'noopener,noreferrer')}
                className="flex w-[274px] h-[38px] items-center justify-center gap-2.5 p-2.5 relative bg-white hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Visit LiveApps.ch"
              >
                <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'D-DIN_Exp-Bold',Helvetica] font-bold text-[#000000] text-xl tracking-[0.40px] leading-[26px] whitespace-nowrap">
                  FAN EXPERIENCE 3.0
                </div>
              </button>

              <button
                onClick={() => window.open('https://liveapps.ch', '_blank', 'noopener,noreferrer')}
                className="relative w-[94px] h-[38px] hover:opacity-80 transition-opacity cursor-pointer"
                aria-label="Visit LiveApps.ch"
              >
                <img
                  className="w-full h-full"
                  alt="Partner logo"
                  src="https://c.animaapp.com/mg2mda65VvrHuc/img/frame-1171277528.svg"
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
