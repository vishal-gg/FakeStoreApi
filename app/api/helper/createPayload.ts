import { productsType, productsTypePartial } from "@product/types"
import { UserType , UserTypePartial } from "@user/types"

type payloadType = {
    status: "SUCCESS" | "ERROR" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT-FOUND" | "BAD-REQUEST";
    message: string;
    products?: productsType[];
    product?: productsTypePartial;
    categories?: any;
    user?: UserType;
    users?: UserTypePartial[];
}

export const createPayload = ({status, message, product, products, categories, user, users} : payloadType) => {
    return {status, message, product, products, categories, user, users}
}