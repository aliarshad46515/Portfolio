import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import {
  SiFlutter,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiDart,
  SiFirebase,
} from "react-icons/si";

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    {
      name: "Front-End",
      items: [
        { icon: FaHtml5, name: "HTML5" },
        { icon: FaCss3Alt, name: "CSS3" },
        { icon: FaJs, name: "JavaScript" },
        { icon: FaJava, name: "Java" },
        { icon: FaReact, name: "React" },
        { icon: SiTailwindcss, name: "Tailwind" },
        { icon: SiFlutter, name: "Flutter" },
        { icon: SiDart, name: "Dart" },
      ],
    },
    {
      name: "Back-End",
      items: [
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiExpress, name: "Express.js" },
        { icon: SiMongodb, name: "MongoDB" },
        { icon: FaDatabase, name: "SQL" },
        { icon: SiFirebase, name: "Firebase" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-[#FF7F50] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.name}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <skill.icon className="text-4xl text-[#FF7F50]" />
                    <span className="text-sm text-gray-600">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
