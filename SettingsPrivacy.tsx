import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RealTimeClock } from "../../../components/RealTimeClock";
import { StatusBar } from "../../../components/StatusBar";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthday: string;
  gender: string;
  maritalStatus: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
}

interface UserProfileContentProps {
  navigate: (path: string) => void;
}

const UserProfileContent = ({ navigate }: UserProfileContentProps): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "Martin",
    lastName: "Miller",
    email: "martin.miller@gmail.com",
    phone: "+44 808 134 8412",
    birthday: "",
    gender: "",
    maritalStatus: "",
    city: "",
    zipCode: "",
    state: "",
    country: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Profile updated successfully! 🎉");
      setIsEditing(false);
    } catch (err) {
      alert("Failed to update profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleChangePassword = () => {
    navigate('/change-password');
  };

  const handleDeleteAccount = () => {
    const confirmed = confirm("Are you sure you want to delete your account?\n\nThis action cannot be undone and all your data will be permanently removed.");
    if (confirmed) {
      alert("Account deletion initiated. You would be logged out and redirected to the home screen.");
    }
  };

  const handleLogout = () => {
    const confirmed = confirm("Are you sure you want to log out?");
    if (confirmed) {
      alert("Logging out... You would be redirected to the login screen.");
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Security: Validate file type more strictly
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type.toLowerCase())) {
      alert('Please select a valid image file (JPG, PNG, GIF, WebP only)');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size must be less than 5MB');
      return;
    }

    // Security: Check file signature (magic bytes)
    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    const isValidImage = validateImageSignature(uint8Array, file.type);
    
    if (!isValidImage) {
      alert('Invalid image file. Please select a genuine image file.');
      return;
    }

    setIsUploadingImage(true);

    try {
      // Create a preview URL
      const imageUrl = URL.createObjectURL(file);
      
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setProfileImage(imageUrl);
      alert('Profile image updated successfully! 📸');
    } catch (error) {
      console.error('Image upload error:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsUploadingImage(false);
    }
  };

  const validateImageSignature = (bytes: Uint8Array, mimeType: string): boolean => {
    // Check magic bytes for common image formats
    const signatures = {
      'image/jpeg': [0xFF, 0xD8, 0xFF],
      'image/jpg': [0xFF, 0xD8, 0xFF],
      'image/png': [0x89, 0x50, 0x4E, 0x47],
      'image/gif': [0x47, 0x49, 0x46],
      'image/webp': [0x52, 0x49, 0x46, 0x46]
    };

    const signature = signatures[mimeType.toLowerCase()];
    if (!signature) return false;

    return signature.every((byte, index) => bytes[index] === byte);
  };

  const handleRemoveImage = () => {
    const confirmed = confirm('Are you sure you want to remove your profile picture?');
    if (confirmed) {
      if (profileImage) {
        URL.revokeObjectURL(profileImage);
      }
      setProfileImage(null);
      alert('Profile picture removed successfully.');
    }
  };

  const formFields = [
    { id: "firstName" as keyof FormData, label: "First name", type: "text" },
    { id: "lastName" as keyof FormData, label: "Last name", type: "text" },
    { id: "email" as keyof FormData, label: "Email", type: "email" },
    { id: "phone" as keyof FormData, label: "Phone", type: "tel" },
    { id: "birthday" as keyof FormData, label: "Birthday", type: "date" },
    { id: "gender" as keyof FormData, label: "Gender", type: "select", options: ["Male", "Female", "Other"] },
    { id: "maritalStatus" as keyof FormData, label: "Marital Status", type: "select", options: ["Single", "Married", "Divorced", "Widowed"] },
    { id: "city" as keyof FormData, label: "City", type: "text" },
    { id: "zipCode" as keyof FormData, label: "Zip Code", type: "text" },
    { id: "state" as keyof FormData, label: "State", type: "text" },
    { id: "country" as keyof FormData, label: "Country", type: "select", options: [
      "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
      "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
      "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
      "Denmark", "Djibouti", "Dominica", "Dominican Republic",
      "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
      "Fiji", "Finland", "France",
      "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
      "Haiti", "Honduras", "Hungary",
      "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
      "Jamaica", "Japan", "Jordan",
      "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
      "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
      "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
      "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
      "Oman",
      "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
      "Qatar",
      "Romania", "Russia", "Rwanda",
      "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
      "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
      "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
      "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
      "Yemen",
      "Zambia", "Zimbabwe"
    ] },
  ];

  const actionButtons = [
    { text: "Change Password", action: handleChangePassword, color: "text-blue-600" },
    { text: "Delete Account", action: handleDeleteAccount, color: "text-red-600" },
    { text: "Log out", action: handleLogout, color: "text-[#181c1f]" },
  ];

  return (
    <div className="absolute top-[148px] left-0 right-0 bottom-[100px] overflow-y-auto">
      <div className="flex flex-col w-[358px] items-center gap-6 mx-auto p-4">
        {/* Profile Image Section */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 border-4 border-gray-300 shadow-lg">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            
            {/* Upload/Edit Button */}
            <label className="absolute -bottom-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors shadow-lg">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                disabled={isUploadingImage}
              />
              {isUploadingImage ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </label>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h3 className="font-body-m-bold text-[#181c1f] text-center">
              {formData.firstName} {formData.lastName}
            </h3>
            <div className="flex gap-2">
              <label className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  disabled={isUploadingImage}
                />
                {isUploadingImage ? 'Uploading...' : 'Change Photo'}
              </label>
              {profileImage && (
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <form className="flex flex-col items-start gap-4 relative self-stretch w-full">
          {formFields.map((field, index) => (
            <div key={field.id} className="flex flex-col items-start gap-1 relative self-stretch w-full">
              <label className="relative self-stretch font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#5e5e5e] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]">
                {field.label}
              </label>

              <div className="flex items-center justify-between px-4 py-3 relative self-stretch w-full bg-[#1c1c1c0d] rounded">
                {field.type === "select" ? (
                  <select
                    value={formData[field.id]}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    disabled={!isEditing}
                    className={`relative w-full font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[#181c1f] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] [font-style:var(--body-m-regular-font-style)] bg-transparent border-none outline-none ${!isEditing ? 'cursor-not-allowed opacity-70' : ''}`}
                  >
                    <option value="">Select {field.label}</option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    value={formData[field.id]}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    disabled={!isEditing}
                    className={`relative w-full font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[#181c1f] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] [font-style:var(--body-m-regular-font-style)] bg-transparent border-none outline-none ${!isEditing ? 'cursor-not-allowed opacity-70' : ''}`}
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                  />
                )}

                      {/* Edit/Save Icon */}
                {index === 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      if (isEditing) {
                        handleSave();
                      } else {
                        setIsEditing(true);
                      }
                    }}
                    disabled={isSaving}
                    className="relative w-[26px] h-[26px] flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
                    aria-label={isEditing ? "Save changes" : "Edit profile"}
                  >
                    {isSaving ? (
                      <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                    ) : isEditing ? (
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </form>

        {/* Edit/Cancel Buttons */}
        {isEditing && (
          <div className="flex gap-4 w-full">
            <button
              onClick={() => setIsEditing(false)}
              className="flex-1 py-3 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className={`flex-1 py-3 px-4 rounded-lg transition-colors ${
                isSaving 
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        )}

        {/* Action Buttons */}
        <nav className="flex flex-col w-full items-center gap-6 mt-8" role="navigation" aria-label="Account actions">
          {actionButtons.map((button, index) => (
            <button
              key={index}
              className={`relative w-fit font-font-for-buttons font-[number:var(--font-for-buttons-font-weight)] ${button.color} text-[length:var(--font-for-buttons-font-size)] text-center tracking-[var(--font-for-buttons-letter-spacing)] leading-[var(--font-for-buttons-line-height)] whitespace-nowrap [font-style:var(--font-for-buttons-font-style)] bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity`}
              onClick={button.action}
              type="button"
              aria-label={button.text}
            >
              {button.text}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export const SettingsPrivacy = (): JSX.Element => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"profile" | "privacy">("privacy");
  const [promotionsEnabled, setPromotionsEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleBackClick = () => {
    navigate('/menu');
  };

  const toggleSettings = [
    {
      id: "promotions",
      label: "Promotions",
      enabled: promotionsEnabled,
      toggle: () => {
        setPromotionsEnabled(!promotionsEnabled);
        // Show feedback
        alert(`Promotions ${!promotionsEnabled ? 'enabled' : 'disabled'} successfully!`);
      },
    },
    {
      id: "notifications",
      label: "Notifications",
      enabled: notificationsEnabled,
      toggle: () => {
        setNotificationsEnabled(!notificationsEnabled);
        // Show feedback
        alert(`Notifications ${!notificationsEnabled ? 'enabled' : 'disabled'} successfully!`);
      },
    },
  ];

  const privacyButtons = [
    { 
      id: "privacy-policy", 
      label: "Privacy policy",
      onClick: () => {
        alert("Privacy Policy\n\nThis would open the privacy policy document. In a real app, this would navigate to a detailed privacy policy page or open a PDF document.");
      }
    },
    { 
      id: "terms-of-use", 
      label: "Terms of use",
      onClick: () => {
        alert("Terms of Use\n\nThis would open the terms of use document. In a real app, this would navigate to a detailed terms and conditions page or open a legal document.");
      }
    },
  ];

  const handleUserProfileTab = () => {
    setActiveTab("profile");
  };

  return (
    <div className="bg-white w-[390px] h-[844px] relative overflow-hidden">
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
              className="relative w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#181c1f] focus:ring-opacity-50 rounded"
              aria-label="Go back to menu"
            >
              <img
                className="w-full h-full"
                alt="Back arrow"
                src="https://c.animaapp.com/mg16150s31N5PM/img/frame-1171277295.svg"
              />
            </button>

            <h1 className="relative w-fit mt-[-1.00px] font-heading-XL font-[number:var(--heading-XL-font-weight)] text-[#181c1f] text-[length:var(--heading-XL-font-size)] tracking-[var(--heading-XL-letter-spacing)] leading-[var(--heading-XL-line-height)] whitespace-nowrap [font-style:var(--heading-XL-font-style)]">
              SETTINGS
            </h1>
          </div>

          <button
            className="flex flex-col w-[25px] items-end gap-1.5 relative focus:outline-none focus:ring-2 focus:ring-[#181c1f] focus:ring-opacity-50 rounded p-1 cursor-pointer hover:opacity-70 transition-opacity"
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

      {/* Tab Navigation */}
      <nav className="absolute top-[109px] left-[calc(50.00%_-_195px)] w-[390px] h-[35px] flex flex-col">
        <div className="flex ml-4 w-[358px] h-[34px] relative items-center justify-between">
          <button 
            onClick={handleUserProfileTab}
            className={`flex flex-col w-[179px] items-center px-3 py-1.5 relative focus:outline-none focus:ring-2 focus:ring-[#5e5e5e] focus:ring-opacity-50 rounded ${
              activeTab === "profile" ? "border-b-2 border-[#181c1f]" : ""
            }`}
          >
            <span className={`relative w-fit mt-[-3.00px] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] whitespace-nowrap ${
              activeTab === "profile"
                ? "font-body-m-bold font-[number:var(--body-m-bold-font-weight)] text-[#181c1f] [font-style:var(--body-m-bold-font-style)]"
                : "font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[#5e5e5e] [font-style:var(--body-m-regular-font-style)]"
            }`}>
              User profile
            </span>
          </button>

          <button 
            onClick={() => setActiveTab("privacy")}
            className={`flex flex-col w-[179px] items-center px-3 py-1.5 relative focus:outline-none focus:ring-2 focus:ring-[#181c1f] focus:ring-opacity-50 rounded-t ${
              activeTab === "privacy" ? "border-b-2 border-[#181c1f]" : ""
            }`}
          >
            <span className={`relative w-fit mt-[-2.00px] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] whitespace-nowrap ${
              activeTab === "privacy"
                ? "font-body-m-bold font-[number:var(--body-m-bold-font-weight)] text-[#181c1f] [font-style:var(--body-m-bold-font-style)]"
                : "font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[#5e5e5e] [font-style:var(--body-m-regular-font-style)]"
            }`}>
              Privacy
            </span>
          </button>
        </div>

        <img
          className="h-px w-[390px] self-center object-cover"
          alt=""
          src="https://c.animaapp.com/mg16150s31N5PM/img/line-417.svg"
        />
      </nav>

      {/* Settings Content */}
      {activeTab === "privacy" && (
        <>
          {/* Toggle Settings */}
          {toggleSettings.map((setting, index) => (
            <div
              key={setting.id}
              className={`flex w-[357px] items-center justify-between absolute ${index === 0 ? "top-[168px]" : "top-[222px]"} left-[17px]`}
            >
              <div className={`${index === 1 ? "inline-flex flex-col items-start justify-center gap-2 relative flex-[0_0_auto]" : ""}`}>
                <div className={`relative w-fit ${index === 1 ? "mt-[-1.00px]" : ""} font-instrument-sans-18px font-[number:var(--instrument-sans-18px-font-weight)] text-[#181c1f] text-[length:var(--instrument-sans-18px-font-size)] text-center tracking-[var(--instrument-sans-18px-letter-spacing)] leading-[var(--instrument-sans-18px-line-height)] whitespace-nowrap [font-style:var(--instrument-sans-18px-font-style)]`}>
                  {setting.label}
                </div>
              </div>

              <button
                onClick={setting.toggle}
                className={`relative w-[54px] h-[30px] rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#181c1f] focus:ring-opacity-50 transition-all duration-200 ${
                  setting.enabled ? "bg-[#181c1f]" : "bg-[#eaeced]"
                }`}
                aria-label={`Toggle ${setting.label}`}
                role="switch"
                aria-checked={setting.enabled}
              >
                <div
                  className={`relative w-[44.44%] h-[80.00%] top-[10.00%] rounded-[30px] transition-all duration-200 ${
                    setting.enabled 
                      ? "left-[50%] bg-white" 
                      : "left-[5.56%] bg-[#181c1f]"
                  }`}
                />
              </button>
            </div>
          ))}

          {/* Privacy Buttons */}
          <section className="flex flex-col w-[358px] items-start gap-4 absolute top-[276px] left-[17px]">
            {privacyButtons.map((button) => (
              <button
                key={button.id}
                onClick={button.onClick}
                className="all-[unset] box-border flex flex-col items-center gap-4 px-3 py-[18px] relative self-stretch w-full flex-[0_0_auto] rounded-lg overflow-hidden border border-solid border-[#939393] focus:outline-none focus:ring-2 focus:ring-[#181c1f] focus:ring-opacity-50 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-font-for-buttons font-[number:var(--font-for-buttons-font-weight)] text-[#000000] text-[length:var(--font-for-buttons-font-size)] tracking-[var(--font-for-buttons-letter-spacing)] leading-[var(--font-for-buttons-line-height)] whitespace-nowrap [font-style:var(--font-for-buttons-font-style)]">
                    {button.label}
                  </span>
                </div>
              </button>
            ))}
          </section>
        </>
      )}

      {/* User Profile Content */}
      {activeTab === "profile" && (
        <UserProfileContent navigate={navigate} />
      )}

      {/* Footer */}
      <footer className="flex flex-col w-[390px] items-center gap-3 pt-2 pb-0 px-0 absolute left-[calc(50.00%_-_195px)] bottom-0 bg-[#ffffff1a] backdrop-blur-[15.75px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15.75px)_brightness(100%)]">
        <h2 className="relative w-fit mt-[-1.00px] font-heading-l font-[number:var(--heading-l-font-weight)] text-[#000000] text-[length:var(--heading-l-font-size)] tracking-[var(--heading-l-letter-spacing)] leading-[var(--heading-l-line-height)] whitespace-nowrap [font-style:var(--heading-l-font-style)]">
          In collaboration with
        </h2>

        <div className="relative w-[390px] h-[77px] bg-[#000000] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]">
          <img
            className="absolute w-full h-[80.52%] top-[19.48%] left-0"
            alt=""
            src="https://c.animaapp.com/mg16150s31N5PM/img/rettangolo-271.svg"
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
              alt="The Coca-Cola Company"
              src="https://c.animaapp.com/mg16150s31N5PM/img/coke-company-logo-black-1.svg"
            />
          </button>
        </div>
      </footer>
    </div>
  );
};
