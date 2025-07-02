import React from 'react'
import { motion } from "framer-motion"
import { projectsData } from './ClientData'

const Portfolio = () => {
  return (
    <section className='pt-13 pb-30 max-md:pt-0  max-md:overflow-x-hidden px-[10%]' id='portfolio'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}

        className='pb-10 max-md:pb-7 max-md:px-4 flex max-md:flex-wrap flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold'>Portfolio</h2>
        <span className='font-thin'>Most Recent Works</span>
      </motion.div>

      <div id='work_container'>
        {projectsData.map((item) => {
          return <div key={item.id} id='work_card'>
            <img className="w-[350px] h-[200px] rounded-[1rem] mb-[1.4rem] max-sm:w-[300px]" src={item.image} alt="" />
            <h3 className='font-serif'>{item.title}</h3>
            <a className="font-thin text-sm" href={item.link}>Link </a>
          </div>

        })}

      </div>



    </section>
  )
}

export default Portfolio
