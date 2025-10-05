import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ChangePassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.currentPassword.trim()) {
      newErrors.currentPassword = "Current password is required";
    }

    if (!formData.newPassword.trim()) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters";
    } else if (formData.newPassword === formData.currentPassword) {
      newErrors.newPassword = "New password must be different from current password";
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your new password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call to change password
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would make an API call here
      console.log("Password change request:", {
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      });

      // Show success message
      alert("Password changed successfully! 🎉\n\nYour password has been updated. Please use your new password for future logins.");
      
      // Clear form
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      // Navigate back to settings
      navigate('/settings');
      
    } catch (error) {
      console.error("Password change failed:", error);
      alert("Failed to change password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackClick = () => {
    navigate('/settings');
  };

  const passwordFields = [
    {
      id: "currentPassword",
      label: "Current Password",
      placeholder: "Enter current password",
      value: formData.currentPassword,
      error: errors.currentPassword,
      showPassword: showPasswords.currentPassword,
    },
    {
      id: "newPassword",
      label: "New Password",
      placeholder: "Enter new password",
      value: formData.newPassword,
      error: errors.newPassword,
      showPassword: showPasswords.newPassword,
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Confirm new password",
      value: formData.confirmPassword,
      error: errors.confirmPassword,
      showPassword: showPasswords.confirmPassword,
    },
  ];

  const isFormValid = formData.currentPassword && formData.newPassword && formData.confirmPassword;

  return (
    <div className="bg-[#ffffff] w-full min-w-[390px] min-h-[844px] relative">
      <header className="flex flex-col w-[390px] items-center gap-3 pt-0 pb-3 px-0 absolute top-0 left-[calc(50.00%_-_195px)] bg-[#ffffff]">
        <div className="relative self-stretch w-full h-11">
          <img
            className="absolute top-0 left-[calc(50.00%_-_82px)] w-[164px] h-[30px]"
            alt="Notch"
            src="https://c.animaapp.com/mg16zrjapRtPKo/img/notch.png"
          />

          <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
            <div className="w-[54px] h-[21px] flex rounded-3xl">
              <div className="mt-px w-[54px] h-5 font-default-bold-body font-[number:var(--default-bold-body-font-weight)] text-[#181c1f] text-[length:var(--default-bold-body-font-size)] text-center tracking-[var(--default-bold-body-letter-spacing)] leading-[var(--default-bold-body-line-height)] whitespace-nowrap [font-style:var(--default-bold-body-font-style)]">
                9:41
              </div>
            </div>
          </div>

          <img
            className="absolute top-[19px] left-[286px] w-[77px] h-[13px]"
            alt="Right side"
            src="https://c.animaapp.com/mg16zrjapRtPKo/img/right-side.png"
          />
        </div>

        <div className="flex w-[358px] items-center justify-between relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <button
              onClick={handleBackClick}
              className="relative w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity"
              aria-label="Go back to settings"
            >
              <img
                className="relative w-6 h-6"
                alt="Back"
                src="https://c.animaapp.com/mg16zrjapRtPKo/img/frame-1171277295.svg"
              />
            </button>

            <h1 className="relative w-fit mt-[-1.00px] font-heading-XL font-[number:var(--heading-XL-font-weight)] text-[#181c1f] text-[length:var(--heading-XL-font-size)] tracking-[var(--heading-XL-letter-spacing)] leading-[var(--heading-XL-line-height)] whitespace-nowrap [font-style:var(--heading-XL-font-style)]">
              CHANGE PASSWORD
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
                root.render(React.createElement(HamburgerMenu, { onClose: closeMenu, currentScreen: 'settings' }));
              });
            }}
          >
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
            <div className="relative self-stretch w-full h-0.5 bg-[#000000] rounded-[14px]" />
          </button>
        </div>
      </header>

      <main className="flex flex-col w-[358px] items-start gap-8 absolute top-[113px] left-[calc(50.00%_-_179px)]">
        <form className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          {passwordFields.map((field, index) => (
            <div
              key={field.id}
              className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]"
            >
              <label
                htmlFor={field.id}
                className="relative self-stretch mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#5e5e5e] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]"
              >
                {field.label}
              </label>

              <div className="flex items-center justify-between px-4 py-3 relative self-stretch w-full flex-[0_0_auto] bg-[#1c1c1c0d] rounded">
                <input
                  id={field.id}
                  type={field.showPassword ? "text" : "password"}
                  value={field.value}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  placeholder={field.placeholder}
                  className="relative w-full [font-family:'Instrument_Sans',Helvetica] font-normal text-[#181c1f] text-base tracking-[0] leading-[22.4px] bg-transparent border-none outline-none"
                  aria-describedby={`${field.id}-error`}
                />

                <button
                  type="button"
                  onClick={() => togglePasswordVisibility(field.id)}
                  className="relative w-[26px] h-[26px] flex-shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
                  aria-label={
                    field.showPassword ? "Hide password" : "Show password"
                  }
                >
                  {field.showPassword ? (
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

              {field.error && (
                <div
                  id={`${field.id}-error`}
                  className="relative w-fit font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-red-500 text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] whitespace-nowrap [font-style:var(--body-s-regular-font-style)]"
                  role="alert"
                >
                  {field.error}
                </div>
              )}
            </div>
          ))}
        </form>

        <button
          onClick={handleSubmit}
          disabled={!isFormValid || isLoading}
          className={`flex flex-col items-center gap-4 px-3 py-[18px] relative self-stretch w-full flex-[0_0_auto] rounded-lg transition-colors duration-200 ${
            isFormValid && !isLoading
              ? "bg-black hover:bg-gray-800 cursor-pointer"
              : "bg-[#eaeced] cursor-not-allowed"
          }`}
        >
          <span className={`relative w-fit mt-[-1.00px] font-font-for-buttons font-[number:var(--font-for-buttons-font-weight)] text-[length:var(--font-for-buttons-font-size)] tracking-[var(--font-for-buttons-letter-spacing)] leading-[var(--font-for-buttons-line-height)] whitespace-nowrap [font-style:var(--font-for-buttons-font-style)] ${
            isFormValid && !isLoading ? "text-white" : "text-[#5e5e5e]"
          }`}>
            {isLoading ? "Saving..." : "Save new password"}
          </span>
        </button>
      </main>

      <footer className="flex flex-col w-[390px] items-center gap-3 pt-2 pb-0 px-0 absolute left-[calc(50.00%_-_195px)] bottom-0 bg-[#ffffff1a] backdrop-blur-[15.75px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15.75px)_brightness(100%)]">
        <div className="relative w-fit mt-[-1.00px] font-heading-l font-[number:var(--heading-l-font-weight)] text-[#000000] text-[length:var(--heading-l-font-size)] tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] whitespace-nowrap [font-style:var(--heading-l-font-style)]">
          In collaboration with
        </div>

        <div className="relative w-[390px] h-[77px] bg-[#000000] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]">
          <img
            className="absolute w-full h-[80.52%] top-[19.48%] left-0"
            alt="Rettangolo"
            src="https://c.animaapp.com/mg16zrjapRtPKo/img/rettangolo-271.svg"
          />

          <div className="absolute w-full h-[44.16%] top-[55.84%] left-0 flex items-end justify-center">
            <div className="mb-2 w-[134px] h-[5px] bg-white rounded-[100px]" />
          </div>

          <button
            onClick={() => window.open('https://www.coca-cola.com/', '_blank', 'noopener,noreferrer')}
            className="absolute h-[53.25%] top-[15.58%] left-[calc(50.00%_-_129px)] w-[259px] hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Visit The Coca-Cola Company"
          >
            <img
              className="w-full h-full"
              alt="Coke company logo"
              src="https://c.animaapp.com/mg16zrjapRtPKo/img/coke-company-logo-black-1.svg"
            />
          </button>
        </div>
      </footer>
    </div>
  );
};
