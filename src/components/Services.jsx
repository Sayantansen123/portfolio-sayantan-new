import React from 'react'
import { motion } from "framer-motion"
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaVideo } from "react-icons/fa";
import { GiExtractionOrb } from "react-icons/gi";


const Services = () => {
  return (
    <section className='pt-30 pb-30 max-md:pt-13  max-md:pb-0  max-md:overflow-x-hidden px-[10%]'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}

        className='pb-10 max-md:pb-7 max-md:px-4 flex max-md:flex-wrap flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold'>Services</h2>
        <span className='font-thin'>Work i Provide</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        id='servicediv'
        className='flex flex-wrap gap-[3rem] mb-5 px-23 max-md:px-8 justify-center'>
        <div className='infoboxS'>
          <div className='text-3xl max-md:text-2xl '> <FaVideo /></div>

          <h3 className='font-bold'>Web Devlopment</h3>
          <span className='font-thin '>I design and develop modern, responsive websites that look great on any device. From personal portfolios to business sites, I create clean, user-friendly experiences that help you stand out online. </span>
        </div>

        <div className='infoboxS'>
          <div className='text-3xl max-md:text-2xl'><GiExtractionOrb /></div>

          <h3 className='font-bold'>App Devlopment</h3>
          <span className='font-thin '>I create intuitive, high-performance mobile and web apps tailored to your needs. From concept to launch, I deliver user-friendly, reliable solutions that bring your ideas to life.</span>
        </div>

        <div className='infoboxS'>
          <div className='text-3xl max-md:text-2xl'><TbBrandFramerMotion /></div>
          <h3 className='font-bold'>Software Devlopment</h3>
          <span className='font-thin'>I build custom software solutions to streamline your workflows and solve real problems. From planning to deployment, I deliver reliable, scalable, and efficient applications tailored to your goals.</span>
        </div>

      </motion.div>



    </section>
  )
}

export default Services
