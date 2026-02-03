import React, { useRef, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import {
  SiPostman, SiIntellijidea, SiPycharm, SiTailwindcss, SiNextdotjs,
  SiFastapi, SiFastify, SiExpress, SiGraphql, SiMongodb, SiPostgresql, SiMysql, SiSocketdotio
} from "react-icons/si";
import {
  FaGithub, FaDocker, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { IoLogoVue, IoLogoAndroid } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";

const SpotlightCard = ({ children, className = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const SkillItem = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="group flex flex-col items-center justify-center p-4 bg-zinc-50 dark:bg-black/40 rounded-xl border border-zinc-100 dark:border-zinc-800/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
    >
      <div className="text-3xl mb-2 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500 transition-colors duration-300">
        {skill.icon}
      </div>
      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors duration-300">
        {skill.name}
      </span>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills, className }) => {
  return (
    <SpotlightCard className={`p-6 md:p-8 h-full group ${className}`}>
      <div className="mb-6 flex items-center gap-3">
        <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
        <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 font-serif tracking-wide">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
      </div>
    </SpotlightCard>
  );
};

const Skills = () => {
  const languages = [
    { name: "JavaScript", icon: <FaJs className="group-hover:text-yellow-500" /> },
    { name: "Python", icon: <FaPython className="group-hover:text-blue-500" /> },
    { name: "Go", icon: <FaGolang className="group-hover:text-cyan-600" /> },
    { name: "Java", icon: <FaJava className="group-hover:text-red-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="group-hover:text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="group-hover:text-blue-500" /> },
  ];

  const frameworks = [
    { name: "React", icon: <FaReact className="group-hover:text-blue-400" /> },
    { name: "Vue.js", icon: <IoLogoVue className="group-hover:text-green-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="group-hover:text-black dark:group-hover:text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="group-hover:text-green-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="group-hover:text-cyan-400" /> },
    { name: "FastAPI", icon: <SiFastapi className="group-hover:text-teal-500" /> },
    { name: "Fastify", icon: <SiFastify className="group-hover:text-black dark:group-hover:text-white" /> },
    { name: "Express", icon: <SiExpress className="group-hover:text-black dark:group-hover:text-white" /> },
    { name: "GraphQL", icon: <SiGraphql className="group-hover:text-pink-600" /> },
    { name: "WebSocket", icon: <SiSocketdotio className="group-hover:text-black dark:group-hover:text-white" /> },
  ];

  const toolsAndDBs = [
    { name: "MongoDB", icon: <SiMongodb className="group-hover:text-green-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="group-hover:text-blue-400" /> },
    { name: "MySQL", icon: <SiMysql className="group-hover:text-blue-600" /> },
    { name: "Git & Github", icon: <FaGithub className="group-hover:text-black dark:group-hover:text-white" /> },
    { name: "Docker", icon: <FaDocker className="group-hover:text-blue-600" /> },
    { name: "VS Code", icon: <VscVscode className="group-hover:text-blue-500" /> },
    { name: "Postman", icon: <SiPostman className="group-hover:text-orange-500" /> },
    { name: "IntelliJ", icon: <SiIntellijidea className="group-hover:text-purple-600" /> },
    { name: "PyCharm", icon: <SiPycharm className="group-hover:text-green-500" /> },
    { name: "Android Studio", icon: <IoLogoAndroid className="group-hover:text-green-400" /> },
  ];

  return (
    <section className='py-32 px-[5%] md:px-[10%] relative overflow-hidden dark:bg-black ' id='skills'>
      {/* Background Decorations */}


      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-5xl md:text-4xl font-bold mb-2  bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent'>
            Technical Arsenal
          </h2>

          <p className='text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed'>
            Crafting digital experiences with a modern, robust, and scalable technology stack.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8'>
          {/* Languages - Spans 4 columns */}
          <div className="lg:col-span-4">
            <SkillCategory title="Languages" skills={languages} />
          </div>

          {/* Frameworks - Spans 4 columns */}
          <div className="lg:col-span-4">
            <SkillCategory title="Frameworks" skills={frameworks} />
          </div>

          {/* Tools - Spans 4 columns */}
          <div className="lg:col-span-4">
            <SkillCategory title="Tools & Databases" skills={toolsAndDBs} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
