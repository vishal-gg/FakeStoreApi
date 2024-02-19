"use client";

import { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript)
import 'highlight.js/styles/github-dark.css';
import { useTiggerHightlight } from '@/context/HighlightContext';

export default function HighLight() {
  const { triggerHighlight } = useTiggerHightlight();

  useEffect(() => {
    hljs.highlightAll()
    console.clear()
  }, [triggerHighlight]);

  return <div className="hidden"></div>;
}