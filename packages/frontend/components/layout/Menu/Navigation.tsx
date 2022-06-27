import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface NavigationProps {
  onClick: () => void;
}

export const Navigation = ({ onClick }: NavigationProps) => (
  <motion.div className="absolute top-20 w-60 py-8 px-4" variants={variants}>
    {itemIds.map((item, index) => (
      <MenuItem key={index} item={item} onClick={onClick} />
    ))}
  </motion.div>
);

const itemIds = [
  {
    id: 0,
    name: "Home",
    url: "/",
  },
  {
    id: 1,
    name: "Profile",
    url: "/user/user-profile",
  },
  {
    id: 2,
    name: "Mint",
    url: "/mint",
  },
  {
    id: 3,
    name: "Look for a Fight",
    url: "/pre-combat",
  },
  {
    id: 4,
    name: "Combat",
    url: "/combat",
  },
  // {
  //   id: 5,
  //   name: "Marketplace",
  //   url: "/marketplace",
  // },
];
