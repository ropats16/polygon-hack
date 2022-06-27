import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    className: "bg-gray-800",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    className: "bg-red-300",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      // className="fixed inset-0 z-10 w-60"
      className={classNames(isOpen ? "" : "h-20", "fixed inset-0 z-30 w-60")}
    >
      <motion.div
        className="bg-white absolute w-60 top-0 left-0 bottom-0"
        variants={sidebar}
      >
        <Navigation onClick={() => toggleOpen()} />
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
