import type { NextRequest } from "next/server";

export const parseRequestBody = async <T>(request: NextRequest): Promise<T> => {
  let requestBody;
  if (request.headers.get("Content-Type")?.startsWith("application/json")) {
    requestBody = await request.json()
  } else {
    const formData = await request.formData()
    requestBody = Object.fromEntries(formData)
  }
  if (!requestBody || Object.keys(requestBody).length === 0) {
      throw new Error(
        `Sorry, it appears you've sent ${request.method} request without any data.`
      )
  }
  return requestBody as T;
}