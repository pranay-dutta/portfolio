import { Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProfileImg from "../../public/profile.png";

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
        <Link target="_blank" href="https://google.com">
          Resume
        </Link>
      </Flex>
    </Flex>
  );
};

export default AvatarSection;
