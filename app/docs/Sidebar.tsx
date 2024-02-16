"use client";

import { ScrollArea } from "@components/ui/scroll-area";
import { GoPackage } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import { Link } from "react-scroll/modules";

const Sidebar = () => {
  const productsTabs = [
    { section: "Get all products", link: "all_products" },
    { section: "Get a single product", link: "single_product" },
    { section: "Limit products", link: "limit_products" },
    { section: "Pagination", link: "product_pagination" },
    { section: "Get categories", link: "products_category" },
    { section: "Get products of category", link: "products_of_category" },
    { section: "Add a product", link: "add_product" },
    { section: "Update a product", link: "update_product" },
    { section: "Delete a product", link: "delete_product" },
    { section: "Preview products", link: "preview_product" }
  ];
  const usersTabs = [
    "Get all users",
    "Get a single user",
    "Limit users",
    "Pagination",
    "Add a user",
    "Update a user",
    "Delete a user",
  ];

  return (
    <ScrollArea className="w-full h-full">
      <h2 className="font-semibold mb-5 mt-8">
        <GoPackage className="inline mr-[2px] -translate-y-[2px]" /> Products
      </h2>
      <ul className="text-sm space-y-[10px]">
        {productsTabs.map((tab) => (
          <li key={tab.section}>
            <Link
              to={tab.link}
              spy={true}
              offset={-85}
              activeStyle={{ opacity: 1, fontWeight: 500 }}
              className="cursor-pointer opacity-60 hover:opacity-100 hover:font-medium inline-block transition"
            >
              {tab.section}
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="font-semibold my-5">
        <TbUsers className="inline mr-[2px] -translate-y-[1px]" /> Users
      </h2>
      <ul className="text-sm space-y-[10px] opacity-60">
        {usersTabs.map((tab) => (
          <li key={tab}>{tab}</li>
        ))}
      </ul>
    </ScrollArea>
  )
}

export default Sidebar;
