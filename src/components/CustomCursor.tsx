"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;

    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      setVisible(true);
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.12;
      cursorY += (mouseY - cursorY) * 0.12;

      cursor.style.transform = `
        translate3d(${cursorX}px, ${cursorY}px, 0)
        translate(-50%, -50%)
      `;

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`
        pointer-events-none
        fixed
        left-0
        top-0
        z-[99999]
        h-10
        w-10
        rounded-full
        border
        border-black
        bg-white
        mix-blend-difference
        transition-[width,height,opacity]
        duration-300
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    />
  );
}