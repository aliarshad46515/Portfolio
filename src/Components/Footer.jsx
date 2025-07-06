import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/aliarshad46515" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/aly-arshad-4u" },
    { icon: FaInstagram, url: "https://www.instagram.com/aly_arshad_" },
  ];

  return (
    <footer className="bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-2xl font-bold text-[#FF7F50]">Aly Arshad</div>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FF7F50] transition-colors"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          <div className="text-gray-600 text-sm">
            © {currentYear} Aly Arshad. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
