"use client";

export default function Toggle({ enabled = true }) {
  return (
    <div
      className={`w-14 h-8 rounded-full p-1 transition
        ${enabled ? "bg-[#39e600]" : "bg-gray-300"}`}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full transition
          ${enabled ? "ml-auto" : ""}`}
      />
    </div>
  );
}
