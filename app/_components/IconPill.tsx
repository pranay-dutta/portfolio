import { Flex, Text } from "@radix-ui/themes";
import React from "react";
import { IconType } from "react-icons";
import classNames from "classnames";

interface Props {
  icon: IconType;
  content: string;
  color: string;
}
const techStyles: Record<string, { text: string; border: string; shadow: string }> = {
  blue: {
    text: "hover:text-blue-300",
    border: "hover:border-blue-400/40",
    shadow: "hover:shadow-blue-500/20",
  },
  yellow: {
    text: "hover:text-yellow-300",
    border: "hover:border-yellow-400/40",
    shadow: "hover:shadow-yellow-500/20",
  },
  cyan: {
    text: "hover:text-cyan-300",
    border: "hover:border-cyan-400/40",
    shadow: "hover:shadow-cyan-500/20",
  },
  white: {
    text: "hover:text-gray-300",
    border: "hover:border-gray-400/40",
    shadow: "hover:shadow-gray-500/20",
  },
  purple: {
    text: "hover:text-purple-300",
    border: "hover:border-purple-400/40",
    shadow: "hover:shadow-purple-500/20",
  },
  green: {
    text: "hover:text-green-300",
    border: "hover:border-green-400/40",
    shadow: "hover:shadow-green-500/20",
  },
  teal: {
    text: "hover:text-teal-300",
    border: "hover:border-teal-400/40",
    shadow: "hover:shadow-teal-500/20",
  },
};

const IconPill = ({ icon: Icon, content, color }: Props) => {
  return (
    <Flex
      align="center"
      gap="2"
      className={classNames({
        "text-xs rounded-md gap-2 px-3 py-1 border shadow-lg border-neutral-700": true,
        "opacity-70 hover:opacity-100 transition-all ease-in-out duration-300": true,
        [techStyles[color].text]: true,
        [techStyles[color].border]: true,
        [techStyles[color].shadow]: true,
      })}
    >
      <Icon size={14} />
      <Text>{content}</Text>
    </Flex>
  );
};

export default IconPill;
