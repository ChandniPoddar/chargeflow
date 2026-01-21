"use client";

import React, { useState } from "react";

export default function ExportData() {
  const [range, setRange] = useState("Last 7 Days");

  return (
    <div className="w-[80vw] px-4 sm:px-0 sm:w-[842px] h-auto sm:h-[530px]">
      {/* HEADER */}
      <h1 className="text-2xl font-semibold text-[#364153] mb-10">
        Export Your Data
      </h1>

      {/* DATE RANGE BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10">
        <DateButton
          active={range === "Last 7 Days"}
          onClick={() => setRange("Last 7 Days")}
        >
          Last 7 Days
        </DateButton>

        <DateButton
          active={range === "Last 30 Days"}
          onClick={() => setRange("Last 30 Days")}
        >
          Last 30 Days
        </DateButton>

        <DateButton
          active={range === "Custom Range"}
          onClick={() => setRange("Custom Range")}
        >
          Custom Range
        </DateButton>
      </div>

    {/* FORMAT */}
      <h3 className="text-lg font-semibold text-[#364153] mb-6">
        Choose File Format
      </h3>

      <div className="flex gap-8 mb-12">
        <FormatBox
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={36}
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4v2h-1V5H8.5a.5.5 0 0 1-.5-.5V2H3v12h8v-.5h1v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm7 .707V4h1.793zM4 7.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-.5.5H5V12H4zm1 2h1.5V8H5zM8 12V7h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm1-4v3h1.5V8zm3-.5a.5.5 0 0 1 .5-.5H15v1h-2v1.5h2v1h-2V12h-1z"
                clipRule="evenodd"
              />
            </svg>
          }
          label="PDF"
        />
        <FormatBox
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={36}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m2.665 9H6.647A1.647 1.647 0 0 1 5 15.353v-1.706A1.647 1.647 0 0 1 6.647 12h1.018M16 12l1.443 4.773L19 12m-6.057-.152l-.943-.02a1.34 1.34 0 0 0-1.359 1.22 1.32 1.32 0 0 0 1.172 1.421l.536.059a1.273 1.273 0 0 1 1.226 1.718c-.2.571-.636.754-1.337.754h-1.13"/>
            </svg>
          }
          label="CSV"
        />
      </div>

      {/* DOWNLOAD */}
      <button
        className="
          w-fit px-12 py-4
          bg-[#39E600] text-white
          rounded-2xl text-lg font-semibold
          shadow-[0_8px_20px_rgba(57,230,0,0.35)]
          hover:brightness-110 transition
        "
      >
        Download Report
      </button>
    </div>
  );
}

/* ================= DATE BUTTON ================= */
function DateButton({
  children,
  active = false,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        min-w-[210px] h-[56px]
        rounded-2xl border
        text-lg font-medium
        transition
        ${
          active
            ? "bg-[#39E600] text-white border-[#39E600]"
            : "border-[#CCCCCC] text-gray-500 hover:border-[#39E600] hover:text-[#39E600]"
        }
      `}
    >
      {children}
    </button>
  );
}

/* ================= FORMAT BOX ================= */
function FormatBox({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className="
        w-[110px] h-[110px]
        border border-[#CCCCCC]
        rounded-2xl
        flex flex-col items-center justify-center
        gap-2
        cursor-pointer
        hover:shadow-md transition
      "
    >
      {icon}
      <span className="font-medium text-[#364153]">{label}</span>
    </div>
  );
}
