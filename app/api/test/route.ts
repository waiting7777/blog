import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("Hello, world!")
  console.log("test")
  return NextResponse.json({ message: "Hello, world!"});
}