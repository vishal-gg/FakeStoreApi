import { Products } from '@data/product/products'
export const totalProducts = Products.length

type filterType = {
    page: number | null;
    limit: number | null;
}
type categoryType = {
    type: string | null;
    sort: string | null;
    limit: string | null;
}

export const getSingleProduct = (id: number) => {
  if (Number.isNaN(id)) throw new Error("Oops! only numeric characters are allowed.")
  const filteredProducts = Products.filter(product => product.id === id)
  if (filteredProducts.length > 0) return filteredProducts[0]
  else return Products[totalProducts - 1]
}

export const getPaginatedProducts = (filter : filterType) => {        
    const page = filter.page ?? 1;
    const limit = filter.limit ?? 50;
    const skip = (page - 1) * limit;
    const totalPages = Math.ceil(totalProducts / limit);

    if (skip >= totalProducts) {
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
  const categories = ["tv", "audio", "laptop", "mobile", "gaming", "appliances"];
  
  if (category.type === null) {
    return { categories };
  }
  if (!categories.includes(category.type)) {
    throw new Error("Category type must be within the defined categories.");
  }
  if (category.sort !== null) {
    if (!['desc', 'asc'].includes(category.sort)) {
      throw new Error("Sort type must be 'desc' or 'asc'.");
    }
  }

  let products = Products.filter((product) => product.category === category.type);

  switch (category.sort) {
    case "desc":
      products.sort((a, b) => b.price - a.price);
      break;
    case "asc":
      products.sort((a, b) => a.price - b.price);
      break;
  }

  if (category.limit && parseInt(category.limit)) {
    products = products.slice(0, Number(category.limit));
  }
  return { products };
};

