import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RealTimeClock } from "../../../components/RealTimeClock";
import { StatusBar } from "../../../components/StatusBar";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  soldOut?: boolean;
  hasCart?: boolean;
}

export const ShopCatalogOf = (): JSX.Element => {
  const navigate = useNavigate();
  const [showFeatureOverlay, setShowFeatureOverlay] = useState(false);
  const [cartItems, setCartItems] = useState<{id: number, quantity: number, size?: string}[]>([]);
  const [showProductModal, setShowProductModal] = useState<Product | null>(null);

  const handleBackClick = () => {
    navigate('/menu');
  };

  const handleMenuClick = () => {
    setShowFeatureOverlay(true);
  };

  const handleAddToCart = (productId: number, size?: string) => {
    const existingItem = cartItems.find(item => item.id === productId && item.size === size);
    
    if (existingItem) {
      setCartItems(prev => prev.map(item => 
        item.id === productId && item.size === size 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems(prev => [...prev, { id: productId, quantity: 1, size }]);
    }
    
    const product = products.find(p => p.id === productId);
    if (product) {
      alert(`🛒 Added to Cart!\n\n"${product.name}" ${size ? `(Size: ${size})` : ''} has been added to your shopping cart.\n\nPrice: ${product.price}`);
    }
  };

  const handleViewCart = () => {
    if (cartItems.length === 0) {
      alert('🛒 Your cart is empty!\n\nAdd some items to your cart to continue shopping.');
      return;
    }
    
    navigate('/shop/cart');
  };

  const handleProductClick = (product: Product) => {
    setShowProductModal(product);
  };

  const handleGoToWebShop = () => {
    const confirmed = confirm('🌐 External Shop\n\nThis will open the external web shop in a new tab. Continue?');
    if (confirmed) {
      window.open('https://shop.example.com', '_blank', 'noopener,noreferrer');
    }
  };

  const products: Product[] = [
    {
      id: 1,
      name: "Jacket / Sweater",
      price: "2.926,00 USD",
      image: "https://c.animaapp.com/mg2j0pbnNXtTek/img/image.png",
      soldOut: true,
    },
    {
      id: 2,
      name: "Double colors knitwear",
      price: "1.845,00 USD",
      image: "https://c.animaapp.com/mg2j0pbnNXtTek/img/image-3.png",
      hasCart: true,
    },
    {
      id: 3,
      name: "Jacket / Sweater",
      price: "2.926,00 USD",
      image: "https://c.animaapp.com/mg2j0pbnNXtTek/img/image-1.png",
      hasCart: true,
    },
    {
      id: 4,
      name: "Shirt",
      price: "1.845,00 USD",
      image: "https://c.animaapp.com/mg2j0pbnNXtTek/img/image-4.png",
      hasCart: true,
    },
    {
      id: 5,
      name: "JACKET / SWEATER",
      price: "2.926,00 USD",
      image: "https://c.animaapp.com/mg2j0pbnNXtTek/img/image-2.png",
    },
    {
      id: 6,
      name: "SHIRT",
      price: "1.845,00 USD",
      image: "https://c.animaapp.com/mg2j0pbnNXtTek/img/image-5.png",
    },
  ];

  const renderProductCard = (product: Product, index: number) => {
    const isLeftColumn = index % 2 === 0;
    const row = Math.floor(index / 2);

    return (
      <article
        key={product.id}
        className={`flex flex-col w-[171px] items-start gap-2 ${isLeftColumn ? 'mr-2' : 'ml-2'} mb-4`}
      >
        <div className="relative">
          <img
            className="relative self-stretch w-full h-[205px] rounded-xl object-cover cursor-pointer hover:opacity-90 transition-opacity"
            alt={product.name}
            src={product.image}
            onClick={() => handleProductClick(product)}
          />

          {product.soldOut && (
            <div className="flex w-[147px] h-[30px] items-center justify-center gap-1 px-3 py-0 absolute top-[163px] left-3 bg-[#000000] rounded-[31px]">
              <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-white text-[length:var(--body-s-regular-font-size)] text-center tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] whitespace-nowrap [font-style:var(--body-s-regular-font-style)]">
                  Sold out
                </span>
              </div>
            </div>
          )}

          {product.hasCart && !product.soldOut && (
            <button
              className="flex w-[30px] h-[30px] items-center justify-center gap-2.5 p-[5px] absolute top-[163px] left-[129px] bg-white rounded-[15px] shadow-[2px_2px_4px_#0000000d] hover:shadow-[2px_2px_8px_#0000001a] transition-all hover:scale-110"
              aria-label={`Add ${product.name} to cart`}
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product.id);
              }}
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01" />
              </svg>
            </button>
          )}
        </div>

        <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
          <h3
            className={`relative w-fit mt-[-1.00px] text-[#181c1f] ${
              index >= 4
                ? "font-normal text-base leading-[20.8px] [font-family:'Instrument_Sans',Helvetica] tracking-[0]"
                : "font-body-l-regular font-[number:var(--body-l-regular-font-weight)] text-[length:var(--body-l-regular-font-size)] tracking-[var(--body-l-regular-letter-spacing)] leading-[var(--body-l-regular-line-height)] [font-style:var(--body-l-regular-font-style)]"
            } ${index === 1 ? "self-stretch" : ""} line-clamp-2`}
          >
            {product.name}
          </h3>

          <p className="w-fit font-[number:var(--instrument-sans-16pc-BOLD-font-weight)] text-[length:var(--instrument-sans-16pc-BOLD-font-size)] leading-[var(--instrument-sans-16pc-BOLD-line-height)] whitespace-nowrap relative font-instrument-sans-16pc-BOLD text-[#181c1f] tracking-[var(--instrument-sans-16pc-BOLD-letter-spacing)] [font-style:var(--instrument-sans-16pc-BOLD-font-style)]">
            {product.price}
          </p>
        </div>
      </article>
    );
  };

  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="bg-white w-[390px] h-[844px] relative overflow-hidden">
      {/* Feature Overlay */}
      {showFeatureOverlay && (
        <FeatureOverlay onClose={() => setShowFeatureOverlay(false)} />
      )}

      {/* Product Modal */}
      {showProductModal && (
        <ProductModal 
          product={showProductModal} 
          onClose={() => setShowProductModal(null)}
          onAddToCart={handleAddToCart}
        />
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

        <div className="flex w-[358px] items-center justify-between relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <button 
              onClick={handleBackClick}
              className="relative w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity"
              aria-label="Go back to menu"
            >
              <img
                className="relative w-6 h-6"
                alt="Back"
                src="https://c.animaapp.com/mg2j0pbnNXtTek/img/frame-1171277295.svg"
              />
            </button>

            <h1 className="relative w-fit mt-[-1.00px] font-heading-XL font-[number:var(--heading-XL-font-weight)] text-[#181c1f] text-[length:var(--heading-XL-font-size)] tracking-[var(--heading-XL-letter-spacing)] leading-[var(--heading-XL-line-height)] whitespace-nowrap [font-style:var(--heading-XL-font-style)]">
              SHOP
            </h1>
          </div>

          <button
            onClick={handleMenuClick}
            className="flex flex-col w-[25px] items-end gap-1.5 relative cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Open menu"
          >
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
          </button>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="absolute top-[109px] left-[calc(50.00%_-_195px)] w-[390px] h-[35px] flex flex-col">
        <div className="flex ml-[16.0px] w-[358px] h-[34px] relative items-center justify-between">
          <div className="flex flex-col w-[179px] items-center px-3 py-1.5 relative border-b-2 [border-bottom-style:solid] border-[#181c1f]">
            <span className="relative w-fit mt-[-2.00px] font-body-m-bold font-[number:var(--body-m-bold-font-weight)] text-[#181c1f] text-[length:var(--body-m-bold-font-size)] tracking-[var(--body-m-bold-letter-spacing)] leading-[var(--body-m-bold-line-height)] whitespace-nowrap [font-style:var(--body-m-bold-font-style)]">
              Shop
            </span>
          </div>

          <button 
            onClick={() => {
              alert('📋 Order History\n\nYour previous orders will be displayed here. Currently no orders found.');
            }}
            className="flex flex-col w-[179px] items-center px-3 py-1.5 relative hover:bg-gray-50 transition-colors"
          >
            <span className="relative w-fit mt-[-2.00px] font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[#5e5e5e] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] whitespace-nowrap [font-style:var(--body-m-regular-font-style)]">
              History
            </span>
          </button>
        </div>

        <img
          className="h-px w-[390px] self-center object-cover"
          alt=""
          src="https://c.animaapp.com/mg2j0pbnNXtTek/img/line-417.svg"
        />
      </nav>

      {/* Web Shop Button */}
      <button 
        onClick={handleGoToWebShop}
        className="flex flex-col w-[358px] items-center gap-4 px-3 py-[18px] absolute top-[156px] left-[calc(50.00%_-_179px)] bg-[#181c1f] rounded-lg hover:bg-[#2a2e31] transition-colors"
      >
        <span className="relative w-fit mt-[-1.00px] font-font-for-buttons font-[number:var(--font-for-buttons-font-weight)] text-white text-[length:var(--font-for-buttons-font-size)] tracking-[var(--font-for-buttons-letter-spacing)] leading-[var(--font-for-buttons-line-height)] whitespace-nowrap [font-style:var(--font-for-buttons-font-style)]">
          Go to web shop
        </span>
      </button>

      {/* Products Grid */}
      <main className="absolute top-[225px] left-0 right-0 bottom-[120px] overflow-y-auto px-4">
        <div className="grid grid-cols-2 gap-4 pb-8">
          {products.map((product, index) => renderProductCard(product, index))}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col w-[390px] items-center gap-3 pt-2 pb-0 px-0 fixed left-[calc(50.00%_-_195px)] bottom-0 bg-[#ffffff1a] backdrop-blur-[8.6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8.6px)_brightness(100%)]">
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
                  src="https://c.animaapp.com/mg2j0pbnNXtTek/img/frame-1171277528.svg"
                />
              </button>
            </div>
          </div>

          <div className="absolute w-full left-0 bottom-0 h-9">
            <div className="absolute left-[calc(50.00%_-_67px)] bottom-2 w-[134px] h-[5px] bg-white rounded-[100px]" />
          </div>
        </div>

        {/* Shopping Cart Button */}
        <button
          onClick={handleViewCart}
          className="flex w-14 items-center justify-center gap-[6.75px] p-[14.17px] absolute top-[-58px] left-[318px] bg-[#000000] rounded-[28px] shadow-[0px_4px_8.4px_#00000040] hover:bg-[#2a2e31] transition-colors"
          aria-label={`View shopping cart (${getTotalCartItems()} items)`}
        >
          <div className="relative">
            <svg className="w-[26.99px] h-[26.99px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01" />
            </svg>
            {getTotalCartItems() > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {getTotalCartItems()}
              </div>
            )}
          </div>
        </button>
      </footer>
    </div>
  );
};

