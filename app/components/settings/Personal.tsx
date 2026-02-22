"use client";

import { useState } from "react";

/* ================= TYPES ================= */

type ProfileData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  address: string;
};

type PersonalInfoProps = {
  onSave?: (data: { name: string; email: string }) => void;
};

/* ================= COMPONENT ================= */

export default function PersonalInfo({ onSave }: PersonalInfoProps) {
  const initialData: ProfileData = {
    firstName: "Vikram",
    lastName: "Singh",
    email: "vikram.singh@example.com",
    phone: "+91 98765 43210",
    dob: "1958-03-15",
    gender: "Male",
    address: "B-12, Sector 18, Noida",
  };

  const [formData, setFormData] = useState<ProfileData>(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (key: keyof ProfileData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave =async () => {
    if (typeof onSave === "function") {
      onSave({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
      });
    }

    setIsEditing(false);
     try {
    const res = await fetch("/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Failed to save data");
    }

    if (typeof onSave === "function") {
      onSave({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
      });
    }

    setIsEditing(false);
  } catch (error) {
    console.error(error);
    alert("Something went wrong while saving!");
  }
  };

  const handleCancel = () => {
    setFormData(initialData);
    setIsEditing(false);
  };

  return (
    // <div className="w-[325px] max-w-full sm:w-full max-w-[880px] mx-auto -mx-3 sm:mx-auto relative px-1 pt-14 sm:pt-0 sm:px-0">
     //<div className="w-full max-w-[880px] mx-auto relative px-4 pt-14 sm:pt-0 sm:px-0"> 
     <div className="w-full max-w-[325px] sm:max-w-[880px] sm:min-w-[555px] mx-auto relative px-4 sm:px-0 pt-14 sm:pt-0">

     {/* </div> <div className="w-[325px] max-w-full sm:w-full max-w-[880px] mx-auto relative px-3 pt-14 sm:pt-0 sm:px-0">  */}

   
    {/* ================= TOP-RIGHT EDIT BUTTON ================= */}
      {!isEditing && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-0 right-0 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#39e600] text-white hover:bg-[#2fc200] transition"
        >
          {/* Pencil SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            className="inline-block"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
            </g>
          </svg>
          Edit
        </button>
      )}

      <h1 className="text-2xl font-semibold mb-6 text-center sm:text-left">Personal Information</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Input
          label="First Name"
          value={formData.firstName}
          disabled={!isEditing}
          onChange={(v) => handleChange("firstName", v)}
        />

        <Input
          label="Last Name"
          value={formData.lastName}
          disabled={!isEditing}
          onChange={(v) => handleChange("lastName", v)}
        />

        <Input
          label="Email"
          value={formData.email}
          disabled={!isEditing}
          onChange={(v) => handleChange("email", v)}
        />

        <Input
          label="Phone"
          value={formData.phone}
          disabled={!isEditing}
          onChange={(v) => handleChange("phone", v)}
        />

        <Input
          label="Date of Birth"
          type="date"
          value={formData.dob}
          disabled={!isEditing}
          onChange={(v) => handleChange("dob", v)}
        />

        <Input
          label="Gender"
          value={formData.gender}
          disabled={!isEditing}
          onChange={(v) => handleChange("gender", v)}
        />
      </div>

      <div className="mt-4">
        <Textarea
          label="Address"
          value={formData.address}
          disabled={!isEditing}
          onChange={(v) => handleChange("address", v)}
        />
      </div>

      {/* ================= SAVE / CANCEL BUTTONS AT BOTTOM ================= */}
      {isEditing && (
        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-6">
          <button
            onClick={handleCancel}
            className="px-7 py-2.5 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition w-full sm:w-auto"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-7 py-2.5 rounded-xl bg-[#39e600] text-white hover:bg-[#2fc200] transition w-full sm:w-auto"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}

/* ================= INPUT ================= */

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  disabled?: boolean;
};

function Input({
  label,
  value,
  onChange,
  type = "text",
  disabled = false,
}: InputProps) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-2.5 rounded-xl border border-[#ccc] transition ${
          disabled ? "bg-gray-50 cursor-not-allowed" : "bg-white"
        }`}
      />
    </div>
  );
}

/* ================= TEXTAREA ================= */

type TextareaProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

function Textarea({
  label,
  value,
  onChange,
  disabled = false,
}: TextareaProps) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <textarea
        rows={2}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-2.5 rounded-xl border border-[#ccc] transition ${
          disabled ? "bg-gray-50 cursor-not-allowed" : "bg-white"
        }`}
      />
    </div>
  );
}
