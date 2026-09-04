"use client";

import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import { type CSSProperties, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  className?: string;
  once?: boolean;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  y = 30,
  x = 0,
  scale = 1,
  className = "",
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0, y, x, scale },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
  style,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  y = 30,
  style,
  hover = false,
  hoverScale = 1.03,
  hoverY = -6,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  style?: CSSProperties;
  hover?: boolean;
  hoverScale?: number;
  hoverY?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      whileHover={
        hover
          ? {
              y: hoverY,
              scale: hoverScale,
              transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
            }
          : undefined
      }
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
