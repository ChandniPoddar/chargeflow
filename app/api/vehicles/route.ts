import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { validateVehicle } from "@/lib/validators/vehicle";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📦 Vehicle Received:", body);

    const vehicleData = validateVehicle(body);

    const client = await clientPromise;
    const db = client.db("darchandni5_db");

    const result = await db
      .collection("vehicles")
      .insertOne(vehicleData);

    console.log("✅ Vehicle Inserted:", result.insertedId);

    return NextResponse.json({
      success: true,
      id: result.insertedId,
    });
  } catch (error) {
    console.error("❌ Vehicle Insert Error:", error);

    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
