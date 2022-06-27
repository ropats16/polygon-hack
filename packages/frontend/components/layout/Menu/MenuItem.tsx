import * as React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

interface MenuItemProps {
  item: {
    id: number;
    name: string;
    url: string;
  };
  onClick: () => void;
}

export const MenuItem = ({ item, onClick }: MenuItemProps) => {
  const router = useRouter();
  const style = {
    border: `2px solid ${colors[item.id]}`,
  };
  const textStyle = {
    color: colors[item.id],
  };
  return (
    <motion.button
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex mb-6 items-center w-52 z-20"
      onClick={() => {
        router.push(item.url);
        onClick();
      }}
    >
      <div className="flex w-full rounded-full" style={style}>
        <div>
          <div
            className="h-10 w-10 rounded-full place-self-center"
            style={style}
          ></div>
        </div>

        <div className="w-full font-bold place-self-center" style={textStyle}>
          {item.name}
        </div>
      </div>
    </motion.button>
  );
};
