import { FaEnvelope } from "react-icons/fa";

const WriteToMe = () => {
  // Replace with your actual email address
  const email = "aryanthakur122003@gmail.com.com";
  const gmailComposeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  return (
    <div className="rounded-2xl bg-[hsl(58,3.7%,13.1%)] p-6 text-center">
      <h2 className="text-3xl font-bold text-[#f7f7f6] mb-4">Write to Me</h2>
      <a
        href={gmailComposeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex mb-3 items-center gap-2 rounded-3xl bg-white/10 px-6 py-4 text-[hsla(52,97.3%,96.2%,0.8)] font-medium transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg  group"
        aria-label="Open Gmail to write an email to Aryan Thakur"
      >
        <FaEnvelope className="text-lg  group-hover:animate-scale" />
        Send an Email
      </a>
    </div>
  );
};

export default WriteToMe;