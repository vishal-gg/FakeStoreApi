"use client";

import { Button } from "@/components/ui/button";
import { SingleProductOutputSnip, SingleProductSnip } from "./snippets";
import { useState } from "react";
import { useTiggerHightlight } from "@/context/HighlightContext";

const SingleProduct = () => {
  const [showOutput, setShowOutput] = useState(false);
  const { setTriggerHighlight } = useTiggerHightlight();
  return (
    <div>
      <div id="single_product" className="space-y-4">
        <h3 className="text-xl font-medium">Get single product</h3>
        <SingleProductSnip />
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
      {showOutput && <SingleProductOutputSnip />}
    </div>
  );
};

export default SingleProduct;
