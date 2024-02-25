"use client";

import { Button } from "@/components/ui/button";
import { PaginationOutputSnip, PaginationSnip } from "./snippets";
import { useState } from "react";
import { useTiggerHightlight } from "@/context/HighlightContext";

const PaginationProduct = () => {
  const [showOutput, setShowOutput] = useState(false);
  const { setTriggerHighlight } = useTiggerHightlight();
  return (
    <div>
      <div id="product_pagination" className="space-y-4">
        <h3 className="text-xl font-medium">Pagination</h3>
        <PaginationSnip />
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
      {showOutput && <PaginationOutputSnip />}
    </div>
  );
};

export default PaginationProduct;
