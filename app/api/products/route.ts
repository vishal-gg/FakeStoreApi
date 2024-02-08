import { NextRequest, NextResponse } from "next/server";
import { getPaginatedProducts } from "../helper/fetchProducts";

export const GET = async (req: NextRequest) => {
  try {

    const page_str = req.nextUrl.searchParams.get("page");
    const limit_str = req.nextUrl.searchParams.get("limit");

    const page = page_str ? parseInt(page_str, 10) : 1;
    const limit = limit_str ? parseInt(limit_str, 10) : 20;


    const {products, lenght} = getPaginatedProducts({page, limit})


    return NextResponse.json({lenght, products})
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