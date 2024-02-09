import type { NextRequest } from "next/server";

export const parseRequestBody = async (request: NextRequest) => {
  let newProduct;
  if (request.headers.get("Content-Type")?.startsWith("application/json")) {
    newProduct = await request.json()
  } else {
    const formData = await request.formData()
    newProduct = Object.fromEntries(formData)
  }
  if (!newProduct || Object.keys(newProduct).length === 0) {
      throw new Error(
        `Sorry, it appears you've sent ${request.method} request without any data.`
      )
  }
  return newProduct;
}