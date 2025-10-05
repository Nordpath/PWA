import React from "react";
import { ActionButtonsSection } from "./sections/ActionButtonsSection";
import { SettingsHeaderSection } from "./sections/SettingsHeaderSection";
import { UserProfileSection } from "./sections/UserProfileSection";

export const Settings = (): JSX.Element => {
  return (
    <div className="bg-[#ffffff] overflow-hidden w-full min-w-[390px] min-h-[1363px] relative">
      <img
        className="absolute top-[142px] left-[calc(50.00%_-_195px)] w-[390px] h-px object-cover"
        alt="Line"
        src="https://c.animaapp.com/mg16gjxyXUnosk/img/line-417.svg"
      />

      <div className="absolute left-[calc(50.00%_-_194px)] bottom-[-561px] w-[389px] h-[34px] flex items-end justify-center">
        <div className="mb-2 w-[134px] h-[5px] ml-px bg-[#181c1f] rounded-[100px]" />
      </div>

      <div className="absolute left-[calc(50.00%_-_193px)] bottom-[-561px] w-[389px] h-[34px] flex items-end justify-center">
        <div className="mb-2 w-[134px] h-[5px] ml-px bg-[#ffffff] rounded-[100px]" />
      </div>

      <div className="absolute left-[calc(50.00%_-_193px)] bottom-[-414px] w-[389px] h-[34px] flex items-end justify-center">
        <div className="mb-2 w-[134px] h-[5px] ml-px bg-[#ffffff] rounded-[100px]" />
      </div>

      <SettingsHeaderSection />

      <UserProfileSection />

      <ActionButtonsSection />

      <div className="flex flex-col w-[390px] items-center gap-3 pt-2 pb-0 px-0 fixed left-[calc(50.00%_-_195px)] bottom-0 bg-[#ffffff1a] backdrop-blur-[15.75px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15.75px)_brightness(100%)]">
        <div className="relative w-fit mt-[-1.00px] font-heading-l font-[number:var(--heading-l-font-weight)] text-[#000000] text-[length:var(--heading-l-font-size)] tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] whitespace-nowrap [font-style:var(--heading-l-font-style)]">
          In collaboration with
        </div>

        <div className="relative w-[390px] h-[77px] bg-[#000000] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]">
          <img
            className="absolute w-full h-[80.52%] top-[19.48%] left-0"
            alt="Rettangolo"
            src="https://c.animaapp.com/mg16gjxyXUnosk/img/rettangolo-271.svg"
          />

          <div className="absolute w-full h-[44.16%] top-[55.84%] left-0 flex items-end justify-center">
            <div className="mb-2 w-[134px] h-[5px] bg-white rounded-[100px]" />
          </div>

          <img
            className="absolute h-[53.25%] top-[15.58%] left-[calc(50.00%_-_129px)] w-[259px]"
            alt="Coke company logo"
            src="https://c.animaapp.com/mg16gjxyXUnosk/img/coke-company-logo-black-1.svg"
          />
        </div>
      </div>
    </div>
  );
};
