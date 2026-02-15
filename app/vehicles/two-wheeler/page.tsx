"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import BrandTabs, { BrandTab } from "../components/BrandTabs";
import SearchBar from "../components/SearchBar";
import VehicleGrid from "../components/VehicleGrid";

const vehicles = [
  // {
  //   name: "Ampere Nexus",
  //   image: "/two-wheeler/Ampere%20Nexus.png",
  // },
  // {
  //   name: "Ampere Reo Li",
  //   image: "/two-wheeler/Ampere%20Reo%20li.png",
  // },
  // {
  //   name: "Ampere Zeal EX",
  //   image: "/two-wheeler/Ampere%20Zeal%20EX.png",
  // },
  // {
  //   name: "Bajaj Chetak URBANE",
  //   image: "/two-wheeler/Bajaj%20Chetak%20URBANE%20.png",
  // },
  // {
  //   name: "BGauss C12",
  //   image: "/two-wheeler/BGauss%20C12%20.png",
  // },
  // {
  //   name: "BGauss D15",
  //   image: "/two-wheeler/BGauss%20D15.png",
  // },
  {
    name: "Oben Electric Rorr EZ",
    image: "/two-wheeler/Oben%20electric%20%20Rorr%20EZ.png",
    brand: "Oben",
  },
  {
    name: "Oben Electric Rorr",
    image: "/two-wheeler/Oben%20electric%20Rorr.png",
    brand: "Oben",
  },
  {
    name: "Ola Electric S1 Air",
    image: "/two-wheeler/Ola%20electric%20S1%20Air.png",
    brand: "Ola",
  },
  {
    name: "Ola Electric S1 Pro",
    image: "/two-wheeler/Ola%20electric%20S1%20pro.png",
    brand: "Ola",
  },
  {
    name: "Ola Electric S1 X",
    image: "/two-wheeler/Ola%20electric%20S1%20X.png",
    brand: "Ola",
  },
  {
    name: "TVS X",
    image: "/two-wheeler/TVS%20X.png",
    brand: "TVS",
  },
];

export default function TwoWheelerPage() {
  const router = useRouter();
  const [activeBrand, setActiveBrand] = useState("All");

  const brands: BrandTab[] = [
    { name: "All" },
    { name: "Ola", logo: "/brands/ola.png" },
    { name: "TVS", logo: "/brands/TVS.png" },
    { name: "Ather", logo: "/brands/ather.png" },
    { name: "Bajaj", logo: "/brands/Bajaj.png" },
    { name: "Hero", logo: "/brands/hero.png" },
  ];

  const filteredVehicles = useMemo(() => {
    if (activeBrand === "All") return vehicles;
    return vehicles.filter((v) => v.brand === activeBrand);
  }, [activeBrand]);

  return (
    <div className="max-w-[1160px] mx-auto px-4 sm:px-6 md:px-8 lg:px-6 py-8">
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-5">
        <button
          type="button"
          onClick={() => router.push("/vehicles")}
          className="text-lg text-gray-600 hover:text-gray-800 transition"
          aria-label="Back to vehicle type selection"
        >
          &larr;
        </button>
        <h1 className="text-2xl font-semibold text-gray-800">
          Select Your Vehicle
        </h1>
      </div>

      <BrandTabs
        brands={brands}
        active={activeBrand}
        onChange={setActiveBrand}
      />
      <SearchBar />

      <VehicleGrid
        vehicles={filteredVehicles}
        gridClassName="grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 justify-items-center text-lg"
        cardClassName="w-full max-w-[330px] lg:max-w-[356.29px] h-[250px] sm:h-[309.4px] md:h-[292px] lg:h-[309.21px] border-[#E5E7EB] hover:border-[#38ef0a] active:border-[#4ADE80] hover:bg-[#E8FFE0] active:bg-[#E8FFE0] p-6 !shadow-lg active:shadow-none"
        imageClassName="h-[178.39px] w-full max-w-[297.32px] md:h-[165px] md:max-w-[270px] lg:h-[178.39px] lg:max-w-[297.32px]"
        imageWidth={240}
        imageHeight={150}
      />

      <div className="flex justify-center mt-8">
        <button className="px-12 h-[55px] w-full max-w-[427px] md:max-w-[380px] lg:max-w-[427px] rounded-lg bg-[#7DFF5B] text-sm font-semibold text-white shadow-[0_3px_10px_rgba(125,255,91,0.5)]">
          Add Vehicle
        </button>
      </div>
    </div>
  );
}




