import React from 'react'
import { motion } from "framer-motion"
import { SiNuke } from "react-icons/si";
import { SiHoudini } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiDavinciresolve } from "react-icons/si";
import { Gi3dStairs } from "react-icons/gi";
import { SiMocha } from "react-icons/si";
import { FaVideo } from "react-icons/fa";
import { PiUsersThreeLight } from "react-icons/pi";
import { TbBrandVisualStudio } from "react-icons/tb";
import { LuMove3D } from "react-icons/lu";
import { MdOutlineAnimation } from "react-icons/md";
import { MdAutoAwesomeMotion } from "react-icons/md";
import { IoLogoVue } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { SiIntellijidea } from "react-icons/si";
import { SiPycharm } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { FaDatabase } from "react-icons/fa6";
import { FaGolang } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiHostinger } from "react-icons/si";
import { SiOpencv } from "react-icons/si";

const Skills = () => {
    return (
        <section className='pt-30 pb-15 max-md:py-0  max-md:overflow-x-hidden px-[10%]' id='skills'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}

                className='pb-10 max-md:pb-7 max-md:px-4 flex max-md:flex-wrap flex-col justify-center items-center'>
                <h2 className='text-3xl font-bold'>Skills</h2>
                <span className='font-thin'>My Specialities</span>
            </motion.div>

            <div className='flex justify-center gap-8 flex-wrap'>
                <Tools />
                <Skill />

            </div>
        </section>
    )
}

const Tools = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}

            className='text-center  py-10 bg-[#fff] rounded-[1.25rem] max-w-[500px] flex-1 min-w-[400px] max-md:min-w-[340px] ' id='tool'>
            <h3 className='text-2xl font-serif max-md:text-xl pb-1.5'>Tools & Software</h3>
            <div className='flex justify-center max-md:justify-around '>

                <div className='space-y-6 p-10 max-md:p-5'>
                    <div className="flex gap-3 items-center max-md:flex-col max-md:gap-0">
                        <div className='text-2xl max-md:text-xl'><VscVscode /></div>
                        <div>VS Code</div>
                    </div>

                    <div className="flex gap-3 items-center max-md:flex-col max-md:gap-0">
                        <div className='text-2xl max-md:text-xl' ><FaGithub /></div>
                        <div>Git & Github</div>
                    </div>

                    <div className="flex gap-3 items-center max-md:flex-col max-md:gap-0">
                        <div className='text-2xl max-md:text-xl'><FaDocker /></div>
                        <div>Docker</div>
                    </div>

                    <div className="flex gap-3 items-center max-md:flex-col max-md:gap-0">
                        <div className='text-2xl max-md:text-xl'><SiPostman /></div>
                        <div>Postman</div>
                    </div>
                </div>



                <div className='space-y-6 p-10 max-md:p-5'>
                    <div className="flex gap-3 items-center max-md:flex-col max-md:gap-0">
                        <div className='text-2xl max-md:text-xl'><IoLogoAndroid /></div>
                        <div>Android Studio</div>
                    </div>

                    <div className="flex gap-3 items-center max-md:flex-col max-md:gap-0">
                        <div className='text-2xl max-md:text-xl'><TbBrandVisualStudio /></div>
                        <div>Visual Studio</div>
                    </div>

                    <div className="flex gap-3 items-center max-md:flex-col max-md:gap-0">
                        <div className='text-2xl max-md:text-xl'><SiIntellijidea /></div>
                        <div>Intellij Idea</div>
                    </div>

                    <div className="flex gap-3 items-center max-md:flex-col max-md:gap-0">
                        <div className='text-2xl max-md:text-xl'><SiPycharm /></div>
                        <div>Pycharm</div>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}


const Skill = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className='text-center  py-10 bg-[#fff] rounded-[1.25rem] max-w-[500px] flex-1 min-w-[400px] max-md:min-w-[340px]' >
            <h3 className='text-2xl font-serif max-md:text-xl pb-1.5'>Skills & Tech</h3>
            <div className='flex justify-center max-md:justify-around '>

                <div className='space-y-6 p-10 max-md:p-5'>
                    <div className="flex gap-3 items-center max-md:flex-col max-md:gap-0">
                        <div className='text-2xl max-md:text-xl'><CgWebsite /></div>
                        <div className='text-nowrap'>Web Devlopment</div>
                    </div>

                    <div className="flex gap-3 items-center max-md:flex-col max-md:gap-0">
                        <div className='text-2xl max-md:text-xl' ><IoLogoAndroid /></div>
                        <div className='text-nowrap'>App Devlopment</div>
                    </div>

                    <div className="flex gap-3 items-center max-md:flex-col max-md:gap-0">
                        <div className='text-2xl max-md:text-xl'><FaDatabase /></div>
                        <div className='text-nowrap'>DSA</div>
                    </div>

                    <div className="flex gap-3 items-center max-md:flex-col max-md:gap-0">
                        <div className='text-2xl max-md:text-xl'><FaGolang /></div>
                        <div className='text-nowrap'>Go Lang</div>
                    </div>
                </div>



                <div className='space-y-6 p-10 max-md:p-5'>
                    <div className="flex gap-3 items-center max-md:flex-col max-md:gap-0">
                        <div className='text-2xl max-md:text-xl'><FaPython /></div>
                        <div className='text-nowrap'>Python</div>
                    </div>

                    <div className="flex gap-3 items-center max-md:flex-col max-md:gap-0">
                        <div className='text-2xl max-md:text-xl'><MdAutoAwesomeMotion /></div>
                        <div className='text-nowrap'>Hosting</div>
                    </div>

                    <div className="flex gap-3 items-center max-md:flex-col max-md:gap-0">
                        <div className='text-2xl max-md:text-xl'><SiHostinger /></div>
                        <div className='text-nowrap'>Web Scraping</div>
                    </div>

                    <div className="flex gap-3 items-center max-md:flex-col max-md:gap-0">
                        <div className='text-2xl max-md:text-xl'><SiOpencv /></div>
                        <div className='text-nowrap'>Open CV</div>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Skills
