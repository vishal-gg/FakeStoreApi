import { NextRequest, NextResponse } from "next/server";
import { getSingleUser } from "@helper/filterUsers";
import { parseRequestBody } from "@helper/parseRequestBody";
import { userSchema } from "@helper/schema";
import { createPayload } from "@helper/createPayload";


// method: GET
// supported route: ["api/users/:id"]
// message: returns the last user if the requested user not found.

export const GET = async (request: NextRequest, {params} : {params: {id: string}}) => {
    try {
      const { id } = params;
      const user = getSingleUser(parseInt(id))
      const payload = createPayload({
        status: 'SUCCESS',
        message: `Here you've a single user requested for id ${parseInt(id)}`,
        user
      })
      return NextResponse.json(payload)
    } catch (err: any) {
      const payload = createPayload({
        status: 'BAD-REQUEST',
        message: err.message,
      })
      return NextResponse.json(payload, {status: 400})
    }
}


// method: PUT
// supported route: ["api/users/:id"]

export const PUT = async (request: NextRequest, {params} : {params: {id: string}}) => {
    try {
        const { id } = params;
        const userToUpdate = await parseRequestBody(request)
        const user = getSingleUser(parseInt(id))
        const parsed = userSchema.parse(userToUpdate)
        const payload = createPayload({
            status: 'SUCCESS',
            message: `The user with id ${parseInt(id)} has been updated with your provided data`,
            user: {...user, ...parsed}
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

// method: PATCH
// supported route: ["api/users/:id"]

export const PATCH = async (request: NextRequest, {params} : {params: {id: string}}) => {
    try {
        const { id } = params;
        const userToUpdate = await parseRequestBody(request)
        const user = getSingleUser(parseInt(id))
        const parsed = userSchema.parse(userToUpdate)
        const payload = createPayload({
        status: 'SUCCESS',
        message: `The user with id ${parseInt(id)} has been updated with your provided data`,
        user: {...user, ...parsed}
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

// method: DELETE
// supported route: ["api/users/:id"]



export const DELETE = async (request: NextRequest, {params} : {params: {id: string}}) => {
  try {
    const { id } = params;
    const payload = createPayload({
      status: 'SUCCESS',
      message: `User with id ${parseInt(id)} has been deleted`,
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