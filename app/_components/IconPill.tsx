import { Flex, Text } from "@radix-ui/themes";
import React from "react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  content: string;
}

const IconPill = ({ icon: Icon, content }: Props) => {
  return (
    <Flex
      align="center"
      gap="2"
      className="text-xs opacity-70 hover:opacity-100 rounded-full cursor-pointer gap-2 px-3 py-1 border border-neutral-600"
    >
      <Icon size={14} />
      <Text>{content}</Text>
    </Flex>
  );
};

export default IconPill;
