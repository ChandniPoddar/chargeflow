"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useMemo, useRef, useState } from "react";

type ChatMessage = {
  id: string;
  from: "bot" | "user";
  text: string;
};

const QUICK_TOPICS = [
  "How can I track my booking?",
  "How to complete a scheduled booking?",
  "How is Overview calculated?",
  "How to view transaction history?",
  "How to add a new booking?",
];

function getBotResponse(question: string): string {
  const q = question.toLowerCase();

  if (q.includes("track") || q.includes("scheduled") || q.includes("booking status")) {
    return "Open Bookings tab. New API bookings appear in Scheduled Booking. When status becomes completed, they move to Past Booking.";
  }

  if (q.includes("complete") || q.includes("done")) {
    return "In Bookings, click Complete on any scheduled card. It updates the booking status to completed and instantly refreshes Past Booking, History, and Overview.";
  }

  if (q.includes("overview") || q.includes("total") || q.includes("spent") || q.includes("co2")) {
    return "Overview totals are calculated from completed bookings only: total sessions, total spent, and CO2 saved.";
  }

  if (q.includes("history") || q.includes("transaction")) {
    return "History tab lists completed booking payments with date, title, and amount.";
  }

  if (q.includes("new booking") || q.includes("thunder") || q.includes("api")) {
    return "Send POST to /api/bookings with title, location, bookingDate, startTime, endTime, powerType, plugType, amount, and co2SavedKg. Status defaults to scheduled.";
  }

  if (q.includes("wallet") || q.includes("balance")) {
    return "Available balance is initial wallet amount minus total spent from completed bookings.";
  }

  return "I can help with bookings, scheduled vs past flow, overview totals, history, wallet, and API payload format. Ask any of these in one line.";
}

type SupportChatbotProps = {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  showLauncher?: boolean;
};

export default function SupportChatbot({
  isOpen: isOpenProp,
  onOpenChange,
  showLauncher = true,
}: SupportChatbotProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [input, setInput] = useState("");
  const messageCounterRef = useRef(1);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      from: "bot",
      text: "Hi Vikram Singh. Welcome back to ChargeFlow support.",
    },
  ]);

  const isControlled = typeof isOpenProp === "boolean";
  const isOpen = isControlled ? (isOpenProp as boolean) : internalOpen;

  const setIsOpen = (next: boolean) => {
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  };

  const disabled = useMemo(() => !input.trim(), [input]);

  const sendMessage = (text: string) => {
    const value = text.trim();
    if (!value) return;

    const userMessage: ChatMessage = {
      id: `msg-${messageCounterRef.current}`,
      from: "user",
      text: value,
    };

    const botMessage: ChatMessage = {
      id: `msg-${messageCounterRef.current + 1}`,
      from: "bot",
      text: getBotResponse(value),
    };

    messageCounterRef.current += 2;
    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {showLauncher && (
        <button
          aria-label="Open support chat"
          onClick={() => setIsOpen(!isOpen)}
          className="fixed right-6 bottom-6 z-50 h-14 w-14 rounded-full bg-[#2BD101] text-white shadow-[0_12px_28px_rgba(39,195,0,0.35)] flex items-center justify-center hover:brightness-95 transition"
        >
          <Icon icon={isOpen ? "mdi:close" : "mdi:chat-processing"} width={28} />
        </button>
      )}

      {isOpen && (
        <section className="fixed right-6 bottom-24 z-50 w-[550px] h-[680px] max-w-[calc(100vw-24px)] max-h-[calc(100vh-120px)] rounded-[10px] overflow-hidden bg-[#F5F5F5] shadow-[0_20px_45px_rgba(0,0,0,0.28)] border border-[#E8E8E8]">
          <header className="w-full h-[52px] bg-[#27C300] text-white px-4 flex items-center justify-between">
            <h3 className="text-[15px] font-semibold">ChargeFlow Support</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-md flex items-center justify-center hover:bg-[#24AE00] transition"
              aria-label="Close support chat"
            >
              <Icon icon="mdi:close" width={20} />
            </button>
          </header>

          <div className="h-[502px] p-4 overflow-y-auto no-scrollbar space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.from === "bot" && (
                  <Image
                    src="/avtar.jpg"
                    alt="Support avatar"
                    width={28}
                    height={28}
                    className="rounded-full mr-2 mt-1"
                  />
                )}

                <div
                  className={`max-w-[80%] rounded-[8px] px-3 py-2 text-[13px] leading-5 ${
                    message.from === "user"
                      ? "bg-white border border-[#D6D6D6] text-[#1E1E1E]"
                      : "bg-[#BFF5B2] text-[#0E3A00]"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            <div className="pt-2 space-y-2">
              {QUICK_TOPICS.map((topic) => (
                <button
                  key={topic}
                  onClick={() => sendMessage(topic)}
                  className="block w-full text-left rounded-lg border border-[#D5EFCF] bg-[#F2FFF0] px-3 py-2 text-[12px] text-[#2C4A2A] hover:bg-[#E8FFE4] transition"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <footer className="w-full h-[66px] flex items-end   justify-center ">
            <div className="w-[504px] h-[55px] mb-[55px] flex items-center gap-2">
              <div className="w-[426px] h-[45px] rounded-[8px] border border-[#B8B8B8] bg-white px-3 flex items-center gap-2">
                
                <Icon icon="mdi:microphone" width={15} className="text-[#2BD101]" />
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage(input);
                  }}
                  className="w-full h-full text-[13px] outline-none bg-transparent text-[#303030]"
                  placeholder="Type your question here...."
                />
              </div>

              <button
                onClick={() => sendMessage(input)}
                disabled={disabled}
                className="w-[45px] h-[45px] rounded-[8px] bg-[#2BD101] text-white flex items-center justify-center disabled:opacity-50"
                aria-label="Send message"
              >
                <Icon icon="mdi:send" width={20} />
              </button>
            </div>
          </footer>
        </section>
      )}
    </>
  );
}
