"use client";

import { Button } from "@/components/ui/button";
import { LimitedProductOutputSnip, LimitedProductSnip } from "./snippets";
import { useState } from "react";
import { useTiggerHightlight } from "@/context/HighlightContext";

const LimitedProduct = () => {
  const [showOutput, setShowOutput] = useState(false);
  const { setTriggerHighlight } = useTiggerHightlight();
  return (
    <div>
      <div id="limit_products" className="space-y-4">
        <h3 className="text-xl font-medium">Get limited products</h3>
        <LimitedProductSnip />
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
      {showOutput && <LimitedProductOutputSnip />}
    </div>
  );
};

export default LimitedProduct;
