import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const LegacyPortfolioSection = () => {
  return (
    <Link href="https://v1.pranaydutta.me" target="_blank">
      <Flex
        display="inline-flex"
        className="hover:text-yellow-200 hover:opacity-100 transition-all delay-50 opacity-10 cursor-pointer mt-5 gap-2 items-center justify-end underline underline-offset-4"
      >
        <Text size="2" weight="medium">
          Legacy portfolio v1.0
        </Text>
        <FiExternalLink />
      </Flex>
    </Link>
  );
};

export default LegacyPortfolioSection;
