import React from "react";

interface FeedPost {
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
}

const feedPosts: FeedPost[] = [
  {
    id: "1",
    author: {
      name: "Edgar Davids",
      avatar: "https://c.animaapp.com/mg2nm57yKwYYTJ/img/ellipse-22.svg",
    },
    timestamp: "18 Feb. 17:45",
    content: "Impressive!",
    image: "https://c.animaapp.com/mg2nm57yKwYYTJ/img/frame-1171277469.png",
    likes: 19855,
    comments: 356,
    hasImage: true,
  },
  {
    id: "2",
    author: {
      name: "David Beckham",
      avatar: "https://c.animaapp.com/mg2nm57yKwYYTJ/img/ellipse-22-3.svg",
    },
    timestamp: "18 Feb. 17:45",
    content: "Impressive!",
    image: "https://c.animaapp.com/mg2nm57yKwYYTJ/img/frame-1171277469-1.png",
    likes: 6783,
    comments: 356,
    hasImage: true,
  },
  {
    id: "3",
    author: {
      name: "Martin Miller",
      avatar: "https://c.animaapp.com/mg2nm57yKwYYTJ/img/ellipse-22.svg",
    },
    timestamp: "18 Feb. 17:45",
    content: "Just had an amazing training session! 💪⚽",
    likes: 1567,
    comments: 356,
    hasImage: false,
  },
  {
    id: "4",
    author: {
      name: "Lionel Messi",
      avatar: "https://c.animaapp.com/mg2nm57yKwYYTJ/img/ellipse-22-3.svg",
    },
    timestamp: "18 Feb. 17:45",
    content: "Impressive!",
    image: "https://c.animaapp.com/mg2nm57yKwYYTJ/img/frame-1171277469-3.png",
    likes: 12345678,
    comments: 356,
    hasImage: true,
  },
  {
    id: "5",
    author: {
      name: "Jorge Martins",
      avatar: "https://c.animaapp.com/mg2nm57yKwYYTJ/img/ellipse-22-3.svg",
    },
    timestamp: "18 Feb. 17:45",
    content: "Great match today! The team played exceptionally well. Looking forward to the next game! 🔥",
    likes: 456,
    comments: 356,
    hasImage: false,
  },
  {
    id: "6",
    author: {
      name: "Ronan Black",
      avatar: "https://c.animaapp.com/mg2nm57yKwYYTJ/img/ellipse-22-1.svg",
    },
    timestamp: "18 Feb. 17:45",
    content: "Impressive!",
    image: "https://c.animaapp.com/mg2nm57yKwYYTJ/img/frame-1171277469-5.png",
    likes: 2346,
    comments: 356,
    hasImage: true,
  },
  {
    id: "7",
    author: {
      name: "Diego Maradona",
      avatar: "https://c.animaapp.com/mg2nm57yKwYYTJ/img/ellipse-22-1.svg",
    },
    timestamp: "18 Feb. 17:45",
    content: "Impressive!",
    image: "https://c.animaapp.com/mg2nm57yKwYYTJ/img/frame-1171277469-6.png",
    likes: 145,
    comments: 356,
    hasImage: true,
  },
  {
    id: "8",
    author: {
      name: "Roberto Carlos",
      avatar: "https://c.animaapp.com/mg2nm57yKwYYTJ/img/ellipse-22-1.svg",
    },
    timestamp: "18 Feb. 17:45",
    content: "Impressive!",
    image: "https://c.animaapp.com/mg2nm57yKwYYTJ/img/frame-1171277469-7.png",
    likes: 94455,
    comments: 356,
    hasImage: true,
  },
];

interface FeedPostItemProps {
  post: FeedPost;
  showTopDivider?: boolean;
  onLike: (postId: string) => void;
  onComment: (postId: string) => void;
  onShare: (postId: string) => void;
  onMoreOptions: (postId: string) => void;
  isLiked: boolean;
}

