import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [headingRef, headingInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "Daily Weather",
      description:
        "Real-time weather application with detailed forecasts and interactive maps",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tech: ["React", "WeatherMap API", "Tailwind CSS"],
      github: "https://github.com/aliarshad46515/Daily-Weather",
      live: "https://daily-weather-omega.vercel.app/",
    },
    {
      title: "Solaris",
      description:
        "E-commerce platform for solar panels with advanced filtering and order management",
      image:
        "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tech: ["Java", "MySQL"],
      github: "https://github.com/aliarshad46515/Solaris",
      live: "#",
    },
    {
      title: "Chatbot",
      description:
        "Intelligent chatbot powered by multiple AI models for enhanced conversations",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tech: ["React", "Gemini API", "GPT API", "Node.js"],
      github: "https://github.com/aliarshad46515/Chatbot",
      live: "https://chatbot-flame-eight-52.vercel.app/",
    },
    {
      title: "Daily Store",
      description:
        "Modern e-commerce store with real-time inventory and secure payments",
      image:
        "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Bus Reservation System",
      description: "A comprehensive bus reservation system built with C++",
      image:
        "https://images.pexels.com/photos/2402648/pexels-photo-2402648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tech: ["C++"],
      github: "#",
      live: "#",
    },
    {
      title: "Vehicle Parking System",
      description: "An automated parking management system developed in C++",
      image:
        "https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tech: ["C++"],
      github: "#",
      live: "#",
    },
    {
      title: "Hotel Management System",
      description:
        "A complete hotel management solution with booking and inventory",
      image:
        "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tech: ["C++"],
      github: "#",
      live: "#",
    },
    {
      title: "E-commerce Store",
      description: "Basic E-commerce stores front page design",
      image:
        "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tech: ["React", "JavaScript"],
      github: "https://github.com/aliarshad46515/Ecommerce-Store-Frontend",
      live: "https://ecommerce-store-frontend-blue.vercel.app/",
    },
    {
      title: "To-Do List",
      description: "Task management application with user authentication",
      image:
        "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Snake Game",
      description: "Classic snake game implemented in Assembly language",
      image:
        "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tech: ["Assembly Language & Arduino UNO"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-[#FF7F50] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const [projectRef, projectInView] = useInView({
              threshold: 0.1,
              triggerOnce: true,
            });
            return (
              <motion.div
                key={project.title}
                ref={projectRef}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  projectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#FF7F50] transition-colors"
                    >
                      <FaGithub size={24} />
                    </a>
                    {project.live != "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#FF7F50] transition-colors"
                      >
                        <FaExternalLinkAlt size={24} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
