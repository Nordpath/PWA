import React from "react";

export const ImageSection = (): JSX.Element => {
  return (
    <article className="flex flex-col w-full items-start gap-1.5 mb-6">
      <h2 className="relative self-stretch mt-[-1.00px] font-body-l-bold font-[number:var(--body-l-bold-font-weight)] text-[#181c1f] text-[length:var(--body-l-bold-font-size)] tracking-[var(--body-l-bold-letter-spacing)] leading-[var(--body-l-bold-line-height)] [font-style:var(--body-l-bold-font-style)]">
        Saudi Football Federation appoints Michel Salgado to coach U-15 national
        team
      </h2>

      <time
        className="relative self-stretch font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#5e5e5e] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]"
        dateTime="2024-06-29"
      >
        June 29, 2024
      </time>
    </article>
  );
};
