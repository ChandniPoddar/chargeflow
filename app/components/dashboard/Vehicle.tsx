"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import SelectVehicleTypeModal from "@/app/vehicles/SelectVehicleTypeModal";



export default function Vehicle() {
  const [showModal, setShowModal] = useState(false);
  const [showTypeModal, setShowTypeModal] = useState(false);
  const [vehicleType, setVehicleType] = useState<string | null>(null);

  // 🔹 FORM STATE
  const [plateNumber, setPlateNumber] = useState("");
  const [modelNumber, setModelNumber] = useState("");
  const [year, setYear] = useState("");
  const [connectorType, setConnectorType] = useState("All Type");
  const [batteryCapacity, setBatteryCapacity] = useState("");
  const [rcNumber, setRcNumber] = useState("");

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

  // 🔹 SAVE VEHICLE
  const handleSaveVehicle = async () => {
    try {
      await fetch("/api/vehicles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plateNumber,
          modelNumber,
          year,
          connectorType,
          batteryCapacity,
          rcNumber,
        }),
      });

      // Reset form
      setPlateNumber("");
      setModelNumber("");
      setYear("");
      setConnectorType("All Type");
      setBatteryCapacity("");
      setRcNumber("");

      setShowModal(false);
    } catch (error) {
      console.error("❌ Failed to save vehicle", error);
    }
  };

  return (
    <>
      <section className="space-y-6">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-2xl font-semibold text-[#111] ml-1 sm:ml-4">
            My Vehicles
          </h2>

          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
            border border-[#38EF0A] font-medium bg-[#F8FBF8]
            hover:bg-[#38EF0A] hover:text-white transition
            w-full sm:w-auto justify-center sm:mr-8 shadow-md"
          >
            + Add Vehicles
          </button>
        </div>

        {/* VEHICLE CARDS */}
        <div className="bg-white rounded-3xl shadow-md p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-5 lg:gap-6">
            {vehicles.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm
                border border-[#EDEDED] p-5 space-y-4"
              >
                <div
                  className="bg-[#F0FFE9] border border-[#38EF0A]
                  rounded-xl h-[140px] flex items-center justify-center"
                >
                  <Image
                    src={v.img}
                    alt={v.name}
                    width={180}
                    height={110}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-[15px] text-[#1F2937]">
                    {v.name}
                  </h3>
                  <p className="text-sm text-gray-500">{v.year}</p>
                </div>

                <div className="text-sm text-gray-600 space-y-1">
                  <p>Battery Capacity: {v.capacity}</p>
                  <p>Charger Type: {v.charger}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-sm text-gray-700">
                    <span>Current Battery:</span>
                    <span>{v.battery}%</span>
                  </div>

                  <div className="w-full h-[10px] bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#38EF0A]"
                      style={{ width: `${v.battery}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



    
      {/* ================= ADD VEHICLE MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-10 lg:px-8 overflow-y-auto overflow-x-hidden">
          <div className="h-full w-full flex items-center justify-center">
          <div className="bg-white w-full max-w-[460px] md:max-w-[640px] lg:max-w-[460px] max-h-[calc(100dvh-2rem)] sm:max-h-[90vh] rounded-2xl shadow-sm overflow-y-auto overflow-x-hidden">

            {/* HEADER */}
            <div className="px-4 sm:px-6 py-4  border-[#CCCCCC]">
              <h3 className="text-[20px] font-semibold text-[#364153]">
                Add New Vehicle
              </h3>
            </div>
<div className="w-full h-px bg-[#E0E0E0]  shadow-md" />
            {/* BODY */}
            <div className="px-4 sm:px-6 py-4 ">

              {/* ADD VEHICLE BOX */}
        <div className="mb-6 flex md:justify-center lg:justify-start">
          <div
            onClick={() => setShowTypeModal(true)}
            className="w-[140px] h-[121px] border border-gray-200 rounded-2xl
                       flex flex-col items-center justify-center gap-2
                       cursor-pointer transition-all shadow-md
                       hover:border-[#38EF0A] hover:shadow-md"
          >
            <div className="w-10 h-10 rounded-full border-2 border-gray-400
                            flex items-center justify-center">
              <Icon icon="mdi:plus" className="text-[22px] text-gray-600 shadow-2xl " />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Add Vehicle
            </span>
          </div>
        </div>
<div className="w-full h-px bg-[#E0E0E0] mb-4" />
              {/* FORM */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-sm">

                {/* Vehicle Plate */}
                <div>
                  <label className="block text-[#364153] mb-1">
                    Vehicle Plate Number
                  </label>
                  <div className="relative">
                    <Icon
                      icon="mdi:card-account-details-outline"
                      className="absolute left-3 top-1/2 -translate-y-1/2
                           text-[#364153] text-[18px]"
                    />
                    <input
                      className="w-full border border-[#CCCCCC] rounded-lg
                           pl-10 pr-3 py-2 text-[#364153] shadow-sm
                           hover:border-[#38EF0A]
                           focus:border-[#38EF0A]
                           focus:outline-none"
                      value={plateNumber}
                      onChange={(e) => setPlateNumber(e.target.value)}
                    />
                  </div>
                </div>

                {/* Model */}
                <div>
                  <label className="block text-[#364153] mb-1">
                    Model Number
                  </label>
                  <div className="relative">
                    <Icon
                      icon="mdi:car-outline"
                      className="absolute left-3 top-1/2 -translate-y-1/2
                           text-[#364153] text-[18px]"
                    />
                    <input
                      className="w-full border border-[#CCCCCC] rounded-lg
                           pl-10 pr-3 py-2 text-[#364153] shadow-sm
                           hover:border-[#38EF0A]
                           focus:border-[#38EF0A]
                           focus:outline-none"
                      value={modelNumber}
                      onChange={(e) => setModelNumber(e.target.value)}
                    />
                  </div>
                </div>

                {/* Year */}
                <div>
                  <label className="block text-[#364153] mb-1">
                    Year
                  </label>
                  <div className="relative">
                    <Icon
                      icon="mdi:calendar-blank-outline"
                      className="absolute left-3 top-1/2 -translate-y-1/2
                           text-[#364153] text-[18px]"
                    />
                    <input
                      className="w-full border border-[#CCCCCC] rounded-lg
                           pl-10 pr-3 py-2 text-[#364153] shadow-sm
                           hover:border-[#38EF0A]
                           focus:border-[#38EF0A]
                           focus:outline-none"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </div>
                </div>

                {/* Connector */}
                <div>
                  <label className="block text-[#364153] mb-1">
                    Connector Type
                  </label>
                  <div className="relative">
                    <Icon
                      icon="mdi:power-plug-outline"
                      className="absolute left-3 top-1/2 -translate-y-1/2
                           text-[#364153] text-[18px]"
                    />
                    <select
                      className="w-full border border-[#CCCCCC] rounded-lg
                           pl-10 pr-8 py-2 bg-white text-[#364153] shadow-sm
                           hover:border-[#38EF0A]
                           focus:border-[#38EF0A]
                           focus:outline-none"
                      value={connectorType}
                      onChange={(e) => setConnectorType(e.target.value)}
                    >
                      <option>All Type</option>
                      <option>CCS2</option>
                      <option>Type 2</option>
                    </select>
                   
                  
                  </div>
                </div>

                {/* Battery */}
                <div>
                  <label className="block text-[#364153] mb-1">
                    Battery Capacity
                  </label>
                  <div className="relative">
                    <Icon
                      icon="mdi:battery-charging-outline"
                      className="absolute left-3 top-1/2 -translate-y-1/2
                           text-[#364153] text-[18px]"
                    />
                    <input
                      className="w-full border border-[#CCCCCC] rounded-lg
                           pl-10 pr-3 py-2 text-[#364153] shadow-sm
                           hover:border-[#38EF0A]
                           focus:border-[#38EF0A]
                           focus:outline-none"
                      value={batteryCapacity}
                      onChange={(e) => setBatteryCapacity(e.target.value)}
                    />
                  </div>
                </div>

                {/* RC */}
                <div>
                  <label className="block text-[#364153] mb-1">
                    RC (Registration Certificate)
                  </label>
                  <div className="relative">
                    <Icon
                      icon="mdi:id-card"
                      className="absolute left-3 top-1/2 -translate-y-1/2
                           text-[#364153] text-[18px]"
                    />
                    <input
                      className="w-full border border-[#CCCCCC] rounded-lg
                           pl-10 pr-3 py-2 text-[#364153] shadow-sm
                           hover:border-[#38EF0A]
                           focus:border-[#38EF0A]
                           focus:outline-none"
                      value={rcNumber}
                      onChange={(e) => setRcNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="w-full sm:w-[150px] h-[48px] rounded-xl border-2 border-[#38EF0A]
                     text-[#38EF0A] font-medium
                     hover:bg-green-50 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveVehicle}
                className="w-full sm:w-[150px] h-[48px] rounded-xl bg-[#2FEB00]
                     text-white font-medium
                     hover:brightness-95 transition"
              >
                Apply
              </button>
            </div>
          </div>
          </div>
        </div>
      )}
      

     <SelectVehicleTypeModal
  open={showTypeModal}
  onClose={() => setShowTypeModal(false)}
  onBack={() => {
    setShowTypeModal(false);
    setShowModal(true);   // 👈 reopen Add popup
  }}
  onSelect={(type) => {
    setVehicleType(type);
    setShowTypeModal(false);
    setShowModal(true);   // 👈 return to Add popup
  }}
/>

    

    </>
  );
}
