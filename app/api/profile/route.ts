import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📦 Received:", body);

    const client = await clientPromise;
    const db = client.db("darchandni5_db");

    const result = await db.collection("profiles").insertOne({
      ...body,
      createdAt: new Date(),
    });

    console.log("✅ Inserted ID:", result.insertedId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Mongo Error:", error);

    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
