"use client";
import { About, AvatarSection, LottiePlayer, ProjectSection, Technologies } from "@/app/_components";
import { Flex } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import SongSection from "./_components/SongSection";
import { useYoutubeControls } from "./hook/useYoutubeContorls";
import "./theme-config.css";

export default function Home() {
  const { getPlayerState } = useYoutubeControls();

  useLayoutEffect(() => {
    // Ensure the page starts at the top on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <Flex gap="2" direction="column">
        <MotionSection className="relative" delay={0}>
          <AvatarSection />
          {/* Lottie animation */}
          <LottiePlayer getPlayerState={getPlayerState} />
        </MotionSection>

        {/* Youtube video and animation */}
        <MotionSection className="mt-4" delay={0.2}>
          <SongSection />
        </MotionSection>

        <MotionSection className="mt-2" delay={0.3}>
          <About />
        </MotionSection>

        <MotionSection className="mt-6" delay={0.4}>
          <Technologies />
        </MotionSection>

        <MotionSection className="mt-6" delay={0.5}>
          <ProjectSection />
        </MotionSection>
      </Flex>
    </div>
  );
}

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
