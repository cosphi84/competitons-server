// src/app/api/device/[devID]/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; 

// GET /api/device/[devID]
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ devID: string }> }
) {
  const { devID } = await context.params;

  if (!devID) {
    return NextResponse.json({ error: "NoID" }, { status: 400 });
  }
  const rec = await prisma.devices.findUnique({
    where: { id: devID },
    select: { name: true, number: true },
  });

  if (!rec) {
    return NextResponse.json({ message: "NoIDRec" }, { status: 404 });
  }

  return NextResponse.json(rec);
}


export async function POST(
  req: NextRequest,
  context: { params: Promise<{ devID: string }> }
) {
  const { devID } = await context.params;

  if (!devID) {
    return NextResponse.json({ error: "NoID" }, { status: 400 });
  }

  try {
    const rec = await prisma.devices.upsert({
      where: { id: devID },                 // atau Number(devID) jika id:Int
      update: {  },
      create: { id: devID },  // atau id: Number(devID)
    });
    return NextResponse.json(rec);
  } catch (e: any) {
    return NextResponse.json(
      { error: "DB Error", detail: e.message },
      
      { status: 500 }
    );
  }
}
