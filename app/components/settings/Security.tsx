"use client";

import { Icon } from "@iconify/react";

export default function Security({
  setActiveTab,
}: {
  setActiveTab: (tab: any) => void;
}) {
  return (
    <div className="w-[80vw] px-4 sm:px-0 sm:w-[842px] h-auto sm:h-[530px]">

      {/* HEADER */}
      <h1 className="text-xl sm:text-2xl font-semibold text-[#364153]">
        Password & Security
      </h1>

      <p className="text-gray-500 mt-2 mb-6 sm:mb-8 text-sm sm:text-base">
        Manage your account security settings and protect data
      </p>

      {/* PASSWORD CARD */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-[#CCCCCC] shadow">
        <div className="flex items-center gap-4">
          <Icon icon="mdi:lock-outline" className="text-3xl sm:text-4xl text-[#39e600]" />
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[#364153]">
              Password
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm">
              Last changed 1 month ago. Use a strong password
            </p>
          </div>
        </div>

        <button
          className="
            w-full sm:w-auto
            px-6 py-2 rounded-xl
            border-2 border-[#39e600]
            text-[#39e600]
            hover:bg-[#39e600]
            hover:text-white
            transition
          "
        >
          Change Password
        </button>
      </div>

      {/* ACTION LINKS */}
      <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-5 font-medium">
        <button
          onClick={() => setActiveTab("Deactivate")}
          className="block text-[#16D508] hover:underline text-sm sm:text-base"
        >
          De-activate my account ›
        </button>

        <button
          onClick={() => setActiveTab("Delete")}
          className="block text-[#16D508] hover:underline text-sm sm:text-base"
        >
          Delete my account ›
        </button>
      </div>
    </div>
  );
}
