"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useMemo, useState } from "react";

type QuickTopic = {
  title: string;
  description: string;
  icon: string;
};

const MAIN_TOPICS: QuickTopic[] = [
  {
    title: "Payment Issue",
    description: "Payment debited but not reflected in your account.",
    icon: "mdi:credit-card-outline",
  },
  {
    title: "Charging Issue",
    description: "Unable to start or complete your charging session",
    icon: "mdi:ev-station",
  },
  {
    title: "Booking Issue",
    description: "Unable to book a charger or booking not confirmed.",
    icon: "mdi:calendar-check-outline",
  },
  {
    title: "Account Problem",
    description: "Login issues, wallet balance errors, or profile update problems.",
    icon: "mdi:account-outline",
  },
  {
    title: "Refund Request",
    description: "Refund not received for a cancelled or failed session.",
    icon: "mdi:cash-refund",
  },
  {
    title: "Other",
    description: "Any other issue not listed above.",
    icon: "mdi:dots-horizontal",
  },
];

const PAYMENT_TOPICS: QuickTopic[] = [
  {
    title: "Payment deducted but session not started",
    description: "",
    icon: "mdi:cash-minus",
  },
  {
    title: "Payment pending",
    description: "",
    icon: "mdi:progress-clock",
  },
  {
    title: "Transaction failed but amount debited",
    description: "",
    icon: "mdi:close-box-outline",
  },
  {
    title: "Refund not received",
    description: "",
    icon: "mdi:cash-refund",
  },
  {
    title: "Need invoice / payment receipt",
    description: "",
    icon: "mdi:file-document-outline",
  },
  {
    title: "Back to main menu",
    description: "",
    icon: "mdi:keyboard-backspace",
  },
];

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
  const [isPaymentFlowOpen, setIsPaymentFlowOpen] = useState(false);
  const [isTransactionFailedFlowOpen, setIsTransactionFailedFlowOpen] = useState(false);

  const isControlled = typeof isOpenProp === "boolean";
  const isOpen = isControlled ? (isOpenProp as boolean) : internalOpen;
  const disabled = useMemo(() => !input.trim(), [input]);

  const setIsOpen = (next: boolean) => {
    if (!isControlled) setInternalOpen(next);
    if (!next) {
      setIsPaymentFlowOpen(false);
      setIsTransactionFailedFlowOpen(false);
      setInput("");
    }
    onOpenChange?.(next);
  };

  const onMainTopicClick = (title: string) => {
    if (title === "Payment Issue") {
      setIsPaymentFlowOpen(true);
      setIsTransactionFailedFlowOpen(false);
      return;
    }
  };

  const onPaymentTopicClick = (title: string) => {
    if (title === "Transaction failed but amount debited") {
      setIsTransactionFailedFlowOpen(true);
      return;
    }
    if (title === "Back to main menu") {
      setIsPaymentFlowOpen(false);
      setIsTransactionFailedFlowOpen(false);
    }
  };

  const sendMessage = () => {
    if (disabled) return;
    setInput("");
  };

  return (
    <>
      {showLauncher && (
        <button
          aria-label="Open support chat"
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#2BD101] text-white shadow-[0_12px_28px_rgba(39,195,0,0.35)] transition hover:brightness-95 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
        >
          <Icon icon={isOpen ? "mdi:close" : "mdi:chat-processing"} width={28} />
        </button>
      )}

      {isOpen && (
        <section className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3">
          <div className="h-[calc(100vh-16px)] w-[calc(100vw-16px)] max-h-[620px] max-w-[550px] overflow-hidden rounded-[12px] border border-[#DADADA] bg-white shadow-[0_22px_48px_rgba(0,0,0,0.35)] sm:h-[620px] sm:w-[550px] sm:rounded-[16px]">
            <header className="flex h-[52px] items-center justify-between bg-[#27C300] px-4 text-white sm:px-6">
              <h3 className="text-[16px] font-semibold leading-none sm:text-[20px]">ChargeFlow Support</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-md p-1 text-white/95 hover:bg-[#24AE00]"
                aria-label="Close support chat"
              >
                <Icon icon="mdi:close" width={30} />
              </button>
            </header>

            <div className="h-[calc(100%-52px-95px)] overflow-y-auto px-3 py-4 sm:px-8 sm:py-7">
              <div className="flex items-start gap-2 sm:gap-3">
                <Image src="/chat/help-team.svg" alt="Get help team" width={50} height={50} className="h-[50px] w-[50px] shrink-0 rounded-full border border-[#D2D2D2] bg-white" />
                <div className="relative w-full max-w-[336px] rounded-[12px] bg-[#B4FFBC] px-3 py-3 text-[#0A3015] sm:h-[69px] sm:px-5 sm:py-4">
                  <span className="absolute -left-[10px] top-[14px] h-0 w-0 border-y-[10px] border-r-[10px] border-y-transparent border-r-[#9FEAAF]" />
                  <p className="text-[16px] leading-tight">Hi Vikram Singh 👋</p>
                  <p className="mt-2 text-[13px] leading-tight">Welcome back to ChargeFlow support.</p>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-2 sm:mt-6 sm:gap-3">
                <Image src="/chat/help-team.svg" alt="Get help team" width={50} height={50} className="h-[50px] w-[50px] shrink-0 rounded-full border border-[#D2D2D2] bg-white" />

                <div className="w-full max-w-[240px] rounded-[10px] border border-[#D8D8D8] p-1 pl-2 shadow-sm sm:h-[314.39px] sm:max-w-[215.2px] sm:pl-3">
                  <p className=" text-[12px] text-[#2B2B2B]">How can we assist you today?</p>
                  <div className="space-y-2">
                    {MAIN_TOPICS.map((topic) => (
                      <button
                        key={topic.title}
                        onClick={() => onMainTopicClick(topic.title)}
                        className="flex min-h-[40px] w-full items-center justify-between border border-[#D8D8D8] bg-[#EBFFED] px-2 py-2 text-left transition hover:border-[#27C300] sm:h-[38.08px] sm:w-[190.41px] sm:px-3"
                      >
                        <div className="flex items-start gap-2">
                          <Icon icon={topic.icon} width={18} className="mt-0.5 text-[#25C300]" />
                          <div>
                            <p className="text-[10px] leading-[1.1] text-[#2B2B2B]">{topic.title}</p>
                            <p className=" text-[8px] leading-[1.15] text-[#7B7B7B]">{topic.description}</p>
                          </div>
                        </div>
                        <Icon icon="mdi:chevron-right" width={20} className="text-[#8F8F8F]" />
                      </button>
                    ))}
                  </div>
                  <p className=" text-center text-[8px] text-[#7D7D7D]">Sunday, February 20, 2026 at 08:30</p>
                </div>
              </div>

              {isPaymentFlowOpen && (
                <>
                  <div className="mt-6 flex items-start justify-end gap-2 sm:gap-3">
                    <div className="w-full max-w-[210px] rounded-[8px] bg-[#2CDE00] px-3 py-2 text-white sm:h-[49.78px] sm:px-4 sm:py-1">
                      <p className="text-[12px] leading-none">Payment Issue</p>
                      <p className="mt-1 text-[9px] leading-tight">payment debited but not reflected in your account.</p>
                    </div>
                    <Image src="/avtar.jpg" alt="Sender profile" width={50} height={50} className="h-[50px] w-[50px] shrink-0 rounded-full border border-[#D2D2D2] " />
                  </div>
                  <p className="mr-[58px] text-right text-[10px] text-[#888888]">08:31 AM</p>

                  <div className="mt-2 flex items-start gap-2 sm:gap-3">
                    <Image src="/chat/help-team.svg" alt="Get help team" width={50} height={50} className="h-[50px] w-[50px] shrink-0 rounded-full border border-[#D2D2D2] bg-white" />

                <div className="w-full max-w-[240px] rounded-[10px] border border-[#D8D8D8] bg-[#B4FFBC] p-2 pl-2 shadow-sm sm:h-[254px] sm:max-w-[215px] sm:pl-3">
                      <span className="absolute -left-[10px] top-[14px] h-0 w-0 border-y-[10px] border-r-[10px] border-y-transparent border-r-[#9FEAAF]" />
                      <p className="text-[10px] text-[#2B2B2B]">Understand You&apos;re facing a payment issue. please choose your problem type:</p>
                      <div className=" space-y-2">
                        {PAYMENT_TOPICS.map((topic) => (
                          <button
                            key={topic.title}
                            onClick={() => onPaymentTopicClick(topic.title)}
                            className="flex min-h-[30px] w-full items-center justify-between bg-[#EBFFED] px-2 py-2 text-left transition hover:border-[#27C300] sm:h-[27px] sm:w-[190px] sm:px-3"
                          >
                            <div className="flex items-center gap-2">
                              <Icon icon={topic.icon} width={15} className="text-[#25C300]" />
                              <p className="text-[10px] leading-[1.1] text-[#2B2B2B]">{topic.title}</p>
                            </div>
                            <Icon icon="mdi:chevron-right" width={16} className="text-[#8F8F8F]" />
                          </button>
                        ))}
                      </div>
                      <p className=" text-center text-[8px] text-[#5E8D67]">Sunday, February 20, 2026 at 08:35</p>
                    </div>
                  </div>
                </>
              )}

              {isTransactionFailedFlowOpen && (
                <>
                  <div className="mt-6 flex items-start justify-end gap-2 sm:gap-3">
                    <div className="w-full max-w-[300px] rounded-[10px] bg-[#2bd101] px-3 py-2 text-white sm:max-w-[330px] sm:px-4">
                      <p className="text-[18px] leading-tight">Transaction failed but amount debited</p>
                    </div>
                    <Image src="/avtar.jpg" alt="Sender profile" width={50} height={50} className="h-[50px] w-[50px] shrink-0 rounded-full border border-[#D2D2D2]" />
                  </div>
                  <p className="mr-[58px] text-right text-[10px] text-[#888888]">08:36 AM</p>

                  <div className="mt-4 flex items-start gap-2 sm:gap-3">
                    <Image src="/chat/sender-1.svg" alt="Support agent" width={50} height={50} className="h-[50px] w-[50px] shrink-0 rounded-full border border-[#D2D2D2] bg-white" />
                    <div className="w-full max-w-[420px] rounded-[12px] bg-[#A8EFAF] px-4 py-3 text-[#173A1B]">
                      <p className="text-[14px] leading-[1.35]">⚠ It Looks like your transaction failed, but the amount was deducted.</p>
                      <p className="mt-1 text-[14px] leading-[1.35]">Please share the following details so we can check:</p>
                      <ul className="mt-2 list-disc pl-5 text-[14px] leading-[1.45]">
                        <li>Charging station name / ID</li>
                        <li>Date & time of transaction</li>
                        <li>Amount deducted</li>
                        <li>Payment method (UPI/Card/Wallet)</li>
                        <li>Screenshot (if available)</li>
                      </ul>
                    </div>
                  </div>
                  <p className="ml-[58px] text-left text-[10px] text-[#888888]">08:36 AM</p>

                  <div className="mt-4 flex items-start justify-end gap-2 sm:gap-3">
                    <div className="flex w-full max-w-[360px] items-end justify-between gap-3 rounded-[10px] bg-[#2bd101] px-3 py-2 text-white sm:max-w-[380px] sm:px-4">
                      <p className="text-[16px] leading-[1.35]">
                        Station ID: CF-102
                        <br />
                        Date: 20 Feb 2026
                        <br />
                        Amount: ₹450
                        <br />
                        Paid Via UPI
                      </p>
                      <Image src="/image.png" alt="Transaction screenshot" width={64} height={78} className="h-[78px] w-[64px] rounded-[2px] border border-white/60 bg-white object-cover" />
                    </div>
                    <Image src="/avtar.jpg" alt="Sender profile" width={50} height={50} className="h-[50px] w-[50px] shrink-0 rounded-full border border-[#D2D2D2]" />
                  </div>
                  <p className="mr-[58px] text-right text-[10px] text-[#888888]">08:36 AM</p>

                  <div className="mt-4 flex items-start gap-2 sm:gap-3">
                    <Image src="/chat/sender-1.svg" alt="Support agent" width={50} height={50} className="h-[50px] w-[50px] shrink-0 rounded-full border border-[#D2D2D2] bg-white" />
                    <div className="w-full max-w-[420px] rounded-[12px] bg-[#A8EFAF] px-4 py-3 text-[#173A1B]">
                      <p className="text-[17px] leading-[1.35]">✅ Thank you for the details.</p>
                      <p className="text-[17px] leading-[1.35]">We are verifying your transaction.</p>
                      <p className="mt-2 text-[17px] leading-[1.35]">⏳ Please wait while we check your payment status...</p>
                    </div>
                  </div>
                  <p className="ml-[58px] text-left text-[10px] text-[#888888]">08:36 AM</p>
                </>
              )}
            </div>

            <footer className="flex h-[95px] items-center justify-center border-t border-[#E2E2E2] px-3 sm:px-6">
              <div className="flex h-[55px] w-full items-center gap-2 sm:gap-4">
                <div className="flex h-[45px] flex-1 items-center gap-2 rounded-[12px] border border-[#A9A9A9] bg-white px-3 sm:w-[426px] sm:gap-3">
                  <div className="flex h-[29px] w-[29px] items-center justify-center rounded-[8px] border border-[#C9C9C9]">
                    <Icon icon="mdi:microphone" width={18} className="text-[#2BD101]" />
                  </div>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") sendMessage();
                    }}
                    className="h-full w-full bg-transparent text-[13px] text-[#5D5D5D] outline-none"
                    placeholder="Type your question here....."
                  />
                </div>

                <button
                  onClick={sendMessage}
                  disabled={disabled}
                  className="flex h-[45px] w-[45px] items-center justify-center rounded-[12px] bg-[#27C300] text-white disabled:opacity-50"
                  aria-label="Send message"
                >
                  <Icon icon="mdi:send-outline" width={28} />
                </button>
              </div>
            </footer>
          </div>
        </section>
      )}
    </>
  );
}
