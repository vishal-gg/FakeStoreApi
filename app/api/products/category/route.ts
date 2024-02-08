import { NextRequest, NextResponse } from "next/server";
import { getProductsCategory } from "../../helper/filterProducts";

export const GET = async (req: NextRequest) => {
  try {
    const type = req.nextUrl.searchParams.get("type")
    const sort = req.nextUrl.searchParams.get("sort")

    const data = getProductsCategory({type, sort})

    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}