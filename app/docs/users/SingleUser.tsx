"use client";

import { Button } from "@/components/ui/button";
import { SingleUserOutputSnip, SingleUserSnip } from "./snippets";
import { useState } from "react";
import { useTiggerHightlight } from "@/context/HighlightContext";

const SingleUser = () => {
  const [showOutput, setShowOutput] = useState(false);
  const { setTriggerHighlight } = useTiggerHightlight();
  return (
    <div>
      <div id="single_users" className="space-y-4">
        <h3 className="text-xl font-medium">Get single user</h3>
        <SingleUserSnip />
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
      {showOutput && <SingleUserOutputSnip />}
    </div>
  );
};

export default SingleUser;
