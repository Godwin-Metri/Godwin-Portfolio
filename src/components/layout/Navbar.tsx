import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const { dark, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          if (scrollPosition >= section.offsetTop) {
            currentSection = item.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 
bg-white/80 dark:bg-gray-900/70 
backdrop-blur-md 
border-b border-gray-200 dark:border-gray-800 
transition-colors duration-300"
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#home" className="text-lg font-semibold tracking-tight">
          Godwin Metri
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>

              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                />
              )}
            </li>
          ))}
        </ul>
        <button onClick={toggleTheme} className="ml-6 flex items-center">
          <motion.div
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              dark ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center text-[10px]"
              style={{ x: dark ? 24 : 0 }}
            >
              {dark ? "🌙" : "🌞"}
            </motion.div>
          </motion.div>
        </button>
      </nav>
    </motion.header>
  );
}

export default NavBar;
