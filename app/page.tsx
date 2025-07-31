"use client";
import { Flex } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import AboutMe from "./_components/AboutMe";
import AvatarSection from "./_components/AvatarSection";
import LottiePlayer from "./_components/LottiePlayer";
import MusicPlayButton from "./_components/MusicPlayButton";
import ProjectSection from "./_components/ProjectSection";
import Technologies from "./_components/Technologies";
import YoutubeVideo from "./_components/YoutubeVideo";
import { YoutubeContextProvider } from "./context/useYoutubeContext";
import "./theme-config.css";

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
  const [play, setPlay] = useState(false);

  useLayoutEffect(() => {
    // Ensure the page starts at the top on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <Flex gap="2" direction="column">
        {/* Youtube video context */}
        <YoutubeContextProvider value={{ play, setPlay }}>
          <MotionSection className="relative" delay={0}>
            <AvatarSection />
            <LottiePlayer />
          </MotionSection>

          {/* Youtube video and animation */}
          <MotionSection className="mt-4" delay={0.2}>
            <MusicPlayButton />
            <YoutubeVideo />
          </MotionSection>
        </YoutubeContextProvider>

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
