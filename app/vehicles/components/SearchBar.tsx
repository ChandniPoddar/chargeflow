"use client";

export default function SearchBar() {
  return (
    <div className="relative mb-10 max-w-[520px] md:max-w-[620px] lg:max-w-none mx-auto ">
      <input
        placeholder="Search for"
        className="
          w-full h-[50px]
          rounded-full
          border border-gray-300
          bg-white
          pl-14 pr-5
          text-xl md:text-lg lg:text-xl
          shadow-md
          placeholder:text-gray-400
          focus:outline-none
          focus:border-gray-400
          transition-all duration-300
          focus:pl-16 
          hover:border-2 hover:border-[#4ADE80]
        "
      />

      {/* SEARCH ICON */}
      <svg
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21 21l-4.35-4.35m1.85-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
