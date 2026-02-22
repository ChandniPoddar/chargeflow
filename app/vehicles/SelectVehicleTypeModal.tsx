"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onBack?: () => void;
}

const vehicles = [
  { id: "two-wheeler", label: "Two Wheeler", img: "/vehicles/two-wheeler.png" },
  { id: "three-wheeler", label: "Three Wheeler", img: "/vehicles/three-wheeler.png" },
  { id: "four-wheeler", label: "Four Wheeler", img: "/vehicles/four-wheeler.png" },
  { id: "commercial", label: "Commercial", img: "/vehicles/commercial.png" },
];

export default function SelectVehicleTypeModal({
  open,
  onClose,
  onBack,
}: Props) {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("two-wheeler");

  if (!open) return null;

  const handleNavigate = (type: string) => {
    setSelected(type);
    onClose();
    router.push(`/vehicles/${type}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 md:px-6 lg:px-0 sm:py-0">
      {/* MODAL */}
      <div className="bg-white w-full max-w-[942px] md:max-w-[860px] lg:max-w-[942px] max-h-[92vh] overflow-y-auto sm:h-[590px] md:h-auto lg:h-[590px] rounded-3xl px-6 sm:px-10 py-6 sm:py-8 shadow-2xl">

        {/* HEADER */}
        <div className="flex items-start gap-4 mb-8 sm:mb-12">
          <button
          
            onClick={onBack ?? onClose}
            className="text-2xl font-semibold hover:opacity-70"
          >
            &larr;
          </button>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Select Type Of Vehicle
            </h1>
            <p className="text-gray-500 mt-1">
              Please Select The Type Of Vehicle You Want To Charge
            </p>
          </div>
        </div>

        {/* GRID WRAPPER */}
        <div className="flex justify-center">
          <div className="grid w-full grid-cols-2 gap-x-3 gap-y-3 sm:w-auto sm:gap-x-[32px] md:gap-x-[24px] lg:gap-x-[32px] sm:gap-y-[36px]">
            {vehicles.map((v) => (
              <button
                key={v.id}
                onClick={() => handleNavigate(v.id)}
                className="
          w-full min-w-0 sm:w-[198.8px] md:w-[220px] lg:w-[198.8px] h-[136px] sm:h-[170.4px] rounded-2xl
          flex flex-col items-center justify-center
          bg-white border border-[#E5E7EB] shadow-sm
          transition-all duration-200
          hover:bg-[#E8FFE0]
          hover:border-2 hover:border-[#4ADE80]
          hover:shadow-md
        "
              >
                <img
                  src={v.img}
                  alt={v.label}
                  className="h-[64px] sm:h-[88px] object-contain mb-2"
                />
                <span className="text-[12px] sm:text-[14px] font-semibold text-gray-900 text-center px-1">
                  {v.label}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>


    </div>
   
  );
}
