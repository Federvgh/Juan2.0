"use client";

import { motion } from "framer-motion";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const transition = { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const };

export function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative w-7 h-5 flex flex-col justify-between"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <motion.span
        className="block w-full h-[1.5px] bg-foreground origin-center"
        animate={
          isOpen
            ? { rotate: 45, y: 8 }
            : { rotate: 0, y: 0 }
        }
        transition={transition}
      />
      <motion.span
        className="block w-full h-[1.5px] bg-foreground"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={transition}
      />
      <motion.span
        className="block w-full h-[1.5px] bg-foreground origin-center"
        animate={
          isOpen
            ? { rotate: -45, y: -8 }
            : { rotate: 0, y: 0 }
        }
        transition={transition}
      />
    </button>
  );
}
