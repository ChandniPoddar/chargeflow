"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

/* DASHBOARD CONTENT */
import Overview from "./components/dashboard/Overview";
import Bookings from "./components/dashboard/Bookings";
import Vehicle from "./components/dashboard/Vehicle";
import History from "./components/dashboard/History";
/* SETTINGS SIDEBAR */
import SettingsSidebar from "./components/settingsSidebar";

/* SETTINGS CONTENT */
import PersonalInfo from "./components/settings/Personal";
import Security from "./components/settings/Security";
import Notifications from "./components/settings/Notifications";
import ExportData from "./components/settings/ExportData";
import DeleteAccount from "./components/settings/delete";
import DeactivateAccount from "./components/settings/deactivate";

/* TYPES */
type DashboardTab = "Overview" | "Bookings" | "Vehicle" | "History";

type SettingsTab =
  | "Personal Information"
  | "Security"
  | "Notifications"
  | "Export Data"
  | "Deactivate"
  | "Delete";

type ViewMode = "dashboard" | "settings";

export default function Page() {
  /* GLOBAL VIEW MODE */
  const [viewMode, setViewMode] = useState<ViewMode>("dashboard");

  /* DASHBOARD STATE */
  const [dashboardTab, setDashboardTab] =
    useState<DashboardTab>("Overview");

  /* SETTINGS STATE */
  const [settingsTab, setSettingsTab] =
    useState<SettingsTab>("Personal Information");

  /* USER STATE */
  const [name] = useState("Vikram Singh");
  const [email] = useState("vikram.singh@example.com");
  const [avatar, setAvatar] = useState("/avtar.jpg");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setAvatar(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 py-6">
      <main className="mx-auto max-w-7xl space-y-6 text-[#364153]">

        {/* ================= HEADER ================= */}
        <div
          className="
    relative  /* allow absolute positioning inside */
    bg-[#EDFFE7] rounded-2xl shadow-lg mt-3
    flex flex-col sm:flex-row
    sm:items-center sm:justify-between
    px-4 sm:px-10
    py-6
    w-full sm:w-[1280px] h-auto sm:h-[200px]
  "
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">

            {/* PROFILE IMAGE */}
            <div className="relative">
              <div
                className="
          relative rounded-full overflow-hidden
          border-4 border-white shadow-lg
          w-[120px] h-[120px] sm:w-[100px] sm:h-[100px]
        "
              >
                <Image
                  src={avatar}
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>

              <button
                onClick={() => fileInputRef.current?.click()}
                className="
    absolute bottom-1 right-1
    w-6 h-6 sm:w-7 sm:h-7
    rounded-full
    bg-[#008955] 
    border-2 border-white
    flex items-center justify-center
    shadow
    text-white
  "
              >
                <Icon icon="mdi:camera" className="text-white" />
              </button>



              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>

            {/* USER INFO */}
            <div className="text-center sm:text-left mt-3 sm:mt-0">
              <h1 className="text-[20px] sm:text-[26px] font-semibold text-[#20C000]">
                Welcome Back, {name}
              </h1>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 text-xs sm:text-sm mt-1">
                <Icon icon="mdi:email-outline" width={20}
                  height={20} className=" text-[#1EA400]  " />
                {email}
              </div>

              {/* BADGES */}
              <div className="flex flex-wrap w- 141px h-31px justify-center sm:justify-start gap-2 sm:gap-3 mt-2 sm:mt-4">
                <span
                  className="
            flex items-center gap-1 sm:gap-2 px-3 py-1
            rounded-md bg-[#FFFBEB] text-[#B45309]
            text-[10px] sm:text-xs font-bold shadow-md
          "
                >
                  <Icon icon="mdi:crown" width={17} />
                  Premium Member
                </span>

                <span
                  className="
            flex items-center gap-1 sm:gap-2 px-3 py-1
             w- 114px h-31px
            rounded-md bg-[#DFFFD6] text-[#1EA400]
            text-[10px] sm:text-xs font-medium shadow-md
          "
                >
                  <Icon icon="mdi:check-circle" width={17} />
                  KYC Verified
                </span>
              </div>
            </div>
          </div>

          {/* EDIT / BACK BUTTON */}
          {viewMode === "dashboard" ? (
            <button
              onClick={() => {
                setViewMode("settings");
                setSettingsTab("Security");
              }}
              className="
        absolute top-7 right-8   /* move button to top-right corner */
        flex items-center justify-center gap-2
        bg-[#38EF0A] text-white
        rounded-lg shadow-md
        hover:bg-[#2BC200]
        transition
        w-[80px] sm:w-[90px] h-[32px] sm:h-[36px]
        text-sm sm:text-base
      "
            >
              <Icon
                icon="mdi:pencil-outline"
                className="text-[14px] sm:text-[16px]"
              />
              Edit
            </button>
          ) : (
            <button
              onClick={() => setViewMode("dashboard")}
              className="
        absolute top-7 right-8   /* move button to top-right corner */
        flex items-center justify-center gap-2
        bg-[#38EF0A] text-white
        rounded-lg shadow-md
        hover:bg-[#2BC200]
        transition
        w-[80px] sm:w-[90px] h-[32px] sm:h-[36px]
        text-sm sm:text-base
      "
            >
              ← Back
            </button>
          )}
        </div>

        {/* ================= DASHBOARD ================= */}
        {viewMode === "dashboard" && (
          <>
            <div className="mt-8 flex  overflow-x-auto scrollbar-hide pb-2 justify-start  w-180px h-50px sm:justify-evenly gap-4 sm:gap-6 ">
              {[
                ["Overview", "mdi:home-outline"],
                ["Bookings", "mdi:book-open-outline"],
                ["Vehicle", "mdi:truck-outline"],
                ["History", "mdi:clock-outline"],
              ].map(([label, icon]) => {
                const active = dashboardTab === label;

                return (
                  <button
                    key={label}
                    onClick={() => setDashboardTab(label as DashboardTab)}
                    className={`
                      flex-shrink-0
                      w-[160px] sm:w-[200px]
                      h-[44px] sm:h-[50px]
                      flex items-center justify-center gap-3
                      rounded-xl text-sm sm:text-base font-medium
                      transition shadow-md
                      ${active
                        ? "bg-[#33E000] text-white"
                        : "bg-white text-gray-500"
                      }
                    `}
                  >
                    <Icon icon={icon} width={18} />
                    {label}
                  </button>
                );
              })}
            </div>

            {dashboardTab === "Overview" && <Overview />}
            {dashboardTab === "Bookings" && <Bookings />}
            {dashboardTab === "Vehicle" && <Vehicle />}
            {dashboardTab === "History" && <History />}
          </>
        )}
        {/* ================= SETTINGS ================= */}
        {viewMode === "settings" && (
          <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">


            {/* SIDEBAR */}
            <SettingsSidebar
              activeTab={settingsTab}
              onChange={setSettingsTab}
            />

            {/* CONTENT */}
            <section className="flex-1 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              {settingsTab === "Personal Information" && <PersonalInfo />}

              {settingsTab === "Security" && (
                <Security setActiveTab={setSettingsTab} />
              )}

              {settingsTab === "Notifications" && <Notifications />}

              {settingsTab === "Export Data" && <ExportData />}

              {settingsTab === "Deactivate" && (
                <DeactivateAccount setActiveTab={setSettingsTab} />
              )}

              {settingsTab === "Delete" && (
                <DeleteAccount setActiveTab={setSettingsTab} />
              )}
            </section>
          </div>
        )}

      </main>
    </div>
  );
}
