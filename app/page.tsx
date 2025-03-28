import { Flex, Heading, Text } from "@radix-ui/themes";
import AboutMe from "./_components/AboutMe";
import AvatarSection from "./_components/AvatarSection";
import Technologies from "./_components/Technologies";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";

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
const projects: ProjectType[] = [
  {
    id: 0,
    name: "Issue Tracker",
    description:
      "A full stack game query application uses Rawg api to fetch the games. Where you can view all games based on platforms and genres.",
    repo: { icon: FaGithub, href: "https://github.com/pranay-dutta/gamehive" },
    website: { icon: CiGlobe, href: "https://gamehive-peach.vercel.app/" },
  },
  {
    id: 1,
    name: "Gamehive",
    description:
      "A full stack game query application uses Rawg api to fetch the games. Where you can view all games based on platforms and genres.",
    repo: { icon: FaGithub, href: "https://github.com/pranay-dutta/gamehive" },
    website: { icon: CiGlobe, href: "https://gamehive-peach.vercel.app/" },
  },
];

export default function Home() {
  return (
    <Flex gap="2" direction="column">
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
        {projects.map(({ id, description, name, repo, website }) => {
          return (
            <Flex direction="column" gap="2" key={id}>
              <Heading size="3" weight="medium">
                {name}
              </Heading>
              <Text size="2" className="text-neutral-400 md:w-2/3 !leading-7">
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
          );
        })}
      </Flex>
    </Flex>
  );
}
