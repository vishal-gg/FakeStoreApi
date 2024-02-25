"use client";

import { Button } from "@/components/ui/button";
import { AddUserOutputSnip, AddUserSnip } from "./snippets";
import { useState } from "react";
import { useTiggerHightlight } from "@/context/HighlightContext";

const AddUser = () => {
  const [showOutput, setShowOutput] = useState(false);
  const { setTriggerHighlight } = useTiggerHightlight();
  return (
    <div>
      <div id="add_users" className="space-y-4">
        <h3 className="text-xl font-medium">Add a user</h3>
        <AddUserSnip />
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
      {showOutput && <AddUserOutputSnip />}
    </div>
  );
};

export default AddUser;
