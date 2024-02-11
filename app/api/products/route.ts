import { NextRequest, NextResponse } from "next/server";
import { totalProducts, getPaginatedProducts } from "@helper/filterProducts";
import { parseQuery } from "@helper/parseQuery";
import { parseRequestBody } from "@helper/parseRequestBody";
import { productSchema } from "@helper/schema";
import { createPayload } from "@helper/createPayload";


// method: GET
// supported route: ["api/products", "api/products?page=1&limit=50"]
// message: not necessary to apply all query

export const GET = async (req: NextRequest) => {
  try {
    const page_str = req.nextUrl.searchParams.get("page")
    const limit_str = req.nextUrl.searchParams.get("limit")
    const {page, limit} = parseQuery({page_str, limit_str})
    const { products} = getPaginatedProducts({page, limit})

    const payload = createPayload({
      status: "SUCCESS",
      message: `Here you go! You've received ${products.length} 
      products. If you need more, just ask for it`,
      products
    })

    return NextResponse.json(payload)
  } catch (err: any) {
    const payload = createPayload({
      status: 'BAD-REQUEST',
      message: err.message,
    })
    return NextResponse.json(payload, { status: 400 })
  }
}


// method: POST
// supported route: ["api/products"]

export const POST = async (request: NextRequest) => {
  try {
    const newProduct = await parseRequestBody(request)
    const parsed = productSchema.parse(newProduct)

    const payload = createPayload({
      status: 'SUCCESS',
      message: `Here is the product you sent, which we have just returned 
      you back. We do not save it in our Database`,
      product: {id: totalProducts + 1, ...parsed}
    })

    return NextResponse.json(payload)
  } catch (err: any) {
    const payload = createPayload({
      status: 'BAD-REQUEST',
      message: err.message,
    })
    return NextResponse.json(payload, { status: 400 })
  }
}