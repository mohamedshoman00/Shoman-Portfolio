import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, Coffee, Clock, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: "4+", label: "Years Experience", icon: <Clock className="w-5 h-5" /> },
    { number: "50+", label: "Projects Completed", icon: <Target className="w-5 h-5" /> },
    { number: "15+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "1000+", label: "Cups of Coffee", icon: <Coffee className="w-5 h-5" /> }
  ];

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following best practices."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing interfaces with attention to user experience."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and cross-browser compatibility."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Staying updated with latest technologies and implementing creative solutions."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I'm a passionate frontend developer with over 4 years of experience creating 
            exceptional digital experiences. I love turning complex problems into simple, 
            beautiful, and intuitive solutions.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <motion.div 
                className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div 
                className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5, type: "spring" }}
              >
                {stat.number}
              </motion.div>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              My Journey
            </motion.h3>
            <motion.div 
              className="space-y-4 text-gray-600 dark:text-gray-300"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p variants={itemVariants}>
                I discovered my passion for web development during college while building my first 
                website. What started as curiosity quickly became a career I love. I've since worked 
                with startups and established companies, helping them bring their digital visions to life.
              </motion.p>
              <motion.p variants={itemVariants}>
                I specialize in React, TypeScript, and modern CSS frameworks, but I'm always eager 
                to learn new technologies and stay updated with industry trends. I believe in writing 
                code that's not just functional, but also maintainable and scalable.
              </motion.p>
              <motion.p variants={itemVariants}>
                When I'm not coding, you can find me contributing to open-source projects, writing 
                technical blog posts, or exploring the latest design trends and development tools.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="text-blue-600 dark:text-blue-400 mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {highlight.icon}
                </motion.div>
                <h4 className="font-semibold mb-2">{highlight.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Experience & Education
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4 className="font-semibold text-lg mb-4 text-blue-600 dark:text-blue-400">Experience</h4>
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="border-l-2 border-blue-200 dark:border-blue-800 pl-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h5 className="font-semibold">Senior Frontend Developer</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">TechCorp • 2022 - Present</p>
                  <p className="text-sm mt-2">Leading frontend development for e-commerce platform serving 1M+ users</p>
                </motion.div>
                <motion.div 
                  className="border-l-2 border-blue-200 dark:border-blue-800 pl-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h5 className="font-semibold">Frontend Developer</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">StartupXYZ • 2020 - 2022</p>
                  <p className="text-sm mt-2">Built responsive web applications using React and modern CSS frameworks</p>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h4 className="font-semibold text-lg mb-4 text-blue-600 dark:text-blue-400">Education</h4>
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="border-l-2 border-blue-200 dark:border-blue-800 pl-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h5 className="font-semibold">B.S. Computer Science</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">University of Technology • 2016 - 2020</p>
                  <p className="text-sm mt-2">Focused on web technologies, algorithms, and software engineering</p>
                </motion.div>
                <motion.div 
                  className="border-l-2 border-blue-200 dark:border-blue-800 pl-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h5 className="font-semibold">Certifications</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Various Online Platforms</p>
                  <p className="text-sm mt-2">AWS Certified, Google Analytics, Advanced React Patterns</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;