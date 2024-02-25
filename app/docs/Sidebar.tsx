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
  ];
  const usersTabs = [
    { section: "Get all users", link: "all_users" },
    { section: "Get a single user", link: "single_users" },
    { section: "Limit users", link: "limit_users" },
    { section: "Pagination", link: "users_pagination" },
    { section: "Add a user", link: "add_users" },
    { section: "Update a user", link: "update_users" },
    { section: "Delete a user", link: "delete_users" },
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
      <ul className="text-sm space-y-[10px] ">
        {usersTabs.map((tab) => (
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
    </ScrollArea>
  );
};

export default Sidebar;
