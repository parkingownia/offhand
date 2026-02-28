import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    service: "offhand",
    status: "ok",
    timestamp: new Date().toISOString(),
  });
}
