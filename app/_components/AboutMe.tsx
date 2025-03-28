import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
const links = [
  { name: "Github", url: "https://github.com/pranay-dutta" },
  { name: "LinkedIn", url: "https://linkedin.com/in/pranay-dutta" },
];

const abouts = [
  "My Interest lies around frontend development, data structures & algorithms and solving real world problems.",
  "I wrote my first line of code in 2022. I've spent my college years learning how code various tools and technologoies, and dsa. I am graduating in 2025 with a bachelor of computer application degree.",
];

const About = () => {
  return (
    <Flex direction="column" gap="4">
      {abouts.map((about, index) => (
        <Text className="text-neutral-400 text-md" key={index}>
          {about}
        </Text>
      ))}
      <Text className="text-neutral-400">
        you can find me on:{" "}
        {links.map((link, index) => (
          <Text className="text-neutral-300 text-md" key={index}>
            <Link href={link.url}>
              {link.name}
              {index + 1 != links.length && ","}{" "}
            </Link>
          </Text>
        ))}
      </Text>
    </Flex>
  );
};

export default About;
