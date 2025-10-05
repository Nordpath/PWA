import React from "react";
import { FanFeedSection } from "./sections/FanFeedSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { UserListSection } from "./sections/UserListSection";

// Create Post Button Component
const CreatePostButton: React.FC = () => {
  const [showCreatePost, setShowCreatePost] = React.useState(false);

  const handleCreatePost = () => {
    // Trigger the create post modal in FanFeedSection
    const event = new CustomEvent('openCreatePost');
    window.dispatchEvent(event);
  };

  return (
    <button
      className="flex w-14 h-14 items-center justify-center gap-[6.75px] p-[14.17px] absolute -top-16 left-[318px] bg-[#181c1f] rounded-[28px] shadow-[0px_4px_8.4px_#00000040] hover:bg-[#2a2e31] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#181c1f]"
      aria-label="Create new post"
      type="button"
      onClick={handleCreatePost}
    >
      <div className="relative w-5 h-5" aria-hidden="true">
        <div className="absolute top-px left-[9px] w-0.5 h-5 bg-white" />
        <div className="absolute top-px left-[9px] w-0.5 h-5 bg-white rotate-90" />
      </div>
    </button>
  );
};

export const FanfeedNewestTab = (): JSX.Element => {
  return (
    <main className="bg-white w-full min-w-[390px] min-h-[2947px] flex flex-col items-center relative">
      <NavigationBarSection />
      <UserListSection />
      <FanFeedSection />

      <footer className="flex z-[4] flex-col w-[390px] h-[121px] items-center justify-end gap-3 fixed left-[calc(50.00%_-_195px)] bottom-0 bg-[#ffffff1a] backdrop-blur-[16.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(16.7px)_brightness(100%)]">
        <h2 className="relative self-stretch font-heading-l font-[number:var(--heading-l-font-weight)] text-[#000000] text-[length:var(--heading-l-font-size)] text-center tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] [font-style:var(--heading-l-font-style)]">
          In collaboration with
        </h2>

        <button
          onClick={() => window.open('https://www.macron.com/', '_blank', 'noopener,noreferrer')}
          className="flex flex-col h-[79px] items-center justify-center gap-2.5 px-[72px] py-0 relative self-stretch w-full bg-[#1a1918] hover:bg-[#2a2a2a] transition-colors cursor-pointer"
          aria-label="Visit Macron"
        >
          <img
            className="relative w-[246px] h-[70px]"
            alt="Macron logo"
            src="https://c.animaapp.com/mg2nm57yKwYYTJ/img/image-16.svg"
          />
        </button>

        <div className="absolute left-0 bottom-0 w-[390px] h-9">
          <div className="absolute left-[calc(50.00%_-_67px)] bottom-2 w-[134px] h-[5px] bg-white rounded-[100px]" />
        </div>

        <CreatePostButton />
      </footer>
    </main>
  );
};
