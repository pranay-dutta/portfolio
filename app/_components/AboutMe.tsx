import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
const links = [
  { name: "Github", url: "https://github.com/pranay-dutta" },
  { name: "LinkedIn", url: "https://linkedin.com/in/pranay-dutta" },
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
      <Text size="2" className="text-neutral-400 !leading-loose">
        you can find me on{" "}
        {links.map((link, index) => (
          <Text className="text-neutral-300 text-md" key={index}>
            <Link href={link.url} target="_blank">
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
