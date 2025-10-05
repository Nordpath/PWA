import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RealTimeClock } from "../../../components/RealTimeClock";
import { StatusBar } from "../../../components/StatusBar";

export const ContinueAsGuest = (): JSX.Element => {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/login');
  };

  const handleTermsToggle = () => {
    setIsTermsAccepted(!isTermsAccepted);
  };

  const handleContinue = () => {
    if (isTermsAccepted) {
      // Set guest mode flag
      sessionStorage.setItem('userType', 'guest');
      // Navigate to menu screen
      navigate('/menu');
    }
  };

  return (
    <main className="relative w-[390px] h-[844px] bg-white overflow-hidden">
      <img
        className="absolute top-[calc(50.00%_-_1296px)] left-[calc(50.00%_-_3491px)] w-[114px] h-[132px]"
        alt="Group"
        src="https://c.animaapp.com/mfwd4px3BXiBea/img/group.png"
      />

      <img
        className="absolute top-[calc(50.00%_-_1296px)] left-[calc(50.00%_-_3491px)] w-[114px] h-[132px]"
        alt="Group"
        src="https://c.animaapp.com/mfwd4px3BXiBea/img/group-1.png"
      />

      <img
        className="absolute top-[calc(50.00%_-_1296px)] left-[calc(50.00%_-_3491px)] w-[114px] h-[132px]"
        alt="Group"
        src="https://c.animaapp.com/mfwd4px3BXiBea/img/group-2.png"
      />

      <img
        className="absolute top-[calc(50.00%_-_1296px)] left-[calc(50.00%_-_3491px)] w-[114px] h-[132px]"
        alt="Group"
        src="https://c.animaapp.com/mfwd4px3BXiBea/img/group-3.png"
      />

      <img
        className="absolute top-[calc(50.00%_-_1296px)] left-[calc(50.00%_-_3491px)] w-[114px] h-[132px]"
        alt="Group"
        src="https://c.animaapp.com/mfwd4px3BXiBea/img/group-4.png"
      />

      <header className="absolute w-full top-0 left-0 h-11 backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)]">
        <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
          <RealTimeClock 
            className="w-[54px] h-5 font-default-bold-body font-[number:var(--default-bold-body-font-weight)] text-[length:var(--default-bold-body-font-size)] text-center tracking-[var(--default-bold-body-letter-spacing)] leading-[var(--default-bold-body-line-height)] whitespace-nowrap [font-style:var(--default-bold-body-font-style)]"
            textColor="text-black"
          />
        </div>
        
        <StatusBar className="text-black" />
      </header>

      <section className="flex flex-col w-[358px] items-start gap-8 absolute top-[354px] left-[calc(50.00%_-_179px)]">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-[25.2px]">
            Some application features are accessible only to registered users.
            You can always register later.
          </p>

          <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-6 h-6">
              <div className="flex w-4 items-center gap-2 relative top-[calc(50.00%_-_8px)] left-[calc(50.00%_-_8px)] rounded-[3px]">
                <label className="relative w-4 h-4 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isTermsAccepted}
                    onChange={handleTermsToggle}
                    className="sr-only"
                    aria-describedby="terms-text"
                  />
                  <div
                    className={`relative w-4 h-4 rounded-sm border border-solid border-black ${isTermsAccepted ? "bg-black" : "bg-white"}`}
                  >
                    {isTermsAccepted && (
                      <svg
                        className="absolute top-0.5 left-0.5 w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </label>
              </div>
            </div>

            <p
              id="terms-text"
              className="relative flex-1 [font-family:'Instrument_Sans',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[14px]"
            >
              <span className="text-[#5e5e5e] leading-[19.6px]">I accept </span>

              <a
                href="#"
                className="text-[#5e5e5e] leading-[0.1px] underline hover:no-underline focus:outline-2 focus:outline-blue-500"
              >
                Terms &amp;{" "}
              </a>

              <a
                href="#"
                className="text-[#5e5e5e] leading-[19.6px] underline hover:no-underline focus:outline-2 focus:outline-blue-500"
              >
                Conditions
              </a>

              <span className="text-[#5e5e5e] leading-[19.6px]"> and </span>

              <a
                href="#"
                className="text-[#5e5e5e] leading-[0.1px] underline hover:no-underline focus:outline-2 focus:outline-blue-500"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        <div className="all-[unset] box-border flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <button
            onClick={handleContinue}
            disabled={!isTermsAccepted}
            className={`all-[unset] box-border flex flex-col w-[358px] items-center gap-4 px-3 py-[18px] relative flex-[0_0_auto] rounded-lg transition-colors duration-200 focus:outline-2 focus:outline-blue-500 focus:outline-offset-2 ${
              isTermsAccepted
                ? "bg-black hover:bg-gray-800 cursor-pointer"
                : "bg-[#eaeced] cursor-not-allowed"
            }`}
            aria-label="Continue as guest"
          >
            <span
              className={`relative w-fit mt-[-1.00px] font-font-for-buttons font-[number:var(--font-for-buttons-font-weight)] text-[length:var(--font-for-buttons-font-size)] tracking-[var(--font-for-buttons-letter-spacing)] leading-[var(--font-for-buttons-line-height)] whitespace-nowrap [font-style:var(--font-for-buttons-font-style)] ${
                isTermsAccepted ? "text-white" : "text-[#5e5e5e]"
              }`}
            >
              Continue
            </span>
          </button>
        </div>
      </section>

      <footer className="flex flex-col w-[390px] items-center gap-3 absolute left-[calc(50.00%_-_195px)] bottom-0">
        <h2 className="relative w-fit mt-[-1.00px] font-heading-l font-[number:var(--heading-l-font-weight)] text-black text-[length:var(--heading-l-font-size)] tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] whitespace-nowrap [font-style:var(--heading-l-font-style)]">
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
                  className="w-full h-full"
                  alt="Frame"
                  src="https://c.animaapp.com/mfwd4px3BXiBea/img/frame-1171277528.svg"
                />
              </button>
            </div>
          </div>

          <div className="absolute w-full left-0 bottom-0 h-9">
            <div className="absolute left-[calc(50.00%_-_67px)] bottom-2 w-[134px] h-[5px] bg-white rounded-[100px]" />
          </div>
        </div>
      </footer>

      <section className="flex flex-col w-[316px] items-center absolute top-[104px] left-[calc(50.00%_-_158px)]">
        <img
          className="relative w-[108px] h-[95px]"
          alt="Frame"
          src="https://c.animaapp.com/mfwd4px3BXiBea/img/frame-1171277596.svg"
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
    </main>
  );
};
