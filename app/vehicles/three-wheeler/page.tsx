"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import BrandTabs, { BrandTab } from "../components/BrandTabs";
import SearchBar from "../components/SearchBar";
import VehicleGrid from "../components/VehicleGrid";

const vehicles = [
  {
    name: "Bajaj Riki",
    image: "/three-wheeler/Bajaj%20Riki%20.png",
    brand: "Bajaj",
  },
  {
    name: "Kinetic Safar Smart",
    image: "/three-wheeler/Kinetic%20Safar%20smart.png",
    brand: "Kinetic",
  },
  {
    name: "Mahindra Treo",
    image: "/three-wheeler/mahindra%20treo.png",
    brand: "Mahindra",
  },
  {
    name: "Piaggio Ape E-City",
    image: "/three-wheeler/Piaggio%20Ape%20E-City.png",
    brand: "Piaggio",
  },
  {
    name: "Piaggio Apé E-City Swappable",
    image: "/three-wheeler/Piaggio%20Ap%C3%A9%20E-City%20Swappable.png",
    brand: "Piaggio",
  },
  {
    name: "YC Electric Yatri Super",
    image: "/three-wheeler/YC%20Electric%20Yatri%20Super.png",
    brand: "YC Electric",
  },
  // {
  //   name: "YC Yatri Deluxe",
  //   image: "/three-wheeler/YC%20Yatri%20Deluxe.png",
  // },
];

export default function ThreeWheelerPage() {
  const router = useRouter();
  const [activeBrand, setActiveBrand] = useState("All");

  const brands: BrandTab[] = [
    { name: "All" },
    { name: "Mahindra", logo: "/brands/mahindra.png" },
    { name: "Bajaj", logo: "/brands/Bajaj.png" },
    { name: "Piaggio", logo: "/brands/Piaggio.png" },
    { name: "Kinetic", logo: "/brands/Kinetic.png" },
    { name: "Atul", logo: "/brands/atul.png" },
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




