import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Eye, GitBranch } from "lucide-react";
import imgpro1 from '../assets/project1.png'
import imgpro2 from '../assets/project2.png'
const Projects: React.FC = () => {
  const projects = [
  {
    title: "Outly Project",
   description: 
    "Built a location-based web app for discovering nearby cafés with ratings and recommendations. Developed using React.js, Next.js, and modern UI libraries for responsive design. Integrated maps and geolocation APIs to deliver personalized suggestions, with a clean UI/UX focusing on usability and smooth navigation.",
    image: imgpro2, // استخدم صورة المشروع أو سكرين شوت
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript", "REST API"],
    liveUrl: "https://outly-project.vercel.app/",
    githubUrl: "https://github.com/mohamedshoman00/OutlyProject",
    featured: true,
    stats: { stars: 45, forks: 10, views: "1.2k" },
  },
  {
    title: "Faster Education Platform",
    description:
      "Faster Education Platform is an educational web and mobile application designed to streamline communication between teachers and students. It offers course management, real-time notifications, assignment tracking, and interactive features such as quizzes and discussion forums. Built with React, Next.js, and Tailwind CSS for the web, and a mobile app available on Google Play and the App Store, the platform delivers a seamless learning experience across devices with a clean and intuitive UI/UX.",
    image: imgpro1, // أو أي صورة واقعية للمشروع
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Firebase"],
    liveUrl: "https://faster-education.com/",
    githubUrl: "https://github.com/mohamedshoman00/",
    featured: true,
    stats: { stars: 60, forks: 12, views: "1.5k" },
  },
    // {
    //   title: "Weather Forecast App",
    //   description:
    //     "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features smooth animations and offline capabilities.",
    //   image:
    //     "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   tech: ["React", "Weather API", "Geolocation", "PWA", "CSS Grid"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    //   featured: false,
    //   stats: { stars: 67, forks: 15, views: "1.2k" },
    // },
    // {
    //   title: "Portfolio Website",
    //   description:
    //     "A modern, responsive portfolio website showcasing projects and skills. Features smooth scrolling, dark mode toggle, and optimized performance across all devices.",
    //   image:
    //     "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    //   featured: false,
    //   stats: { stars: 156, forks: 43, views: "3.2k" },
    // },
    // {
    //   title: "Recipe Finder App",
    //   description:
    //     "A recipe discovery application with advanced search filters, meal planning, and shopping list generation. Integrates with multiple recipe APIs for comprehensive results.",
    //   image:
    //     "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   tech: ["React", "Redux", "Recipe API", "Local Storage", "SCSS"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    //   featured: false,
    //   stats: { stars: 78, forks: 19, views: "1.5k" },
    // },
    // {
    //   title: "Social Media Dashboard",
    //   description:
    //     "A comprehensive social media management dashboard with analytics, post scheduling, and multi-platform integration. Features real-time data visualization and export capabilities.",
    //   image:
    //     "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   tech: ["React", "D3.js", "Social APIs", "Material-UI", "JWT"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    //   featured: false,
    //   stats: { stars: 203, forks: 67, views: "4.1k" },
    // },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}>
          <motion.h2
            className="mb-4 text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}>Projects
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}>
         Here are some of my recent projects demonstrating my expertise in frontend development, React/Next.js, UI/UX design, and crafting practical, user-friendly solutions.
          </motion.p>
        </motion.div>
        {/* Featured Projects */}
        <motion.div
          className="grid gap-8 mb-16 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="overflow-hidden transition-shadow duration-300 bg-white shadow-lg dark:bg-gray-900 rounded-2xl hover:shadow-xl"
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}>
              <motion.div
                className="overflow-hidden aspect-video"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <div className="p-6">
                <motion.h3
                  className="mb-3 text-xl font-bold"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.4 }}>
                  {project.title}
                </motion.h3>
                <motion.p
                  className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}>
                  {project.description}
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}>
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-200"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}>
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div
                  className="flex space-x-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.4 }}>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 space-x-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}>
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 space-x-2 transition-colors border border-gray-300 rounded-lg dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}>
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                </motion.div>
              </div>
              <motion.div
                className="flex items-center mb-4 space-x-4 text-sm text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3" />
                  <span>{project.stats.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GitBranch className="w-3 h-3" />
                  <span>{project.stats.forks}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-3 h-3" />
                  <span>{project.stats.views}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        {/* <div>
          <motion.h3
            className="mb-8 text-2xl font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            Other Projects
          </motion.h3>
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}>
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                className="overflow-hidden transition-shadow duration-300 bg-white shadow-md dark:bg-gray-900 rounded-xl hover:shadow-lg"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}>
                <motion.div
                  className="overflow-hidden aspect-video"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <div className="p-4">
                  <h4 className="mb-2 font-semibold">{project.title}</h4>
                  <p className="mb-3 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded dark:bg-gray-800 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded dark:bg-gray-800 dark:text-gray-300">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center flex-1 px-3 py-2 space-x-1 text-sm text-white transition-colors bg-blue-600 rounded hover:bg-blue-700"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}>
                      <ExternalLink className="w-3 h-3" />
                      <span>Demo</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center flex-1 px-3 py-2 space-x-1 text-sm transition-colors border border-gray-300 rounded dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}>
                      <Github className="w-3 h-3" />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
