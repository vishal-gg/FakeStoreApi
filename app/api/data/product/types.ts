export type productsType = {
    id: number
    title: string;
    price: number;
    category: string;
    image: string;
    description: string;
    brand: string;
    model: string;
    color?: string;
    discount?: number;
    onSale?: boolean;
    popular?: boolean;
}

export type productsTypePartial = Partial<{
    id: number | string;
    title: string;
    price: number | string;
    category: string;
    image: string;
    description: string;
    brand: string;
    model: string;
    color?: string;
    discount?: number | string;
    onSale?: boolean;
    popular?: boolean;
}>
