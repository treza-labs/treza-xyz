import Image from "next/image";

import TeamImg01 from "@/public/images/profile2.jpg";
import TeamImg02 from "@/public/images/guo.jpg";
import JeffImg from "@/public/images/jeff.jpeg";
import BrandonImg from "@/public/images/brandon.jpeg";
import AlanImg from "@/public/images/alan.jpeg";
import LinkedInIcon from "@/public/images/linkedin.svg";
import TelegramIcon from "@/public/images/telegram.svg";
import PlaceholderAvatar from "./placeholder-avatar";
// import TeamImg05 from "@/public/images/team-05.jpg";
// import TeamImg06 from "@/public/images/team-06.jpg";
// import TeamImg07 from "@/public/images/team-07.jpg";
// import TeamImg08 from "@/public/images/team-08.jpg";
// import TeamImg09 from "@/public/images/team-09.jpg";
// import TeamImg10 from "@/public/images/team-10.jpg";
// import TeamImg11 from "@/public/images/team-11.jpg";
// import TeamImg12 from "@/public/images/team-12.jpg";

const teamMembers = [
  {
    image: TeamImg01,
    name: "Alex",
    role: "Co Founder, Developer",
    description: "Former Marvel Studios and AOL engineer leading Treza's secure compute platform for autonomous agents.",
    link: "https://www.linkedin.com/in/alexdaro/",
  },
  {
    image: TeamImg02,
    name: "QueensPawn",
    role: "Co Founder, Business Development",
    description: "QueensPawn is a 8-year crypto veteran with a background in sales and product marketing.",
    link: "https://t.me/queenspawn10",
  },
  {
    image: JeffImg,
    name: "Jeff",
    role: "Senior Engineer",
    description: "Jeff is a senior engineer with extensive experience at Google and Goldman Sachs, bringing deep expertise in large-scale systems and financial technology.",
    link: "https://www.linkedin.com/in/jeffcrans/",
  },
  {
    image: null, // Use placeholder avatar
    name: "Lukas",
    role: "AI Engineer",
    description: "Lukas is a senior engineer focused on privacy-preserving AI systems that execute sensitive tasks with cryptographic guarantees.",
    link: "https://t.me/itsLukasx",
  },  
  {
    image: BrandonImg,
    name: "Brandon",
    role: "Engineer",
    description: "Brandon brings extensive experience with Rust and Solidity development, specializing in smart contracts and blockchain infrastructure.",
    link: "https://github.com/btorressz",
  },
  {
    image: AlanImg,
    name: "Alan",
    role: "Director of Marketing",
    description: "Alan is a marketing specialist with experience at Binance, bringing deep expertise in cryptocurrency and blockchain marketing strategies.",
    link: "https://www.linkedin.com/in/alan-d-274520210/",
  },
  {
    image: null, // Use placeholder avatar
    name: "Nicholas",
    role: "Advisor",
    description: "Nicholas is a cloud solutions architect with extensive experience at Apple, Fox, and Verizon, bringing deep expertise in enterprise cloud infrastructure.",
    link: "https://www.linkedin.com/in/nicholasstokes/",
  },
  // {
  //   image: null, // Use placeholder avatar
  //   name: "Marcus Thompson",
  //   role: "Community Manager",
  //   description: "Marcus builds and nurtures our community, ensuring every member feels heard and valued in the Treza ecosystem.",
  //   link: "",
  // },
  // add new team members here
  // {
  //   image: TeamImg03,
  //   name: "Marie Koniuszek",
  //   role: "Customer Success Lead",
  // },
  // {
  //   image: TeamImg04,
  //   name: "Alyssa Chuzeville",
  //   role: "Head of Product",
  // },
  // {
  //   image: TeamImg05,
  //   name: "Dominik Prasad",
  //   role: "Senior Researcher",
  // },
  // {
  //   image: TeamImg06,
  //   name: "Darya Semenova",
  //   role: "Software Engineer",
  // },
  // {
  //   image: TeamImg07,
  //   name: "Mary Pullgat",
  //   role: "Software Engineer",
  // },
  // {
  //   image: TeamImg08,
  //   name: "Quentin Renvoye",
  //   role: "Senior Marketing Manager",
  // },
  // {
  //   image: TeamImg09,
  //   name: "Justin Jackson",
  //   role: "Content & SEO Lead",
  // },
  // {
  //   image: TeamImg10,
  //   name: "Alice Nguyen",
  //   role: "Engineering Manager",
  // },
  // {
  //   image: TeamImg11,
  //   name: "Duyk Hermann",
  //   role: "Product Designer",
  // },
  // {
  //   image: TeamImg12,
  //   name: "Kevon Cheung",
  //   role: "Creative Director",
  // },
];

// Helper function to determine icon based on link URL
const getSocialIcon = (url: string) => {
  if (url.includes('linkedin.com')) {
    return LinkedInIcon;
  } else if (url.includes('t.me') || url.includes('telegram')) {
    return TelegramIcon;
  } else if (url.includes('github.com')) {
    return 'github'; // We'll handle this as a special case with inline SVG
  }
  return null;
};

export default function Team() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Meet the Team
            </h2>
          </div>
          {/* Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 justify-items-center max-w-5xl mx-auto">
            {teamMembers.map((member, index) => {
              const socialIcon = member.link ? getSocialIcon(member.link) : null;
              
              return (
                <div key={index} className="w-60 md:w-72 flex flex-col h-full">
                  <div className="text-center flex flex-col h-full">
                    <div className="relative mb-4 inline-flex w-20 h-20 mx-auto before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-indigo-500 before:to-gray-950 before:opacity-15">
                      {member.image ? (
                        <Image
                          className="rounded-full object-cover w-full h-full object-[center_30%] filter grayscale"
                          src={member.image}
                          width={80}
                          height={80}
                          alt={`Team member ${member.name}`}
                        />
                      ) : (
                        <PlaceholderAvatar size={80} className="w-full h-full" />
                      )}
                    </div>
                    <div className="mb-1 font-nacelle text-lg text-gray-200">
                      {member.name}
                    </div>
                    <p className="mb-3 text-sm text-indigo-200/65">{member.role}</p>
                    <p className="mb-4 text-sm text-gray-400 leading-relaxed flex-grow">
                      {member.description}
                    </p>
                    <div className="mt-auto">
                      {socialIcon && member.link && (
                        <a
                          href={member.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                          aria-label={`${member.name}'s social media profile`}
                        >
                          {socialIcon === 'github' ? (
                            <svg
                              className="w-6 h-6 fill-current text-indigo-400 opacity-75 hover:opacity-100 transition-opacity duration-200"
                              viewBox="0 0 32 32"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                            </svg>
                          ) : (
                            <Image
                              src={socialIcon}
                              width={16}
                              height={16}
                              alt="Social media icon"
                              className="opacity-75 hover:opacity-100 transition-opacity duration-200"
                            />
                          )}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
