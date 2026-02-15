"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import BrandTabs, { BrandTab } from "../components/BrandTabs";
import SearchBar from "../components/SearchBar";
import VehicleGrid from "../components/VehicleGrid";

const vehicles = [
  {
    name: "Ashok Leyland BOSS 1218",
    image: "/commercial/Ashok%20Leyland%20%20BOSS%201218.png",
    brand: "Ashok Leyland",
  },
  {
    name: "Mahindra Treo Zor DV",
    image: "/commercial/Mahindra%20Treo%20%20Zor%20DV.png",
    brand: "Mahindra",
  },
  {
    name: "Mahindra Treo Zor Flatbed",
    image: "/commercial/Mahindra%20Treo%20%20Zor%20Flatbed.png",
    brand: "Mahindra",
  },
  {
    name: "Piaggio Ape E-Xtra",
    image: "/commercial/Piaggio%20Ap%C3%A9%20E-Xtra%20.png",
    brand: "Piaggio",
  },
  // {
  //   name: "Tata ACE EV",
  //   image: "/commercial/Tata%20ACE%20EV.png",
  // },
  // {
  //   name: "Tata Intercity EV 2.0",
  //   image: "/commercial/Tata%20Intercity%20EV%202.0.png",
  // },
  {
    name: "Tata Motors Starbus",
    image: "/commercial/Tata%20Motors%20%20Starbus.png",
    brand: "Tata",
  },
  {
    name: "Tata Prima E.28K",
    image: "/commercial/Tata%20Prima%20E.28K.png",
    brand: "Tata",
  },
  // {
  //   name: "Tata ULTRA E.9",
  //   image: "/commercial/Tata%20ULTRA%20E.9.png",
  // },
];

export default function CommercialPage() {
  const router = useRouter();
  const [activeBrand, setActiveBrand] = useState("All");

  const brands: BrandTab[] = [
    { name: "All" },
    { name: "Bajaj", logo: "/brands/Bajaj.png" },
    { name: "Atul", logo: "/brands/atul.png" },
    { name: "Kinetic", logo: "/brands/Kinetic.png" },
    { name: "Piaggio", logo: "/brands/Piaggio.png" },
    { name: "Ashok Leyland", logo: "/brands/Ashok leyland.png" },
    { name: "Tata", logo: "/brands/tata.png" },
    { name: "Mahindra", logo: "/brands/mahindra.png" },
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




