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
}

const technologies: Technology[] = [
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
  { icon: BiLogoPostgresql, name: "PostgreSQL" },
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
            <IconPill content={tech.name} icon={tech.icon} isLinked={false} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Technologies;
