export type PastBooking = {
  title: string;
  location: string;
  date: string;
  time: string;
  power: string;
  plug: string;
  amount: number;
  co2SavedKg: number;
};

export const pastBookings: PastBooking[] = [
 
  {
    title: "City Center EV Station",
    location: "Noida Sector 18",
    date: "05 October 2025",
    time: "11:00 AM - 01:00 PM",
    power: "DC Fast - 60kW",
    plug: "Type 2",
    amount: 420,
    co2SavedKg: 36,
  },
 
  //   title: "Highway EV Stop",
  //   location: "NH-48",
  //   date: "10 September 2025",
  //   time: "02:00 PM - 04:00 PM",
  //   power: "DC Fast - 100kW",
  //   plug: "Type 2",
  //   amount: 520,
  //   co2SavedKg: 47,
  // },
  
];

export const bookingTotals = pastBookings.reduce(
  (acc, booking) => {
    acc.totalSessions += 1;
    acc.totalSpent += booking.amount;
    acc.totalCo2Kg += booking.co2SavedKg;
    return acc;
  },
  { totalSessions: 0, totalSpent: 0, totalCo2Kg: 0 }
);

export function formatInr(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}
