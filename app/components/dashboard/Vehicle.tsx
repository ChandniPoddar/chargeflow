"use client";
import Image from "next/image";

export default function Vehicle() {
  const vehicles = [
    {
      name: "Tata Nexon EV",
      year: "2023 · DL01AB1234",
      capacity: "30.2kWh",
      charger: "CCS2",
      battery: 85,
      img: "/c1.png",
    },
    {
      name: "MG ZS EV",
      year: "2022 · DL02CD5678",
      capacity: "50.3kWh",
      charger: "Type 2",
      battery: 50,
      img: "/c2.png",
    },
    {
      name: "Ola Electric S1 Pro",
      year: "2022 · DL02CD5678",
      capacity: "3.0kWh",
      charger: "Type 2",
      battery: 30,
      img: "/c3.png",
    },
  ];

  return (
    <section className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-semibold text-[#111] ml-4">
          My Vehicles
        </h2>

        <button
          className="inline-flex items-center gap-2
            px-4 py-2
            rounded-xl
            w-150px h-40px
            border border-[#38EF0A]
            font-medium
            bg-[#F8FBF8]
            hover:bg-[#38EF0A] hover:text-white
            transition
            w-full sm:w-auto
            justify-center mr-8 shadow-md"
        >
          + Add Vehicles
        </button>
      </div>

      {/* OUTER CONTAINER */}
      <div className="bg-white rounded-3xl shadow-md p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm
                         border border-[#EDEDED]
                         p-5 space-y-4"
            >
              {/* IMAGE BOX */}
              <div
                className="bg-[#F0FFE9]
                           border border-[#38EF0A]
                           rounded-xl
                           h-[140px]
                           flex items-center justify-center"
              >
                <Image
                  src={v.img}
                  alt={v.name}
                  width={180}
                  height={110}
                  className="object-contain"
                />
              </div>

              {/* TITLE */}
              <div>
                <h3 className="font-semibold text-[15px] text-[#1F2937]">
                  {v.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {v.year}
                </p>
              </div>

              {/* DETAILS */}
              <div className="text-sm text-gray-600 space-y-1">
                <p>Battery Capacity: {v.capacity}</p>
                <p>Charger Type: {v.charger}</p>
              </div>

              {/* BATTERY BAR */}
              <div className="space-y-1">
                <div className="flex justify-between text-sm text-gray-700">
                  <span>Current Battery:</span>
                  <span>{v.battery}%</span>
                </div>

                <div className="w-full h-[10px] bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#38EF0A] rounded-full transition-all"
                    style={{ width: `${v.battery}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
