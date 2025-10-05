import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RealTimeClock } from "../../../components/RealTimeClock";
import { StatusBar } from "../../../components/StatusBar";

interface UserPost {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  timestamp: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  hasImage: boolean;
  status: "published" | "in_review" | "draft" | "rejected";
}

// User's own posts with different statuses
const userPosts: UserPost[] = [
  {
    id: "1",
    author: {
      name: "You",
      avatar: "https://c.animaapp.com/mg2q83agyuJM37/img/frame-1171277469.png",
    },
    timestamp: "18 Feb. 17:45",
    content: "Just finished an amazing training session! 💪⚽",
    image: "https://c.animaapp.com/mg2q83agyuJM37/img/frame-1171277469.png",
    likes: 0,
    comments: 0,
    hasImage: true,
    status: "in_review",
  },
  {
    id: "2",
    author: {
      name: "You",
      avatar: "https://c.animaapp.com/mg2q83agyuJM37/img/frame-1171277469.png",
    },
    timestamp: "17 Feb. 14:30",
    content: "What an incredible match! Football is pure passion! 🔥⚽",
    likes: 45,
    comments: 12,
    hasImage: false,
    status: "published",
  },
  {
    id: "3",
    author: {
      name: "You",
      avatar: "https://c.animaapp.com/mg2q83agyuJM37/img/frame-1171277469.png",
    },
    timestamp: "16 Feb. 09:15",
    content: "Working on my new post about football techniques...",
    likes: 0,
    comments: 0,
    hasImage: false,
    status: "draft",
  },
];

interface UserPostItemProps {
  post: UserPost;
  onLike: (postId: string) => void;
  onComment: (postId: string) => void;
  onEdit: (postId: string) => void;
  onDelete: (postId: string) => void;
  onPublish: (postId: string) => void;
  isLiked: boolean;
}

