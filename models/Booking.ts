import mongoose, { Schema, models, model } from "mongoose";

const BookingSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", // optional, if you have users
    },

    title: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    bookingDate: {
      type: Date,
      required: true,
    },

    startTime: {
      type: String, // "10:00 AM"
      required: true,
    },

    endTime: {
      type: String, // "12:00 PM"
      required: true,
    },

    powerType: {
      type: String, // "DC Fast - 50kW"
      required: true,
    },

    plugType: {
      type: String, // "Type 2"
      required: true,
    },

    amount: {
      type: Number, // 450
      required: true,
    },

    status: {
      type: String,
      enum: ["Scheduled", "Confirmed", "Completed", "Cancelled"],
      default: "Scheduled",
    },
  },
  { timestamps: true }
);

const Booking = models.Booking || model("Booking", BookingSchema);
export default Booking;
