import { Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import ProfileImg from "../public/profile.png";

export default function Home() {
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
          Google
        </Link>
      </Flex>
    </Flex>
  );
}
