import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Users, Award, TrendingUp } from 'lucide-react';

const Skills: React.FC = () => {
const achievements = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "2+ Years Experience",
    description: "Professional frontend development with React, Next.js, and Tailwind CSS"
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "2+ Projects",
    description: "Successfully delivered Outly and Faster Education Platform"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "5+ Clients/Users",
    description: "Satisfied students and platform users"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "100% Project Success",
    description: "Delivered projects with clean, maintainable, and functional code"
  }
];
const skillCategories = [
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5", level: 98 },
      { name: "CSS3 / Tailwind CSS", level: 95 }
    ]
  },
  {
    title: "Tools & Frameworks",
    skills: [
      { name: "Firebase", level: 85 },
      { name: "Vercel Deployment", level: 90 },
      { name: "Git & GitHub", level: 92 },
      { name: "REST APIs", level: 88 },
      { name: "Axios / Fetch", level: 90 }
    ]
  },
  {
    title: "Design & Others",
    skills: [
      { name: "Responsive Design", level: 95 },
      { name: "UI/UX Design", level: 85 },
      { name: "Performance Optimization", level: 85 },
      { name: "Problem Solving", level: 90 }
    ]
  }
];
 const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3 / Tailwind CSS",
  "SCSS / Sass",
  "Firebase",
  "Git & GitHub",
  "Vercel Deployment",
  "REST APIs",
  "Axios / Fetch",
  "Responsive Design",
  "UI/UX Design",
  "Performance Optimization",
  "Accessibility (a11y)",
  "Problem Solving",
  "Debugging & Testing",
  "Figma"
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
         I Specialize in frontend development with React, Next.js, and TypeScript, creating responsive and user-friendly web experiences. Below is an overview of my key skills and expertise.
          </motion.p>
        </motion.div>

        {/* Skill Progress Bars */}
        <motion.div 
          className="grid grid-cols-2 gap-6 mb-16 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="p-6 text-center bg-white shadow-lg dark:bg-gray-900 rounded-xl"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <motion.div 
                className="flex justify-center mb-4 text-blue-600 dark:text-blue-400"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {achievement.icon}
              </motion.div>
              <motion.h4 
                className="mb-2 text-2xl font-bold"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5, type: "spring" }}
              >
                {achievement.title}
              </motion.h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid gap-8 mb-16 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="p-6 bg-white shadow-lg dark:bg-gray-900 rounded-xl"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <motion.h3 
                className="mb-6 text-xl font-bold text-blue-600 dark:text-blue-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {category.title}
              </motion.h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + skillIndex * 0.1, duration: 0.5 }}
                  >
                    <motion.div 
                      className="flex justify-between mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + skillIndex * 0.1, duration: 0.3 }}
                    >
                      <span className="font-medium">{skill.name}</span>
                      <motion.span 
                        className="text-sm text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.5, duration: 0.3 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </motion.div>
                    <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
                      <motion.div
                        className="h-2 transition-all duration-1000 ease-out rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                        variants={progressVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={skill.level}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Tags */}
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
            Technologies I Work With
          </motion.h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 text-sm font-medium text-blue-800 transition-all duration-200 rounded-full cursor-default bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 dark:text-blue-200 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800 dark:hover:to-purple-800"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;