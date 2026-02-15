"use client";

/* ================= SVG ICONS ================= */

const PersonalIcon = ({ active }: { active: boolean }) => (
  <svg
    viewBox="0 0 512 512"
    className={`w-6 h-6 shrink-0 ${active ? "text-white" : "text-gray-500"}`}
    fill="currentColor"
  >
    <path d="M256 256a112 112 0 1 0-112-112a112 112 0 0 0 112 112m0 32c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128" />
  </svg>
);

const ShieldIcon = ({ active }: { active: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={`w-6 h-6 shrink-0 ${active ? "text-white" : "text-gray-500"}`}
    fill="currentColor"
  >
    <path d="M12 2l8 4v6c0 5.25-3.438 10.688-8 12c-4.563-1.313-8-6.75-8-12V6z" />
  </svg>
);

const NotificationIcon = ({ active }: { active: boolean }) => (
  <svg
    viewBox="0 0 20 20"
    className={`w-6 h-6 shrink-0 ${active ? "text-white" : "text-gray-500"}`}
    fill="currentColor"
  >
    <path d="M4 8a6 6 0 0 1 4.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2zm8 10a2 2 0 1 1-4 0z" />
  </svg>
);

const ExportIcon = ({ active }: { active: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    className={`w-6 h-6 shrink-0 ${active ? "text-white" : "text-gray-500"}`}
    fill="currentColor"
  >
    <path d="M7 22a5 5 0 0 1-5-5v-3a1 1 0 1 1 2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3a1 1 0 1 1 2 0v3a5 5 0 0 1-5 5z" />
    <path d="M17.715 10.9a1 1 0 0 1-.016 1.415l-4.5 4.4a1 1 0 0 1-1.398 0l-4.5-4.4a1 1 0 1 1 1.398-1.43l2.801 2.739V5a1 1 0 1 1 2 0v8.624l2.8-2.739a1 1 0 0 1 1.415.016Z" />
  </svg>
);

/* ================= TYPES ================= */

type SettingsTab =
  | "Personal Information"
  | "Security"
  | "Notifications"
  | "Export Data";

interface Props {
  activeTab: SettingsTab;
  onChange: (tab: SettingsTab) => void;
}

/* ================= MENU ================= */

const menu = [
  { label: "Personal Information", Icon: PersonalIcon },
  { label: "Security", Icon: ShieldIcon },
  { label: "Notifications", Icon: NotificationIcon },
  { label: "Export Data", Icon: ExportIcon },
] as const;

/* ================= COMPONENT ================= */

export default function SettingsSidebar({ activeTab, onChange }: Props) {
  return (
   <aside className="block w-full  md:h-[590px]  lg:h-[590px] sm:w-[290px] lg:w-[300px] ">

      <div
        className="
          w-full h-full
          bg-white
          rounded-2xl
          h-[590px]
          shadow-lg
          overflow-hidden
          flex flex-col
          pt-6
        "
      >
        {menu.map(({ label, Icon }) => {
          const active = activeTab === label;

          return (
            <button
              key={label}
              onClick={() => onChange(label)}
              className={`
                flex items-center gap-4
                h-[72px]
                px-6
                mt-2
                rounded-sm
               
                transition-colors
                shadow-sm
                ${
                  active
                    ? "bg-gradient-to-r from-[#22E000] to-[#3CFF00] text-white"
                    : "bg-white text-gray-700 hover:bg-[#F9FFF6]"
                }
              `}
            >
              <Icon active={active} />
              <span className="text-[18px] font-medium whitespace-nowrap">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
