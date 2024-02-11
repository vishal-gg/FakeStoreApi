import { NextRequest, NextResponse } from "next/server";
import { getSingleProduct } from "@helper/filterProducts";
import { parseRequestBody } from "@helper/parseRequestBody";
import { productSchema } from "@helper/schema";
import { createPayload } from "@helper/createPayload";


// method: GET
// supported route: ["api/products/:id"]
// message: returns the last product if the requested product not found.

export const GET = async (request: NextRequest, {params} : {params: {id: string}}) => {
    try {
      const { id } = params;
      const product = getSingleProduct(parseInt(id))
      const payload = createPayload({
        status: 'SUCCESS',
        message: `Here you've a single product requested for id ${parseInt(id)}`,
        product
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
// supported route: ["api/products/:id"]

export const PUT = async (request: NextRequest, {params} : {params: {id: string}}) => {
  try {
    const { id } = params;
    const product = await parseRequestBody(request)
    const parsed = productSchema.parse(product)
    const payload = createPayload({
      status: "SUCCESS",
      message: `The product with id ${parseInt(id)} has been replaced with your provided data`,
      product: {id, ...parsed}
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
// supported route: ["api/products/:id"]

export const PATCH = async (request: NextRequest, {params} : {params: {id: string}}) => {
  try {
    const { id } = params;
    const productToUpdate = await parseRequestBody(request)
    const product = getSingleProduct(parseInt(id))
    const parsed = productSchema.parse(productToUpdate)
    const payload = createPayload({
      status: 'SUCCESS',
      message: `The product with id ${parseInt(id)} has been updated with your provided data`,
      product: {...product, ...parsed}
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
// supported route: ["api/products/:id"]

export const DELETE = async (request: NextRequest, {params} : {params: {id: string}}) => {
  try {
    const { id } = params;
    const payload = createPayload({
      status: 'SUCCESS',
      message: `Product with id ${parseInt(id)} has been deleted`,
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