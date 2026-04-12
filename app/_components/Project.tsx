import { Box, Flex, Text } from "@radix-ui/themes";
import { ProjectType } from "../types/ProjectType";
import Link from "./Link";

const Project = ({ project }: { project: ProjectType }) => {
  const { id, description, name, repo, website } = project;

  return (
    <Box width="fit-content" height="fit-content" key={id}>
      <Flex gap="3" direction="column">
        <Text size="2" weight="medium">
          {name}
        </Text>
        <Text size="2" className="text-neutral-400 !leading-6 ">
          {description}
        </Text>

        {/* Reference Links */}
        <Flex gap="5">
          {repo && (
            <Link href={repo.href} className="inline-flex items-center gap-1 text-sm">
              <repo.icon size="14" />
              View Repo
            </Link>
          )}
          {website && (
            <Link href={website.href} className="inline-flex items-center gap-1 text-sm">
              <website.icon size="14" />
              Website
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Project;
