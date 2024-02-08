import { NextResponse } from "next/server";
import { getSingleProduct } from "../../helper/filterProducts";

export const GET = async (req: Request, {params} : {params: {id: string}}) => {
  try {
    const { id } = params;
    const {product} = getSingleProduct(Number(id))
    return NextResponse.json({product})
  } catch (err) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
