import { Products } from '../data/products'

type filterType = {
    page: number | null;
    limit: number | null;
}
type categoryType = {
    type: string | null;
    sort: string | null;
}

export const getSingleProduct = (id = 1) => {
  const product = Products.filter(product => product.id === id)
  if (product.length > 0) return {product}
  else return {product: Products[Products.length - 1]}
}

export const getPaginatedProducts = (filter : filterType) => {        
    const page = filter.page ?? 1;
    const limit = filter.limit ?? 20;
    const skip = (page - 1) * limit;
    const totalPages = Math.ceil(Products.length / limit);

    if (skip >= Products.length) {
        // Return the last page if the requested page exceeds the available data
        const lastPageSkip = (totalPages - 1) * limit;
        const products = Products.slice(lastPageSkip);
        return {products}

    } else {
        const products = Products.slice(skip, skip + limit);
        return {products}
    }
}

export const getProductsCategory = (category: categoryType) => {
    switch (category.type) {
      case null:
        return { categories: ["tv", "audio", "laptop", "mobile", "gaming", "appliances"]}
      default:
        const filteredProducts = Products.filter((product) => product.category === category.type)
  
        switch (category.sort) {
          case "desc":
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
          case "asc":
            filteredProducts.sort((a, b) => a.price - b.price);
        }
        return { products: filteredProducts };
    }
  }
