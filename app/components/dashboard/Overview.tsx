"use client";

import { Icon } from "@iconify/react";

/* ================= MAIN ================= */

export default function Overview() {
  return (
    <div className="w-full space-y-12 px-4 sm:px-8">

      {/* ================= TOP STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8
      w-290px h-211px">
        <StatCard
          icon={<Icon icon="mdi:lightning-bolt" width={22} />}
          value="47"
          label="Total Sessions"
          note="↑ 12% Increase"
        />

        <StatCard
          icon={<Icon icon="mdi:cash" width={22} />}
          value="₹12,560"
          label="Total Spent"
          note="↓ 5% Savings"
        />

        <StatCard
          icon={<Icon icon="mdi:leaf" width={22} />}
          value="245"
          label="CO₂ Saved"
          note="🌲 15 Trees"
        />
      </div>

      {/* ================= WALLET ================= */}
      <div>
        <h2 className="text-2xl sm:text-[36px] font-bold text-gray-900 mb-6">
          Wallet Section
        </h2>

        <div
          className="
            bg-white rounded-2xl
            border border-gray-100
            shadow-[0_6px_16px_rgba(0,0,0,0.12)]
           w-1256px h-[308px]
            p-6 sm:p-10
            flex flex-col gap-8
          "
        >
        <div className="flex flex-col sm:flex-row items-start gap-6 ">
  <IconBox size={72}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-[41px] h-[41px]  "
      fill="currentColor"
    >
      <path d="M200.4 27.39L180.9 183h42.8l49.1-146.57zm91.7 8L242.7 183l149.7.1l34.3-102.61zM180 46.03l-71.9 7.84L122.2 183h40.7zM64 153c-11.5 0-19.18 8.8-21.27 17.2c-1.04 4.2-.45 7.6.73 9.5c1.17 1.8 2.79 3.3 8.54 3.3h52.1l-3.3-30zm357.4 0l-10 30h47.5c-2.6-5-3.7-10.3-3-15.6c.7-5.2 2.7-9.9 5.3-14.4zM41 201v246.9c0 5.1 2.79 11.1 7.37 15.7C52.96 468.2 59 471 64 471l384 .1c5 0 11-2.8 15.6-7.4s7.4-10.6 7.4-15.7v-71h-87c-44 0-44-82 0-82h87v-93.9zm343 112c-20 0-20 46 0 46h22.3c-9-3.8-15.3-12.7-15.3-23s6.3-19.2 15.3-23zm41.7 0c9 3.8 15.3 12.7 15.3 23s-6.3 19.2-15.3 23H487v-46zm-9.7 16c-4 0-7 3-7 7s3 7 7 7s7-3 7-7s-3-7-7-7" />
    </svg>
  </IconBox>



            <div>
              <p className="text-xl sm:text-[28px] font-semibold text-gray-700">
                Available Balance
              </p>
              <p className="text-3xl sm:text-[44px] font-bold text-gray-900 mt-2">
                ₹2,450
              </p>
            </div>
          </div>

          <button
            className="
              w-full sm:w-fit
              px-8 sm:px-10 h-[52px] sm:h-[56px]
              rounded-2xl
              bg-[#38EF0A]
              text-white text-lg sm:text-[22px]
              font-semibold
              flex items-center justify-center gap-3
              shadow-lg
              hover:scale-[1.03]
              transition
            "
          >
            <Icon icon="mdi:plus" width={26} />
            Add Money
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= STAT CARD ================= */
function StatCard({
  icon,
  value,
  label,
  note,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  note: string;
}) {
  return (
    <div
      className="
        bg-white rounded-2xl
        shadow-[0_6px_16px_rgba(0,0,0,0.12)]
        w-[100%] max-w-[360px]
        sm:w-full sm:max-w-[290px]
        h-[200px]
        mx-auto
        flex flex-col items-center justify-center
        text-center
      "
    >
      <IconBox size={44}>{icon}</IconBox>

      <p className="mt-4 text-3xl sm:text-[36px] font-bold text-gray-900">
        {value}
      </p>

      <p className="text-base sm:text-[18px] font-medium text-gray-700">
        {label}
      </p>

      <p className="mt-1 text-sm sm:text-[16px] font-medium text-[#38EF0A]">
        {note}
      </p>
    </div>
  );
}


/* ================= ICON WRAPPER ================= */

function IconBox({
  children,
  size,
}: {
  children: React.ReactNode;
  size: number;
}) {
  return (
    <div
      style={{ width: size, height: size }}
      className="
        bg-[#38EF0A]
        rounded-2xl
        flex items-center justify-center
        shadow-md
        text-white
      "
    >
      {children}
    </div>
  );
}
