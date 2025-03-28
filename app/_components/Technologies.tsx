import { Flex, Text } from "@radix-ui/themes";
import {
  SiJavascript,
  SiTypescript,
  SiPrisma,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiChakraui,
  SiMui,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { IconType } from "react-icons";
import { GrReactjs } from "react-icons/gr";

const Technologies = () => {
  return (
    <Flex align="center" gap="3" wrap="wrap">
      {technologoies.map(({ icon: Icon, name }) => (
        <Flex
          key={name}
          align="center"
          gap="2"
          className="text-xs opacity-70 hover:opacity-100 rounded-full cursor-pointer gap-2 px-3 py-1 border border-neutral-600"
        >
          <Icon size={14} />
          <Text>{name}</Text>
        </Flex>
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
