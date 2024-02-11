import { z } from 'zod';

export const productSchema = z.object({
    title: z.string().optional(),
    image: z.string().optional(),
    price: z.string().optional(),
    description: z.string().optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    color: z.string().optional(),
    category: z.string().optional(),
    discount: z.string().optional()
  })

  export const userSchema = z.object({
    email: z.string().email(),
    username: z.string(),
    password: z.string(),
    name: z.object({
        firstname: z.string(),
        lastname: z.string()
    }),
    address: z.object({
        city: z.string(),
        street: z.string(),
        number: z.string(),
        zipcode: z.string(),
        geolocation: z.object({
            lat: z.number(),
            long: z.number()
        })
    }),
    phone: z.string()
});