"use client";
import { Flex } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import AboutMe from "./_components/AboutMe";
import AvatarSection from "./_components/AvatarSection";
import LottiePlayer from "./_components/LottiePlayer";
import MusicPlayPauseButton from "./_components/MusicPlayPause";
import ProjectSection from "./_components/ProjectSection";
import Technologies from "./_components/Technologies";
import YoutubeVideo from "./_components/YoutubeVideo";
import "./theme-config.css";
import MusicNextButton from "./_components/MusicNextButton";
import MusicPreviousButton from "./_components/MusicPreviousButton";
import { useYoutubeControls } from "./hook/useYoutubeContorls";

export default function Home() {
  const { getPlayerState, onReady, next, prev, play, pause } = useYoutubeControls();
  //TODO: Show & hide player controls

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
          {/* Player controls */}
          <motion.div className="flex items-center gap-5">
            <MusicPreviousButton prev={prev} />
            <MusicPlayPauseButton getPlayerState={getPlayerState} play={play} pause={pause} />
            <MusicNextButton next={next} />
          </motion.div>

          {/* Youtube video */}
          <YoutubeVideo onReady={onReady} />
        </MotionSection>

        <MotionSection className="mt-4" delay={0.3}>
          <AboutMe />
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
