import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

function normalizeStatus(value?: string): "scheduled" | "completed" {
  const normalized = value?.toLowerCase().trim();
  if (normalized === "completed" || normalized === "complete" || normalized === "done") {
    return "completed";
  }
  return "scheduled";
}

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
      status: normalizeStatus(body?.status),
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

/* ================= UPDATE BOOKING STATUS ================= */
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, status } = body ?? {};

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing booking id" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("darchandni5_db");

    const nextStatus =
      status == null ? "completed" : normalizeStatus(String(status));

    const result = await db.collection("bookings").updateOne(
      { _id: new ObjectId(String(id)) },
      { $set: { status: nextStatus, updatedAt: new Date() } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Booking not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("âŒ Update Booking Error:", error);

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
