
import profile from "../assets/Me.jpg";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col gap-6 p-4 sm:flex-row sm:p-6">
      {/* Profile Card */}
      <div className="flex flex-1 flex-col gap-6 rounded-2xl bg-[hsl(58,3.7%,13.1%)] p-6">
        <div className="flex  w-fit sm:w-fit md:w-fit items-center gap-6 sm:flex-row">
          {/* Profile Image */}
          <div className="h-48 w-36 shrink-0 sm:h-52 sm:w-40">
            <img
              src={profile}
              alt="Aryan Thakur"
              className="h-full w-full rounded-full object-cover shadow-lg"
            />
          </div>

          {/* Profile Info */}
          <div className="text-center sm:text-left">
            <h1 className="text-5xl font-bold  text-[#f7f7f6] sm:text-6xl">
              ARYAN THAKUR
            </h1>
            <p className="mt-2 text-[hsla(52,97.3%,96.2%,0.8)] text-lg">
              A Full Stack Web Developer
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-[hsla(52,97.3%,96.2%,0.7)] sm:max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt
          quasi harum! Officia accusantium saepe illum delectus facilis quidem
          est! Nostrum praesentium illo ad ratione deserunt perferendis,
          corrupti repudiandae asperiores.
        </p>
      </div>

      {/* Auth Buttons Card */}
      <div className="flex  w-fit h-fit gap-4 rounded-2xl bg-[hsl(58,3.7%,13.1%)] p-6 sm:w-64">
        <Link to="https://github.com/AryanT1" target="_blank" >
          <div className="  w-fit flex justify-center items-center rounded-3xl bg-white/10 px-3 py-3 text-white transition-all hover:bg-white/20">
          <FaGithub/> <span className="ml-2">github</span>
          </div>
        </Link>
        <Link to="https://www.linkedin.com/in/aryannthakur/"  target="_blank">
          <div className="flex  w-fit justify-center items-center rounded-3xl bg-white/20 px-3 py-3 text-white transition-all hover:bg-white/30">
          <FaLinkedin/> <span className="ml-2">Linkedin</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
