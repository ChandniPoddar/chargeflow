"use client";

import { useState } from "react";

export default function PersonalInfo() {
  const initialData = {
    firstName: "Vikram",
    lastName: "Singh",
    email: "rajesh.kumar@example.com",
    phone: "+91 98765 43210",
    dob: "1958-03-15",
    gender: "Male",
    address: "B-12, Sector 18, Noida, Uttar Pradesh 201301",
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (key: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSave = () => {
    console.log("Saved Data:", formData);
  };

  const handleCancel = () => {
    setFormData(initialData);
  };

  return (
  <div className="w-[80vw] px-4 sm:px-0 sm:w-[842px] h-auto sm:h-[530px]">


      {/* HEADER */}
      <h1 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">
        Personal Information
      </h1>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="First Name"
          value={formData.firstName}
          onChange={(v) => handleChange("firstName", v)}
        />
        <Input
          label="Last Name"
          value={formData.lastName}
          onChange={(v) => handleChange("lastName", v)}
        />
        <Input
          label="Email"
          value={formData.email}
          onChange={(v) => handleChange("email", v)}
        />
        <Input
          label="Phone"
          value={formData.phone}
          onChange={(v) => handleChange("phone", v)}
        />
        <Input
          label="Date of Birth"
          type="date"
          value={formData.dob}
          onChange={(v) => handleChange("dob", v)}
        />
        <Input
          label="Gender"
          value={formData.gender}
          onChange={(v) => handleChange("gender", v)}
        />
      </div>

      {/* ADDRESS */}
      <div className="mt-4">
        <Textarea
          label="Address"
          value={formData.address}
          onChange={(v) => handleChange("address", v)}
        />
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 mt-6">
        <button
          onClick={handleCancel}
          className="w-full sm:w-auto px-7 py-2.5 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          Cancel
        </button>

        <button
          onClick={handleSave}
          className="w-full sm:w-auto px-7 py-2.5 rounded-xl bg-[#39e600] text-white shadow hover:bg-[#2cc700]"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

/* ================= INPUT ================= */

function Input({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="block mb-1.5 text-gray-700 text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full px-4 py-2.5 rounded-xl
          border border-[#CCCCCC]
          focus:ring-2 focus:ring-[#39e600]
          focus:border-[#39e600]
        "
      />
    </div>
  );
}

/* ================= TEXTAREA ================= */

function Textarea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block mb-1.5 text-gray-700 text-sm font-medium">
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={2}
        className="
          w-full px-4 py-2.5 rounded-xl resize-none
          border border-[#CCCCCC]
          focus:ring-2 focus:ring-[#39e600]
          focus:border-[#39e600]
        "
      />
    </div>
  );
}
