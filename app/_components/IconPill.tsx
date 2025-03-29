import { Flex, Text } from "@radix-ui/themes";
import React from "react";
import { IconType } from "react-icons";
import classNames from "classnames";

interface Props {
  icon: IconType;
  content: string;
  isLinked: boolean;
}

const IconPill = ({ icon: Icon, content, isLinked }: Props) => {
  return (
    <Flex
      align="center"
      gap="2"
      className={classNames({
        "text-xs rounded-full cursor-pointer gap-2 px-3 py-1 border border-neutral-600": true,
        "opacity-100": isLinked,
        "opacity-70 hover:opacity-100": !isLinked,
      })}
    >
      <Icon size={isLinked ? 12 : 14 } />
      <Text>{content}</Text>
    </Flex>
  );
};

export default IconPill;
