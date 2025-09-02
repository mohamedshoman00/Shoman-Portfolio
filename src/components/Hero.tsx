import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Code, Sparkles } from 'lucide-react';
import resume from '../assets/resume.pdf'; // عدّل المسار حسب مكان الملف

const Hero: React.FC = () => {
  const [typedText, setTypedText] = React.useState('');
 const roles = [
  'Frontend Developer',
  'React & Next.js Specialist',
  'UI/UX Designer',
  'Responsive Web Design Expert',
  'Educational Platform Builder'
];
  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentRole = roles[currentRoleIndex];

    if (typedText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setTypedText(currentRole.slice(0, typedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setTypedText('');
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentRoleIndex, roles]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="flex items-center justify-center min-h-screen pt-16">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="flex items-center justify-center w-32 h-32 mx-auto mb-6 text-4xl font-bold text-white rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-purple-600"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >

              MS
            </motion.div>
          </motion.div>

          <motion.h1
            className="mb-6 text-5xl font-bold text-transparent md:text-7xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Mohamed Shoman
          </motion.h1>

          <motion.p
            className="flex items-center justify-center h-8 mb-2 text-xl text-gray-600 md:text-2xl dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.span
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
            >
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-blue-600"
              >
                |
              </motion.span>
            </motion.span>
          </motion.p>

          <motion.p
            className="max-w-2xl mx-auto mb-8 text-lg text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Crafting modern, responsive, and user-friendly web applications using React, Next.js, and Tailwind CSS. Passionate about clean code, intuitive UI/UX, accessibility, and building scalable educational platforms.
          </motion.p>

          <motion.div
            className="flex justify-center mb-12 space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            {[
              { href: "https://github.com/mohamedshoman00", icon: Github },
              { href: "https://www.linkedin.com/in/mohamedshoman00", icon: Linkedin },
              { href: "mailto:mohamedshoman242@gmail.com", icon: Mail }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className="p-3 transition-colors duration-200 bg-gray-100 rounded-full dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
              >
                <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className="flex items-center px-8 py-3 space-x-2 text-white transition-all duration-200 transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:-translate-y-1"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore My Work</span>
            </motion.button>
            <motion.a
              href={resume}          // الرابط دلوقتي متغير JS
              target="_blank"
              download
              className="flex items-center px-6 py-3 space-x-2 text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className="text-gray-400 transition-colors hover:text-blue-600"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.2 }}
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;