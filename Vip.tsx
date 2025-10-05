import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RealTimeClock } from "../../../components/RealTimeClock";
import { StatusBar } from "../../../components/StatusBar";

export const Vip = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const handleBackClick = () => {
    navigate('/menu');
  };

  const subscriptionPlans = [
    {
      id: 1,
      title: "1 Month VIP",
      price: "4.99 EUR",
    },
    {
      id: 2,
      title: "6 Month VIP",
      price: "24.99 EUR",
    },
  ];

  const handlePlanSelect = (planId: number) => {
    setSelectedPlan(planId);
    const selectedPlanData = subscriptionPlans.find(plan => plan.id === planId);
    if (selectedPlanData) {
      alert(`🎉 VIP Plan Selected!\n\nYou've selected the ${selectedPlanData.title} plan for ${selectedPlanData.price}.\n\nIn a real app, this would redirect to payment processing. Enjoy your VIP experience!`);
    }
  };

  const handleTermsClick = (type: 'terms' | 'privacy') => {
    const content = type === 'terms' 
      ? "Terms of Use\n\nThis would open the terms of use document. In a real app, this would navigate to a detailed terms and conditions page."
      : "Privacy Policy\n\nThis would open the privacy policy document. In a real app, this would navigate to a detailed privacy policy page.";
    alert(content);
  };

  const handleMoreInfoClick = () => {
    alert("Subscription Information\n\n• Automatic renewal can be cancelled anytime\n• Manage subscriptions in your device settings\n• No cancellation fees\n• Access to all VIP features immediately\n• Customer support available 24/7");
  };

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

        <nav className="flex w-[358px] items-center justify-between relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <button
              onClick={handleBackClick}
              className="relative w-6 h-6 cursor-pointer hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#181c1f] focus:ring-offset-2 rounded transition-opacity"
              aria-label="Go back to menu"
            >
              <img
                className="relative w-6 h-6"
                alt="Back navigation"
                src="https://c.animaapp.com/mg1dzdl7rwDI1b/img/frame-1171277295.svg"
              />
            </button>

            <h1 className="relative w-fit mt-[-1.00px] font-heading-XL font-[number:var(--heading-XL-font-weight)] text-[#181c1f] text-[length:var(--heading-XL-font-size)] tracking-[var(--heading-XL-letter-spacing)] leading-[var(--heading-XL-line-height)] whitespace-nowrap [font-style:var(--heading-XL-font-style)]">
              VIP
            </h1>
          </div>

          <button
            className="flex flex-col w-[25px] items-end gap-1.5 relative cursor-pointer hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#181c1f] focus:ring-offset-2 rounded p-1"
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
                root.render(React.createElement(HamburgerMenu, { onClose: closeMenu, currentScreen: 'vip' }));
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
      <div className="pt-[120px] pb-[200px] overflow-y-auto h-full">
        {/* Membership Header */}
        <section className="flex flex-col w-[358px] h-28 items-center justify-center gap-3 px-0 py-4 mx-auto mb-8 bg-[#1d1d1b] rounded-lg overflow-hidden border border-solid border-[#333333] relative">
          <img
            className="absolute top-0 left-[115px] w-32 h-28"
            alt="Membership background decoration"
            src="https://c.animaapp.com/mg1dzdl7rwDI1b/img/frame-1171277596.svg"
          />

          <div className="flex flex-col w-[188px] items-center gap-2 relative flex-[0_0_auto] z-10">
            <h2 className="relative w-fit mt-[-1.00px] ml-[-26.50px] mr-[-26.50px] [font-family:'Instrument_Sans',Helvetica] font-medium text-[#ffffff] text-[32px] tracking-[3.20px] leading-[41.6px] whitespace-nowrap">
              MEMBERSHIP
            </h2>
          </div>
        </section>

        {/* VIP Title */}
        <section className="flex flex-col items-center gap-3 w-full mx-auto mb-8">
          <div className="flex justify-center w-full">
            <img
              className="w-[23.7px] h-[27.37px]"
              alt="VIP Crown Icon"
              src="https://c.animaapp.com/mg1dzdl7rwDI1b/img/group.png"
            />
          </div>

          <div className="flex justify-center w-full">
            <h1 className="font-heading-XL font-[number:var(--heading-XL-font-weight)] text-[#181c1f] text-[length:var(--heading-XL-font-size)] tracking-[var(--heading-XL-letter-spacing)] leading-[var(--heading-XL-line-height)] [font-style:var(--heading-XL-font-style)] text-center">
              BECOME A VIP
            </h1>
          </div>
        </section>

        {/* Subscription Plans */}
        <section className="flex flex-col w-[358px] items-start gap-3 mx-auto px-4 mb-8">
          <div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            {subscriptionPlans.map((plan) => (
              <div
                key={plan.id}
                className="flex flex-col items-center gap-2 relative flex-1 grow"
              >
                <div className="relative self-stretch mt-[-1.00px] font-instrument-sans-16px font-[number:var(--instrument-sans-16px-font-weight)] text-[#181c1f] text-[length:var(--instrument-sans-16px-font-size)] text-center tracking-[var(--instrument-sans-16px-letter-spacing)] leading-[var(--instrument-sans-16px-line-height)] [font-style:var(--instrument-sans-16px-font-style)]">
                  {plan.title}
                </div>

                <button
                  className={`flex flex-col items-center gap-1 px-8 py-4 relative self-stretch w-full flex-[0_0_auto] bg-[#181c1f] rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:bg-[#2a2e31] focus:outline-none focus:ring-2 focus:ring-[#181c1f] focus:ring-offset-2 ${selectedPlan === plan.id ? "ring-2 ring-[#181c1f] ring-offset-2 scale-105" : ""}`}
                  onClick={() => handlePlanSelect(plan.id)}
                  aria-label={`Select ${plan.title} subscription for ${plan.price}`}
                >
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Instrument_Sans',Helvetica] font-medium text-[#ffffff] text-base tracking-[1.60px] leading-[20.8px] whitespace-nowrap">
                    {plan.price}
                  </div>
                </button>
              </div>
            ))}
          </div>

          <p className="relative self-stretch [font-family:'Instrument_Sans',Helvetica] font-normal text-[#181c1f] text-base tracking-[0] leading-4">
            <span className="leading-[20.8px]">
              Your subscription will renew automatically, but you can cancel at
              any time (
            </span>

            <button
              onClick={handleMoreInfoClick}
              className="leading-[var(--instrument-sans-16px-line-height)] underline font-instrument-sans-16px [font-style:var(--instrument-sans-16px-font-style)] font-[number:var(--instrument-sans-16px-font-weight)] tracking-[var(--instrument-sans-16px-letter-spacing)] text-[length:var(--instrument-sans-16px-font-size)] hover:text-[#333] focus:outline-none focus:ring-2 focus:ring-[#181c1f] focus:ring-offset-1 cursor-pointer"
            >
              more info
            </button>

            <span className="leading-[20.8px]">).</span>
          </p>
        </section>

        {/* VIP Benefits */}
        <main className="flex flex-col w-[358px] items-start gap-8 mx-auto px-4">
          <article className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch mt-[-1.00px] font-body-l-bold font-[number:var(--body-l-bold-font-weight)] text-[#181c1f] text-[length:var(--body-l-bold-font-size)] tracking-[var(--body-l-bold-letter-spacing)] leading-[var(--body-l-bold-line-height)] [font-style:var(--body-l-bold-font-style)]">
              About VIP
            </h2>

            <div className="relative self-stretch font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[#181c1f] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] [font-style:var(--body-m-regular-font-style)]">
              <p>
                With a VIP subscription you become a VIP member. As a VIP member,
                you:
              </p>
              <br />
              <ul className="list-none space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎵</span>
                  <span>Get privileged access to paid and exclusive content, which is only available here on this APP. Exclusive content may be music-, video and livestreams, operated exclusively on this APP.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎁</span>
                  <span>Get exclusive experiences and offerings, which are only accessible for VIP members. This can be special promotions from your favorite brand or its partners, first right to buy tickets for events or exclusive goods, which can be ordered via the APP shop</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <span>As privileged member are the first to be informed about news, special offers and exclusive, special and unforgettable experiences with your favorite brand</span>
                </li>
              </ul>
            </div>

            <div className="relative self-stretch font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[#181c1f] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] [font-style:var(--body-m-regular-font-style)]">
              <p>
                The membership offering (duration and pricing of the membership)
                is determined directly by our client (Duration/Pricing) and
                Google/Apple for local pricing (prices in different countries and
                currencies may vary from others). The membership renews
                automatically for another period after the membership exceeds. The
                LiVE! system informs you via push notification before the
                membership expires, so that you can decide if you want to carry on
                the membership. You can manage your membership in your Google or
                Apple App management account at any time, where you handle all
                your other apps on your smartphone.
              </p>
              <br />
              <p>
                Enjoy the full LiVE! App experience and become a member by
                upgrading your user account now – simply press one of the
                membership options above and then you are only two clicks away
                from the VIP experience!
                <br />
                Enjoy your membership to the fullest!
              </p>
            </div>

            <div className="relative self-stretch font-instrument-sans-16pc-BOLD font-[number:var(--instrument-sans-16pc-BOLD-font-weight)] text-[#181c1f] text-[length:var(--instrument-sans-16pc-BOLD-font-size)] tracking-[var(--instrument-sans-16pc-BOLD-letter-spacing)] leading-[var(--instrument-sans-16pc-BOLD-line-height)] [font-style:var(--instrument-sans-16pc-BOLD-font-style)] mb-4">
              Your LiVE! VIP Team
            </div>
          </article>

          {/* Terms and Privacy Section */}
          <div className="relative self-stretch mb-8">
            <p className="[font-family:'Instrument_Sans',Helvetica] font-normal text-[#181c1f] text-base tracking-[0] leading-[20.8px]">
              <span>Our </span>

              <button
                onClick={() => handleTermsClick('terms')}
                className="underline font-instrument-sans-16px [font-style:var(--instrument-sans-16px-font-style)] font-[number:var(--instrument-sans-16px-font-weight)] tracking-[var(--instrument-sans-16px-letter-spacing)] text-[length:var(--instrument-sans-16px-font-size)] hover:text-[#333] focus:outline-none focus:ring-2 focus:ring-[#181c1f] focus:ring-offset-1 cursor-pointer transition-colors"
              >
                Terms of Use
              </button>

              <span> and </span>

              <button
                onClick={() => handleTermsClick('privacy')}
                className="underline font-instrument-sans-16px [font-style:var(--instrument-sans-16px-font-style)] font-[number:var(--instrument-sans-16px-font-weight)] tracking-[var(--instrument-sans-16px-letter-spacing)] text-[length:var(--instrument-sans-16px-font-size)] hover:text-[#333] focus:outline-none focus:ring-2 focus:ring-[#181c1f] focus:ring-offset-1 cursor-pointer transition-colors"
              >
                Privacy Policy.
              </button>
            </p>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="flex flex-col w-[390px] items-center gap-3 pt-2 pb-0 px-0 fixed left-[calc(50.00%_-_195px)] bottom-0 bg-[#ffffff1a] backdrop-blur-[15.75px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15.75px)_brightness(100%)] z-10">
        <div className="relative w-fit mt-[-1.00px] font-heading-l font-[number:var(--heading-l-font-weight)] text-[#000000] text-[length:var(--heading-l-font-size)] tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] whitespace-nowrap [font-style:var(--heading-l-font-style)]">
          In collaboration with
        </div>

        <div className="relative w-[390px] h-[77px] bg-[#000000] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]">
          <img
            className="absolute w-full h-[80.52%] top-[19.48%] left-0"
            alt="Footer background"
            src="https://c.animaapp.com/mg1dzdl7rwDI1b/img/rettangolo-271.svg"
          />

          <div className="absolute w-full h-[44.16%] top-[55.84%] left-0 flex items-end justify-center">
            <div className="mb-2 w-[134px] h-[5px] bg-white rounded-[100px]" />
          </div>

          <button
            onClick={() => window.open('https://www.coca-cola.com/', '_blank', 'noopener,noreferrer')}
            className="absolute h-[53.25%] top-[15.58%] left-[calc(50.00%_-_129px)] w-[259px] hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Visit The Coca-Cola Company"
          >
            <img
              className="w-full h-full"
              alt="Coca-Cola Company Logo"
              src="https://c.animaapp.com/mg1dzdl7rwDI1b/img/coke-company-logo-black-1.svg"
            />
          </button>
        </div>
      </footer>
    </div>
  );
};