const FeedPostItem: React.FC<FeedPostItemProps> = ({
  post,
  showTopDivider = false,
  onLike,
  onComment,
  onShare,
  onMoreOptions,
  isLiked,
}) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNTAgMTAwTDEyNSA3NUwxNzUgNzVMMTUwIDEwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
  };

  const sanitizeContent = (content: string): string => {
    return content.replace(/<[^>]*>/g, '').substring(0, 280);
  };

  return (
    <article className="flex flex-col w-[358px] items-end gap-3 relative flex-[0_0_auto] px-4">
      {showTopDivider && (
        <div className="relative w-[390px] h-px mt-[-0.50px] bg-gray-200" />
      )}

      <header className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="relative w-11 h-11 object-cover rounded-full border border-gray-200"
          alt={`${post.author.name} avatar`}
          src={post.author.avatar}
          onError={handleImageError}
          loading="lazy"
        />

        <div className="flex flex-col w-[296px] items-start gap-1 relative">
          <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <h3 className="relative w-fit mt-[-1.00px] font-body-m-bold font-[number:var(--body-m-bold-font-weight)] text-[#000000] text-[length:var(--body-m-bold-font-size)] tracking-[var(--body-m-bold-letter-spacing)] leading-[var(--body-m-bold-line-height)] whitespace-nowrap [font-style:var(--body-m-bold-font-style)] truncate max-w-[200px]">
              {post.author.name}
            </h3>

            <time 
              className="relative w-fit font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#6b6666] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] whitespace-nowrap [font-style:var(--body-s-regular-font-style)]"
              dateTime={post.timestamp}
            >
              {post.timestamp}
            </time>
          </div>

          <p className="relative w-[302px] mr-[-6.00px] [font-family:'Test_National_2-Regular',Helvetica] font-normal text-[#000000] text-base tracking-[0] leading-[22.4px] break-words">
            {sanitizeContent(post.content)}
          </p>
        </div>
      </header>

      <div className="flex flex-col w-[302px] items-start gap-2 relative flex-[0_0_auto]">
        {post.hasImage && post.image && (
          <div
            className="relative self-stretch w-full h-[201px] rounded-2xl bg-cover bg-center bg-no-repeat cursor-pointer hover:opacity-95 transition-opacity"
            style={{ backgroundImage: `url(${post.image})` }}
            role="img"
            aria-label="Post image"
            onClick={() => {
              // Open image in modal or full view
              window.open(post.image, '_blank', 'noopener,noreferrer');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open(post.image!, '_blank', 'noopener,noreferrer');
              }
            }}
            tabIndex={0}
          />
        )}

        <footer className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <button
              className={`inline-flex items-center gap-1 relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-all duration-200 ${isLiked ? 'text-red-500' : 'text-[#6b6666]'}`}
              aria-label={`${isLiked ? 'Unlike' : 'Like'} post - ${post.likes} likes`}
              onClick={() => onLike(post.id)}
            >
              <svg 
                className={`w-6 h-6 transition-all duration-200 ${isLiked ? 'fill-current scale-110' : 'stroke-current fill-none'}`} 
                viewBox="0 0 24 24" 
                strokeWidth={2}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>

              <span className="relative w-fit font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] whitespace-nowrap [font-style:var(--body-s-regular-font-style)]">
                {post.likes.toLocaleString()}
              </span>
            </button>

            <button
              className="inline-flex items-center gap-1 relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity text-[#6b6666]"
              aria-label={`Comment on post - ${post.comments} comments`}
              onClick={() => onComment(post.id)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>

              <span className="relative w-fit font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] whitespace-nowrap [font-style:var(--body-s-regular-font-style)]">
                {post.comments}
              </span>
            </button>

            <button
              className="inline-flex items-center gap-1 relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity text-[#6b6666]"
              aria-label="Share post"
              onClick={() => onShare(post.id)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
          </div>

          <button
            className="relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity p-1 rounded-full hover:bg-gray-100"
            aria-label="More options"
            onClick={() => onMoreOptions(post.id)}
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

export const FanFeedSection = (): JSX.Element => {
  const [posts, setPosts] = React.useState(feedPosts);
  const [likedPosts, setLikedPosts] = React.useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = React.useState(false);
  const [showCreatePost, setShowCreatePost] = React.useState(false);

  const handleLike = React.useCallback((postId: string) => {
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

    // Haptic feedback simulation
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  }, [likedPosts]);

  const handleComment = React.useCallback((postId: string) => {
    const post = posts.find(p => p.id === postId);
    if (post) {
      const comment = prompt(`💬 Add a comment to ${post.author.name}'s post:`);
      if (comment && comment.trim()) {
        setPosts(prev => prev.map(p => 
          p.id === postId 
            ? { ...p, comments: p.comments + 1 }
            : p
        ));
        alert(`Comment added: "${comment.trim()}"`);
      }
    }
  }, [posts]);

  const handleShare = React.useCallback(async (postId: string) => {
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    const shareData = {
      title: `${post.author.name}'s post`,
      text: post.content,
      url: window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare?.(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(`${post.content}\n\n- ${post.author.name}\n${window.location.href}`);
        alert('📋 Post content copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      // Final fallback
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('📋 Link copied to clipboard!');
      } catch (clipboardError) {
        console.error('Clipboard error:', clipboardError);
        alert('❌ Unable to share. Please try again.');
      }
    }
  }, [posts]);

  const handleMoreOptions = React.useCallback((postId: string) => {
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    const options = [
      '🔗 Copy Link',
      '📱 Save Post',
      '🚫 Hide Post',
      '⚠️ Report Post',
      '❌ Cancel'
    ];

    const choice = prompt(`Choose an option for ${post.author.name}'s post:\n\n${options.map((opt, i) => `${i + 1}. ${opt}`).join('\n')}`);
    
    switch (choice) {
      case '1':
        navigator.clipboard.writeText(window.location.href);
        alert('🔗 Link copied to clipboard!');
        break;
      case '2':
        alert('📱 Post saved to your collection!');
        break;
      case '3':
        setPosts(prev => prev.filter(p => p.id !== postId));
        alert('🚫 Post hidden from your feed.');
        break;
      case '4':
        alert('⚠️ Post reported. Thank you for helping keep our community safe.');
        break;
      default:
        break;
    }
  }, [posts]);

  const handleRefresh = React.useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In a real app, you would fetch new posts here
      alert('🔄 Feed refreshed!');
    } catch (error) {
      console.error('Error refreshing feed:', error);
      alert('❌ Failed to refresh feed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleCreatePost = React.useCallback(() => {
    setShowCreatePost(true);
  }, []);

  // Listen for create post events from the floating button
  React.useEffect(() => {
    const handleOpenCreatePost = () => {
      setShowCreatePost(true);
    };

    window.addEventListener('openCreatePost', handleOpenCreatePost);
    return () => window.removeEventListener('openCreatePost', handleOpenCreatePost);
  }, []);

  const handleCloseCreatePost = React.useCallback(() => {
    setShowCreatePost(false);
  }, []);

  const handleSubmitPost = React.useCallback((newPost: Omit<FeedPost, 'id' | 'likes' | 'comments'>) => {
    const post: FeedPost = {
      ...newPost,
      id: Date.now().toString(),
      likes: 0,
      comments: 0,
    };
    
    setPosts(prev => [post, ...prev]);
    setShowCreatePost(false);
    alert('✨ Post created successfully!');
  }, []);

  return (
    <main className="flex z-[1] w-[390px] relative mt-[16.0px] flex-col items-center gap-4 pb-32">
      {/* Create Post Modal */}
      {showCreatePost && (
        <CreatePostModal 
          onClose={handleCloseCreatePost}
          onSubmit={handleSubmitPost}
        />
      )}

      {/* Pull to refresh indicator */}
      {isLoading && (
        <div className="flex items-center justify-center py-4">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          <span className="ml-2 text-gray-600">Refreshing...</span>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={handleRefresh}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Refreshing...' : '🔄 Refresh Feed'}
        </button>
        
        <button
          onClick={handleCreatePost}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          📝 Create Post
        </button>
      </div>

      {posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
          <div className="text-6xl mb-4">📱</div>
          <h2 className="text-xl font-bold text-[#181c1f] mb-2">No Posts Yet</h2>
          <p className="text-[#6b6666] mb-4">Be the first to share something with the community!</p>
          <button
            onClick={handleRefresh}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Refresh Feed
          </button>
        </div>
      ) : (
        posts.map((post, index) => (
          <React.Fragment key={post.id}>
            <FeedPostItem 
              post={post} 
              showTopDivider={index === 2}
              onLike={handleLike}
              onComment={handleComment}
              onShare={handleShare}
              onMoreOptions={handleMoreOptions}
              isLiked={likedPosts.has(post.id)}
            />

            {index < posts.length - 1 && (
              <div className="relative w-[390px] h-px bg-gray-200" />
            )}
          </React.Fragment>
        ))
      )}
    </main>
  );
};

// Create Post Modal Component
interface CreatePostModalProps {
  onClose: () => void;
  onSubmit: (post: Omit<FeedPost, 'id' | 'likes' | 'comments'>) => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ onClose, onSubmit }) => {
  const [content, setContent] = React.useState('');
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [isUploading, setIsUploading] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const validateImageFile = (file: File): boolean => {
    // Security: Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type.toLowerCase())) {
      alert('Please select a valid image file (JPG, PNG, GIF, WebP only)');
      return false;
    }

    // Validate file size (max 10MB for posts)
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
      
      // Check magic bytes for common image formats
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
      // Security: Validate file signature
      const isValidImage = await validateImageSignature(file);
      if (!isValidImage) {
        alert('Invalid image file. Please select a genuine image file.');
        return;
      }

      // Create preview URL
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

  const handleSubmit = async () => {
    if (!content.trim() && !selectedImage) {
      alert('Please add some content or an image to your post.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newPost: Omit<FeedPost, 'id' | 'likes' | 'comments'> = {
        author: {
          name: "You", // In a real app, this would come from user context
          avatar: "https://c.animaapp.com/mg2nm57yKwYYTJ/img/ellipse-22.svg",
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

  // Handle escape key
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
        {/* Header */}
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

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* User Info */}
          <div className="flex items-center gap-3">
            <img
              src="https://c.animaapp.com/mg2nm57yKwYYTJ/img/ellipse-22.svg"
              alt="Your avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-[#181c1f]">You</p>
              <p className="text-sm text-[#6b6666]">Public post</p>
            </div>
          </div>

          {/* Text Input */}
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

          {/* Image Upload Section */}
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

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 flex gap-3">
          <button
            onClick={handleClose}
            className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || (!content.trim() && !selectedImage)}
            className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Posting...' : 'Post'}
          </button>
        </div>
      </div>
    </div>
  );
};
