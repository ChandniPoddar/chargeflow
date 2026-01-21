"use client";

import { Icon } from "@iconify/react";

export default function DeactivateAccount({
  setActiveTab,
}: {
  setActiveTab: (tab: any) => void;
}) {
  return (
    <div className="max-w-3xl">
      {/* BACK HEADER */}
      <button
        onClick={() => setActiveTab("Security")}
        className="flex items-center gap-2 text-xl font-semibold mb-6 hover:opacity-80"
      >
        <Icon icon="mdi:arrow-left" />
        Deactivate Account
      </button>

      {/* USER INFO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            className="w-full border rounded-xl px-4 py-3 bg-gray-50 text-gray-600"
            value="vikram.singh@example.com"
            disabled
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Phone Number</label>
          <input
            className="w-full border rounded-xl px-4 py-3 bg-gray-50 text-gray-600"
            value="+91 98765 43210"
            disabled
          />
        </div>
      </div>

      {/* OTP */}
      <label className="block mb-2 font-medium">
        Enter the 6-digit code sent to your mobile/email
      </label>

      <div className="flex items-center gap-4 mb-8">
        <input
          placeholder="Enter OTP"
          className="flex-1 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#39e600] outline-none"
        />
        <button className="text-[#39e600] font-medium hover:underline">
          Resend OTP
        </button>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-6">
        <button
          onClick={() => setActiveTab("Security")}
          className="px-8 py-3 rounded-xl border-2 border-[#39e600] text-[#39e600] font-semibold"
        >
          Cancel
        </button>

        <button className="px-8 py-3 rounded-xl bg-[#7CFA59] text-white font-semibold shadow hover:bg-[#63e84d] transition">
          Confirm Deactivation
        </button>
      </div>

      {/* INFO */}
      <div className="mt-10 text-gray-600 space-y-3">
        <h3 className="font-semibold text-gray-800">
          When you deactivate your Charge Flow account
        </h3>

        <ul className="list-disc ml-6 space-y-1">
          <li>You will temporarily lose access to your dashboard.</li>
          <li>You will not receive notifications.</li>
          <li>You will not receive important updates.</li>
          <li>Your profile and data will not be visible.</li>
          <li>You may not be able to check past orders.</li>
        </ul>
      </div>
    </div>
  );
}
