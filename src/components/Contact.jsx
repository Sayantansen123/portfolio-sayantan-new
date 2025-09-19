import React, { useRef } from 'react'
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import { IoIosSend } from 'react-icons/io'
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import Spline from "@splinetool/react-spline";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Contact = () => {

    const bounceAnimation = {
        y: ["0%", "-20%", "0%"], // move up and down
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
        },
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_kyc',
            'template_mvn9psc',
            form.current,
            '3TAqxsq4Y2bV7gzSh'
        ).then(
            (result) => {
                console.log(result.text);
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                console.log(error.text);
                alert("Something went wrong, please try again.");
            }
        );
    };
    return (
        <section className='pt-30 pb-30 max-md:pt-13  max-md:pb-0  max-md:overflow-x-hidden px-[10%]' id='contact'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}

                className='pb-10 max-md:pb-7 max-md:px-4 flex max-md:flex-wrap flex-col justify-center items-center'>
                <h2 className='text-3xl font-bold max-sm:text-lg'>Get in touch</h2>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className='grid grid-cols-2  justify-center gap-6 max-md:grid-cols-1 max-md:gap-5 max-md:px-4'>
                <div className='flex flex-col items-center justify-center pt-20  max-md:p-12 max-sm:pt-10'>



                    <img className=" rounded-[2.5rem] min-w-[260px] w-[70%]" src="/contact.gif" alt="" />

                    <div className="flex gap-6 justify-center items-center pt-6">
                        {/* Discord */}
                        <a
                            href="https://discord.gg/Tj9tYKE9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black text-3xl transition-transform duration-300 hover:scale-125 hover:text-[#7289DA]"
                        >
                            <FaDiscord />
                        </a>

                        {/* Gmail */}
                        <a
                            href="mailto:sayan123desmond@gmail.com"
                            className="text-black text-3xl transition-transform duration-300 hover:scale-125 hover:text-[#D14836]"
                        >
                            <SiGmail />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/sayantan-sen-b53bba253/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black text-3xl transition-transform duration-300 hover:scale-125 hover:text-[#0A66C2]"
                        >
                            <FaLinkedin />
                        </a>
                    </div>





                </div>

                <div>
                    <h3 className='text-center text-2xl text-neutral-600 mb-5 max-sm:text-sm'>Contact with me</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='relative h-[4rem] mb-[2rem]'>
                            <label className='absolute top-[-1.2rem] left-[0rem] text-md bg-transparent z-10  max-sm:text-sm' >Name</label>
                            <input className='absolute top-1.5 left-0 w-[100%] h-[100%] border-2 rounded-[0.75rem] p-[1.5rem] bg-none outline-none z-1' type="text" name='name' placeholder='Write your name' required />
                        </div>

                        <div className='relative h-[4rem] mb-[2rem]'>
                            <label className='absolute top-[-1.2rem] left-[0rem] text-md bg-transparent z-10  max-sm:text-sm' >Email</label>
                            <input className='absolute top-1.5 left-0 w-[100%] h-[100%] border-2 rounded-[0.75rem] p-[1.5rem] bg-none outline-none z-1' type="email" placeholder='Write your email' name="email" required />
                        </div>

                        <div className='relative h-[4rem] mb-[1rem]'>
                            <label className='absolute top-[-1.2rem] left-[0rem] text-md bg-transparent z-10  max-sm:text-sm' >Write me something</label>
                            <textarea className='absolute top-1.5 left-0 w-[100%] h-[10.2rem]  border-2 rounded-[0.75rem] p-[1.5rem] bg-none outline-none z-1' name="writeme" cols="30" rows="10" placeholder='Write me something here '></textarea>
                        </div>
                        <div className='relative h-[4rem] mb-[1rem]'>
                            <motion.button

                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="absolute top-[5rem] flex text-nowrap  max-md:text-sm rounded-lg gap-0.5 mt-5 pb-0.5 border-2 border-black w-[140px] h-[40px] justify-center items-center hover:text-white hover:bg-black"><a >Send Message</a></motion.button></div>
                    </form>

                </div>
            </motion.div>



        </section>
    )
}

export default Contact
