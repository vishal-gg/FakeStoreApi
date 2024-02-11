import { NextRequest, NextResponse } from "next/server";
import { getProductsCategory } from "@helper/filterProducts";
import { createPayload } from "@helper/createPayload";


// method: GET
// supported route: ["api/products/category", "api/products/category?type=tv&sort=desc&limit=20]
// message: not necessary to apply all query

export const GET = async (req: NextRequest) => {
  try {
    const type = req.nextUrl.searchParams.get("type")
    const sort = req.nextUrl.searchParams.get("sort")
    const limit = req.nextUrl.searchParams.get("limit")

    const {categories, products} = getProductsCategory({type, sort, limit})
    if (categories) {
      const payload = createPayload({
        status: "SUCCESS",
        message: "We have 6 categories to choose from.",
        categories: [...categories]
      })
      return NextResponse.json(payload)
    }
    if (products) {
      const payload = createPayload({
        status: 'SUCCESS',
        message: `You've received products from the ${products[0].category} category only.`,
        products
      })
      return NextResponse.json(payload)
    }

  } catch (err: any) {
    const payload = createPayload({
      status: "BAD-REQUEST",
      message: err.message,
    })
    return NextResponse.json(payload, {status: 400})
  }
}