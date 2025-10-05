import React from "react";
import { RealTimeClock } from "../../components/RealTimeClock";
import { StatusBar } from "../../components/StatusBar";

export const HomeScreen = (): JSX.Element => {
  const handleNavigateToLogin = () => {
    window.location.href = '/login';
  };

  return (
    <main
      className="relative w-[390px] h-[844px] overflow-hidden bg-[url(https://c.animaapp.com/FLHQLvNn/img/home-screen-%281%29.png)] bg-cover bg-[30%_center] cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
      data-model-id="2:403"
      role="main"
      aria-label="Michel Salgado Premium Fan Entertainment Home Screen"
      onClick={handleNavigateToLogin}
    >
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

      <div className="absolute w-full left-0 bottom-0 h-[34px] flex items-end justify-center">
        <div
          className="mb-2 w-[134px] h-[5px] bg-white rounded-[100px]"
          role="presentation"
        />
      </div>


      <div
        className="top-[375px] left-[38px] w-[313px] h-[70px] blur-[38.3px] absolute bg-[#10132f] opacity-80"
        role="presentation"
      />

      <div
        className="top-[494px] left-[calc(50.00%_-_94px)] w-[188px] h-[50px] blur-[33.2px] absolute bg-[#10132f] opacity-80"
        role="presentation"
      />

      <section className="flex flex-col w-[316px] items-center absolute top-[280px] left-[calc(50.00%_-_158px)]">
        <img
          className="relative w-[108px] h-[95px]"
          alt="Michel Salgado logo"
          src="https://c.animaapp.com/FLHQLvNn/img/frame-1171277596.svg"
        />

        <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative w-fit mt-[-1.00px] ml-[-13.00px] mr-[-13.00px] [font-family:'Jomolhari',Helvetica] font-normal text-[#ffffff] text-4xl tracking-[-1.08px] leading-[46.8px] whitespace-nowrap">
            MÍCHEL SALGADO
          </h1>

          <p className="relative self-stretch [font-family:'Jomolhari',Helvetica] font-normal text-[#ffffff] text-base text-center tracking-[0] leading-[20.8px]">
            PREMIUM FAN ENTERTAINMENT
          </p>
        </div>
      </section>

      <h2 className="absolute top-[490px] left-[calc(50.00%_-_149px)] w-[298px] [font-family:'Roboto',Helvetica] font-bold text-[#ffffff] text-[22px] text-center tracking-[0] leading-[26.4px]">
        WELCOME TO AN UNIQUE EXPERIENCE
      </h2>

      <footer className="absolute left-[calc(50.00%_-_195px)] bottom-0 w-[390px] h-[34px] flex flex-col justify-between bg-transparent">
        <img
          className="ml-[139px] w-28 h-[43px] mt-[-38px]"
          alt="Live! Premium Fan Entertainment logo"
          src="https://c.animaapp.com/FLHQLvNn/img/asset-1-1.svg"
        />

        <div
          className="self-center mb-2 w-[134px] h-[5px] bg-variable-collection-white rounded-[100px]"
          role="presentation"
        />
      </footer>

      <img
        className="absolute top-[472px] left-[calc(50.00%_-_43px)] w-[87px] h-px object-cover"
        alt="Decorative line"
        src="https://c.animaapp.com/FLHQLvNn/img/line-418.svg"
        role="presentation"
      />
    </main>
  );
};
