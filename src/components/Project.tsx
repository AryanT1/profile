import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectProps {
  directionToGit: string;
  viewImg: string;
  directionToSite?: string;
}

const Project = ({
  directionToGit,
  viewImg,
  directionToSite,
  
}: ProjectProps) => {
  return (
    <div className="group relative w-64 lg:w-72 rounded-2xl bg-[hsl(58,3.7%,13.1%)] p-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-white/20 hover:shadow-xl">
     

      {/* Image */}
      <div className="relative h-40 lg:h-44 w-full mb-4 overflow-hidden rounded-xl">
        <img
          src={viewImg}
          alt="image"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[hsl(58,3.7%,13.1%)]/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-3">
        <a
          href={directionToGit}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-3xl bg-white/10 px-4 py-2 text-sm font-medium text-[hsla(52,97.3%,96.2%,0.8)] transition-all duration-200 hover:bg-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30"
          aria-label={`View on GitHub`}
        >
          <FaGithub className="text-lg" />
          GitHub
        </a>

        {directionToSite && (
          <a
            href={directionToSite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-3xl bg-white/10 px-4 py-2 text-sm font-medium text-[hsla(52,97.3%,96.2%,0.8)] transition-all duration-200 hover:bg-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label={`View website`}
          >
            <FaExternalLinkAlt className="text-lg" />
           WEBSITE
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;