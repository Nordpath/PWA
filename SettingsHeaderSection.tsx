import React from "react";

export const SettingsHeaderSection = (): JSX.Element => {
  return (
    <header className="flex flex-col w-[390px] items-center gap-3 pt-0 pb-3 px-0 absolute top-0 left-[calc(50.00%_-_195px)] bg-[#ffffff]">
      <div className="relative self-stretch w-full h-11">
        <img
          className="absolute top-0 left-[calc(50.00%_-_82px)] w-[164px] h-[30px]"
          alt="Notch"
          src="https://c.animaapp.com/mg16gjxyXUnosk/img/notch.png"
        />

        <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
          <div className="w-[54px] h-[21px] flex rounded-3xl">
            <div className="mt-px w-[54px] h-5 font-default-bold-body font-[number:var(--default-bold-body-font-weight)] text-[#181c1f] text-[length:var(--default-bold-body-font-size)] text-center tracking-[var(--default-bold-body-letter-spacing)] leading-[var(--default-bold-body-line-height)] whitespace-nowrap [font-style:var(--default-bold-body-font-style)]">
              9:41
            </div>
          </div>
        </div>

        <img
          className="absolute top-[19px] left-[286px] w-[77px] h-[13px]"
          alt="Right side"
          src="https://c.animaapp.com/mg16gjxyXUnosk/img/right-side.png"
        />
      </div>

      <div className="flex w-[358px] items-center justify-between relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <img
            className="relative w-6 h-6"
            alt="Frame"
            src="https://c.animaapp.com/mg16gjxyXUnosk/img/frame-1171277295.svg"
          />

          <div className="relative w-fit mt-[-1.00px] font-heading-XL font-[number:var(--heading-XL-font-weight)] text-[#181c1f] text-[length:var(--heading-XL-font-size)] tracking-[var(--heading-XL-letter-spacing)] leading-[var(--heading-XL-line-height)] whitespace-nowrap [font-style:var(--heading-XL-font-style)]">
            SETTINGS
          </div>
        </div>

        <div className="flex flex-col w-[25px] items-end gap-1.5 relative">
          <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />

          <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />

          <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
        </div>
      </div>
    </header>
  );
};
