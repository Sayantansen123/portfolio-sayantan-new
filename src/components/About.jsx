import React from 'react'
import { FaAward } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { motion } from "framer-motion";

const About = () => {
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
        <img className="w-[271px] h-[366px] rounded-[3.5rem] min-w-[260px] " src="/profileImage.jpeg" alt="" />

        <div className='w-[40%] min-w-[290px] '>
          <Info />
          <p className='text-sm font-light pb-5'>I'm Sayantan Sen, a web developer passionate about building scalable and user-friendly applications using React.js, Next.js, Node.js, and Express. I’ve worked on projects like Auraverse, a gamified web app promoting social awareness, a real-time chat application, a real estate platform, a web scraping API, and a video streaming platform. Constantly exploring new technologies, I love turning ideas into functional, impactful solutions. Let's build something great together! 🚀</p>
          <a href="/resume.pdf" download>
            <button
              className=" text-center  w-40 rounded-2xl h-12 relative text-black text-[1rem] font-semibold group"
              type="button"
            >
              <div
                className="bg-black rounded-xl h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  height="20px"
                  width="20px"
                >
                  <path
                    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    fill="#ffff"
                  ></path>
                  <path
                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    fill="#ffff"
                  ></path>
                </svg>
              </div>
              <p className="translate-x-2 ">Download CV</p>
            </button>
          </a>
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
      <div className='infobox'>
        <div className='text-2xl'> <FaAward /></div>

        <h3 className='font-bold'>Experience</h3>
        <span className='font-thin'>2+ Years </span>
      </div>

      <div className='infobox'>
        <div className='text-2xl'><FaThumbsUp /></div>

        <h3 className='font-bold'>Completed</h3>
        <span className='font-thin'>10+ Projects</span>
      </div>

      <div className='infobox'>
        <div className='text-2xl'><BiSupport /></div>
        <h3 className='font-bold'>Support</h3>
        <span className='font-thin'>Online 24/7</span>
      </div>

    </motion.div>
  )
}


export default About
