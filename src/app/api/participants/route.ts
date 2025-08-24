import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    const allParticipans = await prisma.devices.findMany();

    return NextResponse.json(allParticipans);

}