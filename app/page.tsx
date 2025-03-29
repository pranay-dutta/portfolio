import { Flex, Heading } from "@radix-ui/themes";
import AboutMe from "./_components/AboutMe";
import AvatarSection from "./_components/AvatarSection";
import Projects from "./_components/Projects";
import Technologies from "./_components/Technologies";

export default function Home() {
  return (
    <Flex gap="2" direction="column" className="md:pr-28">
      <AvatarSection />
      <Heading mt="6" size="4" weight="medium">
        About
      </Heading>
      <AboutMe />
      <div className="mt-6">
        <Technologies />
      </div>
      <Heading mt="6" size="4" weight="medium">
        Projects
      </Heading>

      <Flex direction="column" className="gap-8" mt="3">
        <Projects />
      </Flex>
    </Flex>
  );
}
