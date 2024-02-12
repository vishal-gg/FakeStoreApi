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
    email: z.string().email().optional(),
    username: z.string().optional(),
    password: z.string().optional(),
    name: z.object({
        firstname: z.string().optional(),
        lastname: z.string().optional()
    }).optional(),
    address: z.object({
        city: z.string().optional(),
        street: z.string().optional(),
        number: z.string().optional(),
        zipcode: z.string().optional(),
        geolocation: z.object({
            lat: z.number().optional(),
            long: z.number().optional()
        }).optional()
    }).optional(),
    phone: z.string().optional()
});