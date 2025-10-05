import React, { useState } from "react";
import { CommentsWrapperSection } from "./sections/CommentsWrapperSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { ImageSection } from "./sections/ImageSection";

export const NewsOpenedPost = (): JSX.Element => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(19855);
  const [commentCount, setCommentCount] = useState(3456);
  const [showCommentInput, setShowCommentInput] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleCommentClick = () => {
    setShowCommentInput(true);
    // Scroll to comment input
    setTimeout(() => {
      const footer = document.querySelector('footer');
      footer?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Saudi Football Federation appoints Michel Salgado to coach U-15 national team',
      text: 'Check out this news about Michel Salgado\'s new coaching role!',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log('Article shared successfully');
      } else {
        // Fallback for browsers that don't support Web Share API
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.log('Error sharing:', error);
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (clipboardError) {
        console.log('Clipboard error:', clipboardError);
      }
    }
  };

  const handleMoreOptions = () => {
    const options = ['Share', 'Save Article', 'Report', 'Copy Link'];
    const choice = prompt(`Choose an option:\n${options.map((opt, i) => `${i + 1}. ${opt}`).join('\n')}`);
    
    switch (choice) {
      case '1':
        handleShare();
        break;
      case '2':
        console.log('Article saved');
        alert('Article saved to your reading list!');
        break;
      case '3':
        console.log('Article reported');
        alert('Article reported. Thank you for your feedback.');
        break;
      case '4':
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-white w-[390px] h-[844px] overflow-y-auto relative">
      <HeaderSection />

      {/* Scrollable Content Container */}
      <div className="pt-[110px] pb-[200px] px-4">
        {/* Article Image */}
        <div className="w-[358px] h-[251px] rounded-2xl overflow-hidden mb-6">
          <img
            className="w-full h-full object-cover"
            alt="News Image"
            src="https://c.animaapp.com/mg0ppmgsEAHMhd/img/image-14.png"
          />
        </div>

        <ImageSection />
        
        {/* Interactive Engagement Stats */}
        <div className="flex items-center gap-6 mb-6">
          {/* Like Button */}
          <button 
            onClick={handleLike}
            className={`inline-flex items-center gap-1 cursor-pointer hover:opacity-80 transition-all duration-200 ${isLiked ? 'text-red-500' : 'text-black'}`}
            aria-label={isLiked ? "Unlike this article" : "Like this article"}
          >
            <img 
              className={`relative w-6 h-6 transition-all duration-200 ${isLiked ? 'scale-110' : ''}`} 
              alt="Heart" 
              src="https://c.animaapp.com/mg0ppmgsEAHMhd/img/heart.svg" 
            />
            <div className="relative w-fit font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] whitespace-nowrap [font-style:var(--body-s-regular-font-style)]">
              {likeCount.toLocaleString()}
            </div>
          </button>

          {/* Comment Button */}
          <button 
            onClick={handleCommentClick}
            className="inline-flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity duration-200"
            aria-label="View and add comments"
          >
            <img className="relative w-6 h-6" alt="Comment" src="https://c.animaapp.com/mg0ppmgsEAHMhd/img/comment.svg" />
            <div className="relative w-fit font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#000000] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] whitespace-nowrap [font-style:var(--body-s-regular-font-style)]">
              {commentCount.toLocaleString()}
            </div>
          </button>

          {/* Share and More Options */}
          <div className="inline-flex items-center gap-4 ml-auto">
            <button
              onClick={handleShare}
              className="relative w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity duration-200"
              aria-label="Share this article"
            >
              <img
                className="relative w-6 h-6"
                alt="Share"
                src="https://c.animaapp.com/mg0ppmgsEAHMhd/img/send.svg"
              />
            </button>
            
            <button
              onClick={handleMoreOptions}
              className="flex w-6 h-6 items-center justify-center gap-2.5 p-2.5 relative cursor-pointer hover:opacity-80 transition-opacity duration-200"
              aria-label="More options"
            >
              <div className="inline-flex flex-col items-start gap-[2.92px] relative flex-[0_0_auto] mt-[-5.42px] mb-[-5.42px]">
                <div className="relative w-[3px] h-[3px] bg-[#000000] rounded-[1.5px]" />
                <div className="relative w-[3px] h-[3px] bg-[#000000] rounded-[1.5px]" />
                <div className="relative w-[3px] h-[3px] bg-[#000000] rounded-[1.5px]" />
              </div>
            </button>
          </div>
        </div>

        <ContentWrapperSection />
        <CommentsWrapperSection onCommentAdded={() => setCommentCount(prev => prev + 1)} />
      </div>

      <FooterSection showCommentInput={showCommentInput} onCommentAdded={() => setCommentCount(prev => prev + 1)} />
    </div>
  );
};
