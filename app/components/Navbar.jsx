"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSettings, FiUser, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Our Services",
    "For EV Owners",
    "For Hosts",
    "Support",
    "Contact Us",
  ];

  return (
    <header className="w-full bg-gradient-to-b from-[#B9B9B9] to-[#F5F5F5]  shadow-[0_8px_15px_rgba(0,0,0,0.2)] ">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-[84px] flex items-center justify-between  ">

        {/* ================= LOGO ================= */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="ChargeFlow"
            width={100}
            height={70}
            priority
          />

        </div>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-7 text-[17px] text-black font-lg">
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
        <div className="flex items-center gap-2 sm:gap-3">

         {/* SETTINGS */}
<button
  className="
    hidden sm:flex
    w-12 h-12
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


         {/* LOGIN */}
<button
  className="
    hidden sm:flex
    w-[110px] h-[42px]
    items-center justify-center
    rounded-full shadow-lg
    border-2 border-white
    text-[17px] font-semibold
    tracking-wide
    text-white
    hover:bg-gray-300 transition
  "
>
  Login
</button>



      {/* SIGN UP */}
<button
  className="
    hidden sm:flex
    w-[120px] h-[44px]
    items-center justify-center
    rounded-full
    bg-gradient-to-r from-[#73F752] to-[#23B100]
    text-white text-[16px] font-semibold
    shadow-lg
    hover:brightness-110
    transition
  "
>
  Sign Up
</button>


          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 rounded-lg
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

            <div className="pt-4 border-t flex flex-col gap-3">
              <button className="h-9 rounded-lg border border-gray-300 text-sm">
                Login
              </button>

              <button className="h-9 rounded-lg bg-[#38EF0A] text-white text-sm font-medium">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
