import { Flex } from "@radix-ui/themes";
import { IconType } from "react-icons";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiBootstrap,
  SiChakraui,
  SiExpress,
  SiJavascript,
  SiMui,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import IconPill from "./IconPill";

const Technologies = () => {
  return (
    <Flex align="center" gap="3" wrap="wrap">
      {technologoies.map(({ icon, name }) => (
        <IconPill key={name} icon={icon} content={name} isLinked={false} />
      ))}
    </Flex>
  );
};
const technologoies: { icon: IconType; name: string }[] = [
  { icon: SiJavascript, name: "Javascript" },
  { icon: SiTypescript, name: "Typescript" },
  { icon: GrReactjs, name: "React.js" },
  { icon: SiPrisma, name: "Prisma" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiBootstrap, name: "Bootstrap" },
  { icon: SiChakraui, name: "Chakra UI" },
  { icon: SiMui, name: "Material UI" },
  { icon: RiNextjsFill, name: "Next.js" },
  { icon: BiLogoPostgresql, name: "Postgres" },
];
export default Technologies;