const UserPostItem: React.FC<UserPostItemProps> = ({
  post,
  onLike,
  onComment,
  onEdit,
  onDelete,
  onPublish,
  isLiked,
}) => {
  const getStatusBadge = (status: UserPost['status']) => {
    switch (status) {
      case "published":
        return (
          <div className="inline-flex items-start gap-1 px-3 py-1 relative flex-[0_0_auto] bg-[#def7ec] rounded-[32px] border border-solid border-[#41a675b2]">
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#046938] text-[length:var(--body-s-regular-font-size)] text-center tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] whitespace-nowrap [font-style:var(--body-s-regular-font-style)]">
              ✅ Published
            </span>
          </div>
        );
      case "in_review":
        return (
          <div className="inline-flex items-start gap-1 px-3 py-1 relative flex-[0_0_auto] bg-[#fff9f1] rounded-[32px] border border-solid border-[#f2a241]">
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#ab5f03] text-[length:var(--body-s-regular-font-size)] text-center tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] whitespace-nowrap [font-style:var(--body-s-regular-font-style)]">
              ⏳ In review
            </span>
          </div>
        );
      case "draft":
        return (
          <div className="inline-flex items-start gap-1 px-3 py-1 relative flex-[0_0_auto] bg-[#f3f4f6] rounded-[32px] border border-solid border-[#9ca3af]">
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#6b7280] text-[length:var(--body-s-regular-font-size)] text-center tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] whitespace-nowrap [font-style:var(--body-s-regular-font-style)]">
              📝 Draft
            </span>
          </div>
        );
      case "rejected":
        return (
          <div className="inline-flex items-start gap-1 px-3 py-1 relative flex-[0_0_auto] bg-[#fef2f2] rounded-[32px] border border-solid border-[#fca5a5]">
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#dc2626] text-[length:var(--body-s-regular-font-size)] text-center tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] whitespace-nowrap [font-style:var(--body-s-regular-font-style)]">
              ❌ Rejected
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNTAgMTAwTDEyNSA3NUwxNzUgNzVMMTUwIDEwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
  };

  return (
    <article className="flex flex-col w-[358px] items-end gap-3 relative flex-[0_0_auto] px-4">
      <header className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="relative w-11 h-11 object-cover rounded-full border border-gray-200"
          alt={`${post.author.name}'s profile picture`}
          src={post.author.avatar}
          onError={handleImageError}
          loading="lazy"
        />

        <div className="flex flex-col w-[296px] items-start gap-1 relative">
          <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative w-fit mt-[-1.00px] font-body-m-bold font-[number:var(--body-m-bold-font-weight)] text-[#000000] text-[length:var(--body-m-bold-font-size)] tracking-[var(--body-m-bold-letter-spacing)] leading-[var(--body-m-bold-line-height)] whitespace-nowrap [font-style:var(--body-m-bold-font-style)]">
              {post.author.name}
            </h2>

            <time className="relative w-fit [font-family:'Instrument_Sans',Helvetica] font-normal text-[#6b6666] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
              {post.timestamp}
            </time>
          </div>

          <p className="relative w-[302px] mr-[-6.00px] font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[#000000] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] break-words [font-style:var(--body-m-regular-font-style)]">
            {post.content}
          </p>
        </div>
      </header>

      <div className="flex flex-col w-[302px] items-start gap-2 relative flex-[0_0_auto]">
        {post.hasImage && post.image ? (
          <div className="flex flex-col h-[201px] items-start gap-2.5 p-4 relative self-stretch w-full rounded-2xl overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
            {getStatusBadge(post.status)}
          </div>
        ) : (
          <div className="flex flex-col h-[120px] items-start gap-2.5 p-4 relative self-stretch w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            {getStatusBadge(post.status)}
          </div>
        )}

        <footer className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <button
              className={`inline-flex items-center gap-1 relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-all duration-200 ${isLiked ? 'text-red-500' : 'text-[#6b6666]'}`}
              aria-label={`${isLiked ? 'Unlike' : 'Like'} post - ${post.likes} likes`}
              onClick={() => onLike(post.id)}
              disabled={post.status !== "published"}
            >
              <svg 
                className={`w-6 h-6 transition-all duration-200 ${isLiked ? 'fill-current scale-110' : 'stroke-current fill-none'}`} 
                viewBox="0 0 24 24" 
                strokeWidth={2}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>

              <span className="relative w-fit [font-family:'Instrument_Sans',Helvetica] font-normal text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
                {post.likes}
              </span>
            </button>

            <button
              className="inline-flex items-center gap-1 relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity text-[#6b6666]"
              aria-label={`Comment on post - ${post.comments} comments`}
              onClick={() => onComment(post.id)}
              disabled={post.status !== "published"}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>

              <span className="relative w-fit [font-family:'Instrument_Sans',Helvetica] font-normal text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
                {post.comments}
              </span>
            </button>

            {/* Edit/Publish Button for drafts and rejected posts */}
            {(post.status === "draft" || post.status === "rejected") && (
              <button
                className="inline-flex items-center gap-1 relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity text-blue-600"
                aria-label="Edit post"
                onClick={() => onEdit(post.id)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span className="text-sm">Edit</span>
              </button>
            )}

            {/* Publish Button for drafts */}
            {post.status === "draft" && (
              <button
                className="inline-flex items-center gap-1 relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity text-green-600"
                aria-label="Publish post"
                onClick={() => onPublish(post.id)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="text-sm">Publish</span>
              </button>
            )}
          </div>

          <button
            className="relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity p-1 rounded-full hover:bg-gray-100"
            aria-label="More options"
            onClick={() => {
              const options = [
                '✏️ Edit Post',
                '📤 Share Post',
                '📊 View Analytics',
                '🗑️ Delete Post',
                '❌ Cancel'
              ];

              const choice = prompt(`Choose an option for your post:\n\n${options.map((opt, i) => `${i + 1}. ${opt}`).join('\n')}`);
              
              switch (choice) {
                case '1':
                  onEdit(post.id);
                  break;
                case '2':
                  navigator.clipboard.writeText(`${post.content}\n\n- ${post.author.name}`);
                  alert('📋 Post content copied to clipboard!');
                  break;
                case '3':
                  alert(`📊 Post Analytics:\n\n• Views: ${Math.floor(Math.random() * 1000) + 100}\n• Reach: ${Math.floor(Math.random() * 500) + 50}\n• Engagement Rate: ${Math.floor(Math.random() * 10) + 5}%`);
                  break;
                case '4':
                  onDelete(post.id);
                  break;
                default:
                  break;
              }
            }}
          >
            <svg className="w-5 h-5 text-[#6b6666]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </footer>
      </div>
    </article>
  );
};

export const FanfeedMyPosts = (): JSX.Element => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("My Posts");
  const [posts, setPosts] = useState(userPosts);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [showCreatePost, setShowCreatePost] = useState(false);

  const handleBackClick = () => {
    navigate('/menu');
  };

  const tabs = [
    { id: "newest", name: "Newest", route: "/fanfeed" },
    { id: "popular", name: "Most popular", route: "/fanfeed-popular" },
    { id: "myposts", name: "My Posts", route: "/fanfeed-my-posts" },
  ];

  const handleTabClick = (tabName: string, route: string) => {
    if (tabName === activeTab) return;
    
    setActiveTab(tabName);
    
    // Navigate to different routes for different tabs
    if (route !== "/fanfeed-my-posts") {
      navigate(route);
    }
  };

  const handleLike = (postId: string) => {
    const isCurrentlyLiked = likedPosts.has(postId);
    
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (isCurrentlyLiked) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });

    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + (isCurrentlyLiked ? -1 : 1) }
        : post
    ));

    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleComment = (postId: string) => {
    const post = posts.find(p => p.id === postId);
    if (post) {
      const comment = prompt(`💬 Add a comment to your post:`);
      if (comment && comment.trim()) {
        setPosts(prev => prev.map(p => 
          p.id === postId 
            ? { ...p, comments: p.comments + 1 }
            : p
        ));
        alert(`Comment added: "${comment.trim()}"`);
      }
    }
  };

  const handleEdit = (postId: string) => {
    const post = posts.find(p => p.id === postId);
    if (post) {
      const newContent = prompt(`✏️ Edit your post:`, post.content);
      if (newContent && newContent.trim()) {
        setPosts(prev => prev.map(p => 
          p.id === postId 
            ? { ...p, content: newContent.trim(), status: "in_review" as const }
            : p
        ));
        alert('✏️ Post updated and submitted for review!');
      }
    }
  };

  const handleDelete = (postId: string) => {
    const confirmed = confirm('🗑️ Are you sure you want to delete this post?\n\nThis action cannot be undone.');
    if (confirmed) {
      setPosts(prev => prev.filter(p => p.id !== postId));
      alert('🗑️ Post deleted successfully.');
    }
  };

  const handlePublish = (postId: string) => {
    const confirmed = confirm('📤 Are you sure you want to publish this post?\n\nIt will be visible to all users.');
    if (confirmed) {
      setPosts(prev => prev.map(p => 
        p.id === postId 
          ? { ...p, status: "in_review" as const }
          : p
      ));
      alert('📤 Post submitted for review and will be published soon!');
    }
  };

  const handleCreatePost = () => {
    setShowCreatePost(true);
  };

  // Listen for create post events from the floating button
  React.useEffect(() => {
    const handleOpenCreatePost = () => {
      setShowCreatePost(true);
    };

    window.addEventListener('openCreatePost', handleOpenCreatePost);
    return () => window.removeEventListener('openCreatePost', handleOpenCreatePost);
  }, []);

  const handleCloseCreatePost = () => {
    setShowCreatePost(false);
  };

  const handleSubmitPost = (newPost: Omit<UserPost, 'id' | 'likes' | 'comments'>) => {
    const post: UserPost = {
      ...newPost,
      id: Date.now().toString(),
      likes: 0,
      comments: 0,
    };
    
    setPosts(prev => [post, ...prev]);
    setShowCreatePost(false);
    alert('✨ Post created and submitted for review!');
  };

  const getPostStats = () => {
    const published = posts.filter(p => p.status === "published").length;
    const inReview = posts.filter(p => p.status === "in_review").length;
    const drafts = posts.filter(p => p.status === "draft").length;
    const totalLikes = posts.reduce((sum, p) => sum + p.likes, 0);
    
    return { published, inReview, drafts, totalLikes };
  };

  const stats = getPostStats();

  return (
    <div className="bg-white w-[390px] h-[844px] flex flex-col items-center relative overflow-hidden">
      {/* Create Post Modal */}
      {showCreatePost && (
        <CreatePostModal 
          onClose={handleCloseCreatePost}
          onSubmit={handleSubmitPost}
        />
      )}

      {/* Header */}
      <header className="flex z-[4] flex-col w-[390px] items-center gap-3 pt-0 pb-3 px-0 fixed top-0 left-[calc(50.00%_-_195px)] bg-white">
        <div className="relative self-stretch w-full h-11">
          <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
            <RealTimeClock 
              className="w-[54px] h-5 font-default-bold-body font-[number:var(--default-bold-body-font-weight)] text-[#181c1f] text-[length:var(--default-bold-body-font-size)] text-center tracking-[var(--default-bold-body-letter-spacing)] leading-[var(--default-bold-body-line-height)] whitespace-nowrap [font-style:var(--default-bold-body-font-style)]"
              textColor="text-[#181c1f]"
            />
          </div>

          <StatusBar className="text-[#181c1f]" />
        </div>

        <nav
          className="flex w-[358px] items-center justify-between relative flex-[0_0_auto]"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <button
              onClick={handleBackClick}
              className="relative w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              aria-label="Go back to menu"
            >
              <img
                className="w-full h-full"
                alt="Back"
                src="https://c.animaapp.com/mg2q83agyuJM37/img/frame-1171277295.svg"
              />
            </button>

            <h1 className="relative w-fit mt-[-1.00px] font-heading-XL font-[number:var(--heading-XL-font-weight)] text-[#181c1f] text-[length:var(--heading-XL-font-size)] tracking-[var(--heading-XL-letter-spacing)] leading-[var(--heading-XL-line-height)] whitespace-nowrap [font-style:var(--heading-XL-font-style)]">
              FANFEED
            </h1>
          </div>

          <button
            className="flex flex-col w-[25px] items-end gap-1.5 relative focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-1 cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Open menu"
            aria-expanded="false"
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
                root.render(React.createElement(HamburgerMenu, { onClose: closeMenu, currentScreen: 'fanfeed' }));
              });
            }}
          >
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
          </button>
        </nav>
      </header>

      {/* Tab Navigation */}
      <div className="z-[1] h-[35px] w-[390px] mt-[114px] flex flex-col">
        <nav
          className="inline-flex ml-4 w-[358px] h-[34px] relative items-center"
          role="tablist"
          aria-label="Post filters"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={tab.name === activeTab}
              aria-controls={`tabpanel-${index}`}
              className={`${
                index === 0
                  ? "w-[120px]"
                  : index === 1
                    ? "w-[118px]"
                    : "w-[120px]"
              } ${
                tab.name === activeTab
                  ? "border-b-2 [border-bottom-style:solid] border-[#181c1f]"
                  : ""
              } flex flex-col items-center px-3 py-1.5 relative focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset hover:bg-gray-50 transition-colors`}
              onClick={() => handleTabClick(tab.name, tab.route)}
            >
              <span
                className={`relative w-fit mt-[-2.00px] ${
                  index === 1 ? "ml-[-2.00px] mr-[-2.00px]" : ""
                } ${
                  tab.name === activeTab
                    ? "font-body-m-bold font-[number:var(--body-m-bold-font-weight)] text-[#181c1f] text-[length:var(--body-m-bold-font-size)] tracking-[var(--body-m-bold-letter-spacing)] leading-[var(--body-m-bold-line-height)] [font-style:var(--body-m-bold-font-style)]"
                    : "[font-family:'Instrument_Sans',Helvetica] font-normal text-[#5e5e5e] text-base tracking-[0] leading-[22.4px]"
                } whitespace-nowrap`}
              >
                {tab.name}
              </span>
            </button>
          ))}
        </nav>

        <img
          className="h-px w-[390px] self-center object-cover"
          alt=""
          src="https://c.animaapp.com/mg2q83agyuJM37/img/line-417.svg"
        />
      </div>

      {/* Stats Section */}
      <div className="w-[358px] mt-4 mb-4 px-4">
        <div className="grid grid-cols-4 gap-2 bg-gray-50 rounded-lg p-3">
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">{posts.length}</div>
            <div className="text-xs text-gray-600">Total</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-600">{stats.published}</div>
            <div className="text-xs text-gray-600">Published</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-orange-600">{stats.inReview}</div>
            <div className="text-xs text-gray-600">In Review</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-red-500">{stats.totalLikes}</div>
            <div className="text-xs text-gray-600">Total Likes</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main
        className="flex z-[2] w-[390px] relative flex-col items-center gap-4 pb-32 overflow-y-auto"
        role="main"
      >
        {/* My Posts Badge */}
        <div className="mb-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full text-sm font-medium">
          📝 My Posts
        </div>

        {posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-xl font-bold text-[#181c1f] mb-2">No Posts Yet</h2>
            <p className="text-[#6b6666] mb-4">Start sharing your thoughts with the community!</p>
            <button
              onClick={handleCreatePost}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Create Your First Post
            </button>
          </div>
        ) : (
          posts.map((post, index) => (
            <React.Fragment key={post.id}>
              <UserPostItem 
                post={post}
                onLike={handleLike}
                onComment={handleComment}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onPublish={handlePublish}
                isLiked={likedPosts.has(post.id)}
              />

              {index < posts.length - 1 && (
                <div className="relative w-[390px] h-px bg-gray-200" />
              )}
            </React.Fragment>
          ))
        )}
      </main>

      {/* Footer */}
      <footer className="flex z-[3] flex-col w-[390px] h-[121px] items-center justify-end gap-3 fixed left-[calc(50.00%_-_195px)] bottom-0 bg-[#ffffff1a] backdrop-blur-[16.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(16.7px)_brightness(100%)]">
        <p className="relative self-stretch font-heading-l font-[number:var(--heading-l-font-weight)] text-[#000000] text-[length:var(--heading-l-font-size)] text-center tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] [font-style:var(--heading-l-font-style)]">
          In collaboration with
        </p>

        <button
          onClick={() => window.open('https://www.macron.com/', '_blank', 'noopener,noreferrer')}
          className="flex flex-col h-[79px] items-center justify-center gap-2.5 px-[72px] py-0 relative self-stretch w-full bg-[#1a1918] hover:bg-[#2a2a2a] transition-colors cursor-pointer"
          aria-label="Visit Macron"
        >
          <img
            className="relative w-[246px] h-[70px]"
            alt="Macron logo"
            src="https://c.animaapp.com/mg2q83agyuJM37/img/image-16.svg"
          />
        </button>

        <div className="absolute left-0 bottom-0 w-[390px] h-9">
          <div className="absolute left-[calc(50.00%_-_67px)] bottom-2 w-[134px] h-[5px] bg-white rounded-[100px]" />
        </div>

        <CreatePostButton />
      </footer>
    </div>
  );
};

