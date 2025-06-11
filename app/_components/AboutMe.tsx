import { Box, Flex, Text } from "@radix-ui/themes";
import Link from "./Link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  { id: 1, name: "Github", icon: FaGithub, url: "https://github.com/pranay-dutta" },
  { id: 2, name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/pranay-dutta" },
];

const abouts = [
  "My interests lie in frontend development, data structures & algorithms, and solving real world problems.",
  "I wrote my first line of code in 2022 and have spent my college years learning various tools, technologies, and DSA. I will be graduating in 2025 with a Bachelor's degree in Computer Applications.",
];

const About = () => {
  return (
    <Flex direction="column" gap="4">
      {abouts.map((about, index) => (
        <Text size="2" className="text-neutral-400 !leading-7" key={index}>
          {about}
        </Text>
      ))}
      <Flex align="center" gap="2" className="text-neutral-400 !leading-loose">
        You can find me on
        {links.map((link, index) => (
          <Link className="flex items-center" href={link.url} key={link.id}>
            <link.icon className="inline-block" />{" "}
            {link.name}{++index < links.length && ", "}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default About;
