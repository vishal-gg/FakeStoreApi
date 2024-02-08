import { products } from '../data/products'

type filterType = {
    page?: number;
    limit?: number;
}

export const getPaginatedProducts = (filter : filterType = {}) => {        
    const page = filter.page ?? 1;
    const limit = filter.limit ?? 20;
    const skip = (page - 1) * limit;

    const data = products.slice(skip, skip + limit);
    return {
        products: data,
        lenght: data.length
    }
    
}