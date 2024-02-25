"use client";

import { Button } from "@/components/ui/button";
import { LimitedUserOutputSnip, LimitedUserSnip } from "./snippets";
import { useState } from "react";
import { useTiggerHightlight } from "@/context/HighlightContext";

const LimitedUser = () => {
  const [showOutput, setShowOutput] = useState(false);
  const { setTriggerHighlight } = useTiggerHightlight();
  return (
    <div>
      <div id="limit_users" className="space-y-4">
        <h3 className="text-xl font-medium">Get limited users</h3>
        <LimitedUserSnip />
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
      {showOutput && <LimitedUserOutputSnip />}
    </div>
  );
};

export default LimitedUser;
