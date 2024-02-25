import { GoPackage } from "react-icons/go";
import AllProducts from "./AllProducts";
import SingleProduct from "./SingleProduct";
import LimitedProduct from "./LimitedProduct";
import PaginationProduct from "./PaginationProduct";
import ProductCategory from "./ProductCategory";
import ProductofCategory from "./ProductofCategory";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";

export const Products = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold pb-14 text-pink-500">
        <GoPackage className="inline mr-[2px] -translate-y-[2px]" /> Products
      </h2>
      <div className="space-y-16">
        <AllProducts />
        <SingleProduct />
        <LimitedProduct />
        <PaginationProduct />
        <ProductCategory />
        <ProductofCategory />
        <AddProduct />
        <UpdateProduct />
        <DeleteProduct />
      </div>
    </div>
  );
};
