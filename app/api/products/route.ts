import { NextRequest, NextResponse } from "next/server";
import { getPaginatedProducts } from "../helper/filterProducts";
import { parseQuery } from "../helper/parseQuery";

export const GET = async (req: NextRequest) => {
  try {

    const page_str = req.nextUrl.searchParams.get("page")
    const limit_str = req.nextUrl.searchParams.get("limit")
    const {page, limit} = parseQuery({page_str, limit_str})

    const { products} = getPaginatedProducts({page, limit})


    return NextResponse.json({products})
  } catch (err) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// export const POST = async (req: NextRequest) => {
//   try {
//     return NextResponse.json({method: 'POST', route: 'api/products'})
//   } catch (err) {
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   }
// }