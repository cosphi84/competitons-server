// src/app/api/device/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ error: "NoID" }, { status: 400 });
}
export async function POST() {
  return NextResponse.json({ error: "NoID" }, { status: 400 });
}
