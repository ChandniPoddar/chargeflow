"use client";

export default function History() {
  const transactions = [
    ["2025-07-10", "Booking Payment - Honda Accord", "₹450"],
    ["2025-07-05", "Booking Payment - Ford Explorer", "₹500"],
    ["2025-06-28", "Booking Payment - Toyota Camry", "₹400"],
    ["2025-06-20", "Booking Payment - Honda Accord", "₹399"],
    ["2025-06-15", "Booking Payment - Ford Explorer", "₹500"],
  ];

  return (
    <section className="space-y-4">
      {/* TITLE */}
      <h2 className="text-2xl font-semibold text-[#111] px-4 sm:ml-8">
        Transaction History
      </h2>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden sm:block bg-white mx-4 sm:ml-8 sm:mr-8 rounded-2xl shadow-md overflow-hidden">
        <table className="w-full text-[15px]">
          <thead>
            <tr className="bg-[#A0FF89] text-[#1F2937]">
              <th className="px-8 py-5 text-left font-semibold">
                Date
              </th>
              <th className="px-8 py-5 text-center font-semibold">
                Description
              </th>
              <th className="px-8 py-5 text-right font-semibold">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((row, i) => (
              <tr
                key={i}
                className="border-t border-gray-200 text-[#374151]"
              >
                <td className="px-8 py-6 text-left">
                  {row[0]}
                </td>
                <td className="px-8 py-6 text-center">
                  {row[1]}
                </td>
                <td className="px-8 py-6 text-right font-medium">
                  {row[2]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="sm:hidden space-y-4 px-4">
        {transactions.map((row, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-4 space-y-2"
          >
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Date</span>
              <span className="font-medium text-gray-800">
                {row[0]}
              </span>
            </div>

            <div className="text-sm text-gray-700">
              {row[1]}
            </div>

            <div className="flex justify-between items-center pt-2 border-t">
              <span className="text-gray-500 text-sm">
                Amount
              </span>
              <span className="font-semibold text-gray-900">
                {row[2]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
