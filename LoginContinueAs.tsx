import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RealTimeClock } from "../../../components/RealTimeClock";
import { StatusBar } from "../../../components/StatusBar";

export const LoginContinueAs = (): JSX.Element => {
  const [isLoginPressed, setIsLoginPressed] = useState(false);
  const [isGuestPressed, setIsGuestPressed] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    setIsLoginPressed(true);
    // Navigate to login form screen
    setTimeout(() => {
      setIsLoginPressed(false);
      navigate('/login-form');
    }, 150);
  };

  const handleGuestClick = () => {
    setIsGuestPressed(true);
    // Navigate to continue as guest screen
    setTimeout(() => {
      setIsGuestPressed(false);
      navigate('/continue-as-guest');
    }, 150);
  };

  return (
    <main className="relative w-[390px] h-[844px] bg-white overflow-hidden">
      <header className="absolute w-full top-0 left-0 h-11 backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)]">
        <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
          <RealTimeClock 
            className="w-[54px] h-5 font-default-bold-body font-[number:var(--default-bold-body-font-weight)] text-[length:var(--default-bold-body-font-size)] text-center tracking-[var(--default-bold-body-letter-spacing)] leading-[var(--default-bold-body-line-height)] whitespace-nowrap [font-style:var(--default-bold-body-font-style)]"
            textColor="text-black"
          />
        </div>
        
        <StatusBar className="text-black" />
      </header>

      <img
        className="absolute top-[calc(50.00%_-_422px)] left-[calc(50.00%_-_721px)] w-[114px] h-[132px]"
        alt="Background decoration"
        src="https://c.animaapp.com/mfvfxn6tADrQfj/img/group.png"
      />

      <img
        className="absolute top-[calc(50.00%_-_422px)] left-[calc(50.00%_-_721px)] w-[114px] h-[132px]"
        alt="Background decoration overlay"
        src="https://c.animaapp.com/mfvfxn6tADrQfj/img/group-1.png"
      />

      <section
        className="flex flex-col w-[358px] items-start gap-4 absolute top-[calc(50.00%_-_68px)] left-[calc(50.00%_-_179px)]"
        role="main"
      >
        <button
          className={`all-[unset] box-border flex flex-col w-[358px] items-center gap-4 px-3 py-[18px] relative flex-[0_0_auto] bg-[#181c1f] rounded-lg cursor-pointer transition-transform duration-150 ${isLoginPressed ? "scale-95" : "hover:scale-[1.02]"} focus:outline-2 focus:outline-blue-500 focus:outline-offset-2`}
          onClick={handleLoginClick}
          onMouseDown={() => setIsLoginPressed(true)}
          onMouseUp={() => setIsLoginPressed(false)}
          onMouseLeave={() => setIsLoginPressed(false)}
          aria-label="Login to your account"
          type="button"
        >
          <span className="relative w-fit mt-[-1.00px] font-font-for-buttons font-[number:var(--font-for-buttons-font-weight)] text-white text-[length:var(--font-for-buttons-font-size)] tracking-[var(--font-for-buttons-letter-spacing)] leading-[var(--font-for-buttons-line-height)] whitespace-nowrap [font-style:var(--font-for-buttons-font-style)]">
            Login
          </span>
        </button>

        <button
          className={`flex flex-col items-center gap-4 px-3 py-[18px] relative self-stretch w-full flex-[0_0_auto] rounded-lg border border-solid border-[#939393] cursor-pointer transition-all duration-150 ${isGuestPressed ? "scale-95 bg-gray-50" : "hover:scale-[1.02] hover:border-gray-600"} focus:outline-2 focus:outline-blue-500 focus:outline-offset-2`}
          onClick={handleGuestClick}
          onMouseDown={() => setIsGuestPressed(true)}
          onMouseUp={() => setIsGuestPressed(false)}
          onMouseLeave={() => setIsGuestPressed(false)}
          aria-label="Continue without creating an account"
          type="button"
        >
          <span className="relative w-fit mt-[-1.00px] font-font-for-buttons font-[number:var(--font-for-buttons-font-weight)] text-[#181c1f] text-[length:var(--font-for-buttons-font-size)] tracking-[var(--font-for-buttons-letter-spacing)] leading-[var(--font-for-buttons-line-height)] whitespace-nowrap [font-style:var(--font-for-buttons-font-style)]">
            Continue as a guest
          </span>
        </button>
      </section>

      <section className="flex flex-col w-[316px] items-center absolute top-[104px] left-[calc(50.00%_-_158px)]">
        <img
          className="relative w-[108px] h-[95px]"
          alt="Michél Salgado logo"
          src="https://c.animaapp.com/mfvfxn6tADrQfj/img/frame-1171277596.svg"
        />

        <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative w-fit mt-[-1.00px] [font-family:'Jomolhari',Helvetica] font-normal text-black text-[32px] tracking-[-0.96px] leading-[41.6px] whitespace-nowrap">
            MICHÉL SALGADO
          </h1>

          <p className="relative self-stretch [font-family:'Jomolhari',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[20.8px]">
            PREMIUM FAN ENTERTAINMENT
          </p>
        </div>
      </section>

      <footer className="flex flex-col w-[390px] items-center gap-3 absolute left-[calc(50.00%_-_195px)] bottom-0">
        <p className="relative w-fit mt-[-1.00px] font-heading-l font-[number:var(--heading-l-font-weight)] text-black text-[length:var(--heading-l-font-size)] tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] whitespace-nowrap [font-style:var(--heading-l-font-style)]">
          In collaboration with
        </p>

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
                  src="https://c.animaapp.com/mfvfxn6tADrQfj/img/frame-1171277528.svg"
                />
              </button>
            </div>
          </div>

          <div className="absolute w-full left-0 bottom-0 h-9">
            <div
              className="absolute left-[calc(50.00%_-_67px)] bottom-2 w-[134px] h-[5px] bg-white rounded-[100px]"
              role="presentation"
            />
          </div>
        </div>
      </footer>
    </main>
  );
};
