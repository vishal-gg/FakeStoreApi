"use client";

import { Button } from "@/components/ui/button";

import { useState } from "react";
import { useTiggerHightlight } from "@/context/HighlightContext";
import { AllUsersOutputSnip, AllUsersSnip } from "./snippets";

const AllUser = () => {
  const [showOutput, setShowOutput] = useState(false);
  const { setTriggerHighlight } = useTiggerHightlight();
  return (
    <div>
      <div id="all_users" className="space-y-4">
        <h3 className="text-xl font-medium">Get all users</h3>
        <AllUsersSnip />
        <p>
          ⚡ Access all users by using{" "}
          <span className="px-2 pt-[2px] pb-1 rounded-md text-orange-600 bg-orange-100 dark:text-orange-300 dark:bg-[#0d1117] whitespace-nowrap">
            /users?limit=20
          </span>{" "}
          endpoint.
        </p>
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
      {showOutput && <AllUsersOutputSnip />}
    </div>
  );
};

export default AllUser;
