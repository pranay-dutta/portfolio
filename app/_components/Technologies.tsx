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
import ScrollVelocity from "../_ui/text-animations/ScrollVelocity/ScrollVelocity";
interface Technology {
  icon: IconType;
  name: string
}

const firstLine: Technology[] = [
  { icon: SiJavascript, name: "Javascript" },
  { icon: SiTypescript, name: "Typescript" },
  { icon: GrReactjs, name: "React.js" },
  { icon: SiPrisma, name: "Prisma" },
  { icon: SiExpress, name: "Express.js" },
];
const secondLine: Technology[] = [
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiBootstrap, name: "Bootstrap" },
  { icon: SiChakraui, name: "Chakra UI" },
  { icon: SiMui, name: "Material UI" },
  { icon: RiNextjsFill, name: "Next.js" },
  { icon: BiLogoPostgresql, name: "Postgres" },
]

const firstLineDiv = <div className="flex gap-2 pe-2">{firstLine.map(({ icon, name }) => <IconPill key={name} icon={icon} content={name} isLinked={false} />)}</div>
const secondLineDiv = <div className="flex gap-2 pe-2">{secondLine.map(({ icon, name }) => <IconPill key={name} icon={icon} content={name} isLinked={false} />)}</div>

const Technologies = () => {
  return (
    <ScrollVelocity childrens={[firstLineDiv, secondLineDiv]} />
  );
};

export default Technologies;
