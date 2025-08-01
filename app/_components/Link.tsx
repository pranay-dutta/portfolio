import NextLink from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  className?: string;
  children: ReactNode;
}
const Link = ({ href, children, className }: Props) => {
  return (
    <NextLink
      className={"text-neutral-300 hover:text-pink-200 gap-1 " + className}
      target="_blank"
      href={href}
    >
      {children}
    </NextLink>
  );
};

export default Link;
