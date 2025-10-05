import React from "react";

interface HamburgerMenuProps {
  onClose: () => void;
  currentScreen?: string;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClose, currentScreen }) => {
  // Use window.location for navigation instead of useNavigate to avoid Router context issues
  const navigateToRoute = (route: string) => {
    window.location.href = route;
  };

  const menuItems = [
    {
      icon: '🏠',
      label: 'Home',
      description: 'Return to main menu',
      route: '/menu',
      isActive: currentScreen === 'menu'
    },
    {
      icon: '📰',
      label: 'News',
      description: 'Latest updates and articles',
      route: '/news',
      isActive: currentScreen === 'news'
    },
    {
      icon: '👤',
      label: 'About Me',
      description: 'Michel Salgado biography',
      route: '/about-me',
      isActive: currentScreen === 'about-me'
    },
    {
      icon: '📬',
      label: 'Inbox',
      description: 'Notifications and promotions',
      route: '/inbox',
      isActive: currentScreen === 'inbox'
    },
    {
      icon: '🛍️',
      label: 'Shop',
      description: 'Exclusive merchandise',
      route: '/shop',
      isActive: currentScreen === 'shop'
    },
    {
      icon: '📺',
      label: 'Streams',
      description: 'Video content and live streams',
      route: '/streams',
      isActive: currentScreen === 'streams'
    },
    {
      icon: '🏆',
      label: 'Competitions',
      description: 'Enter exciting competitions',
      route: '/competitions',
      isActive: currentScreen === 'competitions'
    },
    {
      icon: '👑',
      label: 'VIP',
      description: 'Premium membership benefits',
      route: '/vip',
      isActive: currentScreen === 'vip'
    },
    {
      icon: '📱',
      label: 'Fanfeed',
      description: 'Community posts and updates',
      route: '/fanfeed',
      isActive: currentScreen === 'fanfeed'
    },
    {
      icon: '⚙️',
      label: 'Settings',
      description: 'App preferences and profile',
      route: '/settings',
      isActive: currentScreen === 'settings'
    }
  ];

  const handleItemClick = (route: string) => {
    onClose();
    navigateToRoute(route);
  };

  const handleLogout = () => {
    const confirmed = confirm('🚪 Are you sure you want to log out?\n\nYou will be redirected to the login screen.');
    if (confirmed) {
      onClose();
      navigateToRoute('/');
    }
  };

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img
              src="https://c.animaapp.com/FLHQLvNn/img/frame-1171277596.svg"
              alt="Michel Salgado logo"
              className="w-8 h-8"
            />
            <div>
              <h2 className="text-lg font-bold text-[#181c1f]">Menu</h2>
              <p className="text-sm text-[#6b6666]">Navigate the app</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="space-y-2 mb-6">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item.route)}
                className={`w-full p-4 rounded-lg transition-colors text-left ${
                  item.isActive 
                    ? 'bg-blue-50 border border-blue-200' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <h4 className={`font-medium ${item.isActive ? 'text-blue-900' : 'text-[#181c1f]'}`}>
                      {item.label}
                    </h4>
                    <p className={`text-sm ${item.isActive ? 'text-blue-700' : 'text-[#6b6666]'}`}>
                      {item.description}
                    </p>
                  </div>
                  {item.isActive && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <button
                onClick={() => {
                  onClose();
                  alert('🔍 Search feature coming soon!\n\nYou will be able to search across all content in the app.');
                }}
                className="w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">🔍</span>
                  <span className="font-medium text-[#181c1f]">Search</span>
                </div>
              </button>
              
              <button
                onClick={() => {
                  onClose();
                  alert('💡 Help & Support\n\n• Contact customer service\n• View FAQ\n• Report issues\n• App tutorials\n\nSupport is available 24/7!');
                }}
                className="w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">💡</span>
                  <span className="font-medium text-[#181c1f]">Help & Support</span>
                </div>
              </button>

              <button
                onClick={handleLogout}
                className="w-full p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">🚪</span>
                  <span className="font-medium text-red-600">Logout</span>
                </div>
              </button>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">💡 Pro Tip</h4>
            <p className="text-sm text-blue-700">
              Use the menu to quickly navigate between different sections of the Michel Salgado Fan Experience!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
