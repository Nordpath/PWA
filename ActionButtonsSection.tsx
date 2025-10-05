import React, { useState } from "react";

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

interface FormField {
  id: keyof FormData;
  label: string;
  placeholder?: string;
  type: "text" | "email" | "tel" | "select";
  value?: string;
  options?: string[];
}

export const ActionButtonsSection = (): JSX.Element => {
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

  const formFields: FormField[] = [
    {
      id: "firstName",
      label: "First name",
      placeholder: "First name",
      type: "text",
      value: formData.firstName,
    },
    {
      id: "lastName",
      label: "Last name",
      placeholder: "Last name",
      type: "text",
      value: formData.lastName,
    },
    { id: "email", label: "Email", type: "email", value: formData.email },
    { id: "phone", label: "Phone", type: "tel", value: formData.phone },
    { id: "birthday", label: "Birthday", type: "select" },
    { id: "gender", label: "Gender", type: "select" },
    { id: "maritalStatus", label: "Marital Status", type: "select" },
    { id: "city", label: "City", type: "select" },
    { id: "zipCode", label: "Zip Code", placeholder: "Zip Code", type: "text" },
    { id: "state", label: "State", type: "select" },
    { id: "country", label: "Country", type: "select" },
  ];

  const actionButtons = [
    { text: "Change Password", action: () => console.log("Change Password") },
    { text: "Delete Account", action: () => console.log("Delete Account") },
    { text: "Log out", action: () => console.log("Log out") },
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Save form data:", formData);
  };

  const renderFormField = (field: FormField, index: number) => {
    const isInputField = field.placeholder !== undefined;
    const hasValue = field.value !== undefined && field.value !== "";

    return (
      <div
        key={field.id}
        className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]"
      >
        {isInputField ? (
          <input
            className="relative self-stretch mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#5e5e5e] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)] [background:transparent] border-[none] p-0"
            placeholder={field.placeholder}
            type={field.type}
            value={formData[field.id]}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            aria-label={field.label}
          />
        ) : (
          <label className="relative self-stretch mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#5e5e5e] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]">
            {field.label}
          </label>
        )}

        <div className="flex items-center justify-between px-4 py-3 relative self-stretch w-full flex-[0_0_auto] bg-[#1c1c1c0d] rounded">
          <div className="relative w-fit font-body-m-regular font-[number:var(--body-m-regular-font-weight)] text-[#181c1f] text-[length:var(--body-m-regular-font-size)] tracking-[var(--body-m-regular-letter-spacing)] leading-[var(--body-m-regular-line-height)] whitespace-nowrap [font-style:var(--body-m-regular-font-style)]">
            {hasValue ? field.value : ""}
          </div>

          <img className="relative w-[26px] h-[26px]" alt="Icon inside" />
        </div>
      </div>
    );
  };

  const renderBirthdayField = () => (
    <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-1 relative">
      <label className="relative self-stretch mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#5e5e5e] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]">
        Birthday
      </label>

      <div className="flex h-[50px] items-center gap-3 pl-4 pr-8 pt-2 pb-3 relative self-stretch w-full bg-[#1c1c1c0d] rounded">
        <div className="relative w-fit font-instrument-sans-18px font-[number:var(--instrument-sans-18px-font-weight)] text-[#181c1f] text-[length:var(--instrument-sans-18px-font-size)] tracking-[var(--instrument-sans-18px-letter-spacing)] leading-[var(--instrument-sans-18px-line-height)] whitespace-nowrap [font-style:var(--instrument-sans-18px-font-style)]">
          {""}
        </div>
      </div>
    </div>
  );

  const renderTwoColumnFields = (
    leftField: FormField,
    rightField: FormField,
  ) => (
    <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex-1 grow flex flex-col items-start gap-1 relative">
        <label className="relative self-stretch mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#5e5e5e] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]">
          {leftField.label}
        </label>

        <div className="flex h-[50px] items-center gap-3 pl-4 pr-8 pt-2 pb-3 relative self-stretch w-full bg-[#1c1c1c0d] rounded">
          <div className="relative w-fit font-instrument-sans-18px font-[number:var(--instrument-sans-18px-font-weight)] text-[#181c1f] text-[length:var(--instrument-sans-18px-font-size)] tracking-[var(--instrument-sans-18px-letter-spacing)] leading-[var(--instrument-sans-18px-line-height)] whitespace-nowrap [font-style:var(--instrument-sans-18px-font-style)]">
            {""}
          </div>
        </div>
      </div>

      <div className="flex-1 grow flex flex-col items-start gap-1 relative">
        {rightField.placeholder ? (
          <input
            className="relative self-stretch mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#5e5e5e] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)] [background:transparent] border-[none] p-0"
            placeholder={rightField.placeholder}
            type={rightField.type}
            value={formData[rightField.id]}
            onChange={(e) => handleInputChange(rightField.id, e.target.value)}
            aria-label={rightField.label}
          />
        ) : (
          <label className="relative self-stretch mt-[-1.00px] font-body-s-regular font-[number:var(--body-s-regular-font-weight)] text-[#5e5e5e] text-[length:var(--body-s-regular-font-size)] tracking-[var(--body-s-regular-letter-spacing)] leading-[var(--body-s-regular-line-height)] [font-style:var(--body-s-regular-font-style)]">
            {rightField.label}
          </label>
        )}

        <div className="flex h-[50px] items-center gap-3 pl-4 pr-8 pt-2 pb-3 relative self-stretch w-full bg-[#1c1c1c0d] rounded">
          <div className="relative w-fit font-instrument-sans-18px font-[number:var(--instrument-sans-18px-font-weight)] text-[#181c1f] text-[length:var(--instrument-sans-18px-font-size)] tracking-[var(--instrument-sans-18px-letter-spacing)] leading-[var(--instrument-sans-18px-line-height)] whitespace-nowrap [font-style:var(--instrument-sans-18px-font-style)]">
            {""}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-[358px] items-center gap-8 absolute top-[304px] left-4">
      <form className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
        {renderFormField(formFields[0], 0)}
        {renderFormField(formFields[1], 1)}
        {renderFormField(formFields[2], 2)}
        {renderFormField(formFields[3], 3)}
        {renderBirthdayField()}
        {renderTwoColumnFields(formFields[5], formFields[6])}
        {renderTwoColumnFields(formFields[7], formFields[8])}
        {renderTwoColumnFields(formFields[9], formFields[10])}
      </form>

      <button
        className="all-[unset] box-border flex flex-col items-center gap-4 px-3 py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-[#eaeced] rounded-lg"
        onClick={handleSave}
        type="button"
        aria-label="Save form data"
      >
        <div className="relative w-fit mt-[-1.00px] font-font-for-buttons font-[number:var(--font-for-buttons-font-weight)] text-[#5e5e5e] text-[length:var(--font-for-buttons-font-size)] tracking-[var(--font-for-buttons-letter-spacing)] leading-[var(--font-for-buttons-line-height)] whitespace-nowrap [font-style:var(--font-for-buttons-font-style)]">
          Save
        </div>
      </button>

      <nav
        className="flex flex-col w-[173px] items-center gap-6 relative flex-[0_0_auto]"
        role="navigation"
        aria-label="Account actions"
      >
        {actionButtons.map((button, index) => (
          <button
            key={index}
            className="relative w-fit font-font-for-buttons font-[number:var(--font-for-buttons-font-weight)] text-[#181c1f] text-[length:var(--font-for-buttons-font-size)] text-center tracking-[var(--font-for-buttons-letter-spacing)] leading-[var(--font-for-buttons-line-height)] whitespace-nowrap [font-style:var(--font-for-buttons-font-style)] bg-transparent border-none cursor-pointer"
            onClick={button.action}
            type="button"
            aria-label={button.text}
          >
            {button.text}
          </button>
        ))}
      </nav>
    </div>
  );
};
