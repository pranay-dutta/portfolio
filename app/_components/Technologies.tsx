import { motion } from "motion/react";
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
interface Technology {
  icon: IconType;
  name: string;
  color: string;
}

const technologies: Technology[] = [
  { icon: SiJavascript, name: "Javascript", color: "yellow" },
  { icon: SiTypescript, name: "Typescript", color: "blue" },
  { icon: GrReactjs, name: "React.js", color: "cyan" },
  { icon: SiPrisma, name: "Prisma", color: "white" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "blue" },
  { icon: SiBootstrap, name: "Bootstrap", color: "purple" },
  { icon: SiExpress, name: "Express.js", color: "green" },
  { icon: SiChakraui, name: "Chakra UI", color: "teal" },
  { icon: SiMui, name: "Material UI", color: "blue" },
  { icon: RiNextjsFill, name: "Next.js", color: "white" },
  { icon: BiLogoPostgresql, name: "PostgreSQL", color: "blue" },
];

const Technologies = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeIn", delay: index * 0.12 }}
          >
            <IconPill content={tech.name} icon={tech.icon} color={tech.color} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Technologies;
