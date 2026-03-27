"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface MenuOverlayProps {
  isOpen: boolean;
  locale: string;
  currentSection: string;
  onClose: () => void;
}

const items = [
  { label: "Work", href: "/work/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export function MenuOverlay({
  isOpen,
  locale,
  currentSection,
  onClose,
}: MenuOverlayProps) {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  function navigate(href: string) {
    onClose();
    router.push(`/${locale}${href}`);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-30 bg-white flex items-center justify-center"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <nav className="flex flex-col items-center gap-12">
            {items.map((item, i) => {
              const isActive = currentSection === item.label;
              return (
                <motion.button
                  key={item.label}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => navigate(item.href)}
                  className="text-5xl md:text-6xl transition-all duration-300"
                  style={{
                    fontVariationSettings: isActive
                      ? '"wght" 700'
                      : '"wght" 400',
                    color: isActive ? "#000000" : "#B0B0B0",
                  }}
                  whileHover={{
                    color: "#000000",
                    fontVariationSettings: '"wght" 700',
                  }}
                >
                  {item.label}
                </motion.button>
              );
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
