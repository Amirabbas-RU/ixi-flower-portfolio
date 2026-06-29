"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { codeToHtml } from "shiki";

interface AnimateCodeProps {
  code: string;
  lang?: string;
  fileName?: string;
  className?: string;
  typingSpeed?: number;
  delay?: number;
}

export default function AnimateCode({
  code,
  lang = "tsx",
  fileName = "code.tsx",
  className = "",
  typingSpeed = 40,
  delay = 500,
}: AnimateCodeProps) {
  const [displayed, setDisplayed] = useState("");
  const [highlighted, setHighlighted] = useState("");
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Typewriter effect
  useEffect(() => {
    const chars = Array.from(code);
    indexRef.current = 0;
    setDisplayed("");
    setDone(false);

    const startTimeout = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (indexRef.current < chars.length) {
          setDisplayed(chars.slice(0, indexRef.current + 1).join(""));
          indexRef.current++;
          // Auto-scroll
          if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
          }
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setDone(true);
        }
      }, typingSpeed);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [code, typingSpeed, delay]);

  // Highlight displayed code
  useEffect(() => {
    if (!displayed) {
      setHighlighted("");
      return;
    }
    codeToHtml(displayed, {
      lang,
      themes: { light: "min-dark", dark: "min-dark" },
      defaultColor: "dark",
    })
      .then((html) => setHighlighted(html))
      .catch(() => setHighlighted(""));
  }, [displayed, lang]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [code]);

  return (
    <div
      className={`relative flex flex-col overflow-hidden border border-zinc-800 bg-zinc-900/80 rounded-xl ${className}`}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 h-10 border-b border-zinc-800 text-xs text-zinc-500 shrink-0 bg-zinc-900/60">
        {/* Red/Yellow/Green dots */}
        <div className="flex gap-1.5 mr-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-zinc-400">{fileName}</span>
        <button
          onClick={handleCopy}
          className="ml-auto text-zinc-600 hover:text-zinc-300 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="9" y="9" width="13" height="13" rx="2" strokeWidth={2} />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeWidth={2} />
            </svg>
          )}
        </button>
      </div>

      {/* Code body */}
      <div
        ref={scrollRef}
        className="relative text-sm p-4 overflow-auto max-h-[400px] min-h-[200px]"
      >
        {highlighted ? (
          <div
            className="[&>pre]:!bg-transparent [&>pre]:m-0 [&>pre]:p-0 [&_code]:!text-[13px] [&_code]:!font-mono"
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        ) : (
          <pre className="m-0 bg-transparent">
            <code className="text-zinc-500 text-[13px] font-mono">
              {displayed}
              {!done && (
                <span className="inline-block w-[1ch] h-[1.1em] bg-zinc-400 animate-pulse ml-0.5 -translate-y-px align-middle" />
              )}
            </code>
          </pre>
        )}
        {/* Cursor at end when highlighted but not done */}
        {highlighted && !done && (
          <span className="inline-block w-[1ch] h-[1.1em] bg-zinc-400 animate-pulse ml-0.5 -translate-y-px align-middle" />
        )}
      </div>
    </div>
  );
}