// Product Modal Component
interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (productId: number, size?: string) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const productImages = [
    product.image,
    product.image, // In a real app, these would be different angles
    product.image,
  ];

  const handleAddToCart = () => {
    if (product.hasCart && !selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }

    for (let i = 0; i < quantity; i++) {
      onAddToCart(product.id, selectedSize || undefined);
    }
    onClose();
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
          <h2 className="text-lg font-bold text-[#181c1f]">Product Details</h2>
          <button
            onClick={onClose}
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
          {/* Product Images */}
          <div className="space-y-3">
            <img
              src={productImages[selectedImageIndex]}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="flex gap-2 justify-center">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    selectedImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold text-[#181c1f] mb-2">{product.name}</h3>
              <p className="text-2xl font-bold text-[#181c1f]">{product.price}</p>
            </div>

            {product.soldOut && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 font-medium">❌ Currently sold out</p>
              </div>
            )}

            {/* Product Description */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-[#181c1f] mb-2">Product Details</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Premium quality materials</li>
                <li>• Official Michel Salgado merchandise</li>
                <li>• Limited edition design</li>
                <li>• Comfortable fit</li>
                <li>• Machine washable</li>
              </ul>
            </div>

            {/* Size Selection */}
            {product.hasCart && !product.soldOut && (
              <div className="space-y-3">
                <h4 className="font-medium text-[#181c1f]">Select Size</h4>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-4 border rounded-lg transition-colors ${
                        selectedSize === size
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selection */}
            {product.hasCart && !product.soldOut && (
              <div className="space-y-3">
                <h4 className="font-medium text-[#181c1f]">Quantity</h4>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 space-y-3">
          {product.soldOut ? (
            <button
              disabled
              className="w-full py-3 px-4 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
            >
              Out of Stock
            </button>
          ) : product.hasCart ? (
            <button
              onClick={handleAddToCart}
              className="w-full py-3 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Add to Cart - {product.price}
            </button>
          ) : (
            <button
              onClick={() => {
                alert('🌐 External Purchase\n\nThis item is available on our external web store. You will be redirected to complete your purchase.');
                window.open('https://shop.example.com', '_blank', 'noopener,noreferrer');
              }}
              className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Buy on Web Store
            </button>
          )}
          
          <button
            onClick={onClose}
            className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

// Feature Overlay Component
interface FeatureOverlayProps {
  onClose: () => void;
}

const FeatureOverlay: React.FC<FeatureOverlayProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: '🏠',
      label: 'Home',
      description: 'Return to main menu',
      action: () => {
        onClose();
        navigate('/menu');
      }
    },
    {
      icon: '🛒',
      label: 'Shopping Cart',
      description: 'View items in your cart',
      action: () => {
        onClose();
        alert('🛒 Shopping cart opened!');
      }
    },
    {
      icon: '❤️',
      label: 'Wishlist',
      description: 'View saved items',
      action: () => {
        onClose();
        alert('❤️ Wishlist feature coming soon!');
      }
    },
    {
      icon: '🔍',
      label: 'Search',
      description: 'Search for products',
      action: () => {
        onClose();
        const searchTerm = prompt('🔍 Search for products:');
        if (searchTerm) {
          alert(`Searching for: "${searchTerm}"\n\nSearch results would appear here.`);
        }
      }
    },
    {
      icon: '📱',
      label: 'App Features',
      description: 'Explore app capabilities',
      action: () => {
        onClose();
        alert('📱 App Features:\n\n• Browse exclusive merchandise\n• Add items to cart\n• Secure checkout process\n• Order tracking\n• Customer support\n• Wishlist functionality');
      }
    },
    {
      icon: '⚙️',
      label: 'Settings',
      description: 'App preferences',
      action: () => {
        onClose();
        navigate('/settings');
      }
    }
  ];

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
          <h2 className="text-lg font-bold text-[#181c1f]">Shop Features</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="text-center mb-6">
            <div className="text-4xl mb-2">🛍️</div>
            <h3 className="text-xl font-bold text-[#181c1f] mb-2">Michel Salgado Shop</h3>
            <p className="text-[#6b6666] text-sm">Exclusive merchandise and collectibles</p>
          </div>

          <div className="space-y-3">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-medium text-[#181c1f]">{item.label}</h4>
                    <p className="text-sm text-[#6b6666]">{item.description}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">💡 Pro Tip</h4>
            <p className="text-sm text-blue-700">
              Add items to your cart and checkout securely. All purchases support Michel Salgado's fan experience!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
