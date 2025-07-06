import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#FF7F50] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
            <p className="text-gray-600 leading-relaxed">
              I am an emerging full-stack developer with a strong passion for
              crafting dynamic and responsive web applications. With a solid
              foundation in both front-end and back-end technologies, I strive
              to create seamless user experiences and efficient solutions. My
              journey includes diverse projects ranging from innovative web
              applications to intricate system designs, each contributing to my
              continuous learning and improvement. As I advance in my career, I
              am eager to tackle new challenges and contribute to impactful
              projects.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-semibold mb-2">Education</h4>
                <p className="text-gray-600">Computer Science Graduate</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h4 className="font-semibold mb-2">Experience</h4>
                <p className="text-gray-600">2+ Years Development</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Developer workspace"
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
