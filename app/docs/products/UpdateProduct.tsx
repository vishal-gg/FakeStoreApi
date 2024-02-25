"use client";

import { Button } from "@/components/ui/button";
import { UpdateProductOutputSnip, UpdateProductSnip } from "./snippets";
import { useState } from "react";
import { useTiggerHightlight } from "@/context/HighlightContext";

const UpdateProduct = () => {
  const [showOutput, setShowOutput] = useState(false);
  const { setTriggerHighlight } = useTiggerHightlight();
  return (
    <div>
      <div id="update_product" className="space-y-4">
        <h3 className="text-xl font-medium">Update a product</h3>
        <UpdateProductSnip />
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
      {showOutput && <UpdateProductOutputSnip />}
    </div>
  );
};

export default UpdateProduct;
