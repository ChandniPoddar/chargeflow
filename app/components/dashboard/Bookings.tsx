"use client";

import { Icon } from "@iconify/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { formatInr, pastBookings, type PastBooking } from "./bookingsData";

type ApiBooking = {
  _id: string;
  title: string;
  location: string;
  bookingDate: string;
  startTime: string;
  endTime: string;
  powerType: string;
  plugType: string;
  amount: number;
  co2SavedKg?: number;
  status?: "scheduled" | "completed" | string;
};

type DisplayBooking = PastBooking & {
  key: string;
  id: string;
  status: "scheduled" | "completed";
};

function normalizeStatus(value?: string): "scheduled" | "completed" {
  const normalized = value?.toLowerCase().trim();
  if (normalized === "completed" || normalized === "complete" || normalized === "done") {
    return "completed";
  }
  return "scheduled";
}

function formatBookingDate(value: string): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;

  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function mapApiToPastBooking(booking: ApiBooking): DisplayBooking {
  return {
    key: booking._id,
    id: booking._id,
    title: booking.title,
    location: booking.location,
    date: formatBookingDate(booking.bookingDate),
    time: `${booking.startTime} - ${booking.endTime}`,
    power: booking.powerType,
    plug: booking.plugType,
    amount: booking.amount ?? 0,
    co2SavedKg: booking.co2SavedKg ?? 0,
    status: normalizeStatus(booking.status),
  };
}

