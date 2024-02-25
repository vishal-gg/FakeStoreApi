"use client";

import { Button } from "@/components/ui/button";
import { DeleteProductOutputSnip, DeleteProductSnip } from "./snippets";
import { useState } from "react";
import { useTiggerHightlight } from "@/context/HighlightContext";

const DeleteProduct = () => {
  const [showOutput, setShowOutput] = useState(false);
  const { setTriggerHighlight } = useTiggerHightlight();
  return (
    <div>
      <div id="delete_product" className="space-y-4">
        <h3 className="text-xl font-medium">Delete a product</h3>
        <DeleteProductSnip />
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
      {showOutput && <DeleteProductOutputSnip />}
    </div>
  );
};

export default DeleteProduct;
