import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all md:col-span-6 md:col-start-4
            "
            >
              <h3 className="text-xl font-bold mb-2">
                NexaChat | AI-Powered Real-Time Chat Application
              </h3>
              <p className="text-gray-400 mb-4">
                NexaChat, a real-time MERN chat app with AI-powered replies,
                media sharing, and secure group messaging.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React.js",
                  "Redux Toolkit",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Socket.io",
                  "JWT",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://nexachat-five.vercel.app"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/shreshth-v/NEXACHAT"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  GitHub Link →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
