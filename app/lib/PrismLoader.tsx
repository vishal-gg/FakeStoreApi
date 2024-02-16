"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-hljs.css";

export default function PrismLoader() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <div className="hidden"></div>;
}