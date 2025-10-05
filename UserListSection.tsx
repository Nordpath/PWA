import React, { useState } from "react";

export const UserListSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>("Newest");
  const [isLoading, setIsLoading] = useState(false);

  const tabs = [
    { id: "newest", label: "Newest", isActive: true },
    { id: "popular", label: "Most popular", isActive: false },
    { id: "myposts", label: "My Posts", isActive: false },
  ];

  const handleTabClick = async (tabLabel: string) => {
    if (tabLabel === activeTab) return;
    
    setIsLoading(true);
    setActiveTab(tabLabel);
    
    try {
      // Simulate loading different content
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Navigate to different routes for different tabs
      switch (tabLabel) {
        case "Most popular":
          window.location.href = '/fanfeed-popular';
          break;
        case "My Posts":
          window.location.href = '/fanfeed-my-posts';
          break;
        default:
          console.log("Loading newest posts...");
      }
    } catch (error) {
      console.error('Error loading tab content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="z-[2] h-[35px] w-[390px] mt-[113px] flex flex-col"
      role="tablist"
      aria-label="User list filters"
    >
      <nav className="inline-flex ml-4 w-[358px] h-[34px] relative items-center">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.label}
            aria-controls={`${tab.id}-panel`}
            tabIndex={activeTab === tab.label ? 0 : -1}
            onClick={() => handleTabClick(tab.label)}
            disabled={isLoading}
            className={`${
              index === 0
                ? "w-[120px]"
                : index === 1
                  ? "w-[118px]"
                  : "w-[120px]"
            } flex flex-col items-center px-3 py-1.5 relative ${
              activeTab === tab.label
                ? "border-b-2 [border-bottom-style:solid] border-[#181c1f]"
                : ""
            } hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#181c1f] focus:ring-inset transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <span
              className={`relative w-fit mt-[-2.00px] ${
                index === 1 ? "ml-[-2.00px] mr-[-2.00px]" : ""
              } ${
                activeTab === tab.label
                  ? "font-body-m-bold font-[number:var(--body-m-bold-font-weight)] text-[#181c1f] text-[length:var(--body-m-bold-font-size)] tracking-[var(--body-m-bold-letter-spacing)] leading-[var(--body-m-bold-line-height)] [font-style:var(--body-m-bold-font-style)]"
                  : "font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[#5e5e5e] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] [font-style:var(--body-m-regular-font-style)]"
              } whitespace-nowrap`}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </nav>

      <div
        className="h-px w-[390px] self-center bg-gray-200"
        role="separator"
        aria-hidden="true"
      />
    </section>
  );
};
