'use client';
import Image from 'next/image';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Ghanshyam Singh",
      role: "Founder",
      image: "/assets/team/cmo-2.jpg", // Add a placeholder image
      description: "Passionate developer with a knack for problem-solving.",
    },
    /*
    {
      name: "Ghanshyam Singh",
      role: "Chief Technical Officer (CTO)",
      image: "/assets/team/cto.jpg",
      description: "Tech enthusiast leading product development and strategy.",
    },
    {
      name: "Ghanshyam Singh",
      role: "Marketing Head",
      image: "/assets/team/cmo.jpg",
      description: "Creative marketer building brand presence and engagement.",
    },
    {
      name: "Ghanshyam Singh",
      role: "Frontend Developer",
      image: "/assets/team/frontend.jpg",
      description: "Designs and develops stunning user interfaces.",
    },
    {
      name: "Ghanshyam Singh",
      role: "Backend Developer",
      image: "/assets/team/backend.jpg",
      description: "Builds scalable and robust backend systems.",
    },
    
    {
      name: "Ghanshyam Singh",
      role: "DevOps Engineer",
      image: "/assets/team/devops.jpg",
      description: "Ensures seamless deployment and infrastructure management.",
    },
    
*/

  {
      name: "Ghanshyam Singh",
      role: "Developer",
      image: "/assets/team/founder.jpg",
      description: "Crafts intuitive and beautiful user experiences.",
    },
    {
      name: "Ghanshyam Singh",
      role: "Marketing Manager",
      image: "/assets/team/cmo.jpg",
      description: "Leads innovative campaigns to drive engagement.",
    },
      ];
  /*
    {
      name: "Ghanshyam Singh",
      role: "",
      image: "/assets/team/marketing.jpg",
      description: "Leads innovative campaigns to drive engagement.",
    },
    {
      name: "Ghanshyam Singh",
      role: "SEO Specialist",
      image: "/assets/team/seo.jpg",
      description: "Optimizes online presence for maximum visibility.",
    }, */

  return (
    <section id="team" className="py-20 bg-[rgb(223,222,222)] bg-[url('/assets/background.png')] bg-cover dark:bg-black dark:bg-none text-black dark:text-white transition-all duration-300 text-center">
      <h2 className="text-4xl font-bold mb-12 text-black dark:text-white">
        Meet Our Team
      </h2>

      <div className="grid gap-10 px-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white dark:bg-zinc-900 rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-300">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-500">
              <Image
                src={member.image}
                alt={member.name}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white">{member.name}</h3>
            <p className="text-blue-500 font-medium">{member.role}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
