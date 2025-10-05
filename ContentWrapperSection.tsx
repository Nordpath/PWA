import React from "react";

export const ContentWrapperSection = (): JSX.Element => {
  const articleData = {
    title: "Saudi Gazette report",
    content: [
      "RIYADH — Ibrahim Al-Qasim, Secretary-General of the Saudi Football Federation, signed an agreement at the federation's headquarters in Riyadh with Spanish coach Michel Salgado.",
      'Under the agreement, Salgado will coach the Saudi U-15 national team and oversee the "Future Falcons" program until 2026.',
      "Michel Salgado, who holds a UEFA Pro coaching license, has previously served as the head coach of Cypriot club Pafos and the regional team of Galicia in Spain.",
      "As a player, Michel Salgado has an impressive record, having represented Spanish club Real Madrid, English club Blackburn Rovers, and the Spanish national team. His notable achievements include winning the UEFA Champions League twice, the Spanish La Liga four times, the UEFA Super Cup, and the Spanish Super Cup three times.",
      "The Saudi U-15 national team comprises players born in 2009 and 2010, who have significant upcoming commitments, including the AFC U-17 and U-20 Asian Cups, the AFC U-23 Asian Cup, the 2032 Olympics, and the 2034 World Cup.",
    ],
  };

  return (
    <article className="flex flex-col w-full items-start gap-2 mb-8">
      <header className="relative self-stretch mt-[-1.00px] font-body-m-bold font-[number:var(--body-m-bold-font-weight)] text-[#181c1f] text-[length:var(--body-m-bold-font-size)] tracking-[var(--body-m-bold-letter-spacing)] leading-[var(--body-m-bold-line-height)] [font-style:var(--body-m-bold-font-style)]">
        {articleData.title}
      </header>

      <div className="relative self-stretch font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[#181c1f] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] [font-style:var(--body-m-regular-font-style)]">
        {articleData.content.map((paragraph, index) => (
          <React.Fragment key={index}>
            {paragraph}
            {index < articleData.content.length - 1 && (
              <>
                <br />
                <br />
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </article>
  );
};
