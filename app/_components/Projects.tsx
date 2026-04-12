"use client";
import { Grid } from "@radix-ui/themes";
import { motion } from "motion/react";
import projects from "../constants/projects";
import Project from "./Project";

const Projects = () => {
  return (
    <Grid columns={{ initial: "1", sm: "2" }} gap="8" className="items-start">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 0, scale: 0.95 }}
          animate={{ opacity: 1, y: [15, 0], scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.4 + project.id * 0.1,
            ease: "easeOut",
          }}
        >
          <Project project={project} />
        </motion.div>
      ))}
    </Grid>
  );
};

export default Projects;
