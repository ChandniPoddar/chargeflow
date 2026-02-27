"use client";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import SupportChatbot from "../SupportChatbot";

type TicketStatus = "In Progress" | "Open" | "Resolved";

type TicketRow = {
  id: string;
  description: string;
  category: string;
  status: TicketStatus;
  date: string;
  time: string;
};

const tickets: TicketRow[] = [
  {
    id: "TKT-1047",
    description: "Payment Failed - Order #5821",
    category: "Payment issue",
    status: "In Progress",
    date: "Feb 15, 2026",
    time: "10:45 AM",
  },
  {
    id: "TKT-1046",
    description: "Cannot access dashboard after login",
    category: "Technical issue",
    status: "Open",
    date: "Feb 15, 2026",
    time: "02:15 PM",
  },
  {
    id: "TKT-1045",
    description: "Request refund for canceled service",
    category: "Refund request",
    status: "Resolved",
    date: "Feb 14, 2026",
    time: "09:30 AM",
  },
  {
    id: "TKT-1044",
    description: "Account verification email not received",
    category: "Account problem",
    status: "Resolved",
    date: "Feb 14, 2026",
    time: "04:20 PM",
  },
  {
    id: "TKT-1043",
    description: "API integration not working",
    category: "Service not working",
    status: "Resolved",
    date: "Feb 13, 2026",
    time: "11:10 AM",
  },
  {
    id: "TKT-1042",
    description: "API integration not working",
    category: "Service not working",
    status: "Resolved",
    date: "Feb 13, 2026",
    time: "11:10 AM",
  },
  {
    id: "TKT-1042",
    description: "API integration not working",
    category: "Service not working",
    status: "Resolved",
    date: "Feb 13, 2026",
    time: "11:10 AM",
  },
];

function StatusBadge({ status }: { status: TicketStatus }) {
  const classes =
    status === "Resolved"
      ? "bg-[#C8F1BE] text-[#2B7A16] border-[#AEDFA0]"
      : status === "Open"
        ? "bg-[#E2EEFF] text-[#2F67C5] border-[#C9DBFF]"
        : "bg-[#FFE9DB] text-[#C06E2A] border-[#FFD5BA]";

  return (
    <span
      className={`inline-flex h-[30px] w-[110px] items-center justify-center gap-1 rounded-[4px] border px-2 text-[16px] font-medium ${classes}`}
    >
      {status === "In Progress" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 512 512"
          aria-hidden="true"
          className="h-[17px] w-[17px] min-h-[17px] min-w-[17px] shrink-0"
        >
          <path fill="currentColor" d="M115.063 21.97v9.343c0 101.953 38.158 189.648 96.343 222.093v6.094c-58.186 32.445-96.344 120.14-96.344 222.094v9.344H401.81v-9.344c0-102.552-38.804-190.274-97.53-222.188V253.5c58.722-31.917 97.53-119.64 97.53-222.188V21.97H115.06zM134 40.655h248.875c-2.477 96.445-42.742 175.523-91.938 198.906l-5.343 2.532v28.751l5.344 2.53c49.193 23.383 89.456 102.438 91.937 198.876H134c2.456-95.898 42.125-175.078 90.875-198.938l5.25-2.562v-28.594l-5.25-2.562c-48.748-23.86-88.42-103.04-90.875-198.938zm213.656 86.125c-57.607 27.81-124.526 27.84-177.562 4.095C184.748 181.78 213.91 218.012 248.22 224a12.18 12.18 0 0 0-2.47 7.344c0 6.76 5.488 12.25 12.25 12.25s12.25-5.49 12.25-12.25c0-2.72-.907-5.218-2.406-7.25c35.426-5.88 65.488-44.07 79.812-97.313zM258 258.626c-6.762 0-12.25 5.488-12.25 12.25s5.488 12.25 12.25 12.25s12.25-5.488 12.25-12.25s-5.488-12.25-12.25-12.25m0 39.28c-6.762 0-12.25 5.49-12.25 12.25c0 6.763 5.488 12.25 12.25 12.25s12.25-5.487 12.25-12.25c0-6.76-5.488-12.25-12.25-12.25m0 39.533c-6.762 0-12.25 5.488-12.25 12.25c0 6.76 5.488 12.25 12.25 12.25s12.25-5.49 12.25-12.25c0-6.762-5.488-12.25-12.25-12.25m.125 39.906c-23.21.28-46.19 25.77-75.813 75.656h153c-30.523-51.003-53.977-75.936-77.187-75.656" />
        </svg>
      ) : (
        <Icon icon={status === "Resolved" ? "mdi:check" : "mdi:arrow-up"} width={17} />
      )}
      {status}
    </span>
  );
}

