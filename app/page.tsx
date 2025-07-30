"use client";
import { Flex } from "@radix-ui/themes";
import AboutMe from "./_components/AboutMe";
import AvatarSection from "./_components/AvatarSection";
import Technologies from "./_components/Technologies";
import "./theme-config.css";
import ProjectSection from "./_components/ProjectSection";
import { motion } from "framer-motion";

const MotionSection = ({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4, ease: "easeOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div>
      <Flex gap="2" direction="column">
        <MotionSection delay={0}>
          <AvatarSection />
        </MotionSection>

        <MotionSection className="mt-6" delay={0.1}>
          <AboutMe />
        </MotionSection>

        <MotionSection className="mt-6" delay={0.2}>
          <Technologies />
        </MotionSection>

        <MotionSection className="mt-6" delay={0.3}>
          <ProjectSection />
        </MotionSection>
      </Flex>
    </div>
  );
}
