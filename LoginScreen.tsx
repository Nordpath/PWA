import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RealTimeClock } from "../../../components/RealTimeClock";
import { StatusBar } from "../../../components/StatusBar";

export const LoginScreen = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/login');
  };

  const handleLogin = async () => {
    // Input validation
    if (!email?.trim() || !password?.trim()) {
      setError("Please enter both email and password");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address");
      return;
    }

    // Password length validation
    if (password.length < 3) {
      setError("Password must be at least 3 characters long");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Simulate login API call with timeout
      const loginPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          // Sanitize inputs
          const sanitizedEmail = email.trim().toLowerCase();
          const sanitizedPassword = password.trim();
          
          // Only accept specific credentials (demo purposes)
          if (sanitizedEmail === "salgado@liveapps.ch" && sanitizedPassword === "salgado") {
            resolve({ success: true });
          } else {
            reject(new Error("Invalid credentials"));
          }
        }, 1000);
      });

      // Add timeout to prevent hanging
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Login timeout")), 10000)
      );

      await Promise.race([loginPromise, timeoutPromise]);
      
      console.log("Login successful");
      // Set logged in user flag
      sessionStorage.setItem('userType', 'registered');
      // Navigate to menu after successful login
      navigate('/menu');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Login failed";
      if (errorMessage === "Invalid credentials") {
        setError("Invalid credentials. Please use salgado@liveapps.ch with password 'salgado'");
      } else if (errorMessage === "Login timeout") {
        setError("Login timeout. Please check your connection and try again.");
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleAppleSignIn = () => {
    // Redirect to Apple's sign-in page
    window.open('https://account.apple.com/sign-in', '_blank');
  };

  const handleFacebookSignIn = () => {
    // Redirect to Facebook
    window.open('https://facebook.com', '_blank');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleSignUp = () => {
    // Navigate to sign up screen
    navigate('/signup');
  };

  return (
    <main className="relative w-[390px] h-[844px] bg-white overflow-hidden">
      <header className="flex flex-col w-[390px] items-center gap-3 pt-0 pb-3 px-0 absolute top-0 left-[calc(50.00%_-_195px)] bg-white">
        <div className="relative self-stretch w-full h-11">
          <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
            <RealTimeClock 
              className="w-[54px] h-5 [font-family:'SF_Pro_Text-Semibold',Helvetica] font-normal text-[17px] text-center tracking-[-0.41px] leading-[22px] whitespace-nowrap"
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
              LOGIN
            </h1>
          </div>

          <div className="flex flex-col w-[25px] items-end gap-1.5 relative">
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
          </div>
        </div>
      </header>

      <main className="flex flex-col w-[358px] items-start gap-6 absolute top-[142px] left-4">
        <form
          className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          {error && (
            <div className="w-full p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm font-medium">{error}</p>
            </div>
          )}
          
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <label
                htmlFor="email"
                className="relative self-stretch mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#5e5e5e] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]"
              >
                Email
              </label>

              <div className="flex w-[358px] items-center justify-between px-4 py-3 relative flex-[0_0_auto] bg-[#1c1c1c0d] rounded">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="relative w-full font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[#000000] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] [font-style:var(--body-m-regular-font-style)] bg-transparent border-none outline-none"
                  placeholder="Enter your email"
                  required
                />

                {email && (
                  <svg className="relative w-[20px] h-[20px] text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>

            <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
              <label
                htmlFor="password"
                className="relative self-stretch mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#5e5e5e] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]"
              >
                Password
              </label>

              <div className="flex w-[358px] h-[50px] items-center justify-between px-4 py-3 relative bg-[#1c1c1c0d] rounded">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="relative w-full font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[#000000] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] [font-style:var(--body-m-regular-font-style)] bg-transparent border-none outline-none"
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="relative w-[26px] h-[26px] flex items-center justify-center hover:opacity-70 transition-opacity"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || !email || !password}
            className={`all-[unset] box-border flex flex-col items-center gap-4 px-3 py-[18px] relative self-stretch w-full flex-[0_0_auto] rounded-lg transition-colors ${
              isLoading || !email || !password
                ? "bg-[#eaeced] cursor-not-allowed"
                : "bg-black hover:bg-gray-800 cursor-pointer"
            }`}
          >
            <div className={`relative w-fit mt-[-1.00px] font-font-for-buttons font-[number:var(--font-for-buttons-font-weight)] text-[length:var(--font-for-buttons-font-size)] tracking-[var(--font-for-buttons-letter-spacing)] leading-[var(--font-for-buttons-line-height)] whitespace-nowrap [font-style:var(--font-for-buttons-font-style)] ${
              isLoading || !email || !password ? "text-[#5e5e5e]" : "text-white"
            }`}>
              {isLoading ? "Logging in..." : "Login"}
            </div>
          </button>
        </form>

        <button
          onClick={handleForgotPassword}
          className="relative self-stretch [font-family:'Instrument_Sans',Helvetica] font-normal text-transparent text-sm text-center tracking-[0] leading-[14px] cursor-pointer"
        >
          <span className="font-semibold text-[#000000] leading-[19.6px] underline hover:no-underline transition-all">
            Forgot password?
          </span>
        </button>
      </main>

      <section className="flex flex-col w-[358px] items-start gap-6 absolute top-[503px] left-4">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <button
            onClick={handleAppleSignIn}
            className="flex flex-col items-center gap-4 px-3 py-[18px] relative self-stretch w-full flex-[0_0_auto] rounded-lg overflow-hidden border border-solid border-[#939393] transition-colors cursor-pointer hover:bg-[#f5f5f5]"
          >
            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <svg className="relative w-[22px] h-[22px]" viewBox="0 0 22 22" fill="none">
                <path d="M15.6 11.2c0-2.7 2.1-4 2.2-4.1-1.2-1.8-3.1-2-3.8-2-1.6-.2-3.1.9-3.9.9s-2-.9-3.3-.9c-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.3 2.5 1.3-.1 1.8-.8 3.4-.8s2 .8 3.4.8c1.4 0 2.3-1.2 3.2-2.4.6-.8 1-1.7 1.3-2.6-2.8-1.1-3.3-3.2-3.3-3.3z" fill="currentColor"/>
                <path d="M13.1 3.9c.7-.9 1.2-2.1 1.1-3.3-1 0-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.2 1.2.1 2.4-.6 3-1.5z" fill="currentColor"/>
              </svg>

              <div className="relative w-fit mt-[-0.50px] font-font-for-buttons font-[number:var(--font-for-buttons-font-weight)] text-[#000000] text-[length:var(--font-for-buttons-font-size)] tracking-[var(--font-for-buttons-letter-spacing)] leading-[var(--font-for-buttons-line-height)] whitespace-nowrap [font-style:var(--font-for-buttons-font-style)]">
                Sign in with Apple
              </div>
            </div>
          </button>

          <button
            onClick={handleFacebookSignIn}
            className="all-[unset] box-border flex flex-col items-center gap-4 px-3 py-[18px] relative self-stretch w-full flex-[0_0_auto] rounded-lg overflow-hidden border border-solid border-[#939393] transition-colors cursor-pointer hover:bg-[#f5f5f5]"
          >
            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <img
                className="relative w-[22px] h-[22px] object-cover"
                alt="Facebook"
                src="https://c.animaapp.com/mfxrrnixiNWqxW/img/icons8-facebook-48-1.png"
              />

              <div className="relative w-fit mt-[-0.50px] font-font-for-buttons font-[number:var(--font-for-buttons-font-weight)] text-[#000000] text-[length:var(--font-for-buttons-font-size)] tracking-[var(--font-for-buttons-letter-spacing)] leading-[var(--font-for-buttons-line-height)] whitespace-nowrap [font-style:var(--font-for-buttons-font-style)]">
                Continue with Facebook
              </div>
            </div>
          </button>
        </div>

        <button
          onClick={handleSignUp}
          className="relative self-stretch [font-family:'Instrument_Sans',Helvetica] font-normal text-transparent text-sm text-center tracking-[0] leading-[14px] cursor-pointer"
        >
          <span className="text-[#000000] leading-[19.6px]">New user?</span>

          <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#000000] text-base leading-[22.4px]">
            &nbsp;
          </span>

          <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#000000] leading-[19.6px] underline hover:no-underline transition-all">
            Sign up
          </span>
        </button>
      </section>

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
