import { z } from 'zod';

export const schema = z.object({
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