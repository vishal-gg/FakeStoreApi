import { GoPackage } from "react-icons/go";
import {
  AddProductSnip,
  DeleteProductSnip,
  LimitedProductsSnip,
  PaginatedProductsSnip,
  ProductsCategorySnip,
  ProductsofCategorySnip,
  UpdateProductSnip,
} from "./snippets";
import AllProducts from "./AllProducts";
import SingleProduct from "./SingleProduct";

export const Products = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold pb-14 text-pink-500">
        <GoPackage className="inline mr-[2px] -translate-y-[2px]" /> Products
      </h2>
      <div className="space-y-16">
      <AllProducts />
      <SingleProduct />



        <div id="" className="space-y-2">
          <h3 className="text-xl font-medium">Get limited products</h3>
          <LimitedProductsSnip />
        </div>
        <div id="" className="space-y-2">
          <h3 className="text-xl font-medium">Pagination</h3>
          <PaginatedProductsSnip />
          <p>
            ⚡ By default, we send 50 products. use{" "}
            <span className="px-2 pt-[2px] pb-1 rounded-md dark:text-[#b8bb26] bg-zinc-200 dark:bg-[#1d2021] whitespace-nowrap">
              /products?page=2&limit=20
            </span>{" "}
            to limit products per page.
          </p>
          <p>
            💁‍♂️ You don't need to pass{" "}
            <span className="px-2 pt-[2px] pb-1 rounded-md dark:text-[#b8bb26] bg-zinc-200 dark:bg-[#1d2021] whitespace-nowrap">
              ?skip=20
            </span>{" "}
            query, we took care of that.
          </p>
        </div>
        <div id="" className="space-y-2">
         <h3 className="text-xl font-medium">Get all categories</h3>
         <ProductsCategorySnip />
        </div>
        <div id="" className="space-y-2">
         <h3 className="text-xl font-medium">Get products of cateogory</h3>
         <ProductsofCategorySnip />
        </div>
        <div id="" className="space-y-2">
         <h3 className="text-xl font-medium">Add a product</h3>
         <AddProductSnip />
        </div>
        <div id="" className="space-y-2">
         <h3 className="text-xl font-medium">Update a product</h3>
         <UpdateProductSnip />
        </div>
        <div id="" className="space-y-2">
         <h3 className="text-xl font-medium">Delete a product</h3>
         <DeleteProductSnip />
        </div>
      </div>
    </div>
  );
};
