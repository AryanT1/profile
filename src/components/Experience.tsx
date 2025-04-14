interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    responsibilities: string[];
  }
  
  interface ExperienceProps {
    experiences: ExperienceItem[];
  }
  
  const Experience = ({ experiences }: ExperienceProps) => {
    return (
      <div className="rounded-2xl sm:w-fit bg-[hsl(58,3.7%,13.1%)] p-6">
        <h2 className="text-3xl font-bold text-[#f7f7f6] mb-6">Experience</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-[hsla(52,97.3%,96.2%,0.3)] md:left-6" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-10 md:pl-12 animate-fade-in  [animation-delay:0.1s] [animation-fill-mode:forwards]"
                style={{ animationDelay: `${0.1 + index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-[hsla(52,97.3%,96.2%,0.8)] md:left-4.5" />
                
                <div className="group hover:-translate-y-1 transition-all duration-300  rounded-xl p-4">
                  {/* Role Badge */}
                  <h3 className="inline-block  text-xl font-semibold text-[#f7f7f6]  py-1  mb-2 transition-all duration-300 ">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-[hsla(52,97.3%,96.2%,0.8)]">
                    {exp.company}
                  </p>
                  <p className="text-sm text-[hsla(52,97.3%,96.2%,0.7)] mb-3">
                    {exp.period}
                  </p>
                  <ul className="list-disc pl-5 text-[hsla(52,97.3%,96.2%,0.7)]">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;