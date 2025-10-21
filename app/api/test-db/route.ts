import { NextResponse } from "next/server";
import { connectToDatabase } from "@/database/mongoose";


export async function GET() {
  try {
    await connectToDatabase();
    return NextResponse.json({ success: true, message: "Connected to MongoDB successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to connect to MongoDB", error: String(error) },
      { status: 500 }
    );
  }
}
