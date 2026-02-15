import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

/* ================= CREATE BOOKING ================= */
export async function POST(req: Request) {
  try {
    const text = await req.text();

    if (!text) {
      return NextResponse.json(
        { success: false, message: "Request body is empty" },
        { status: 400 }
      );
    }

    const body = JSON.parse(text);
    console.log("📦 Booking Received:", body);

    const client = await clientPromise;
    const db = client.db("darchandni5_db");

    await db.collection("bookings").insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true, message: "Booking created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Booking Error:", error);

    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

/* ================= GET BOOKINGS (HISTORY) ================= */
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("darchandni5_db");

    const bookings = await db
      .collection("bookings")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(
      { success: true, bookings },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Fetch Bookings Error:", error);

    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
