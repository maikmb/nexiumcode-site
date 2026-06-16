"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* =============================================================================
 *  Wrappers de animação com framer-motion (scroll-reveal + stagger).
 *  Respeita prefers-reduced-motion automaticamente.
 * ============================================================================= */

type Dir = "up" | "left" | "right" | "down";

function offset(dir: Dir) {
  switch (dir) {
    case "left":
      return { x: -48, y: 0 };
    case "right":
      return { x: 48, y: 0 };
    case "down":
      return { x: 0, y: -32 };
    default:
      return { x: 0, y: 32 };
  }
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: Dir;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const reduce = useReducedMotion();
  const off = offset(from);
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, ...off }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export function StaggerGroup({
  children,
  className = "",
  as = "ul",
}: {
  children: ReactNode;
  className?: string;
  as?: "ul" | "div" | "ol";
}) {
  const MotionTag = motion[as] as typeof motion.ul;
  return (
    <MotionTag
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className = "",
  from = "up",
  as = "li",
}: {
  children: ReactNode;
  className?: string;
  from?: Dir;
  as?: "li" | "div" | "article";
}) {
  const reduce = useReducedMotion();
  const off = offset(from);
  const MotionTag = motion[as] as typeof motion.li;
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: reduce ? { opacity: 1 } : { opacity: 0, ...off },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
