import { FaDownload, FaEye } from "react-icons/fa";

// Assuming the PDF is in src/assets or public
import resumePDF from "../assets/Resume.pdf"; // Adjust path if in public (see notes)

const DownloadResume = () => {
  return (
    <div className="rounded-2xl w-fit  bg-[hsl(58,3.7%,13.1%)] p-6  text-center">
      <h2 className="text-3xl font-bold text-[#f7f7f6] mb-4">Download Resume</h2>
      <a
        href={resumePDF}
        download="Aryan_Thakur_Resume.pdf"
        className="inline-flex  mb-5 items-center gap-2 rounded-3xl bg-white/10 px-6 py-3 text-[hsla(52,97.3%,96.2%,0.8)] font-medium transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/30 group"
        aria-label="Download Aryan Thakur's resume as a PDF"
      >
        <FaDownload className="text-lg group-hover:animate-pulse" />
        Download Resume
      </a>
      <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex ml-1 items-center gap-2 rounded-3xl bg-white/10 px-6 py-3 text-[hsla(52,97.3%,96.2%,0.8)] font-medium transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/30 group"
          aria-label="View Aryan Thakur's resume in a new tab"
        >
          <FaEye className="text-lg group-hover:animate-scale" />
          View Resume
        </a>
    </div>
  );
};

export default DownloadResume;