"use client";

import { Button } from "@/components/ui/button";
import { DeleteUserOutputSnip, DeleteUserSnip } from "./snippets";
import { useState } from "react";
import { useTiggerHightlight } from "@/context/HighlightContext";

const DeleteUser = () => {
  const [showOutput, setShowOutput] = useState(false);
  const { setTriggerHighlight } = useTiggerHightlight();
  return (
    <div>
      <div id="delete_users" className="space-y-4">
        <h3 className="text-xl font-medium">Delete a user</h3>
        <DeleteUserSnip />
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
      {showOutput && <DeleteUserOutputSnip />}
    </div>
  );
};

export default DeleteUser;
