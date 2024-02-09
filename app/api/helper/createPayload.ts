import { productsType, productsTypePartial } from "../data/types"

type payloadType = {
    status: "SUCCESS" | "ERROR" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT-FOUND" | "BAD-REQUEST";
    message: string;
    products?: productsType[];
    product?: productsTypePartial;
    categories?: any;
}

export const createPayload = ({status, message, product, products, categories} : payloadType) => {
    return {status, message, product, products, categories}
}