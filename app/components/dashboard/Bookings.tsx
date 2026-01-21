"use client";

import { Icon } from "@iconify/react";

export default function Bookings() {
  const bookings = [
    {
      title: "Premium Mall Charging Hub",
      location: "Connaught Place, New Delhi",
      date: "12 December 2025",
      time: "10:00 AM - 12:00 PM",
      power: "DC Fast - 50kW",
      plug: "Type 2",
      amount: "₹450",
    },
    {
      title: "Residential Society Charger",
      location: "Gurugram Sector 45",
      date: "28 November 2025",
      time: "10:00 AM - 12:00 PM",
      power: "AC Fast - 7.2kW",
      plug: "Type 2",
      amount: "₹329",
    },
    {
      title: "Workplace Charging",
      location: "Cyber City (Near Delhi Border)",
      date: "15 October 2025",
      time: "10:00 AM - 12:00 PM",
      power: "AC Fast - 7.2kW",
      plug: "Type 2",
      amount: "₹380",
    },
    {
      title: "Metro Parking Charger",
      location: "Rajiv Chowk",
      date: "25 September 2025",
      time: "09:00 AM - 11:00 AM",
      power: "AC Fast - 7.2kW",
      plug: "Type 2",
      amount: "₹300",
    },
    {
      title: "City Center EV Station",
      location: "Noida Sector 18",
      date: "05 October 2025",
      time: "11:00 AM - 01:00 PM",
      power: "DC Fast - 60kW",
      plug: "Type 2",
      amount: "₹420",
    },
    {
      title: "Highway EV Stop",
      location: "NH-48",
      date: "10 September 2025",
      time: "02:00 PM - 04:00 PM",
      power: "DC Fast - 100kW",
      plug: "Type 2",
      amount: "₹520",
    },
  ];

  return (
    <div className="w-full space-y-8 px-8">

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">
          Booking Management
        </h2>

        <button className="flex items-center gap-2 px-4 py-2 border border-[#38EF0A] rounded-lg bg-[#F8FBF8] hover:bg-[#38EF0A] hover:text-white transition shadow">
          <Icon icon="mdi:plus" width={18} />
          New Booking
        </button>
      </div>

      {/* ================= SCHEDULED BOOKING ================= */}
      <div className="border border-[#CFF5C2] rounded-xl shadow p-5 space-y-5">

        <div className="flex items-center gap-4 bg-[#EEFFEA] px-5 py-3 shadow-sm">
          <div className="w-10 h-10 bg-[#38EF0A] flex items-center justify-center rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[26px] h-[26px] text-white" fill="currentColor">
              <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2m6-3.586l-3.707-3.707l1.414-1.414L11 15.586l4.293-4.293l1.414 1.414zM5 7h14v2H5z" />
            </svg>
          </div>

          <h3 className="text-lg font-semibold text-gray-900">
            Scheduled Booking (1)
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow p-5 w-[360px]">
          <div className="flex justify-between">
            <h4 className="font-semibold text-gray-800">
              Highway Charging Point
            </h4>
            <span className="text-xs px-3 py-1 rounded-full bg-[#38EF0A] text-white">
              Confirmed
            </span>
          </div>

          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            {/* LOCATION */}
            <li className="flex items-center gap-3">
              <div  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-[#38EF0A]" width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" />
                </svg>
              </div>
              Yamuna Expressway
            </li>

            {/* CALENDAR */}
            <li className="flex items-center gap-3">
              <div  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-[#38EF0A]" width={24} height={24} viewBox="0 0 1024 1024" fill="currentColor">
                  <path d="m960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985"></path>
                </svg>
              </div>
              12 December 2025
            </li>

            {/* CLOCK */}
            <li className="flex items-center gap-3">
              <div  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
                <Icon icon="mdi:clock-outline" className="text-[#38EF0A] w-6 h-6" />
              </div>
              Tomorrow, 10:00 AM – 12:00 PM
            </li>

            {/* THUNDER */}
            <li className="flex items-center gap-3">
              <div  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-[#38EF0A]" width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 15H6l7-14v8h5l-7 14z" />
                </svg>
              </div>
              DC Fast · 150kW
            </li>

            {/* PLUG */}
            <li className="flex items-center gap-3">
              <div  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-[#38EF0A]" width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 8h2v5c0 2.206 1.794 4 4 4h2v5h2v-5h2c2.206 0 4-1.794 4-4V8h2V6H3zm4-6h2v3H7zm8 0h2v3h-2z" />
                </svg>
              </div>
              CCS2 + CHAdeMO
            </li>

            {/* CURRENCY */}
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
                <Icon icon="mdi:currency-inr" className="text-[#38EF0A] w-6 h-6" />
              </div>
              Estimated ₹450
            </li>
          </ul>

        </div>
      </div>

      {/* ================= PAST BOOKINGS ================= */}
      <div className="border border-[#CFF5C2] rounded-xl shadow p-5 space-y-5">

        <div className="flex items-center gap-4 bg-[#EEFFEA] px-5 py-3 shadow-sm">
          <div className="w-10 h-10 bg-[#38EF0A] flex items-center justify-center rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" className="w-[26px] h-[26px] text-white" fill="currentColor">
              <path d="M13 0L8 3l5 3V4c4.955 0 9 4.045 9 9s-4.045 9-9 9s-9-4.045-9-9c0-2.453.883-4.57 2.5-6.188L5.094 5.407C3.11 7.39 2 10.053 2 13c0 6.045 4.955 11 11 11s11-4.955 11-11S19.045 2 13 2zm-2.094 6.563l-1.812.875l2.531 5A1.5 1.5 0 0 0 11.5 13v.063L8.281 16.28l1.439 1.44l3.219-3.219H13a1.5 1.5 0 0 0 1.5-1.5c0-.69-.459-1.263-1.094-1.438z" />
            </svg>
          </div>

          <h3 className="text-lg font-semibold text-gray-900">
            Past Booking (6)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[360px] overflow-y-auto no-scrollbar">
          {bookings.map((b, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-5 space-y-4">
              <div className="flex justify-between">
                <h4 className="font-semibold text-gray-800">{b.title}</h4>
                <span className="text-xs px-3 py-1 rounded-full bg-[#38EF0A] text-white">
                  Completed
                </span>
              </div>
<div className="space-y-3 text-sm text-gray-600">
  {/* LOCATION */}
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
      <svg xmlns="http://www.w3.org/2000/svg" className="text-[#38EF0A]" width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" />
      </svg>
    </div>
    {b.location}
  </div>

  {/* CALENDAR */}
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
      <svg xmlns="http://www.w3.org/2000/svg" className="text-[#38EF0A]" width={24} height={24} viewBox="0 0 1024 1024" fill="currentColor">
        <path d="m960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985" />
      </svg>
    </div>
    {b.date}
  </div>

  {/* CLOCK */}
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
      <Icon icon="mdi:clock-outline" className="text-[#38EF0A] w-6 h-6" />
    </div>
    {b.time}
  </div>

  {/* THUNDER */}
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
      <svg xmlns="http://www.w3.org/2000/svg" className="text-[#38EF0A]" width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 15H6l7-14v8h5l-7 14z" />
      </svg>
    </div>
    {b.power}
  </div>

  {/* PLUG */}
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
      <svg xmlns="http://www.w3.org/2000/svg" className="text-[#38EF0A]" width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 8h2v5c0 2.206 1.794 4 4 4h2v5h2v-5h2c2.206 0 4-1.794 4-4V8h2V6H3zm4-6h2v3H7zm8 0h2v3h-2z" />
      </svg>
    </div>
    {b.plug}
  </div>

  {/* CURRENCY */}
  <div className="flex items-center gap-3 font-medium text-gray-700">
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
      <Icon icon="mdi:currency-inr" className="text-[#38EF0A] w-6 h-6" />
    </div>
    Amount Paid: {b.amount}
  </div>
</div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
