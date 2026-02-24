"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
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
      className={`inline-flex h-[22px] items-center gap-1 rounded-[4px] border px-2 text-[10px] font-medium ${classes}`}
    >
      <Icon icon={status === "Resolved" ? "mdi:check" : status === "Open" ? "mdi:arrow-up" : "mdi:clock-outline"} width={12} />
      {status}
    </span>
  );
}

export default function SupportTicket() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <section className="mx-auto w-full max-w-[1256px] rounded-[10px] p-4 sm:p-5 md:p-6 md:h-[600px]">
        <header className="flex h-auto min-h-[76px] w-full flex-col justify-center gap-4 rounded-[8px] px-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <h2 className="text-[30px] font-semibold leading-none text-[#2E2E2E] sm:text-[32px]">Support Ticket</h2>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-[50px] w-[245px] items-center justify-center gap-2 rounded-[6px] bg-gradient-to-r from-[#32FC00] to-[#06CB20] px-4 text-[14px] font-semibold text-white shadow-sm hover:brightness-95"
            >
              <Icon icon="mdi:plus" width={14} />
              Create New Ticket
            </button>

            <button
              onClick={() => setIsHelpModalOpen(true)}
              className="inline-flex h-[50px] w-[162px] items-center justify-center gap-2 rounded-[6px] border border-[#29B605] bg-white px-4 text-[14px] font-medium text-[#5E665D] hover:bg-[#F7F7F7]"
            >
              <Icon icon="mdi:help-circle-outline" width={14} />
              Get Help
            </button>
          </div>
      </header>

        <div className="mt-3">
          <h3 className="text-[32px] font-semibold text-[#2E2E2E] sm:text-[34px]">My Tickets</h3>
        </div>

        <div className="mt-4 overflow-hidden rounded-[8px] border border-[#DFDFDF] bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full border-collapse">
              <thead>
                <tr className="h-[48px] bg-[#84EB73] text-left text-[13px] font-semibold text-[#1F3A24]">
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
                    className="h-[52px] border-t border-[#ECECEC] text-[12px] text-[#4A4A4A]"
                  >
                    <td className="whitespace-nowrap px-4 text-[#6F6F6F]">{ticket.id}</td>
                    <td className="whitespace-nowrap px-4">{ticket.description}</td>
                    <td className="whitespace-nowrap px-4">{ticket.category}</td>
                    <td className="whitespace-nowrap px-4">
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
          <div className="h-[655px] w-full max-w-[625px] overflow-hidden rounded-[14px] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E4E4E4] px-4 py-4 sm:px-5">
              <h3 className="text-[40px] font-semibold text-[#3E4A5E]">Raise A New Ticket</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-md p-1 text-[#7B7B7B] hover:bg-[#F4F4F4]"
                aria-label="Close popup"
              >
                <Icon icon="mdi:close" width={38} />
              </button>
            </div>

            <div className="h-[566px] space-y-3 px-4 py-4 sm:px-7">
              <div>
                <label className="mb-1.5 block text-[14px] font-medium text-[#3E4A5E]">Category</label>
                <div className="relative">
                  <select className="h-[50px] w-full appearance-none rounded-[10px] border border-[#B8B8B8] bg-white px-4 pr-10 text-[13px] text-[#8A8A8A] outline-none focus:border-[#96CF89]">
                    <option>Select Category</option>
                    <option>Payment Issue</option>
                    <option>Technical Issue</option>
                    <option>Refund Request</option>
                    <option>Account Problem</option>
                  </select>
                  <Icon icon="mdi:chevron-down" width={26} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#787878]" />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[14px] font-medium text-[#3E4A5E]">Subject / Title</label>
                <input
                  type="text"
                  placeholder="Enter short problem title (e.g Payment Failed)"
                  className="h-[50px] w-full rounded-[10px] border border-[#B8B8B8] px-4 text-[13px] text-[#303030] outline-none placeholder:text-[#8A8A8A] focus:border-[#96CF89]"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#3E4A5E]">Decertation</label>
                <p className="mb-1.5 text-[12px] leading-[1.3] text-[#777777]">
                  Please describe your issue clearly and mention any actions you have taken in 50-150 words.
                </p>
                <textarea
                  placeholder="Describe your issue in detail..."
                  className="h-[100px] w-full resize-none rounded-[12px] border border-[#B8B8B8] px-4 py-3 text-[13px] text-[#303030] outline-none placeholder:text-[#8A8A8A] focus:border-[#96CF89]"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#3E4A5E]">Upload Screenshot</label>
                <p className="mb-2 text-[12px] leading-[1.3] text-[#777777]">
                  Please upload a clear screenshot that shows the exact issue you are facing to help us resolve it quickly.
                </p>
                <label className="flex h-[70px] w-full cursor-pointer items-center justify-center rounded-[10px] border border-dashed border-[#A9D8A0] bg-[#F9FFF7] text-[13px] text-[#72A66A] hover:bg-[#F3FFE9]">
                  <Icon icon="mdi:cloud-upload-outline" width={20} />
                  <span className="ml-2">Upload File</span>
                  <input type="file" className="hidden" />
                </label>
              </div>

              <div className="flex justify-center pt-1">
                <button className="h-[50px] w-full max-w-[460px] rounded-[12px] bg-[#32EF00] text-[18px] font-semibold text-white transition hover:brightness-95">
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
              <h3 className="text-[28px] font-semibold text-[#2C2C2C]">How would you like to get help?</h3>
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
                className="flex h-[111px] w-full items-center gap-4 rounded-[16px] border border-[#D1D1D1] bg-[#FDFDFD] px-5 text-left hover:bg-[#FAFAFA]"
              >
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[#D9F8CF]">
                  <Icon icon="mdi:chat-processing-outline" width={24} className="text-[#26B800]" />
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-[#3D4A5F]">Request Chat</p>
                  <p className="text-[14px] leading-5 text-[#727272]">Chat with our support team for quick assistance.</p>
                </div>
              </button>

              <button className="flex h-[111px] w-full items-center gap-4 rounded-[16px] border border-[#D1D1D1] bg-[#FDFDFD] px-5 text-left hover:bg-[#FAFAFA]">
                <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[#D9F8CF]">
                  <Icon icon="mdi:phone-outline" width={24} className="text-[#26B800]" />
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

      <SupportChatbot isOpen={isChatOpen} onOpenChange={setIsChatOpen} showLauncher={false} />
    </>
  );
}
