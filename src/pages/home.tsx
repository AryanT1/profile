import profile from "../assets/itsme.png";
import clan from "../assets/Clan.png";
import show from "../assets/Show.png";
import {
  FaCss3,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiPostman } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import Project from "../components/Project";
import { FaSquareXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Profile and Social Section */}
      <div className="flex flex-col gap-6 p-4 sm:p-6 md:flex-row md:items-start">
        {/* Profile Card */}
        <div className="flex-1 rounded-2xl bg-[hsl(58,3.7%,13.1%)] p-6 transition-all duration-300 hover:shadow-lg">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            {/* Profile Image */}
            <div className="h-48 w-36 sm:h-52 sm:w-40 shrink-0">
              <img
                src={profile}
                alt="Aryan Thakur"
                className="h-full w-full rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Profile Info */}
            <div className="text-center sm:text-left">
              <h1 className="text-4xl font-bold text-[#f7f7f6] sm:text-5xl tracking-tight">
                Aryan Thakur
              </h1>
              <p className="mt-2 text-lg text-[hsla(52,97.3%,96.2%,0.8)]">
                Full Stack Web Developer
              </p>
              <p className="mt-4 max-w-md text-[hsla(52,97.3%,96.2%,0.7)] leading-relaxed">
                I spend my days wrestling with pixels and servers, secretly
                convinced every project is a Rube Goldberg machine. (The
                internet is just chaos with better documentation.)
              </p>
            </div>
          </div>
        </div>

        {/* Social Buttons Card */}
        <div className="flex shrink-0 gap-11 rounded-2xl bg-[hsl(58,3.7%,13.1%)] p-6 sm:flex-col sm:w-48 transition-all duration-300 hover:shadow-lg">
          <a
            href="https://github.com/AryanT1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-3xl bg-white/10 px-4 py-2 text-white transition-all hover:bg-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Visit Aryan Thakur's GitHub"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aryannthakur/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-3xl bg-white/10 px-4 py-2 text-white transition-all hover:bg-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Visit Aryan Thakur's LinkedIn"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://x.com/Aryann_0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-3xl bg-white/10 px-4 py-2 text-white transition-all hover:bg-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Visit Aryan Thakur's X"
          >
            <FaSquareXTwitter className="text-xl" />
            <span>X.com</span>
          </a>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="relative my-8">
        <svg
          className="w-full h-16 sm:h-24"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="hsl(58,3.7%,13.1%)"
        >
          <path
            d="M0,50 C360,100 720,0 1080,50 C1440,100 1440,50 1440,50 L1440,100 L0,100 Z"
            fill="hsl(58,3.7%,13.1%)"
          />
        </svg>
      </div>

      {/* Skills and Projects Section */}
      <div className="flex flex-col gap-6 p-4 sm:p-6 md:flex-row">
        {/* Skills Card */}
        <div className="rounded-2xl bg-[hsl(58,3.7%,13.1%)] p-6 transition-all duration-300 hover:shadow-lg md:w-1/2">
          <h2 className="text-3xl font-bold text-[#f7f7f6] mb-6">Skills</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { icon: <FaReact />, name: "React" },
              { icon: <FaNodeJs />, name: "Node.js" },
              { icon: <SiExpress />, name: "Express.js" },
              { icon: <IoLogoJavascript />, name: "JavaScript" },
              { icon: <BiLogoTypescript />, name: "TypeScript" },
              { icon: <FaCss3 />, name: "CSS" },
              { icon: <DiMongodb />, name: "MongoDB" },
              { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
              { icon: <SiPostman />, name: "Postman" },
              { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-3xl bg-white/10 px-4 py-3 text-white transition-all hover:bg-white/20 hover:scale-105"
              >
                <span className="text-xl">{skill.icon}</span>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Card */}
        <div className="rounded-2xl bg-[hsl(58,3.7%,13.1%)] p-6 xl:w-1/2">
          <h2 className="text-3xl font-bold text-[#f7f7f6] mb-6">Projects</h2>
          <div className="flex flex-col items-center gap-4 xl:grid xl:grid-cols-2 ">
            <div className="">
              <Project
                directionToGit="https://github.com/AryanT1/ems"
                viewImg={clan}
                directionToSite="https://clancraft.vercel.app/"
              />
            </div>
            <div className="">
              <Project
                directionToGit="https://github.com/AryanT1/Show"
                viewImg={show}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
