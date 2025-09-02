import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, Coffee, Clock, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: "2+", label: "Years Experience", icon: <Clock className="w-5 h-5" /> },
    { number: "2+", label: "Projects Completed", icon: <Target className="w-5 h-5" /> }, // Outly + Faster Education
    { number: "5+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> }, // عملاء من مشاريعك التعليمية
    { number: "1000+", label: "Cups of Coffee", icon: <Coffee className="w-5 h-5" /> } // إضافي للمرح 😄
  ];

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean & Maintainable Code",
      description: "Writing readable, maintainable, and scalable code using React, Next.js, and modern frontend practices."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing interfaces with responsive layouts and user-friendly experiences."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, accessibility, and smooth performance across devices."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creative Solutions",
      description: "Implementing practical and innovative solutions while keeping up with the latest web development trends."
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
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="mb-4 text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Frontend Developer with 2+ years of experience building responsive and user-friendly web applications. I focus on clean code, intuitive UI/UX, and practical solutions using React, Next.js, and Tailwind CSS.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 gap-6 mb-16 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 text-center bg-white shadow-lg dark:bg-gray-900 rounded-xl"
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <motion.div
                className="flex justify-center mb-3 text-blue-600 dark:text-blue-400"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5, type: "spring" }}
              >
                {stat.number}
              </motion.div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid items-center gap-12 mb-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              className="mb-6 text-2xl font-bold"
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
                I discovered my passion for web development while working on my first educational platform project. What started as curiosity quickly turned into a career I love, building real-world web applications for students and clients.
              </motion.p>

              <motion.p variants={itemVariants}>
                I specialize in React, Next.js, TypeScript, and modern CSS frameworks like Tailwind CSS. I focus on writing code that's not only functional but also clean, maintainable, and scalable, while keeping up with the latest industry trends.
              </motion.p>

              <motion.p variants={itemVariants}>
                When I'm not coding, I enjoy designing UI/UX interfaces, exploring new frontend technologies, and working on personal projects like Outly and Faster Education Platform to continuously improve my skills.
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
                className="p-6 transition-shadow duration-200 bg-white shadow-md dark:bg-gray-900 rounded-xl hover:shadow-lg"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="mb-4 text-blue-600 dark:text-blue-400"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {highlight.icon}
                </motion.div>
                <h4 className="mb-2 font-semibold">{highlight.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="p-8 bg-white shadow-lg dark:bg-gray-900 rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="mb-6 text-2xl font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Experience & Education
          </motion.h3>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4 className="mb-4 text-lg font-semibold text-blue-600 dark:text-blue-400">Experience</h4>
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="pl-4 border-l-2 border-blue-200 dark:border-blue-800"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h5 className="font-semibold">Frontend Developer</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Outly Project • 2022 - 2023</p>
                  <p className="mt-2 text-sm">
                    Developed the frontend of Outly Project, an educational platform, implementing responsive and user-friendly interfaces using React and Tailwind CSS.
                  </p>
                </motion.div>

                <motion.div
                  className="pl-4 mt-4 border-l-2 border-blue-200 dark:border-blue-800"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h5 className="font-semibold">Frontend Developer</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Faster Education Platform • 2023 - Present</p>
                  <p className="mt-2 text-sm">
                    Leading frontend development for Faster Education Platform, maintaining seamless communication with students and ensuring clean, maintainable, and scalable code using React, Next.js, and Tailwind CSS.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h4 className="mb-4 text-lg font-semibold text-blue-600 dark:text-blue-400">Education</h4>
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="pl-4 border-l-2 border-blue-200 dark:border-blue-800"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h5 className="font-semibold">Bachelor in Computer Science</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Suez Canal University • 2019 - 2023</p>
                  <p className="mt-2 text-sm">
                    Focused on software development, web technologies, algorithms, and educational technology applications.
                  </p>
                </motion.div>

                <motion.div
                  className="pl-4 border-l-2 border-blue-200 dark:border-blue-800"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h5 className="font-semibold">Certifications</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Various Online Platforms</p>
                  <p className="mt-2 text-sm">
                    React Advanced Patterns, Frontend Development Best Practices, Web Design and UI/UX Essentials
                  </p>
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