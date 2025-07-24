import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Users, Award, TrendingUp } from 'lucide-react';

const Skills: React.FC = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "4+ Years Experience",
      description: "Professional frontend development"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "50+ Projects",
      description: "Successfully delivered"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "15+ Clients",
      description: "Satisfied worldwide"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "99% Success Rate",
      description: "Project completion"
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML5", level: 98 },
        { name: "CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 75 },
        { name: "SCSS/Sass", level: 88 },
        { name: "Webpack", level: 80 },
        { name: "Vite", level: 85 },
        { name: "Git", level: 92 }
      ]
    },
    {
      title: "Design & Others",
      skills: [
        { name: "Responsive Design", level: 95 },
        { name: "UI/UX Design", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Performance Optimization", level: 85 },
        { name: "Testing (Jest/RTL)", level: 78 },
        { name: "Accessibility", level: 85 }
      ]
    }
  ];

  const technologies = [
    "React", "TypeScript", "JavaScript", "Next.js", "Vue.js", "HTML5", "CSS3", 
    "Tailwind CSS", "SCSS", "Node.js", "Git", "Webpack", "Vite", "Jest", 
    "Figma", "Adobe XD", "Responsive Design", "REST APIs", "GraphQL", "PWA"
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
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I'm proficient in a wide range of frontend technologies and tools. 
            Here's an overview of my technical skills and experience levels.
          </motion.p>
        </motion.div>

        {/* Skill Progress Bars */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <motion.div 
                className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {achievement.icon}
              </motion.div>
              <motion.h4 
                className="text-2xl font-bold mb-2"
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
          className="grid lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              <motion.h3 
                className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400"
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
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
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
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all duration-200 cursor-default"
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