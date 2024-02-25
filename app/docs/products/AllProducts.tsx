"use client";

import { Button } from "@/components/ui/button";
import { AllProductsOutputSnip, AllProductsSnip } from "./snippets";
import { useState } from "react";
import { useTiggerHightlight } from "@/context/HighlightContext";

const AllProducts = () => {
  const [showOutput, setShowOutput] = useState(false);
  const { setTriggerHighlight } = useTiggerHightlight();
  return (
    <div>
      <div id="all_products" className="space-y-4">
        <h3 className="text-xl font-medium">Get all products</h3>
        <AllProductsSnip />
        <p>
          ⚡ Access all products by using{" "}
          <span className="px-2 pt-[2px] pb-1 rounded-md text-orange-600 bg-orange-100 dark:text-orange-300 dark:bg-[#0d1117] whitespace-nowrap">
            /products?limit=150
          </span>{" "}
          endpoint.
        </p>
      </div>
      <Button
        onClick={() => {
          setShowOutput((prev) => !prev);
          setTriggerHighlight((prev) => !prev);
        }}
        className="mt-10"
        variant={"default"}
      >
        {showOutput ? "Collapse" : "Show Result"}
      </Button>
      {showOutput && <AllProductsOutputSnip />}
    </div>
  );
};

export default AllProducts;
