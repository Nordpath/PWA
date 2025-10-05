import React, { useState } from "react";

export const UserProfileSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"profile" | "privacy">("profile");

  const tabs = [
    {
      id: "profile" as const,
      label: "User profile",
      isActive: activeTab === "profile",
    },
    {
      id: "privacy" as const,
      label: "Privacy",
      isActive: activeTab === "privacy",
    },
  ];

  const handleTabClick = (tabId: "profile" | "privacy") => {
    setActiveTab(tabId);
  };

  return (
    <nav
      className="flex w-[358px] items-center justify-between absolute top-[107px] left-4"
      role="tablist"
      aria-label="Profile navigation"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={tab.isActive}
          aria-controls={`${tab.id}-panel`}
          tabIndex={tab.isActive ? 0 : -1}
          onClick={() => handleTabClick(tab.id)}
          className={`flex flex-col w-[179px] items-center px-3 py-1.5 relative ${
            tab.isActive
              ? "border-b-2 [border-bottom-style:solid] border-[#181c1f]"
              : "border-b-2 [border-bottom-style:solid] border-transparent hover:border-[#cccccc] transition-colors duration-200"
          }`}
        >
          <span
            className={`relative w-fit ${
              tab.isActive ? "mt-[-2.00px]" : "mt-[-3.00px]"
            } font-instrument-sans-18px font-[number:var(--instrument-sans-18px-font-weight)] ${
              tab.isActive
                ? "text-[#181c1f]"
                : "text-[#999999] hover:text-[#666666] transition-colors duration-200"
            } text-[length:var(--instrument-sans-18px-font-size)] tracking-[var(--instrument-sans-18px-letter-spacing)] leading-[var(--instrument-sans-18px-line-height)] whitespace-nowrap [font-style:var(--instrument-sans-18px-font-style)]`}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </nav>
  );
};
