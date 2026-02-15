"use client";

import { useEffect, useState } from "react";

type Booking = {
  _id: string;
  bookingDate: string;
  title: string;
  amount: number;
};

export default function History() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await fetch("/api/bookings");
        const data = await res.json();

        if (data.success) {
          setBookings(data.bookings);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  if (loading) {
    return <p className="px-4 sm:ml-8">Loading history...</p>;
  }

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-[#111] px-4 sm:ml-8">
        Transaction History
      </h2>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden sm:block bg-white mx-4 sm:ml-8 sm:mr-8 rounded-2xl shadow-md overflow-hidden">
        <table className="w-full text-[15px]">
          <thead>
            <tr className="bg-[#A0FF89] text-[#1F2937]">
              <th className="px-8 py-5 text-left font-semibold">Date</th>
              <th className="px-8 py-5 text-center font-semibold">
                Description
              </th>
              <th className="px-8 py-5 text-right font-semibold">Amount</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr
                key={b._id}
                className="border-t border-gray-200 text-[#374151]"
              >
                <td className="px-8 py-6 text-left">
                  {new Date(b.bookingDate).toLocaleDateString()}
                </td>
                <td className="px-8 py-6 text-center">
                  Booking Payment – {b.title}
                </td>
                <td className="px-8 py-6 text-right font-medium">
                  ₹{b.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="sm:hidden space-y-4 px-4">
        {bookings.map((b) => (
          <div
            key={b._id}
            className="bg-white rounded-xl shadow-md p-4 space-y-2"
          >
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Date</span>
              <span className="font-medium text-gray-800">
                {new Date(b.bookingDate).toLocaleDateString()}
              </span>
            </div>

            <div className="text-sm text-gray-700">
              Booking Payment – {b.title}
            </div>

            <div className="flex justify-between items-center pt-2 border-t">
              <span className="text-gray-500 text-sm">Amount</span>
              <span className="font-semibold text-gray-900">
                ₹{b.amount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
