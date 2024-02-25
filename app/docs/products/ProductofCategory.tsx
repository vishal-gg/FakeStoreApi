"use client";

import { Button } from "@/components/ui/button";
import {
  ProductsofCategoryOutputSnip,
  ProductsofCategorySnip,
} from "./snippets";
import { useState } from "react";
import { useTiggerHightlight } from "@/context/HighlightContext";

const ProductofCategory = () => {
  const [showOutput, setShowOutput] = useState(false);
  const { setTriggerHighlight } = useTiggerHightlight();
  return (
    <div>
      <div id="products_of_category" className="space-y-4">
        <h3 className="text-xl font-medium">Get products of category</h3>
        <ProductsofCategorySnip />
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
      {showOutput && <ProductsofCategoryOutputSnip />}
    </div>
  );
};

export default ProductofCategory;
