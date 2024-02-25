"use client";

import { Button } from "@/components/ui/button";
import { UpdateUserOutputSnip, UpdateUserSnip } from "./snippets";
import { useState } from "react";
import { useTiggerHightlight } from "@/context/HighlightContext";

const UpdateUser = () => {
  const [showOutput, setShowOutput] = useState(false);
  const { setTriggerHighlight } = useTiggerHightlight();
  return (
    <div>
      <div id="update_users" className="space-y-4">
        <h3 className="text-xl font-medium">Update a user</h3>
        <UpdateUserSnip />
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
      {showOutput && <UpdateUserOutputSnip />}
    </div>
  );
};

export default UpdateUser;
