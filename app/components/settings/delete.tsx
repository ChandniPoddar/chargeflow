"use client";

import { Icon } from "@iconify/react";

export default function DeleteAccount({
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
        Delete Account
      </button>

      <p className="text-gray-600 mb-6">
        It looks like you've had a sub-optimal experience. Before you go,
        please tell us what went wrong so we can improve.
      </p>

      <h3 className="font-semibold mb-3">
        Please Select The Primary Reason Why You Wish To Delete Your Account?
      </h3>

      <select className="w-full border rounded-xl px-4 py-3 mb-6">
        <option>Why Are You Leaving Us?</option>
        <option>Poor experience</option>
        <option>Found a better alternative</option>
        <option>Privacy concerns</option>
      </select>

      <p className="text-gray-600 mb-10">
        If you proceed, your profile and all associated data will be
        permanently removed.
      </p>

      <div className="flex gap-6">
        <button
          onClick={() => setActiveTab("Security")}
          className="px-10 py-4 rounded-xl border-2 border-[#39e600] text-[#39e600] font-semibold"
        >
          Cancel
        </button>

        <button className="px-10 py-4 rounded-xl bg-[#7CFA59] text-white font-semibold shadow">
          Delete
        </button>
      </div>
    </div>
  );
}
