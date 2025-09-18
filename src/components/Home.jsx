import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaSpider } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import "@fontsource/poppins/500.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import MusicPlayer from './MusicPlayer';



const Home = () => {
  return (
    <section className=' max-md:overflow-x-hidden ' id='home'>
      <div>
        <div className='max-md:py-15 py-35  px-[10%] max-md:block max-md:px-4  flex max-md:flex-wrap  justify-around items-center'>

          <Social />

          <Data />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className='max-md:w-[100%] flex justify-center max-md:pt-10 ' >
            <div id="profileimg" className='  w-[20rem] h-[20rem]  bg-[url("/profile.jpeg")] bg-cover bg-center bg-no-repeat '></div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}


const Scroll = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className=' max-lg:hidden flex gap-0.5 items-center absolute top-[20rem] left-[-0.4rem]' id='scroll'>
      <a href=""><svg
        width="32px"
        height="32px"
        class="home__scroll-mouse"
        viewBox="0 0 247 390"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          fillRule: " evenodd",
          clipRule: " evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "1.5",
        }}
      >
        <path
          class="wheel"
          d="M123.359,79.775l0,72.843"
          style={{
            fill: "none",
            stroke: "#000",
            strokeWidth: "20px",
          }}
        ></path>
        <path
          id="mouse"
          d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
          style={{
            fill: "none",
            stroke: "#000",
            strokeWidth: "20px",
          }}
        ></path>
      </svg></a>
      <span className='font-stretch-95%'>Scroll Down</span>
      <div className='text-sm ml-1' id='scrolldown'> <FaArrowDown /> </div>
    </motion.div>
  )
}

const Social = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className='flex gap-4 max-md:gap-2 flex-col max-md:flex-row'>
      <a href="https://www.instagram.com/sayantan0709/" target="_blank"><div className='text-2xl transform transition duration-300  hover:text-pink-700 hover:scale-125'><FaInstagram /></div></a>
      <a href="https://www.facebook.com/riosayan123/" target="_blank"><div className='text-2xl transform transition duration-300 hover:text-blue-700 hover:scale-125'><FaFacebook /></div></a>
      <a href="https://github.com/Sayantansen123" target="_blank"><div className='text-2xl transform transition duration-300  hover:scale-125'><FaGithub /></div></a>
    </motion.div>
  )
}

const Data = () => {
  return (
    <div className='w-[45%] max-md:w-[100%] relative'>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        id='piyushdas'
        className='font-serif text-5xl flex gap-1.5 items-center max-md:text-3xl text-nowrap'>Sayantan Sen</motion.h1>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5 }}
        id='tag1'
        className='text-xl relative max-md:text-xl pl-[4.55rem]'>Website Devloper</motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        className='text-[0.9rem] pt-7  max-md:text-[0.7rem] max-md:pt-2 from-neutral-500'>I'm Sayantan Sen, a passionate web developer and digital creator specializing in React.js, JavaScript, Next.js, Node.js, and Express. With a strong foundation in frontend and backend development, I build dynamic and user-friendly applications that deliver seamless experiences.</motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4.5 }}
        className="flex text-nowrap w-[110px] p-1.5 max-md:text-sm rounded-lg gap-0.5 mt-5  border-2 border-black justify-center items-center hover:text-white hover:bg-black"><a href="#contact">Say Hello </a><IoIosSend /></motion.div>

      <div className='flex flex-row'>
        <Scroll />
        <MusicPlayer />
      </div>
    </div>
  )
}


export default Home
