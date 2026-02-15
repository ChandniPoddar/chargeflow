"use client";
import Image from "next/image";

export interface BrandTab {
  name: string;
  logo?: string;
}

export default function BrandTabs({
  brands,
  active,
  onChange,
}: {
  brands: BrandTab[];
  active: string;
  onChange: (name: string) => void;
}) {

  return (
    <div className="relative mb-6">
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {brands.map((b) => (
          <button
            key={b.name}
            onClick={() => onChange(b.name)}
            className={`relative flex items-center justify-center gap-2
                        w-[180px] md:w-[160px] lg:w-[180px] h-[50px] md:h-[46px] lg:h-[50px] rounded-xl hover:bg-gray-100
                        bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]
                        border border-gray-200 shrink-0
                        ${active === b.name ? "text-gray-900" : "text-gray-500"}`}
          >
            {b.logo && (
              <Image
                src={b.logo}
                alt={b.name}
                width={28}
                height={28}
                className="object-contain"
              />
            )}
            <span className="text-sm font-medium">{b.name}</span>

            {/* GREEN UNDERLINE */}
            {active === b.name && (
              <span
                className="absolute left-0 -bottom-2 h-[3px] w-full
                           bg-[#41D134] rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* GREY BASE LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200" />
    </div>
  );
}
