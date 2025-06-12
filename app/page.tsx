import { Flex, Heading } from "@radix-ui/themes";
import * as motion from "motion/react-client";
import AboutMe from "./_components/AboutMe";
import AvatarSection from "./_components/AvatarSection";
import Technologies from "./_components/Technologies";
import "./theme-config.css";
import ProjectSection from "./_components/ProjectSection";

export default function Home() {
  return (
    <motion.div
      initial={{ filter: "blur(8px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.6 }}
    >
      <Flex gap="2" direction="column" className="md:pr-28">
        <AvatarSection />
        <Heading mt="6" size="4" weight="medium">About</Heading>
        <AboutMe />
        <div className="mt-6">
          <Technologies />
        </div>
        <div className="mt-6">
          <ProjectSection />
        </div>
      </Flex>
    </motion.div>
  );
}