export default function Bookings() {
  const [apiBookings, setApiBookings] = useState<ApiBooking[]>([]);
  const [completingId, setCompletingId] = useState<string | null>(null);

  const fetchBookings = useCallback(async () => {
    try {
      const res = await fetch("/api/bookings");
      const data = await res.json();

      if (data?.success && Array.isArray(data.bookings)) {
        setApiBookings(data.bookings);
        window.dispatchEvent(new CustomEvent("bookings:updated"));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    if (!mounted) return;

    fetchBookings();

    const intervalId = window.setInterval(fetchBookings, 15000);
    return () => {
      mounted = false;
      window.clearInterval(intervalId);
    };
  }, [fetchBookings]);

  const mappedApiBookings = useMemo<DisplayBooking[]>(() => {
    return apiBookings.map(mapApiToPastBooking);
  }, [apiBookings]);

  const scheduledBookings = useMemo<DisplayBooking[]>(() => {
    return mappedApiBookings.filter((booking) => booking.status === "scheduled");
  }, [mappedApiBookings]);

  const combinedPastBookings = useMemo<DisplayBooking[]>(() => {
    const completedApi = mappedApiBookings.filter(
      (booking) => booking.status === "completed"
    );
    const mappedStatic = pastBookings.map((booking) => ({
      ...booking,
      key: `${booking.title}-${booking.date}-${booking.time}`,
      id: `${booking.title}-${booking.date}-${booking.time}`,
      status: "completed" as const,
    }));
    return [...completedApi, ...mappedStatic];
  }, [mappedApiBookings]);

  const handleComplete = useCallback(async (bookingId: string) => {
    setCompletingId(bookingId);
    try {
      const res = await fetch("/api/bookings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: bookingId, status: "completed" }),
      });

      if (!res.ok) {
        throw new Error("Failed to complete booking");
      }

      setApiBookings((prev) =>
        prev.map((booking) =>
          booking._id === bookingId
            ? { ...booking, status: "completed" }
            : booking
        )
      );
      window.dispatchEvent(new CustomEvent("bookings:updated"));
    } catch (error) {
      console.error(error);
    } finally {
      setCompletingId(null);
    }
  }, []);

  return (
    <div className="w-full space-y-6 px-4 sm:space-y-8 sm:px-6 lg:px-8">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-2xl font-semibold text-gray-900">Booking Management</h2>

        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-[#38EF0A] rounded-lg bg-[#F8FBF8] hover:bg-[#38EF0A] hover:text-white transition shadow w-full sm:w-auto">
          <Icon icon="mdi:plus" width={18} />
          New Booking
        </button>
      </div>

      {/* ================= SCHEDULED BOOKING ================= */}
      <div className="space-y-4 rounded-xl border border-[#CFF5C2] p-3 shadow sm:space-y-5 sm:p-5">
        <div className="flex items-center gap-3 bg-[#EEFFEA] px-3 py-3 shadow-sm sm:gap-4 sm:px-5">
          <div className="w-10 h-10 bg-[#38EF0A] flex items-center justify-center rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[26px] h-[26px] text-white" fill="currentColor">
              <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2m6-3.586l-3.707-3.707l1.414-1.414L11 15.586l4.293-4.293l1.414 1.414zM5 7h14v2H5z" />
            </svg>
          </div>

          <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
            Scheduled Booking ({scheduledBookings.length})
          </h3>
        </div>

        {scheduledBookings.length === 0 ? (
          <p className="text-sm text-gray-500 px-2">No scheduled bookings yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:gap-6  md:grid-cols-2 xl:grid-cols-3">
            {scheduledBookings.map((b) => (
              <div key={b.key} className="w-full rounded-xl bg-white p-4 shadow sm:p-5">
                <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                  <h4 className="w-full break-words font-semibold text-[#364153] sm:truncate">{b.title}</h4>
                  
                   <button
                  onClick={() => handleComplete(b.id)}
                  disabled={completingId === b.id}
                  className="text-xs px-3 py-1 rounded-full bg-[#38EF0A] text-white"
                >
                  {completingId === b.id ? "Completing..." : "Scheduled"}
                </button>
                </div>

                <ul className="mt-4 space-y-3 text-sm text-[#A7A7A7]">
                  {/* LOCATION */}
                  <li className="flex items-start gap-3 text-sm text-[#8E8E93] sm:items-center sm:text-lg">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-[#38EF0A]" width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" />
                      </svg>
                    </div>
                    <span className="min-w-0 break-words">{b.location}</span>
                  </li>

                  {/* CLOCK */}
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
                      <Icon icon="mdi:clock-outline" className="text-[#38EF0A] w-6 h-6" />
                    </div>
                    {b.date}, {b.time}
                  </li>

                  {/* THUNDER */}
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-[#38EF0A]" width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11 15H6l7-14v8h5l-7 14z" />
                      </svg>
                    </div>
                    {b.power}
                  </li>

                  {/* PLUG */}
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-[#38EF0A]" width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 8h2v5c0 2.206 1.794 4 4 4h2v5h2v-5h2c2.206 0 4-1.794 4-4V8h2V6H3zm4-6h2v3H7zm8 0h2v3h-2z" />
                      </svg>
                    </div>
                    {b.plug}
                  </li>

                  {/* CURRENCY */}
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
                      <Icon icon="mdi:currency-inr" className="text-[#38EF0A] w-6 h-6" />
                    </div>
                    Estimated {formatInr(b.amount)}
                  </li>
                </ul>

              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= PAST BOOKINGS ================= */}
      <div className="space-y-4 rounded-xl border border-[#CFF5C2] p-3 shadow sm:space-y-5 sm:p-5">
        <div className="flex items-center gap-3 bg-[#EEFFEA] px-3 py-3 shadow-sm sm:gap-4 sm:px-5">
          <div className="w-10 h-10 bg-[#38EF0A] flex items-center justify-center rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" className="w-[26px] h-[26px] text-white" fill="currentColor">
              <path d="M13 0L8 3l5 3V4c4.955 0 9 4.045 9 9s-4.045 9-9 9s-9-4.045-9-9c0-2.453.883-4.57 2.5-6.188L5.094 5.407C3.11 7.39 2 10.053 2 13c0 6.045 4.955 11 11 11s11-4.955 11-11S19.045 2 13 2zm-2.094 6.563l-1.812.875l2.531 5A1.5 1.5 0 0 0 11.5 13v.063L8.281 16.28l1.439 1.44l3.219-3.219H13a1.5 1.5 0 0 0 1.5-1.5c0-.69-.459-1.263-1.094-1.438z" />
            </svg>
          </div>

          <h3 className="text-base font-semibold text-gray-900 sm:text-lg">Past Booking ({combinedPastBookings.length})</h3>
        </div>

        <div className="grid max-h-[360px] grid-cols-1 gap-4 overflow-y-auto no-scrollbar sm:gap-6 md:grid-cols-2 xl:grid-cols-3 md:max-h-[420px]">
          {combinedPastBookings.map((b) => (
            <div key={b.key} className="space-y-4 rounded-xl bg-white p-4 shadow sm:p-5">
              <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                <h4 className="w-full break-words font-semibold text-[#364153] sm:truncate">{b.title}</h4>
                <span className="text-xs px-3 py-1 rounded-full bg-[#38EF0A] text-white whitespace-nowrap">Completed</span>
              </div>

              <div className="space-y-3 text-sm text-[#A7A7A7]">
                {/* LOCATION */}
                <div className="flex items-start gap-3 text-sm text-[#8E8E93] sm:items-center sm:text-lg">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-[#38EF0A]" width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" />
                    </svg>
                  </div>
                  <span className="min-w-0 break-words">{b.location}</span>
                </div>

                {/* CALENDAR */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-[#38EF0A]" width={24} height={24} viewBox="0 0 1024 1024" fill="currentColor">
                      <path d="m960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985" />
                    </svg>
                  </div>
                  {b.date}
                </div>

                {/* CLOCK */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
                    <Icon icon="mdi:clock-outline" className="text-[#38EF0A] w-6 h-6" />
                  </div>
                  {b.time}
                </div>

                {/* THUNDER */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-[#38EF0A]" width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11 15H6l7-14v8h5l-7 14z" />
                    </svg>
                  </div>
                  {b.power}
                </div>

                {/* PLUG */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-[#38EF0A]" width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 8h2v5c0 2.206 1.794 4 4 4h2v5h2v-5h2c2.206 0 4-1.794 4-4V8h2V6H3zm4-6h2v3H7zm8 0h2v3h-2z" />
                    </svg>
                  </div>
                  {b.plug}
                </div>

                {/* CURRENCY */}
                <div className="flex items-center gap-3 font-medium text-[#A7A7A7]">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8FBF8]">
                    <Icon icon="mdi:currency-inr" className="text-[#38EF0A] w-6 h-6" />
                  </div>
                  Amount Paid: {formatInr(b.amount)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
