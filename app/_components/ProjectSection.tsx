import Projects from "./Projects";
import { Flex, Text } from "@radix-ui/themes";

const ProjectSection = () => {
  return (
    <>
      <Flex align="center" gap="4">
        <hr className="w-[3%] opacity-10" />
        <Text size="2" weight="medium">
          Work Highlights
        </Text>
        <hr className="flex-1 opacity-10" />
      </Flex>
      <div className="mt-6">
        <Projects />
      </div>
    </>
  );
};
export default ProjectSection;
