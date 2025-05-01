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
        >
          See what I created{" "}
          {isOpen ? <GoArrowUpRight className="inline" /> : <GoArrowDownRight className="inline" />}
        </motion.p>
      </Box>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="flex flex-col gap-8 mt-6 origin-top overflow-hidden"
            initial={{ opacity: 0, height: 0, rotateX: -15, filter: "blur(6px)" }}
            animate={{ opacity: 1, height: "auto", rotateX: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, height: 0, rotateX: -15, filter: "blur(6px)" }}
            transition={{
              opacity: { duration: 0.3 },
              height: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
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
