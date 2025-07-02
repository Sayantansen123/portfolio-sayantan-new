import React from 'react'
import { motion } from "framer-motion"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer id='contact_card' className='mt-4'>

            <div>
                <h1 className='text-xl font-bold '>Sayantan</h1>

                <ul className='flex gap-3 justify-center my-4'>
                    <li><a href="#about" className='text-neutral-600 hover:text-black hover:font-semibold'>About</a></li>
                    <li><a href="#portfolio" className='text-neutral-600 hover:text-black hover:font-semibold'>Projects</a></li>
                    <li><a href="#home" className='text-neutral-600 hover:text-black hover:font-semibold'>Home</a></li>
                </ul>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className='flex gap-3 max-md:gap-2 w-[100%] justify-center mt-2'>
                    <a href=""><div className='text-2xl transform transition duration-300  hover:text-pink-700 hover:scale-125 w-[100%]'><FaInstagram /></div></a>
                    <a href=""><div className='text-2xl transform transition duration-300 hover:text-blue-700 hover:scale-125 w-[100%]'><FaFacebook /></div></a>
                    <a href=""><div className='text-2xl transform transition duration-300 hover:text-blue-700 hover:scale-125 w-[100%]'><FaTwitter /></div></a>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
