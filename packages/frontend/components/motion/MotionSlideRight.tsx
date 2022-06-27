import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    x: 200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.8,
    },
  },
};

interface MotionSlideRightProps {
  children: React.ReactNode;
}

export const MotionSlideRight = ({ children }: MotionSlideRightProps) => {
  return (
    <motion.div
      className=""
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="" variants={cardVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
};
