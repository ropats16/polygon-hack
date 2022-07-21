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

const colors = ["#AF31B7", "#952DAB", "#7E2A9F", "#65268F", "#4F227F"];
const colorsRev = ["#3C1D6E", "#4F227F", "#65268F", "#7E2A9F", "#952DAB"];

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
    background: `linear-gradient(to right, ${colorsRev[item.id]}, ${
      colors[item.id]
    })`,
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
      <div
        className="flex w-full rounded-full shadow-lg shadow-slate-400 border-b border-slate-300"
        style={style}
      >
        <div>
          <div
            className={`h-10 w-10 rounded-full place-self-center border-slate-500 border shadow-lg`}
          ></div>
        </div>

        <div className={`w-full font-bold place-self-center text-slate-100`}>
          {item.name}
        </div>
      </div>
    </motion.button>
  );
};
