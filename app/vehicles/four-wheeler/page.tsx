"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import BrandTabs, { BrandTab } from "../components/BrandTabs";
import SearchBar from "../components/SearchBar";
import VehicleGrid from "../components/VehicleGrid";

const vehicles = [
  {
    name: "Tata Nexon EV",
    image: "/four-wheeler/tata%20nexon%20EV.png",
    brand: "Tata",
  },
  {
    name: "Tata Xpres-T EV",
    image: "/four-wheeler/tata%20xpres-t%20EV.png",
    brand: "Tata",
  },
  {
    name: "Mahindra E-Verito EV",
    image: "/four-wheeler/Mahindra%20e-Verito%20EV.png",
    brand: "Mahindra",
  },
  {
    name: "Mahindra E2o Puls Ev",
    image: "/four-wheeler/mahindra%20e2o%20puls%20ev.png",
    brand: "Mahindra",
  },
  {
    name: "Tata Tigor Ziptron EV",
    image: "/four-wheeler/tata%20tigor%20ziptron%20EV.png",
    brand: "Tata",
  },
  {
    name: "Vinfast VF7",
    image: "/four-wheeler/Vinfast%20VF7.png",
    brand: "Vinfast",
  },
];

export default function FourWheelerPage() {
  const router = useRouter();
  const [activeBrand, setActiveBrand] = useState("All");

  const brands: BrandTab[] = [
    { name: "All" },
    { name: "Tata", logo: "/brands/tata.png" },
    { name: "MG", logo: "/brands/mg.png" },
    { name: "Hyundai", logo: "/brands/hyundai.png" },
    { name: "Mahindra", logo: "/brands/mahindra.png" },
    { name: "Mercedes", logo: "/brands/mercedes.png" },
    // { name: "Vinfast" },
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
        cardClassName="w-full max-w-[330px] lg:max-w-[356.29px] h-[250px] sm:h-[309.4px] md:h-[292px] lg:h-[309.21px] border-[#E5E7EB] hover:border-[#4ADE80] active:border-[#4ADE80] hover:bg-[#38ef0a] active:bg-[#E8FFE0] p-6 !shadow-lg active:shadow-none"
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


