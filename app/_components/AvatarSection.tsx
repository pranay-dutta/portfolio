import { Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { FaGoogleDrive } from "react-icons/fa";
import React from "react";
import ProfileImg from "../../public/profile.png";
import IconPill from "./IconPill";

const AvatarSection = () => {
  return (
    <Flex align="center" gap="4">
      <Image width={100} src={ProfileImg} alt="profile image" priority />
      <Flex direction="column" gap="1">
        <Heading size="5" weight="medium">
          Pranay Dutta
        </Heading>
        <Text className="text-neutral-400" size="2">
          Frontend Developer
        </Text>
        <Link className="font-medium mt-1 hover:scale-105 transition-all" target="_blank" href="https://google.com">
          <IconPill content="View Resume" icon={FaGoogleDrive} isLinked={true}/>
        </Link>
      </Flex>
    </Flex>
  );
};

export default AvatarSection;
