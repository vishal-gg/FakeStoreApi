import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    return NextResponse.json({method: 'GET', route: 'api/products'})
  } catch (err) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export const POST = async (req: Request) => {
  try {
    return NextResponse.json({method: 'POST', route: 'api/products'})
  } catch (err) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}