import React, { useState } from "react";

interface Comment {
  id: string;
  username: string;
  comment: string;
  timeAgo: string;
  likes: number;
  replies: number;
  avatar: string;
}

const commentsData: Comment[] = [
  {
    id: "1",
    username: "Anna.P",
    comment: "Awesome!",
    timeAgo: "21h",
    likes: 24,
    replies: 17,
    avatar: "https://c.animaapp.com/mg0ppmgsEAHMhd/img/ellipse-22.svg",
  },
  {
    id: "2",
    username: "Linda.S",
    comment: "Impressive!",
    timeAgo: "20h",
    likes: 30,
    replies: 20,
    avatar: "https://c.animaapp.com/mg0ppmgsEAHMhd/img/ellipse-22-2.svg",
  },
  {
    id: "3",
    username: "Mark.T",
    comment: "Im shocked!",
    timeAgo: "19h",
    likes: 15,
    replies: 10,
    avatar: "https://c.animaapp.com/mg0ppmgsEAHMhd/img/ellipse-22-1.svg",
  },
  {
    id: "4",
    username: "James.W",
    comment: "Fantastic effort!",
    timeAgo: "18h",
    likes: 22,
    replies: 5,
    avatar: "https://c.animaapp.com/mg0ppmgsEAHMhd/img/ellipse-22.svg",
  },
];

