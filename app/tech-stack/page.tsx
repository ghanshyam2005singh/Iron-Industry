import Image from "next/image";

const techStack = [
  { name: "C++", src: "/assets/tech/c.png" },
  { name: "Python", src: "/assets/tech/python.png" },
  { name: "React", src: "/assets/tech/react.png" },
  { name: "Node.js", src: "/assets/tech/node.png" },
  { name: "Next.js", src: "/assets/tech/nextjs.png" },
  { name: "Docker", src: "/assets/tech/docker.png" },
  { name: "Javascript", src: "/assets/tech/js.png" },
  { name: "Typescript", src: "/assets/tech/typescript.png" },
  { name: "Firebase", src: "/assets/tech/firebase.png" },
  { name: "Github", src: "/assets/tech/github.jpg" },
  { name: "HTML", src: "/assets/tech/html-5.png" },
  { name: "JAVA", src: "/assets/tech/java.png" },
  { name: "Database", src: "/assets/tech/database.png" },
  { name: "CSS", src: "/assets/tech/css-3.png" },
  { name: "Web3", src: "/assets/tech/web3.png" },
];

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function TechStackSlider() {
  const rows = [shuffle(techStack), shuffle(techStack), shuffle(techStack)];
  const durations = ["20s", "25s", "18s"]; // different speeds

  return (
    <div className="overflow-hidden bg-[rgb(223,222,222)] bg-[url('/assets/background.png')] bg-cover dark:bg-black dark:bg-none text-black dark:text-white transition-all duration-300 py-10">
      <h2 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-12">
        💻 Our Tech Stack
      </h2>
      {rows.map((row, idx) => (
        <div
          key={idx}
          className="flex items-center whitespace-nowrap mb-6 will-change-transform animate-marquee hover:[animation-play-state:paused]"
          style={{
            animationDuration: durations[idx],
            animationDirection: idx % 2 === 0 ? "normal" : "reverse",
          }}
        >
          {[...row, ...row].map((tech, index) => (
            <div key={index} className="mx-4 flex-shrink-0">
              <Image
                src={tech.src}
                alt={tech.name}
                width={64}
                height={64}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
