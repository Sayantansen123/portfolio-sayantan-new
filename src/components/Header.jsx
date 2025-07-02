import React, { useState } from 'react'
import { UisHouseUser, UisBriefcase, UisScenery, UisAt, UisTimesCircle, UisApps } from '@iconscout/react-unicons-solid'
import { motion } from 'framer-motion';



const Header = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <header className='w-[100%] fixed top-0 left-0 z-[100] bg-transparent ' id='headers'>
      <nav className='h-[4.5rem] px-[10%]  flex justify-between items-center gap-x-[1rem]  max-md:justify-between max-md:px-4 max-md:h-[3.5rem]'>
        <motion.a
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5 }}
          className="" href="">Sayantan</motion.a>
        <div
          className={`max-md:py-3 max-md:fixed ${toggle ? "max-md:top-[0]" : "max-md:top-[-100%]"} max-md:left-0 max-md:w-[100%] max-md:bg-[#fffcfc] max-md:shadow-lg transition-all duration-900`}>

          <motion.div>
            <ul className='flex flex-wrap gap-x-[2rem] max-md:justify-center max-md:grid grid-cols-3 max-md:gap-2'>
              <motion.li
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}

              ><a className='flex flex-col items-center text-[0.875rem] text-black transform font-medium transition duration-300 max-md:text-[0.9rem] hover:text-black hover:font-bold hover:scale-120' href="#home"><div className='hidden max-md:block'><UisHouseUser /></div>Home</a></motion.li>
              <motion.li
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7 }}
              ><a className='flex flex-col items-center text-[0.875rem] text-black transform font-medium transition duration-300 max-md:text-[0.9rem] hover:text-black hover:font-bold hover:scale-120' href="#about"><div className='hidden max-md:block'><UisScenery /></div>About</a></motion.li>
              <motion.li
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
              ><a className='flex flex-col items-center text-[0.875rem] text-black transform font-medium transition duration-300 max-md:text-[0.9rem] hover:text-black hover:font-bold hover:scale-120' href="#skills"><div className='hidden max-md:block'><UisAt /></div>Skills</a></motion.li>
              <motion.li
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3 }}
              ><a className='flex flex-col items-center text-[0.875rem] text-black transform font-medium transition duration-300 max-md:text-[0.9rem] hover:text-black hover:font-bold hover:scale-120' href="#services"><div className='hidden max-md:block'><UisBriefcase /></div>Services</a></motion.li>
              <motion.li
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5 }}
              ><a className='flex flex-col items-center text-[0.875rem] text-black transform font-medium transition duration-300 max-md:text-[0.9rem] hover:text-black hover:font-bold hover:scale-120' href="#portfolio"><div className='hidden max-md:block'><UisAt /></div>Portfolio</a></motion.li>
              <motion.li
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.8 }}
              ><a className='flex flex-col items-center text-[0.875rem] text-black transform font-medium transition duration-300 max-md:text-[0.9rem] hover:text-black hover:font-bold hover:scale-120' href="#contact"><div className='hidden max-md:block' ><UisAt /></div>Contact</a></motion.li>
            </ul>
          </motion.div>
          <div onClick={() => { showMenu(!toggle) }} className='hidden max-md:flex max-md:w-[100%] max-md:justify-center max-md:pt-2 text-black max-md:absolute max-md:top-31'><UisTimesCircle /></div>
        </div>

        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5 }}
          onClick={() => { showMenu(!toggle) }} className='hidden max-md:block max-md:top-0 max-md:cursor-pointer max-md:hover:text-black'><UisApps /></motion.div>
      </nav>
    </header>
  )
}

export default Header