const CommentItem: React.FC<{ comment: Comment; isLast: boolean }> = ({
  comment,
  isLast,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(comment.likes);
  const [showReplies, setShowReplies] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleReply = () => {
    console.log(`Reply to ${comment.username}`);
    alert(`Reply feature coming soon! You clicked reply to ${comment.username}`);
  };

  const handleViewReplies = () => {
    setShowReplies(!showReplies);
    console.log(`${showReplies ? 'Hide' : 'Show'} ${comment.replies} replies for ${comment.username}`);
  };

  const handleMoreOptions = () => {
    const options = ['Report Comment', 'Block User', 'Copy Comment'];
    const choice = prompt(`Choose an option for ${comment.username}'s comment:\n${options.map((opt, i) => `${i + 1}. ${opt}`).join('\n')}`);
    
    switch (choice) {
      case '1':
        alert('Comment reported. Thank you for your feedback.');
        break;
      case '2':
        alert(`User ${comment.username} has been blocked.`);
        break;
      case '3':
        navigator.clipboard.writeText(comment.comment);
        alert('Comment copied to clipboard!');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <article
        className="flex items-start gap-3 px-4 py-0 relative self-stretch w-full flex-[0_0_auto]"
        role="article"
        aria-label={`Comment by ${comment.username}`}
      >
        <img
          className="relative w-11 h-11 object-cover rounded-full"
          alt={`${comment.username} profile picture`}
          src={comment.avatar}
        />

        <div className="flex flex-col items-start gap-1 relative flex-1 grow">
          <div className="relative self-stretch mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#6b6666] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]">
            {comment.username}
          </div>

          <div className="relative self-stretch font-body-s-bold font-[number:var(--body-s-bold-font-weight)] text-[#000000] text-[length:var(--body-s-bold-font-size)] tracking-[var(--body-s-bold-letter-spacing)] leading-[var(--body-s-bold-line-height)] [font-style:var(--body-s-bold-font-style)]">
            {comment.comment}
          </div>

          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <time className="relative w-fit mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#6b6666] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] whitespace-nowrap [font-style:var(--body-s-regular-font-style)]">
                {comment.timeAgo}
              </time>

              <button
                className="relative w-fit mt-[-1.00px] font-body-s-bold font-[number:var(--body-s-bold-font-weight)] text-[#6b6666] text-[length:var(--body-s-bold-font-size)] tracking-[var(--body-s-bold-letter-spacing)] leading-[var(--body-s-bold-line-height)] whitespace-nowrap [font-style:var(--body-s-bold-font-style)] cursor-pointer hover:text-[#000000] transition-colors"
                onClick={handleReply}
                aria-label={`Reply to ${comment.username}`}
              >
                Reply
              </button>
            </div>

            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <button
                onClick={handleLike}
                className={`inline-flex items-center relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-all duration-200 ${isLiked ? 'text-red-500' : 'text-[#6b6666]'}`}
                aria-label={`${isLiked ? "Unlike" : "Like"} comment by ${comment.username}`}
              >
                <img
                  className={`relative w-6 h-6 transition-all duration-200 ${isLiked ? 'scale-110' : ''}`}
                  alt="Heart icon"
                  src="https://c.animaapp.com/mg0ppmgsEAHMhd/img/cil-heart.svg"
                />

                <span className="relative w-fit font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] whitespace-nowrap [font-style:var(--body-s-regular-font-style)]">
                  {likeCount}
                </span>
              </button>

              <button
                className="flex w-6 h-6 items-center justify-center gap-2.5 relative cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleMoreOptions}
                aria-label={`More options for ${comment.username}'s comment`}
              >
                <div className="inline-flex flex-col items-start gap-[2.92px] relative flex-[0_0_auto]">
                  <div className="relative w-[3px] h-[3px] bg-[#6b6666] rounded-[1.5px]" />
                  <div className="relative w-[3px] h-[3px] bg-[#6b6666] rounded-[1.5px]" />
                  <div className="relative w-[3px] h-[3px] bg-[#6b6666] rounded-[1.5px]" />
                </div>
              </button>
            </div>
          </div>

          <button
            className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleViewReplies}
            aria-label={`View ${comment.replies} replies to ${comment.username}'s comment`}
          >
            <img
              className="relative w-[25px] h-px object-cover"
              alt="Reply line"
              src="https://c.animaapp.com/mg0ppmgsEAHMhd/img/vector-4.svg"
            />

            <span className="relative w-fit font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#6b6666] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] whitespace-nowrap [font-style:var(--body-s-regular-font-style)]">
              {showReplies ? 'Hide' : 'View'} {comment.replies} replies
            </span>

            <img
              className={`relative w-6 h-6 transition-transform duration-200 ${showReplies ? 'rotate-180' : ''}`}
              alt="Expand replies"
              src="https://c.animaapp.com/mg0ppmgsEAHMhd/img/frame-1171277295.svg"
            />
          </button>
        </div>
      </article>

      {showReplies && (
        <div className="ml-8 mt-2 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 italic">
            Replies feature coming soon! {comment.replies} replies would be shown here.
          </p>
        </div>
      )}

      {!isLast && (
        <img
          className="relative w-[390px] h-px object-cover"
          alt="Comment separator"
          src="https://c.animaapp.com/mg0ppmgsEAHMhd/img/vector-6.svg"
        />
      )}
    </>
  );
};

interface CommentsWrapperProps {
  onCommentAdded?: () => void;
}

export const CommentsWrapperSection = ({ onCommentAdded }: CommentsWrapperProps): JSX.Element => {
  const [comments, setComments] = useState(commentsData);

  const addComment = (newComment: Omit<Comment, 'id'>) => {
    const comment: Comment = {
      ...newComment,
      id: Date.now().toString(),
    };
    setComments(prev => [comment, ...prev]);
    onCommentAdded?.();
  };

  return (
    <section
      className="flex flex-col w-full items-start gap-4"
      role="region"
      aria-label="Comments section"
    >
      <header className="inline-flex items-center justify-center gap-2.5 px-4 py-0 relative flex-[0_0_auto]">
        <h2 className="relative w-fit mt-[-1.00px] font-body-l-bold font-[number:var(--body-l-bold-font-weight)] text-[#000000] text-[length:var(--body-l-bold-font-size)] tracking-[var(--body-l-bold-letter-spacing)] leading-[var(--body-l-bold-line-height)] whitespace-nowrap [font-style:var(--body-l-bold-font-style)]">
          {comments.length} comments
        </h2>
      </header>

      <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
        {comments.map((comment, index) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            isLast={index === comments.length - 1}
          />
        ))}
      </div>
    </section>
  );
};
