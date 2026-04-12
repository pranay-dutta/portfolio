import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { ProjectType } from "../types/ProjectType";

const projects: ProjectType[] = [
  {
    id: 0,
    name: "Rflix",
    description:
      "Rflix is a online movie browsing website. This website uses TMDB api to fetch the movies & the tv shows then show their rating, trailer, cast etc.",
    repo: { icon: FaGithub, href: "https://github.com/pranay-dutta/rflix" },
    website: { icon: CiGlobe, href: "https://rflix1.vercel.app/" },
  },
  {
    id: 1,
    name: "Issue Tracker",
    description:
      "A next js powered project uses next-auth for authentication. Where you can create, read, update, delete issues and assign issues to specific user.",
    repo: {
      icon: FaGithub,
      href: "https://github.com/pranay-dutta/issue-tracker",
    },
    website: { icon: CiGlobe, href: "https://issue-tracker-8uhd.vercel.app/" },
  },
  {
    id: 2,
    name: "Gamehive",
    description:
      "A full stack game query application uses Rawg api to fetch the games. Where you can view all games based on platforms and genres.",
    repo: { icon: FaGithub, href: "https://github.com/pranay-dutta/gamehive" },
    website: { icon: CiGlobe, href: "https://gamehive-peach.vercel.app/" },
  },
  {
    id: 3,
    name: "Bindle",
    description:
      "Bindle is a book store application. Where you can view, order and query books. This project also have an admin panel where orders can be managed.",
    repo: { icon: FaGithub, href: "https://github.com/pranay-dutta/bindle" },
    website: { icon: CiGlobe, href: "https://bindle0.vercel.app/" },
  },
];
export default projects;
