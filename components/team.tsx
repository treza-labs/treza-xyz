import Image from "next/image";

import TeamImg01 from "@/public/images/team-00.jpg";
import TeamImg02 from "@/public/images/guo.jpg";
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
    name: "Alex Daro",
    role: "Co Founder, Developer",
    description: "Alex is a seasoned developer with a background in blockchain, media and entertainment.",
    link: "https://www.linkedin.com/in/alexdaro/",
  },
  {
    image: TeamImg02,
    name: "QueensPawn",
    role: "Co Founder, Head of Sales",
    description: "QueensPawn is a 8-year crypto veteran with a background in sales and product marketing.",
    link: "https://t.me/queenspawn10",
  },
  {
    image: null, // Use placeholder avatar
    name: "Sarah Chen",
    role: "Senior Full Stack Developer",
    description: "Sarah specializes in modern web technologies and smart contract development, bringing innovative solutions to complex problems.",
    link: "",
  },
  {
    image: null, // Use placeholder avatar
    name: "Marcus Thompson",
    role: "Community Manager",
    description: "Marcus builds and nurtures our community, ensuring every member feels heard and valued in the Treza ecosystem.",
    link: "",
  },
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
              It's all about the people
            </h2>
          </div>
          {/* Members */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {teamMembers.map((member, index) => {
              const socialIcon = member.link ? getSocialIcon(member.link) : null;
              
              return (
                <div key={index} className="w-60 text-center md:w-72">
                  <div className="relative mb-4 inline-flex w-20 h-20 before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-indigo-500 before:to-gray-950 before:opacity-15">
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
                  <p className="mb-4 text-sm text-gray-400 leading-relaxed">
                    {member.description}
                  </p>
                  {socialIcon && member.link && (
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                      aria-label={`${member.name}'s social media profile`}
                    >
                      <Image
                        src={socialIcon}
                        width={16}
                        height={16}
                        alt="Social media icon"
                        className="opacity-75 hover:opacity-100 transition-opacity duration-200"
                      />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
