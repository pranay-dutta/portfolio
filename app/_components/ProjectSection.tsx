"use client";
import { AnimatePresence, motion } from "motion/react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import Projects from "./Projects";
import { Box } from "@radix-ui/themes";
import useProjectSectionOpen from "../store";

const ProjectSection = () => {
  const { isOpen, toggleOpen } = useProjectSectionOpen();

  return (
    <>
      <Box className="list-none">
        <motion.p
          className="cursor-pointer text-neutral-300 text-sm hover:text-blue-300 inline"
          onClick={() => toggleOpen()}
          whileTap={{ y: 2 }}
        >
          See what I created{" "}
          {isOpen ? <GoArrowUpRight className="inline" /> : <GoArrowDownRight className="inline" />}
        </motion.p>
      </Box>

      <AnimatePresence initial={false}>
        {isOpen && (
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
