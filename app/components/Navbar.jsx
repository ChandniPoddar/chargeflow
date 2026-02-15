"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSettings, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Our Services",
    // "For EV Owners",
    // "For Hosts",
    // "Support",
    "Contact Us",
  ];

  return (
    <header className="w-full bg-gradient-to-b from-[#B9B9B9] to-[#F5F5F5] shadow-[0_8px_15px_rgba(0,0,0,0.2)]">
      <div className="max-w-[1400px] mx-auto w-full px-[clamp(10px,4vw,24px)] md:px-8 lg:px-10 h-[68px] min-[390px]:h-[74px] md:h-[82px] flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <div className="flex items-center gap-2">
          <Image
            src="/image.png"
            alt="ChargeFlow"
            width={100}
            height={70}
            className="w-[84px] min-[390px]:w-[94px] md:w-[100px] h-auto"
            priority
          />

        </div>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-[16px] lg:text-[17px] text-black font-lg">
          {links.map((item) => (
            <Link
              key={item}
              href="#"
              className="hover:text-[#29B605] transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* ================= ACTIONS ================= */}
        <div className="flex items-center gap-[clamp(6px,2.5vw,12px)] sm:gap-3">

         {/* SETTINGS */}
<button
  className="
    hidden sm:flex
    w-[50px] h-[50px]
    rounded-full shadow-2xl
    border-2 border-gray-300
    items-center justify-center
    bg-white
    hover:bg-gray-100
    transition
  "
>
  <FiSettings size={22} className="text-[#39E600]" />
</button>


        {/* PROFILE AVATAR */}
        <button
          className="
            hidden sm:flex
            w-[60px] h-[60px]
            rounded-full shadow-2xl
            border-2 border-[#FFFFFF]
            items-center justify-center
            bg-white
            overflow-hidden
          "
          aria-label="Profile"
        >
          <Image
            src="/avtar.jpg"
            alt="Profile"
            width={60}
            height={60}
            className="h-full w-full object-cover"
          />
        </button>


          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-8 h-8 min-[390px]:w-9 min-[390px]:h-9 rounded-lg
                       border border-gray-300
                       flex items-center justify-center
                       bg-white"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-[14px] text-gray-700 font-medium">
            {links.map((item) => (
              <Link
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                className="hover:text-[#29B605]"
              >
                {item}
              </Link>
            ))}

            <div className="pt-4 border-t flex items-center gap-3">
              <button
                className="w-[40px] h-[40px] rounded-full border border-gray-300 bg-white flex items-center justify-center"
                aria-label="Settings"
              >
                <FiSettings size={18} className="text-[#39E600]" />
              </button>

              <button
                className="w-[60px] h-[60px] rounded-full border-2 border-[#FFFFFF] bg-white overflow-hidden"
                aria-label="Profile"
              >
                <Image
                  src="/avtar.jpg"
                  alt="Profile"
                  width={60}
                  height={60}
                  className="h-full w-full object-cover"
                />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
