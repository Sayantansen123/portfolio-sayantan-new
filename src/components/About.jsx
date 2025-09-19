import React, { useState } from 'react'
import { FaAward } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { motion } from "framer-motion";
import MyTerminal from './MyTerminal';

const About = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  return (
    <section className="pt-30 max-md:py-0 max-md:pb-10  max-md:overflow-x-hidden px-[10%] " id='about'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}

        className='pb-15 max-md:px-4 flex max-md:flex-wrap flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold'>About Me</h2>
        <span className='font-thin'>My Introduction</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className='flex flex-wrap gap-12.5 justify-center max-md:items-center'>
        <img className=" rounded-[3.5rem] min-w-[260px] " src="/monitors-typing.gif" alt="" />

        <div className='w-[40%] min-w-[290px] '>
          <Info />
          <p className='text-lg max-md:text-sm font-light pb-5 font-indie text-gray-500'>I’m Sayantan Sen, a web developer building scalable, user-friendly apps with React.js, Next.js, Node.js, and Express. I’ve worked on projects like Auraverse, a real-time chat app, a real estate platform, a web scraping API, and a video streaming platform. Explore my skills and projects—use the terminal to learn more!</p>
          <div className='flex gap-3'>

            <a href="/resume.pdf" download>


              <button
                class="relative flex items-center justify-center bg-neutral-600 px-4 py-2 border-2 border-black text-sm rounded-lg font-semibold text-white cursor-pointer overflow-hidden transition-all ease-custom hover:text-black hover:rounded-xl group hover:transition-all duration-700 hover:duration-700"
              >
                <span class="relative z-[1] transition-all duration-700 ease-custom">
                  Download CV
                </span>
                <span
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 transition-all duration-700 ease-custom group-hover:w-36 group-hover:h-36 group-hover:opacity-100"
                ></span>
              </button>





            </a>
            {!showTerminal && (
              <button
                onClick={() => setShowTerminal(true)}
                class="relative flex items-center justify-center bg-neutral-600 px-4 py-2 border-2 border-black text-sm rounded-lg font-semibold text-white cursor-pointer overflow-hidden transition-all ease-custom hover:text-black hover:rounded-xl group hover:transition-all duration-700 hover:duration-700"
              >
                <span class="relative z-[1] transition-all duration-700 ease-custom">
                  Open Terminal
                </span>
                <span
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 transition-all duration-700 ease-custom group-hover:w-36 group-hover:h-36 group-hover:opacity-100"
                ></span>
              </button>)}

            {showTerminal && (
              <MyTerminal show={showTerminal} setShow={setShowTerminal} />
            )}
          </div>
        </div>

      </motion.div>

    </section>
  )
}


const Info = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className='flex flex-wrap gap-[1rem] mb-5'>
      <div className='infobox relative group inline-block'>
        <div className='text-2xl '> <FaAward /></div>

        <h3 className='font-bold'>Experience</h3>
        <span className='font-thin'>2+ Years </span>

        <div className="absolute bottom-[50%] -left-70  mb-2 hidden group-hover:block z-[140] max-md:hidden">
          <img
            src="/exp.png"
            alt="tooltip"
            className="  rounded-sm border-gray-400 border-2"
          />
        </div>
      </div>

      <div className='infobox relative group inline-block'>
        <div className='text-2xl'><FaThumbsUp /></div>

        <h3 className='font-bold'>Completed</h3>
        <span className='font-thin'>10+ Projects</span>

        <div className="absolute bottom-[50%] -left-70  mb-2 hidden group-hover:block z-[140] max-md:hidden">
          <img
            src="/git.png"
            alt="tooltip"
            className="  rounded-sm border-gray-400 border-2"
          />
        </div>
      </div>

      <div className='infobox relative group inline-block '>
        <div className='text-2xl'><BiSupport /></div>
        <h3 className='font-bold'>Support</h3>
        <span className='font-thin'>Online 24/7</span>

        <div className="absolute bottom-[50%] -left-70  mb-2 hidden group-hover:block z-[140] max-md:hidden">
          <img
            src="/battery.png"
            alt="tooltip"
            className="  rounded-sm border-gray-400 border-2"
          />
        </div>
      </div>

    </motion.div>
  )
}


export default About
