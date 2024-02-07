import { NextResponse } from "next/server";

export const GET = async (req: Request, {params} : {params: {id: string}}) => {
    const { id } = params;
  try {
    return NextResponse.json({method: 'GET', route: `api/product/${id}`})
  } catch (err) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