export default function SupportTicket() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [callIssueView, setCallIssueView] = useState<"categories" | "payment" | "paymentTransactionFailed" | "updateContact" | "otherIssue">("categories");
  const [contactNumber, setContactNumber] = useState("+91 9876543210");
  const [isYesSelected, setIsYesSelected] = useState(false);
  const [otherIssueText, setOtherIssueText] = useState("");

  useEffect(() => {
    const shouldLockScroll = isModalOpen || isHelpModalOpen || isCallModalOpen || isChatOpen;

    if (shouldLockScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen, isHelpModalOpen, isCallModalOpen, isChatOpen]);

  return (
    <>
      <section className="mx-auto mb-6 w-full max-w-[1256px] rounded-[10px] p-4 sm:p-5 md:p-6">
        <header className="flex h-auto min-h-[76px] w-full flex-col justify-center gap-4 rounded-[8px] px-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <h2 className="text-[34px] font-semibold leading-none text-[#171717] sm:text-[32px]">Support Ticket</h2>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-[50px] w-[245px] items-center  justify-center gap-2 rounded-[6px] bg-gradient-to-r from-[#32FC00] to-[#06CB20] px-4 text-[18px] font-semibold text-white shadow-sm hover:brightness-95"
            >
              <Icon icon="mdi:plus" width={28} />
              Create New Ticket
            </button>

            <button
              onClick={() => setIsHelpModalOpen(true)}
              className="inline-flex h-[50px] w-[162px] items-center justify-center gap-2 rounded-[6px] border border-[#29B605] bg-white px-4 text-[18px] font-medium hover:text-[#29B605] hover:bg-[#F7F7F7]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-[18px] h-[18px] text-current"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="m4 11.5l-.485.121A2 2 0 0 0 2 13.561v1.877a2 2 0 0 0 1.515 1.94l1.74.435A.6.6 0 0 0 6 17.231v-5.463a.6.6 0 0 0-.746-.582zm0 0V11a8 8 0 1 1 16 0v.5m0 0l.485.121A2 2 0 0 1 22 13.561v1.877a2 2 0 0 1-1.515 1.94L20 17.5m0-6l-1.255-.314a.6.6 0 0 0-.745.582v5.463a.6.6 0 0 0 .745.582L20 17.5m-5 3h3a2 2 0 0 0 2-2v-1m-5 3a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 0 1.5-1.5Z"
                />
              </svg>

              Get Help
            </button>
          </div>
        </header>

        <div className="mt-2 ">
          <h3 className="text-[36px] font-semibold text-[#171717] sm:text-[34px]">My Tickets</h3>
        </div>

        <div className="mt-4 h-[600px] overflow-hidden scroll-hidden rounded-[8px] border border-[#DFDFDF] bg-white">
          <div className="tickets-scroll h-full overflow-auto">
            <table className="min-w-[900px] w-full border-collapse">
              <thead>
                <tr className="h-[75px] bg-[#A0FF89] text-left text-[24px] font-semibold text-[#364153]">
                  <th className="px-4">Ticket ID</th>
                  <th className="px-4">Description</th>
                  <th className="px-4">Category</th>
                  <th className="px-4">Status</th>
                  <th className="px-4">Date</th>
                  <th className="px-4">Time</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr
                    key={ticket.id}
                    className="h-[75px] border-t border-[#ECECEC] text-[20px] text-[#4A4A4A]"
                  >
                    <td className="whitespace-nowrap px-4 text-[#6F6F6F]">{ticket.id}</td>
                    <td className="whitespace-nowrap px-4">{ticket.description}</td>
                    <td className="whitespace-nowrap px-4">{ticket.category}</td>
                    <td className="whitespace-nowrap px-4 w-110px h-30px">
                      <StatusBadge status={ticket.status} />
                    </td>
                    <td className="whitespace-nowrap px-4">{ticket.date}</td>
                    <td className="whitespace-nowrap px-4">{ticket.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-3 sm:p-4">
          <div className="h-655px w-625px overflow-hidden rounded-[18px] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E4E4E4] px-5 py-5 sm:px-6">
              <h3 className="text-[26px] font-medium leading-none text-[#364153]">Raise A New Ticket</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-md p-1 text-[#7B7B7B] hover:bg-[#F4F4F4]"
                aria-label="Close popup"
              >
                <Icon icon="mdi:close" width={36} />
              </button>
            </div>

            <div className="h-[calc(92vh-102px)] space-y-5 overflow-y-auto px-5 py-5 sm:px-9">
              <div>
                <label className="mb-2 block text-[22px] font-medium leading-none text-[#3E4A5E]">Category</label>
                <div className="relative">
                  <select className="ticket-category h-[68px] w-full appearance-none rounded-[12px] border border-[#B8B8B8] bg-white px-5 pr-14 text-[16px] text-[#8A8A8A] outline-none focus:border-[#96CF89]">
                    <option>Select Category</option>
                    <option>Payment Issue</option>
                    <option>Technical Issue</option>
                    <option>Refund Request</option>
                    <option>Account Problem</option>
                  </select>
                  <Icon icon="mdi:chevron-down" width={30} className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#787878]" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[22px] font-medium leading-none text-[#3E4A5E]">Subject / Title</label>
                <input
                  type="text"
                  placeholder="Enter short problem title (e.g Payment Failed)"
                  className="h-[68px] w-full rounded-[12px] border border-[#AAAAAA] px-5 text-[16px] text-[#303030] outline-none placeholder:text-[#8A8A8A] border-4px"
                />
              </div>

              <div>
                <label className="block text-[22px] mb-2 font-medium leading-none text-[#3E4A5E]">Decertation</label>
                <p className="mb-2 text-[14px] leading-[1.25] text-[#6F6F6F]">
                  Please describe your issue clearly and mention any actions you have taken in 50-150 words.
                </p>
                <textarea
                  placeholder="Describe your issue in detail..."
                  className="h-[132px] w-full resize-none rounded-[16px] border border-[#AAAAAA] px-5 py-4 text-[16px] text-[#303030] outline-none placeholder:text-[#8A8A8A] focus:border-[#32EF00]"
                />
              </div>

              <div>
                <label className="block text-[22px] font-medium leading-none text-[#3E4A5E]">Upload Screenshot</label>
                <p className="mb-3 text-[14px] leading-[1.25] text-[#6F6F6F]">
                  Please upload a clear screenshot that shows the exact issue you are facing to help us resolve it quickly.
                </p>
                <label className="mx-auto flex h-[163px] w-full max-w-[330px] cursor-pointer flex-col items-center justify-center rounded-[12px] border border-dashed border-[#AAAAAA] bg-[#ECFFEF] text-center hover:bg-[#DDF0DD]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="34"
                    height="34"
                    className="text-[#6F6F6F]"
                  >
                    <path
                      fill="currentColor"
                      d="M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20zm5-12.15L9.125 9.725q-.3.3-.712.288T7.7 9.7q-.275-.3-.288-.7t.288-.7l3.6-3.6q.15-.15.325-.212T12 4.425t.375.063t.325.212l3.6 3.6q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L13 7.85V15q0 .425-.288.713T12 16t-.712-.288T11 15z"
                    />
                  </svg>

                  <span className="mt-2 text-[16px] font-medium text-[#616161]">Upload Screenshot / Invoice / Error Image</span>
                  <span className="mt-1 text-[14px] text-[#7E7E7E]">Drag And Drop Or Click To Browse</span>
                  <span className="mt-2 rounded-[6px] w-85px h-26.56px border border-[#BEBEBE] bg-white px-4 py-1 text-[14px] text-[#303030]">
                    Browse Files
                  </span>
                  <input type="file" className="hidden" />
                </label>
              </div>

              <div>
                <label className="mb-2 block text-[22px] font-medium leading-none text-[#3E4A5E]">Order ID/Transaction ID</label>
                <input
                  type="text"
                  placeholder="Enter Order ID (if applicable)"
                  className="h-[68px] w-full rounded-[12px] border border-[#B8B8B8] px-5 text-[16px] text-[#303030] outline-none placeholder:text-[#8A8A8A] focus:border-[#96CF89]"
                />
              </div>



              <div className="flex justify-center pt-2">
                <button className="h-[66px] w-full max-w-[620px] rounded-[16px] bg-[#32EF00] text-[18px] font-semibold text-white transition hover:brightness-95">
                  Submit Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isHelpModalOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-3 sm:p-4">
          <div className="h-[396px] w-full max-w-[514px] overflow-hidden rounded-[16px] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E5E5E5] px-6 py-4">
              <h3 className="text-[21px] h-65px font-semibold text-[#171717]">How would you like to get help?</h3>
              <button
                onClick={() => setIsHelpModalOpen(false)}
                className="rounded-md p-1 text-[#7D7D7D] hover:bg-[#F4F4F4]"
                aria-label="Close help popup"
              >
                <Icon icon="mdi:close" width={30} />
              </button>
            </div>

            <div className="space-y-5 px-6 py-6">
              <button
                onClick={() => {
                  setIsHelpModalOpen(false);
                  setIsChatOpen(true);
                }}
                className="group flex  w-[448px] h-[125px]  items-center gap-4 rounded-[16px] border border-[#D1D1D1] bg-[#FDFDFD] px-5 text-left hover:border-[#26B800] hover:bg-[#FAFAFA] active:border-[#26B800] focus-visible:border-[#26B800] focus-visible:outline-none"
              >
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[12px] bg-[#D9F8CF] group-hover:bg-[#26B800] group-active:bg-[#26B800] group-focus-visible:bg-[#26B800]">
                  <Icon icon="mdi:chat-processing-outline" width={30} className="text-[#26B800] group-hover:text-white group-active:text-white group-focus-visible:text-white" />
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-[#3D4A5F]">Request Chat</p>
                  <p className="text-[14px] leading-5 text-[#727272]">Chat with our support team for quick assistance.</p>
                </div>
              </button>

              <button
                onClick={() => {
                  setIsHelpModalOpen(false);
                  setCallIssueView("categories");
                  setIsCallModalOpen(true);
                }}
                className="group flex w-[448px] h-[125px]  items-center gap-4 rounded-[16px] border border-[#D1D1D1] bg-[#FDFDFD] px-5 text-left hover:border-[#26B800] hover:bg-[#FAFAFA] active:border-[#26B800] focus-visible:border-[#26B800] focus-visible:outline-none"
              >
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[12px] bg-[#D9F8CF] group-hover:bg-[#26B800] group-active:bg-[#26B800] group-focus-visible:bg-[#26B800]">
                  <Icon icon="mdi:phone-outline" width={30} className="text-[#26B800] group-hover:text-white group-active:text-white group-focus-visible:text-white" />
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-[#3D4A5F]">Request Call</p>
                  <p className="text-[14px] leading-5 text-[#727272]">Request a call from our support team.</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {isCallModalOpen && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-3 sm:p-4">
          {callIssueView === "categories" ? (
            <div className="h-[480px] w-full max-w-[514px] overflow-hidden rounded-[14px] bg-white shadow-2xl">
              <div className="flex h-[52px] items-center justify-between bg-[#27C300] px-6 text-white">
                <h3 className="text-[20px] font-semibold leading-none">ChargeFlow Support</h3>
                <button
                  onClick={() => {
                    setIsCallModalOpen(false);
                    setCallIssueView("categories");
                  }}
                  className="rounded-md p-1 text-white/95 hover:bg-[#24AE00]"
                  aria-label="Close request call popup"
                >
                  <Icon icon="mdi:close" width={30} />
                </button>
              </div>

              <div className="px-6 py-6">
                <h4 className="text-center text-[25px] font-medium leading-none text-[#374151]">Request a Call</h4>
                <p className="mt-2 text-center text-[16px] text-[#919191]">Please select the type of issue you&apos;re facing:</p>

                <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6">
                  <button
                    onClick={() => setCallIssueView("payment")}
                    className="flex h-[48px] items-center gap-3 rounded-[10px] border border-[#CFCFCF] px-4 text-left hover:border-[#25C300] hover:bg-[#EDFFE7]"
                  >
                    <Icon icon="mdi:credit-card-outline" width={20} className="text-[#25C300]" />
                    <span className="text-[18px] font-medium leading-none text-[#374151]">Payment Issue</span>
                  </button>

                  <button className="flex h-[48px] items-center gap-3 rounded-[10px] border border-[#CFCFCF] px-4 text-left hover:bg-[#EDFFE7] hover:border-[#25C300]">
                    <Icon icon="mdi:ev-station" width={20} className="text-[#25C300]" />
                    <span className="text-[18px] font-medium leading-none text-[#374151]">Charging Issue</span>
                  </button>

                  <button className="flex h-[48px] items-center gap-3 rounded-[10px] border border-[#CFCFCF] px-4 text-left hover:bg-[#EDFFE7] hover:border-[#25C300]">
                    <Icon icon="mdi:calendar-check-outline" width={20} className="text-[#25C300]" />
                    <span className="text-[18px] font-medium leading-none text-[#374151]">Booking Issue</span>
                  </button>

                  <button className="flex h-[48px] items-center gap-3 rounded-[10px] border border-[#CFCFCF] px-4 text-left hover:bg-[#EDFFE7] hover:border-[#25C300]">
                    <Icon icon="mdi:account-outline" width={20} className="text-[#25C300]" />
                    <span className="text-[18px] font-medium leading-none text-[#374151]">Account Issue</span>
                  </button>

                  <button className="flex h-[48px] items-center gap-3 rounded-[10px] border border-[#CFCFCF] px-4 text-left hover:bg-[#EDFFE7] hover:border-[#25C300]">
                    <Icon icon="mdi:cash-refund" width={20} className="text-[#25C300]" />
                    <span className="text-[18px] font-medium leading-none text-[#374151]">Refund Issue</span>
                  </button>

                  <button
                    onClick={() => setCallIssueView("otherIssue")}
                    className="flex h-[48px] items-center gap-3 rounded-[10px] border border-[#CFCFCF] px-4 text-left hover:bg-[#EDFFE7] hover:border-[#25C300]"
                  >
                    <Icon icon="mdi:dots-horizontal" width={20} className="text-[#25C300]" />
                    <span className="text-[18px] font-medium leading-none text-[#374151]">Other</span>
                  </button>
                </div>
              </div>
            </div>
            ) : callIssueView === "payment" ? (
              <div className="h-[480px] w-full max-w-[514px] overflow-hidden rounded-[14px] bg-white shadow-2xl">
                <div className="flex h-[52px] items-center justify-between bg-[#27C300] px-6 text-white">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCallIssueView("categories")}
                      className="rounded-md p-1 text-white/95 hover:bg-[#24AE00]"
                      aria-label="Back to issue categories"
                    >
                      <Icon icon="mdi:arrow-left" width={30} />
                    </button>
                    <h3 className="text-[20px] font-semibold leading-none">ChargeFlow Support</h3>
                  </div>
                  <button
                    onClick={() => {
                      setIsCallModalOpen(false);
                      setCallIssueView("categories");
                    }}
                    className="rounded-md p-1 text-white/95 hover:bg-[#24AE00]"
                    aria-label="Close payment issue popup"
                  >
                    <Icon icon="mdi:close" width={30} />
                  </button>
                </div>

              <div className="px-8 py-4 flex flex-col items-center text-center">
                <h4 className="text-center text-[25px] font-semibold leading-none text-[#4B5563]">Payment Issue</h4>
                <p className="mt-2 text-center text-[15px] text-[#9CA3AF]">Please select the type of payment problem</p>

                  <div className="mt-4 flex w-full flex-col items-center space-y-2">
                    {[
                      "Transaction failed",
                      "Amount deducted but charger not activated",
                      "Double payment deducted",
                      "Refund not received",
                      "Need payment invoice",
                      "Other",
                    ].map((issue, index) => (
                      <button
                        key={issue}
                        onClick={() => {
                          if (index === 0) {
                            setIsYesSelected(false);
                            setCallIssueView("paymentTransactionFailed");
                          }
                        }}
                        className="group flex h-[45px] w-full max-w-[410px] items-center gap-3 rounded-[8px] border border-[#AAAAAA] px-3 text-left hover:border-[#32C42A] active:border-[#27C300]"
                      >
                        <span className="flex h-[28px] w-[28px] items-center justify-center rounded-[6px] border border-[#CFCFCF] ">
                          <Icon icon="mdi:check" width={21} className="text-[#32C42A]" />
                      </span>
                      <span className="text-[16px] font-medium leading-none text-[#374151]">{issue}</span>
                    </button>
                  ))}
                  </div>
                </div>
              </div>
            ) : callIssueView === "paymentTransactionFailed" ? (
              <div className="h-[480px] w-full max-w-[514px] overflow-hidden rounded-[14px] bg-white shadow-2xl">
                <div className="flex h-[52px] items-center justify-between bg-[#27C300] px-6 text-white">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCallIssueView("payment")}
                      className="rounded-md p-1 text-white/95 hover:bg-[#24AE00]"
                      aria-label="Back to payment issues"
                    >
                      <Icon icon="mdi:arrow-left" width={30} />
                    </button>
                    <h3 className="text-[20px] font-semibold leading-none">ChargeFlow Support</h3>
                  </div>
                  <button
                    onClick={() => {
                      setIsCallModalOpen(false);
                      setCallIssueView("categories");
                    }}
                    className="rounded-md p-1 text-white/95 hover:bg-[#24AE00]"
                    aria-label="Close transaction failed popup"
                  >
                    <Icon icon="mdi:close" width={30} />
                  </button>
                </div>

                <div className="px-8 py-6">
                  <div className="mx-auto flex h-[35.56px] w-full max-w-[324px] items-center gap-3 rounded-[8px] bg-[#2BD600] px-4 text-white">
                    <span className="flex h-[24px] w-[24px] items-center justify-center rounded-[6px] bg-[#ECECEC]">
                      <Icon icon="mdi:check" width={16} className="text-[#2FBF1F]" />
                    </span>
                    <span className="text-[14px] font-medium leading-none">Payment Issue -&gt; Transaction failed</span>
                  </div>
                  <div className=" h-[66px]  ">
                  <h4 className="mt-6 text-center text-[24px] font-medium leading-none text-[#374151]">Confirm Your Registered Number</h4>
                  <p className="mx-auto mt-3 max-w-[430px] text-center text-[14px] leading-tight text-[#8C8C8C]">
                    Our support team will call you within 2-5 minutes regarding your transaction issue.
                  </p>
                  </div>

                  <div className="mx-auto mt-6 flex h-[48px] w-full max-w-[350px] items-center justify-center rounded-[8px] border border-[#D0D0D0]  px-4">
                    <span className="text-[19px] font-medium leading-none text-[#374151]">+91 XXXXXX432</span>
                  </div>

                  <div className="mx-auto mt-10 grid w-full max-w-[405px] grid-cols-2 gap-6">
                    <button
                      onClick={() => setIsYesSelected(true)}
                      className={`flex h-[42px] w-[190px] items-center justify-center gap-2 rounded-[10px] border text-[18px] font-medium ${
                        isYesSelected
                          ? "border-[#2BD600] bg-[#2BD600] text-white"
                          : "border-[#31CB1A] text-[#2FBF1F]"
                      }`}
                    >
                      <Icon icon="mdi:check" width={28} />
                      Yes
                    </button>
                    <button
                      onClick={() => {
                        setIsYesSelected(false);
                        setCallIssueView("updateContact");
                      }}
                      className="flex h-[42px] w-[190px] items-center justify-center rounded-[10px] border border-[#C5C5C5] text-[18px] font-medium text-[#7A7A7A]"
                    >
                      No
                    </button>
                  </div>

                  {isYesSelected && (
                    <>
                      <div className="mx-auto mt-6 h-px w-full max-w-[470px] bg-[#CFCFCF]" />
                      <button className="mx-auto mt-6 block h-[48px] w-full max-w-[420px] rounded-[12px] bg-[#55E830] text-[21px] font-medium text-white hover:brightness-95">
                        Submit Request
                      </button>
                    </>
                  )}
                </div>
              </div>
            ) : callIssueView === "updateContact" ? (
              <div className="h-[480px] w-full max-w-[514px] overflow-hidden rounded-[14px] bg-[#ECECEC] shadow-2xl">
                <div className="flex h-[52px] items-center justify-between bg-[#27C300] px-6 text-white">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCallIssueView("paymentTransactionFailed")}
                      className="rounded-md p-1 text-white/95 hover:bg-[#24AE00]"
                      aria-label="Back to confirm number"
                    >
                      <Icon icon="mdi:arrow-left" width={30} />
                    </button>
                    <h3 className="text-[20px] font-semibold leading-none">ChargeFlow Support</h3>
                  </div>
                  <button
                    onClick={() => {
                      setIsCallModalOpen(false);
                      setCallIssueView("categories");
                    }}
                    className="rounded-md p-1 text-white/95 hover:bg-[#24AE00]"
                    aria-label="Close update contact popup"
                  >
                    <Icon icon="mdi:close" width={30} />
                  </button>
                </div>

                <div className="px-8 pt-[98px]">
                  <h4 className="text-center text-[24px] font-medium leading-none text-[#374151]">Update Contact Number</h4>

                  <input
                    type="text"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="mx-auto mt-8 block h-[44px] w-full max-w-[412px] rounded-[8px] border border-[#32EF00] bg-white px-4 text-[18px] font-medium text-[#374151] outline-none"
                  />

                  <button className="mx-auto mt-[62px] block h-[48px] w-full max-w-[420px] rounded-[12px] bg-[#55E830] text-[21px] font-medium text-white hover:brightness-95">
                    Submit Request
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-[480px] w-full max-w-[514px] overflow-hidden rounded-[14px] bg-white shadow-2xl">
                <div className="flex h-[52px] items-center justify-between bg-[#27C300] px-6 text-white">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCallIssueView("categories")}
                      className="rounded-md p-1 text-white/95 hover:bg-[#24AE00]"
                      aria-label="Back to issue categories"
                    >
                      <Icon icon="mdi:arrow-left" width={30} />
                    </button>
                    <h3 className="text-[20px] font-semibold leading-none">ChargeFlow Support</h3>
                  </div>
                  <button
                    onClick={() => {
                      setIsCallModalOpen(false);
                      setCallIssueView("categories");
                    }}
                    className="rounded-md p-1 text-white/95 hover:bg-[#24AE00]"
                    aria-label="Close other issue popup"
                  >
                    <Icon icon="mdi:close" width={30} />
                  </button>
                </div>

                <div className="px-8 pt-[38px]">
                  <h4 className="text-center text-[28px] font-medium leading-none text-[#374151]">Other Issue</h4>
                  <p className="mt-2 text-center text-[14px] text-[#8C8C8C]">Please briefly describe your issue.</p>

                  <textarea
                    value={otherIssueText}
                    onChange={(e) => setOtherIssueText(e.target.value)}
                    placeholder="Describe your issue......"
                    className="mt-10 h-[88px] w-full resize-none rounded-[10px] border border-[#AFAFAF]  px-4 py-3 text-[18px] text-[#374151] outline-none placeholder:text-[#8B8B8B]"
                  />

                  <button className="mx-auto mt-12 block h-[48px] w-full max-w-[420px] rounded-[12px] bg-[#55E830] text-[21px] font-medium text-white hover:brightness-95">
                    Submit Request
                  </button>
                </div>
              </div>
            )}
        </div>
      )}

      <SupportChatbot isOpen={isChatOpen} onOpenChange={setIsChatOpen} showLauncher={false} />
      <style jsx global>{`
        .tickets-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .tickets-scroll::-webkit-scrollbar {
          display: none;
        }

        .ticket-category option {
          background-color: #ffffff !important;
        }

        .ticket-category option:hover,
        .ticket-category option:focus,
        .ticket-category option:active,
        .ticket-category option:checked {
          background-color: #32ef00 !important;
          color: #1f3a24 !important;
        }
      `}</style>
    </>
  );
}
