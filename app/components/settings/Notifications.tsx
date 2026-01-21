"use client";

import { useState } from "react";

/* ================= PAGE ================= */
export default function Notifications() {
  return (
   <div className="w-[80vw] px-4 sm:px-0 sm:w-[842px] h-auto sm:h-[530px]">

      {/* HEADER */}
      <h1 className="text-[28px] font-semibold text-[#364153] mb-3">
        Charging Status & Alerts
      </h1>

      <p className="text-[15px] text-[#9AA0A6] leading-relaxed max-w-[820px] mb-8">
        Enable these settings to receive instant notifications on your desktop or
        via whatsapp regarding your electric vehicle&apos;s charging progress.
        We will notify you when the session starts, provide regular battery level
        updates, and alert you the moment your vehicle is fully charged and ready
        for your next journey.
      </p>

      {/* PUSH NOTIFICATIONS */}
      <Row label="Push Notifications" defaultEnabled />

      {/* DIVIDER */}
      <div className="my-10 border-t border-[#E5E7EB]" />

      {/* OFFERS SECTION */}
      <h2 className="text-[24px] font-semibold text-[#364153] mb-3">
        Offers & Station Updates
      </h2>

      <p className="text-[15px] text-[#9AA0A6] leading-relaxed max-w-[820px] mb-8">
        Never Miss A Chance To Save! Get Notified About Exclusive Discount
        Coupons, Loyalty Rewards, And New Charge Flow Stations Opening Near You.
        Stay Updated And Get The Best Charging Deals First.
      </p>

      <div className="space-y-6">
        <Row label="Email" defaultEnabled />
        <Row label="Phone Number" defaultEnabled />
        <Row label="WhatsApp" defaultEnabled />
      </div>
    </div>
  );
}

/* ================= ROW ================= */
function Row({
  label,
  defaultEnabled = false,
}: {
  label: string;
  defaultEnabled?: boolean;
}) {
  const [enabled, setEnabled] = useState(defaultEnabled);

  return (
    <div className="flex items-center justify-between">
      <span className="text-[18px] font-medium text-[#364153]">
        {label}
      </span>
      <Toggle enabled={enabled} onChange={setEnabled} />
    </div>
  );
}

/* ================= TOGGLE ================= */
function Toggle({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className={`
        relative w-[46px] h-[24px]
        rounded-full transition-colors duration-300
        ${enabled ? "bg-[#39E600]" : "bg-[#D1D5DB]"}
      `}
    >
      <span
        className={`
          absolute top-[3px] left-[3px]
          w-[18px] h-[18px]
          bg-white rounded-full shadow
          transition-transform duration-300
          ${enabled ? "translate-x-[22px]" : "translate-x-0"}
        `}
      />
    </button>
  );
}