// Create Post Button Component
const CreatePostButton: React.FC = () => {
  const handleCreatePost = () => {
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

// Create Post Modal Component
interface CreatePostModalProps {
  onClose: () => void;
  onSubmit: (post: Omit<UserPost, 'id' | 'likes' | 'comments'>) => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ onClose, onSubmit }) => {
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveAsDraft, setSaveAsDraft] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const validateImageFile = (file: File): boolean => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type.toLowerCase())) {
      alert('Please select a valid image file (JPG, PNG, GIF, WebP only)');
      return false;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('Image size must be less than 10MB');
      return false;
    }

    return true;
  };

  const validateImageSignature = async (file: File): Promise<boolean> => {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      
      const signatures = {
        'image/jpeg': [0xFF, 0xD8, 0xFF],
        'image/jpg': [0xFF, 0xD8, 0xFF],
        'image/png': [0x89, 0x50, 0x4E, 0x47],
        'image/gif': [0x47, 0x49, 0x46],
        'image/webp': [0x52, 0x49, 0x46, 0x46]
      };

      const signature = signatures[file.type.toLowerCase() as keyof typeof signatures];
      if (!signature) return false;

      return signature.every((byte, index) => uint8Array[index] === byte);
    } catch (error) {
      console.error('Error validating image signature:', error);
      return false;
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!validateImageFile(file)) return;

    setIsUploading(true);

    try {
      const isValidImage = await validateImageSignature(file);
      if (!isValidImage) {
        alert('Invalid image file. Please select a genuine image file.');
        return;
      }

      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    } catch (error) {
      console.error('Image upload error:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage);
      setSelectedImage(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (isDraft: boolean = false) => {
    if (!content.trim() && !selectedImage) {
      alert('Please add some content or an image to your post.');
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newPost: Omit<UserPost, 'id' | 'likes' | 'comments'> = {
        author: {
          name: "You",
          avatar: "https://c.animaapp.com/mg2q83agyuJM37/img/frame-1171277469.png",
        },
        timestamp: new Date().toLocaleString('en-GB', {
          day: '2-digit',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit'
        }),
        content: content.trim(),
        image: selectedImage || undefined,
        hasImage: !!selectedImage,
        status: isDraft ? "draft" : "in_review",
      };

      onSubmit(newPost);
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage);
    }
    onClose();
  };

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-[#181c1f]">Create Post</h2>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="https://c.animaapp.com/mg2q83agyuJM37/img/frame-1171277469.png"
              alt="Your avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-[#181c1f]">You</p>
              <p className="text-sm text-[#6b6666]">Public post</p>
            </div>
          </div>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full min-h-[120px] p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            maxLength={500}
          />

          <div className="text-right text-sm text-gray-500">
            {content.length}/500
          </div>

          <div className="space-y-3">
            {selectedImage ? (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <button
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                  aria-label="Remove image"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  disabled={isUploading}
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="flex flex-col items-center gap-2 w-full text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50"
                >
                  {isUploading ? (
                    <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                  ) : (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                  <span className="text-sm">
                    {isUploading ? 'Uploading...' : 'Add Photo'}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 flex gap-3">
          <button
            onClick={handleClose}
            className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => handleSubmit(true)}
            disabled={isSubmitting || (!content.trim() && !selectedImage)}
            className="py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save Draft
          </button>
          <button
            onClick={() => handleSubmit(false)}
            disabled={isSubmitting || (!content.trim() && !selectedImage)}
            className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Posting...' : 'Post'}
          </button>
        </div>
      </div>
    </div>
  );
};
