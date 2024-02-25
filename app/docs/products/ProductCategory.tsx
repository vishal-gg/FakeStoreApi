"use client";

import { Button } from "@/components/ui/button";
import { ProductsCategoryOutputSnip, ProductsCategorySnip } from "./snippets";
import { useState } from "react";
import { useTiggerHightlight } from "@/context/HighlightContext";

const ProductCategory = () => {
  const [showOutput, setShowOutput] = useState(false);
  const { setTriggerHighlight } = useTiggerHightlight();
  return (
    <div>
      <div id="products_category" className="space-y-4">
        <h3 className="text-xl font-medium">Get all categories</h3>
        <ProductsCategorySnip />
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
      {showOutput && <ProductsCategoryOutputSnip />}
    </div>
  );
};

export default ProductCategory;
