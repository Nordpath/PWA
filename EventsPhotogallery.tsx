import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RealTimeClock } from "../../../components/RealTimeClock";
import { StatusBar } from "../../../components/StatusBar";

export const EventsPhotogallery = (): JSX.Element => {
  const navigate = useNavigate();
  const [likes, setLikes] = useState(19855);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState(3456);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleBackClick = () => {
    navigate('/about-me');
  };

  const galleryImages = [
    "https://c.animaapp.com/mg44eyq0JLQBEk/img/image-8.png",
    "https://c.animaapp.com/mg44eyq0JLQBEk/img/image-8.png",
    "https://c.animaapp.com/mg44eyq0JLQBEk/img/image-8.png",
    "https://c.animaapp.com/mg44eyq0JLQBEk/img/image-8.png",
    "https://c.animaapp.com/mg44eyq0JLQBEk/img/image-8.png",
    "https://c.animaapp.com/mg44eyq0JLQBEk/img/image-8.png",
    "https://c.animaapp.com/mg44eyq0JLQBEk/img/image-8.png",
    "https://c.animaapp.com/mg44eyq0JLQBEk/img/image-8.png",
    "https://c.animaapp.com/mg44eyq0JLQBEk/img/image-8.png",
  ];

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);

    // Haptic feedback simulation
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleComment = () => {
    const comment = prompt('💬 Add a comment to this article:');
    if (comment && comment.trim()) {
      setComments(prev => prev + 1);
      alert(`Comment added: "${comment.trim()}"`);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Premier Futsal signs former Real Madrid defender Michel Salgado on 3-year deal',
      text: 'Check out this news about Michel Salgado\'s Premier Futsal signing!',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log('Article shared successfully');
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.log('Error sharing:', error);
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

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="bg-white w-[390px] h-[844px] relative overflow-hidden">
      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-full max-h-full">
            <img
              src={galleryImages[selectedImageIndex]}
              alt={`Gallery image ${selectedImageIndex + 1} - full view`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Close image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

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
              className="relative w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity"
              aria-label="Go back to About Me"
            >
              <img
                className="relative w-6 h-6"
                alt="Back arrow"
                src="https://c.animaapp.com/mg44eyq0JLQBEk/img/frame-1171277295.svg"
              />
            </button>

            <h1 className="relative w-fit mt-[-1.00px] font-heading-XL font-[number:var(--heading-XL-font-weight)] text-[#181c1f] text-[length:var(--heading-XL-font-size)] tracking-[var(--heading-XL-letter-spacing)] leading-[var(--heading-XL-line-height)] whitespace-nowrap [font-style:var(--heading-XL-font-style)]">
              PHOTO GALLERY
            </h1>
          </div>

          <button
            className="flex flex-col w-[25px] items-end gap-1.5 relative cursor-pointer hover:opacity-70 transition-opacity"
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
                root.render(React.createElement(HamburgerMenu, { onClose: closeMenu, currentScreen: 'about-me' }));
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
      <div className="pt-[120px] pb-[120px] overflow-y-auto h-full">
        {/* Article Header */}
        <section className="flex flex-col w-[358px] items-start gap-1.5 mx-auto mb-6 px-4">
          <h2 className="relative self-stretch mt-[-1.00px] font-body-m-bold font-[number:var(--body-m-bold-font-weight)] text-[#181c1f] text-[length:var(--body-m-bold-font-size)] tracking-[var(--body-m-bold-letter-spacing)] leading-[var(--body-m-bold-line-height)] [font-style:var(--body-m-bold-font-style)]">
            Premier Futsal signs former Real Madrid defender Michel Salgado on
            3-year deal
          </h2>

          <time className="relative self-stretch font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#5e5e5e] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]">
            Jun 27, 2016
          </time>
        </section>

        {/* Featured Image */}
        <article className="w-[358px] h-[251px] mx-auto mb-6 rounded-2xl overflow-hidden shadow-[2px_4px_5.8px_#00000026] bg-[url(https://c.animaapp.com/mg44eyq0JLQBEk/img/image-14.png)] bg-cover bg-[50%_50%] relative cursor-pointer hover:scale-[1.02] transition-transform duration-200">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]" />
        </article>

        {/* Article Actions */}
        <section
          className="flex w-[358px] items-center justify-between mx-auto mb-6 px-4"
          role="toolbar"
          aria-label="Article actions"
        >
          <div className="inline-flex items-center gap-[18px] relative flex-[0_0_auto]">
            <button
              className={`inline-flex items-center gap-1 relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-all duration-200 ${isLiked ? 'text-red-500' : 'text-[#000000]'}`}
              onClick={handleLike}
              aria-label={`${isLiked ? "Unlike" : "Like"} this article - ${likes} likes`}
            >
              <svg 
                className={`w-6 h-6 transition-all duration-200 ${isLiked ? 'fill-current scale-110' : 'stroke-current fill-none'}`} 
                viewBox="0 0 24 24" 
                strokeWidth={2}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>

              <span className="relative w-fit font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] whitespace-nowrap [font-style:var(--body-s-regular-font-style)]">
                {likes.toLocaleString()}
              </span>
            </button>

            <button
              className="inline-flex items-center gap-1 relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleComment}
              aria-label={`View and add comments - ${comments} comments`}
            >
              <svg className="w-6 h-6 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>

              <span className="relative w-fit font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#000000] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] whitespace-nowrap [font-style:var(--body-s-regular-font-style)]">
                {comments.toLocaleString()}
              </span>
            </button>
          </div>

          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <button
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleShare}
              aria-label="Share article"
            >
              <svg className="w-6 h-6 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>

            <button
              className="flex w-6 h-6 items-center justify-center gap-2.5 p-2.5 relative cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleMoreOptions}
              aria-label="More options"
            >
              <div className="inline-flex flex-col items-start gap-[2.92px] relative flex-[0_0_auto] mt-[-5.42px] mb-[-5.42px]">
                <div className="relative w-[3px] h-[3px] bg-[#000000] rounded-[1.5px]" />
                <div className="relative w-[3px] h-[3px] bg-[#000000] rounded-[1.5px]" />
                <div className="relative w-[3px] h-[3px] bg-[#000000] rounded-[1.5px]" />
              </div>
            </button>
          </div>
        </section>

        {/* Article Content */}
        <main className="flex flex-col w-[358px] items-start gap-2 mx-auto mb-8 px-4">
          <p className="relative self-stretch mt-[-1.00px] font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[#181c1f] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] [font-style:var(--body-m-regular-font-style)]">
            The world&apos;s first-ever multinational Futsal league, Premier
            Futsal, announced on Monday that they have signed former Spain and
            Real Madrid defender Michel Salgado on a three-year deal.
            <br />
            <br />
            The world&apos;s first-ever multinational Futsal league, Premier
            Futsal, announced on Monday that they have signed former Spain and
            Real Madrid defender Michel Salgado on a three-year deal.
            <br />
            <br />
            Salgado, part of Real Madrid&apos;s star-studded
            &apos;Galacticos&apos; line-up that also included Zinedine Zidane and
            David Beckham, has won four La Liga titles, two UEFA Champions League
            crowns and an Inter-Continental Cup during his career.
            <br />
            <br />
            The defender, who after a decade at Real Madrid moved to Blackburn
            Rovers for a three-year stint in the English Premier League, also made
            53 appearances for Spain.
            <br />
            His signing marked a major coup for Premier Futsal, after the league
            roped in former Manchester United star Paul Scholes, FC Porto and
            Barcelona Champions League winner Deco and global futsal legend
            Alessandro Rosa Vieira, fondly known as Falcao, to name a few.
            <br />
            &quot;Futsal is an extremely underrated sport. It has been the
            breeding ground for some of the biggest names in football the world
            over and I&apos;m glad Premier Futsal in India is creating a platform
            that can showcase the sport and give it its due,&quot; Salgado said in
            a release.
          </p>
        </main>

        {/* Photo Gallery */}
        <section
          className="flex flex-wrap w-[358px] items-start gap-[6px_7px] mx-auto px-4 mb-8"
          aria-label="Photo gallery"
        >
          <h3 className="w-full text-lg font-bold text-[#181c1f] mb-4">Photo Gallery</h3>
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(index)}
              className={`relative ${index % 3 === 1 ? "w-[114px]" : "w-[115px]"} h-[108px] cursor-pointer hover:opacity-80 transition-all duration-200 hover:scale-105 rounded-lg overflow-hidden`}
              aria-label={`View gallery image ${index + 1} in full size`}
            >
              <img
                className="w-full h-full object-cover"
                alt={`Gallery image ${index + 1}`}
                src={image}
                loading="lazy"
              />
            </button>
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer className="flex flex-col w-[390px] items-center gap-3 pt-2 pb-0 px-0 fixed left-[calc(50.00%_-_195px)] bottom-0 bg-[#ffffff1a] backdrop-blur-[8.6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8.6px)_brightness(100%)] z-10">
        <p className="relative w-fit mt-[-1.00px] font-heading-l font-[number:var(--heading-l-font-weight)] text-[#000000] text-[length:var(--heading-l-font-size)] tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] whitespace-nowrap [font-style:var(--heading-l-font-style)]">
          In collaboration with
        </p>

        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] bg-[#000000] backdrop-blur-[18.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.35px)_brightness(100%)]">
          <div className="flex flex-col h-[72px] items-start justify-center gap-2.5 pl-0 pr-2.5 py-2.5 relative self-stretch w-full bg-[#000000]">
            <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <button
                onClick={() => window.open('https://liveapps.ch', '_blank', 'noopener,noreferrer')}
                className="flex w-[274px] h-[38px] items-center justify-center gap-2.5 p-2.5 relative bg-white hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Visit LiveApps.ch"
              >
                <span className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'D-DIN_Exp-Bold',Helvetica] font-bold text-[#000000] text-xl tracking-[0.40px] leading-[26px] whitespace-nowrap">
                  FAN EXPERIENCE 3.0
                </span>
              </button>

              <button
                onClick={() => window.open('https://liveapps.ch', '_blank', 'noopener,noreferrer')}
                className="relative w-[94px] h-[38px] hover:opacity-80 transition-opacity cursor-pointer"
                aria-label="Visit LiveApps.ch"
              >
                <img
                  className="w-full h-full"
                  alt="Partner logo"
                  src="https://c.animaapp.com/mg44eyq0JLQBEk/img/frame-1171277528.svg"
                />
              </button>
            </div>
          </div>

          <div className="absolute w-full left-0 bottom-0 h-9">
            <div className="absolute left-[calc(50.00%_-_67px)] bottom-2 w-[134px] h-[5px] bg-white rounded-[100px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};
