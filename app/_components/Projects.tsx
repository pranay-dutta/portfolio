import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import React from "react";
import { IconType } from "react-icons";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Link from "./Link";
import GlareHover from "../_ui/animations/GlareHover/GlareHover";
interface Reference {
  icon: IconType;
  href: string;
}
interface ProjectType {
  id: number;
  name: string;
  description: string;
  repo?: Reference;
  website?: Reference;
}

const Projects = () => {
  return (
    <Grid columns={{ initial: "1", sm: "2" }} rows="2" gap="4">
      {projects.map(({ id, description, name, repo, website }) => (
        <GlareHover width="fit-content" height="fit-content" className="p-4" key={id} playOnce>
          <Flex gap="3" direction="column" position="relative">
            <Heading size="3" weight="medium">{name}</Heading>
            <Text size="2" className="text-neutral-400 !leading-6">
              {description}
            </Text>

            {/* Reference Links */}
            <Flex gap="5">
              {repo && (
                <Link className="flex gap-1 items-center" href={repo.href}>
                  <repo.icon size="15" />
                  <Text className="text-sm">View Repo</Text>
                </Link>
              )}
              {website && (
                <Link className="flex gap-1 items-center" href={website.href}>
                  <website.icon size="15" />
                  <Text className="text-sm">Website</Text>
                </Link>
              )}
            </Flex>
          </Flex>
        </GlareHover>
      ))}
    </Grid>
  );
};

const projects: ProjectType[] = [
  {
    id: 0,
    name: "Rflix",
    description:
      "Rflix is a online streaming website. This website uses TMDB api to fetch the movies & the tv shows then stream them using third party services.",
    repo: { icon: FaGithub, href: "https://github.com/pranay-dutta/rflix" },
    website: { icon: CiGlobe, href: "https://rflix1.vercel.app/" },
  },
  {
    id: 1,
    name: "Issue Tracker",
    description:
      "A next js powered project uses next-auth for authentication. Where you can create, read, update, delete issues and assign issues to specific user.",
    repo: {
      icon: FaGithub,
      href: "https://github.com/pranay-dutta/issue-tracker",
    },
    website: { icon: CiGlobe, href: "https://issue-tracker-8uhd.vercel.app/" },
  },
  {
    id: 2,
    name: "Gamehive",
    description:
      "A full stack game query application uses Rawg api to fetch the games. Where you can view all games based on platforms and genres.",
    repo: { icon: FaGithub, href: "https://github.com/pranay-dutta/gamehive" },
    website: { icon: CiGlobe, href: "https://gamehive-peach.vercel.app/" },
  },
];

export default Projects;
