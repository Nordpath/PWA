import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RealTimeClock } from "../../../components/RealTimeClock";
import { StatusBar } from "../../../components/StatusBar";

export const ForgotPassword = (): JSX.Element => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState("");

  const handleBackClick = () => {
    navigate('/login-form');
  };

  const handleResetPassword = async () => {
    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Password reset requested for:", email);
      setIsEmailSent(true);
    } catch (err) {
      setError("Failed to send reset email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToLogin = () => {
    navigate('/login-form');
  };

  if (isEmailSent) {
    return (
      <main className="relative w-[390px] h-[844px] bg-white overflow-hidden">
        {/* Header */}
        <header className="flex flex-col w-[390px] items-center gap-3 pt-0 pb-3 px-0 absolute top-0 left-[calc(50.00%_-_195px)] bg-white">
          <div className="relative self-stretch w-full h-11">
            <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
              <RealTimeClock 
                className="w-[54px] h-5 font-default-bold-body font-[number:var(--default-bold-body-font-weight)] text-[length:var(--default-bold-body-font-size)] text-center tracking-[var(--default-bold-body-letter-spacing)] leading-[var(--default-bold-body-line-height)] whitespace-nowrap [font-style:var(--default-bold-body-font-style)]"
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
                aria-label="Go back"
              >
                <img
                  className="relative w-6 h-6"
                  alt="Back"
                  src="https://c.animaapp.com/mfxrrnixiNWqxW/img/frame-1171277295.svg"
                />
              </button>

              <h1 className="relative w-fit mt-[-1.00px] font-heading-XL font-[number:var(--heading-XL-font-weight)] text-[#181c1f] text-[length:var(--heading-XL-font-size)] tracking-[var(--heading-XL-letter-spacing)] leading-[var(--heading-XL-line-height)] whitespace-nowrap [font-style:var(--heading-XL-font-style)]">
                CHECK YOUR EMAIL
              </h1>
            </div>

            <button
              className="flex flex-col w-[25px] items-end gap-1.5 relative"
              aria-label="Menu"
            >
              <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
              <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
              <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
            </button>
          </div>
        </header>

        {/* Success Content */}
        <div className="flex flex-col items-center justify-center h-full px-8">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#181c1f] mb-4">Email Sent!</h2>
            <p className="text-[#5e5e5e] leading-relaxed mb-2">
              We've sent a password reset link to:
            </p>
            <p className="font-medium text-[#181c1f] mb-4">{email}</p>
            <p className="text-[#5e5e5e] leading-relaxed">
              Please check your email and follow the instructions to reset your password. 
              Don't forget to check your spam folder if you don't see it in your inbox.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 w-full max-w-[330px]">
            <button
              onClick={handleBackToLogin}
              className="w-full h-[56px] bg-[#2c2c2c] rounded-[12px] flex items-center justify-center hover:bg-[#3a3a3a] transition-colors"
            >
              <span className="text-white text-[18px] font-medium">Back to Login</span>
            </button>

            <button
              onClick={() => setIsEmailSent(false)}
              className="w-full h-[56px] bg-transparent border border-[#e0e0e0] rounded-[12px] flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <span className="text-[#666666] text-[18px] font-medium">Try Different Email</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex flex-col w-[390px] items-center gap-3 absolute left-[calc(50.00%_-_195px)] bottom-0">
          <div className="relative w-fit mt-[-1.00px] font-heading-l font-[number:var(--heading-l-font-weight)] text-[#000000] text-[length:var(--heading-l-font-size)] tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] whitespace-nowrap [font-style:var(--heading-l-font-style)]">
            In collaboration with
          </div>

          <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] bg-[#000000] backdrop-blur-[18.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.35px)_brightness(100%)]">
            <div className="flex flex-col h-[72px] items-start justify-center gap-2.5 pl-0 pr-2.5 py-2.5 relative self-stretch w-full bg-[#000000]">
              <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[274px] h-[38px] items-center justify-center gap-2.5 p-2.5 relative bg-white">
                  <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'D-DIN_Exp-Bold',Helvetica] font-bold text-[#000000] text-xl tracking-[0.40px] leading-[26px] whitespace-nowrap">
                    FAN EXPERIENCE 3.0
                  </div>
                </div>

                <img
                  className="relative w-[94px] h-[38px]"
                  alt="Frame"
                  src="https://c.animaapp.com/mfxrrnixiNWqxW/img/frame-1171277528.svg"
                />
              </div>
            </div>

            <div className="absolute w-full left-0 bottom-0 h-9">
              <div className="absolute left-[calc(50.00%_-_67px)] bottom-2 w-[134px] h-[5px] bg-white rounded-[100px]" />
            </div>
          </div>
        </footer>
      </main>
    );
  }

  return (
    <main className="relative w-[390px] h-[844px] bg-white overflow-hidden">
      {/* Header */}
      <header className="flex flex-col w-[390px] items-center gap-3 pt-0 pb-3 px-0 absolute top-0 left-[calc(50.00%_-_195px)] bg-white">
        <div className="relative self-stretch w-full h-11">
          <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
            <RealTimeClock 
              className="w-[54px] h-5 font-default-bold-body font-[number:var(--default-bold-body-font-weight)] text-[length:var(--default-bold-body-font-size)] text-center tracking-[var(--default-bold-body-letter-spacing)] leading-[var(--default-bold-body-line-height)] whitespace-nowrap [font-style:var(--default-bold-body-font-style)]"
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
              aria-label="Go back"
            >
              <img
                className="relative w-6 h-6"
                alt="Back"
                src="https://c.animaapp.com/mfxrrnixiNWqxW/img/frame-1171277295.svg"
              />
            </button>

            <h1 className="relative w-fit mt-[-1.00px] font-heading-XL font-[number:var(--heading-XL-font-weight)] text-[#181c1f] text-[length:var(--heading-XL-font-size)] tracking-[var(--heading-XL-letter-spacing)] leading-[var(--heading-XL-line-height)] whitespace-nowrap [font-style:var(--heading-XL-font-style)]">
              FORGOT PASSWORD
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
                root.render(React.createElement(HamburgerMenu, { onClose: closeMenu, currentScreen: 'forgot-password' }));
              });
            }}
          >
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full px-8">
        {/* Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#181c1f] mb-4">Reset Your Password</h2>
          <p className="text-[#5e5e5e] leading-relaxed">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-6 w-full max-w-[330px]">
          {error && (
            <div className="w-full p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm font-medium">{error}</p>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[#5e5e5e] text-sm font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              className="w-full h-[56px] px-4 border border-[#e0e0e0] rounded-[12px] text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email address"
              required
            />
          </div>

          <button
            onClick={handleResetPassword}
            disabled={isLoading || !email.trim()}
            className={`w-full h-[56px] rounded-[12px] flex items-center justify-center transition-colors ${
              isLoading || !email.trim()
                ? "bg-[#e0e0e0] text-[#999999] cursor-not-allowed"
                : "bg-[#2c2c2c] text-white hover:bg-[#3a3a3a] cursor-pointer"
            }`}
          >
            <span className="text-[18px] font-medium">
              {isLoading ? "Sending..." : "Send Reset Link"}
            </span>
          </button>

          <button
            onClick={handleBackToLogin}
            className="w-full h-[56px] bg-transparent border border-[#e0e0e0] rounded-[12px] flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <span className="text-[#666666] text-[18px] font-medium">Back to Login</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col w-[390px] items-center gap-3 absolute left-[calc(50.00%_-_195px)] bottom-0">
        <div className="relative w-fit mt-[-1.00px] font-heading-l font-[number:var(--heading-l-font-weight)] text-[#000000] text-[length:var(--heading-l-font-size)] tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] whitespace-nowrap [font-style:var(--heading-l-font-style)]">
          In collaboration with
        </div>

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
                  alt="Frame"
                  src="https://c.animaapp.com/mfxrrnixiNWqxW/img/frame-1171277528.svg"
                />
              </button>
            </div>
          </div>

          <div className="absolute w-full left-0 bottom-0 h-9">
            <div className="absolute left-[calc(50.00%_-_67px)] bottom-2 w-[134px] h-[5px] bg-white rounded-[100px]" />
          </div>
        </div>
      </footer>
    </main>
  );
};
