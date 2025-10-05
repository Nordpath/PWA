import React, { useState } from "react";

interface FooterSectionProps {
  showCommentInput?: boolean;
  onCommentAdded?: () => void;
}

export const FooterSection = ({ showCommentInput = false, onCommentAdded }: FooterSectionProps): JSX.Element => {
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCommentSubmit = async () => {
    if (comment.trim()) {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      console.log("Comment submitted:", comment);
      
      // Add comment to the list (this would normally be handled by the parent component)
      onCommentAdded?.();
      
      setComment("");
      setIsSubmitting(false);
      
      // Show success feedback
      const submitButton = document.querySelector('[aria-label="Submit comment"]');
      if (submitButton) {
        submitButton.classList.add('animate-pulse');
        setTimeout(() => {
          submitButton.classList.remove('animate-pulse');
        }, 1000);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleCommentSubmit();
    }
  };

  return (
    <footer className="flex flex-col w-[390px] items-center gap-4 pt-2 pb-0 px-0 fixed left-[calc(50.00%_-_195px)] bottom-0 bg-white border-t [border-top-style:solid] border-[#e3e3e3]">
      <div className="flex items-center justify-center gap-2 px-4 py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className={`flex items-center gap-1 px-4 py-3.5 relative flex-1 grow rounded-[34px] overflow-hidden border border-solid transition-colors duration-200 ${
          showCommentInput ? 'border-blue-400 bg-blue-50/30' : 'border-[#e3e3e3]'
        }`}>
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] flex-1">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Write a comment..."
              className={`w-full bg-transparent outline-none border-none font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] placeholder:text-[#5e5e5e] [font-style:var(--body-s-regular-font-style)] ${
                comment.trim() ? 'text-[#000000]' : 'text-[#5e5e5e]'
              }`}
              aria-label="Write a comment"
              autoFocus={showCommentInput}
            />
          </div>
        </div>

        <button
          onClick={handleCommentSubmit}
          disabled={!comment.trim() || isSubmitting}
          className={`relative w-[50px] h-[50px] transition-all duration-200 ${
            comment.trim() && !isSubmitting
              ? 'cursor-pointer hover:opacity-80 hover:scale-105'
              : 'opacity-50 cursor-not-allowed'
          }`}
          aria-label="Submit comment"
        >
          {isSubmitting ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          ) : (
            <img
              className="w-full h-full"
              alt="Submit comment"
              src="https://c.animaapp.com/mg0ppmgsEAHMhd/img/arrow-bottom-right.svg"
            />
          )}
        </button>
      </div>

      <div className="flex flex-col w-[390px] items-center gap-3 relative flex-[0_0_auto]">
        <h2 className="relative w-fit mt-[-1.00px] font-heading-l font-[number:var(--heading-l-font-weight)] text-[#000000] text-[length:var(--heading-l-font-size)] tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] whitespace-nowrap [font-style:var(--heading-l-font-style)]">
          In collaboration with
        </h2>

        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] bg-[#000000] backdrop-blur-[18.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.35px)_brightness(100%)]">
          <div className="flex flex-col h-[72px] items-start justify-center gap-2.5 pl-0 pr-2.5 py-2.5 relative self-stretch w-full bg-[#000000]">
            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <button
                onClick={() => window.open('https://liveapps.ch', '_blank', 'noopener,noreferrer')}
                className="flex w-[274px] h-[38px] items-center justify-center gap-2.5 p-2.5 relative bg-white hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Visit LiveApps.ch"
              >
                <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'D-DIN_Exp-Bold',Helvetica] font-bold text-[#000000] text-xl tracking-[0.40px] leading-[26px] whitespace-nowrap">
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
                  alt="Partner logo"
                  src="https://c.animaapp.com/mg0ppmgsEAHMhd/img/frame-1171277528.svg"
                />
              </button>
            </div>
          </div>

          <div className="absolute w-full left-0 bottom-0 h-9">
            <div className="absolute left-[calc(50.00%_-_67px)] bottom-2 w-[134px] h-[5px] bg-white rounded-[100px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
