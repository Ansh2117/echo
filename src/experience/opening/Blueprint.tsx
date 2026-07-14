"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Blueprint() {
  const frameRef = useRef<SVGRectElement>(null);
  const hLineRef = useRef<SVGLineElement>(null);
  const vLineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const elements = [
      frameRef.current,
      hLineRef.current,
      vLineRef.current,
    ].filter(Boolean) as SVGGeometryElement[];

    elements.forEach((el) => {
      const length = el.getTotalLength();

      gsap.set(el, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(el, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      <rect
        ref={frameRef}
        x="80"
        y="80"
        width="840"
        height="840"
        rx="28"
        fill="none"
        stroke="rgba(255,255,255,.08)"
        strokeWidth="1"
      />

      <line
        ref={vLineRef}
        x1="500"
        y1="80"
        x2="500"
        y2="920"
        stroke="rgba(255,255,255,.05)"
        strokeWidth="1"
      />

      <line
        ref={hLineRef}
        x1="80"
        y1="500"
        x2="920"
        y2="500"
        stroke="rgba(255,255,255,.05)"
        strokeWidth="1"
      />
    </svg>
  );
}
