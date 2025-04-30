"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import Projects from "./Projects";
import { Text } from "@radix-ui/themes";

const ProjectSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => setOpen((prev) => !prev)}
        whileTap={{ y: 2 }}
        className="cursor-pointer list-none"
      >
        <Text className="text-neutral-300 text-sm">
          See what I created{" "}
          {open ? <GoArrowUpRight className="inline" /> : <GoArrowDownRight className="inline" />}
        </Text>
      </motion.div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="flex flex-col gap-8 mt-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              height: { duration: 0.5 },
              opacity: { duration: 0.5 },
            }}
          >
            <Projects />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default ProjectSection;
