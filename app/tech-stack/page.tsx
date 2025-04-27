// components/TechStackSlider.tsx
import Image from "next/image";

const techStack = [
    { name: "c++", src: "/assets/tech/c.png" },
    { name: "Python", src: "/assets/tech/python.png" },
  { name: "React", src: "/assets/tech/react.png" },
  { name: "Node.js", src: "/assets/tech/node.png" },
  { name: "Next.js", src: "/assets/tech/nextjs.png" },
  { name: "Docker", src: "/assets/tech/docker.png" },
  { name: "Javascript", src: "/assets/tech/js.png" },
  { name: "Typescript", src: "/assets/tech/typescript.png" },
  { name: "Firebase", src: "/assets/tech/firebase.png" },
  { name: "Github", src: "/assets/tech/github.png" },
  { name: "HTML", src: "/assets/tech/html-5.png" },
  { name: "JAVA", src: "/assets/tech/java.png" },
  { name: "Database", src: "/assets/tech/database.png" },
  { name: "css", src: "/assets/tech/css-3.png" },
  
  { name: "web3", src: "/assets/tech/web3.png" },
  // add as many as you want
];

export default function TechStackSlider() {
  return (
    <div className="overflow-hidden bg-[rgb(223,222,222)] bg-[url('/assets/background.png')] bg-cover dark:bg-black dark:bg-none text-black dark:text-white transition-all duration-300 py-10">
         <h2 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-12">
        💻 Our Tech Stack
      </h2>
      {[...Array(3)].map((_, idx) => (
        <div
          key={idx}
          className="flex items-center animate-marquee whitespace-nowrap mb-6"
          style={{ animationDirection: idx % 2 === 0 ? "normal" : "reverse" }}
        >
          {techStack.map((tech, index) => (
            <div key={index} className="mx-6 flex-shrink-0">
              <Image
                src={tech.src}
                alt={tech.name}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {techStack.map((tech, index) => (
            <div key={`dup-${index}`} className="mx-6 flex-shrink-0">
              <Image
                src={tech.src}
                alt={tech.name}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
