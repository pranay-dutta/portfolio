import { Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";
import ProfileImg from "../../public/profile.jpeg";
import { IoLocationOutline } from "react-icons/io5";
import { BsTwitter } from "react-icons/bs";

export const socials = [
  { id: 1, name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/pranay-dutta" },
  { id: 2, name: "Github", icon: FaGithub, url: "https://github.com/pranay-dutta" },
  { id: 3, name: "Twitter", icon: BsTwitter, url: "https://twitter.com/Pranay_FTW" },
];

const AvatarSection = () => {
  return (
    <Flex align="center" gap="3">
      {/* Profile Image */}
      <Image className="rounded-full w-26 h-26" priority src={ProfileImg} alt="Pranay Dutta" />

      {/* My social links and information */}
      <Flex direction="column" gap="2">
        <Heading size="5" weight="medium">
          <Text>{"Hey, I'm Pranay Dutta"}</Text>
        </Heading>

        {/* My Location */}
        <Flex align="center" gap="1" className="text-neutral-400" mb="1">
          <IoLocationOutline className="inline-block" />
          <Text size="2">West Bengal, India</Text>
        </Flex>

        {/* My Social Links */}
        <Flex align="center" gap="2">
          {socials.map(({ id, name, icon: Icon, url }, index) => (
            <Link key={id} href={url} target="_blank" rel="noopener noreferrer">
              <Flex
                align="center"
                className="hover:text-orange-200 border-b border-dashed border-gray-700"
                gap="2"
              >
                <Icon className="size-3 sm:size-3.5 " />
                <Text size="1">{name}</Text>
                {index != socials.length - 1 && <Text size="1">/</Text>}
              </Flex>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AvatarSection;
