import mongoose, { Schema, models, model } from "mongoose";

const VehicleSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      min: 1990,
      max: new Date().getFullYear(),
    },
    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", "EV", "Hybrid"],
      required: true,
    },
    registrationNumber: {
      type: String,
      unique: true,
      required: true,
    },
    ownerEmail: {
      type: String,
      required: true,
      lowercase: true,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

export default models.Vehicle || model("Vehicle", VehicleSchema);
// //----------frontend  data like this ----------//
// {
//   brand: "Honda",
//   model: "City",
//   year: 2022,
//   fuelType: "Petrol",
//   registrationNumber: "UP16AB1234",
//   ownerEmail: "vikram.singh@example.com"
// }
