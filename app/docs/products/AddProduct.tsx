"use client";

import { Button } from "@/components/ui/button";
import { AddProductOutputSnip, AddProductSnip } from "./snippets";
import { useState } from "react";
import { useTiggerHightlight } from "@/context/HighlightContext";

const AddProduct = () => {
  const [showOutput, setShowOutput] = useState(false);
  const { setTriggerHighlight } = useTiggerHightlight();
  return (
    <div>
      <div id="add_product" className="space-y-4">
        <h3 className="text-xl font-medium">Add a product</h3>
        <AddProductSnip />
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
      {showOutput && <AddProductOutputSnip />}
    </div>
  );
};

export default AddProduct;
