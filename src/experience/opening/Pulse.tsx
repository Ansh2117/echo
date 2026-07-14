"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { createOpeningTimeline } from "../../engine/gsap/master";

export default function Pulse() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dotRef.current || !ringRef.current) return;

    const tl = createOpeningTimeline(dotRef.current, ringRef.current);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        ref={ringRef}
        className="absolute h-2 w-2 rounded-full border border-white/20"
      />

      <div
        ref={dotRef}
        className="relative z-20 h-2 w-2 rounded-full bg-white"
      />
    </div>
  );
}
