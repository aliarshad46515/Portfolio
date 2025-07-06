import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaMouse } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="text-center flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Aly Arshad</h1>
        <p className="text-xl md:text-2xl text-[#FF6B3D] mb-2 ">
          Front-End Developer | React & Flutter Developer | Building Fast &
          Scalable UIs
        </p>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Emerging full stack developer focused on crafting dynamic, responsive
          web applications and mobile application with innovative designs and
          efficient backend solutions.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            className="bg-[#FF7F50] text-white px-6 py-2 rounded-lg hover:bg-[#FF6B3D] transition-colors"
            onClick={toAbout}
          >
            About Me
          </button>
          <a
            href="/AlyArshadResume.pdf"
            download="Aly_Arshad_CV.pdf"
            className="border-2 border-[#FF7F50] text-[#FF7F50] px-6 py-2 rounded-lg hover:bg-[#FF7F50] hover:text-white transition-colors flex items-center justify-center"
          >
            Download CV
          </a>
        </div>
        <div className="mt-12 flex justify-center items-center w-full">
          {" "}
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-400 flex items-center"
            onClick={toAbout}
          >
            <FaMouse className="mr-2" />
            Scroll Down
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
