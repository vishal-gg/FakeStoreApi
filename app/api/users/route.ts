import { NextRequest, NextResponse } from "next/server";
import { totalUsers, getPaginatedUsers } from "@helper/filterUsers";
import { parseQuery } from "@helper/parseQuery";
import { parseRequestBody } from "@helper/parseRequestBody";
import { userSchema } from "@helper/schema";
import { createPayload } from "@helper/createPayload";


export const GET = async (req: NextRequest) => {
  try {
    const page_str = req.nextUrl.searchParams.get("page")
    const limit_str = req.nextUrl.searchParams.get("limit") || "20"
    const sort = req.nextUrl.searchParams.get("sort")
    const {page, limit} = parseQuery({page_str, limit_str})
    const {users} = getPaginatedUsers({page, limit, sort})

    const payload = createPayload({
        status: "SUCCESS",
        message: `Here you go! You've received ${users.length}
        users.`,
        users
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



export const POST = async (request: NextRequest) => {
    try {
        const newUser = await parseRequestBody(request)
        const parsed = userSchema.parse(newUser)
    
        const payload = createPayload({
        status: 'SUCCESS',
        message: `Here is the user you sent, which we have just returned 
        you back. We do not save it in our Database`,
        user: {id: totalUsers + 1, ...parsed}
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