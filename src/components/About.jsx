import React from 'react'
import MernStack from '../assets/mernstack.png'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'


import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'
import NodeLogo from '../assets/NodeLogo.png'
import Mongodb from '../assets/mongodb.svg'
import Express from '../assets/Express.png'
import NextJs from '../assets/NextJs.png'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className='relative' id='about'>
            <div className=' py-12  bg-rose-100'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <motion.div
                    initial={{opacity:0, scale:0.5}}
                     whileInView={{opacity:1, scale:1}}
                     transition={{duration:1.5, delay:0.4}} 
                     className='text-center'>
                        <h2 className='text-base text-red-600  tracking-wide uppercase font-bold'>About Me</h2>
                        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Hi, I'm TOHIDUL  <span className='text-red-500'>ISLAM</span> </p>
                        <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                           I'm a Full-Stack Developer with expertise in the MERN stack, WordPress, and SEO. I build fast, responsive, and user-friendly websites that not only look great but also perform well in search engines—helping businesses grow through powerful, scalable, and optimized web solutions.
                        </p>
                    </motion.div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                            <div>
                                <motion.h3 
                                initial={{opacity:0, scale:0.5}}
                                  whileInView={{opacity:1, scale:1}}
                                   transition={{duration:1.5, delay:0.4}} 
                                className='text-2xl font-semibold text-gray-900'>My Journey</motion.h3>
                                <motion.p 
                                initial={{opacity:0, scale:0.5}}
                                  whileInView={{opacity:1, scale:1}}
                                   transition={{duration:1.5, delay:0.4}} 
                                className='mt-4 text-lg text-gray-600'>
                                   As a co-founder and COO of <span className='text-red-600'>Skybridge Digital</span>, a web development and digital marketing agency, I've been fortunate to have a diverse career path. I've honed my skills in the MERN stack, crafting robust, scalable web applications that meet the needs of clients. I've also developed a deep understanding of digital marketing, helping businesses reach their target audiences and grow their online presence. From concept to deployment, I've been at the forefront of innovation, using my expertise to deliver impactful digital solutions that drive business success.
                                </motion.p>
                                <img src={MernStack} alt="" className='p-2 rounded-lg w-52 mt-4' />
                            </div>
                            <motion.div
                            initial={{opacity:0, scale:0.5}}
                                  whileInView={{opacity:1, scale:1}}
                                   transition={{duration:1.5, delay:0.4}} 
                             className='border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300 hover:shadow-2xl transition-all hover:bg-red-200 hover:scale-105 hover:shadow-sky-300'>
                                <h3 className='text-2xl font-semibold text-red-600'>Skills & Expertise</h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>
                                    <motion.div
                                    initial={{opacity:0, scale:0.5}}
                                  whileInView={{opacity:1, scale:1}}
                                   transition={{duration:1.5, delay:0.4}} 
                                     className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md hover:shadow-2xl transition-all hover:bg-red-200 hover:scale-105 hover:shadow-sky-300'>
                                        <img src={Html} alt="" className='w-10' />
                                        <span className='font-semibold'>HTML</span>
                                    </motion.div>
                                    <motion.div
                                    initial={{opacity:0, scale:0.5}}
                                  whileInView={{opacity:1, scale:1}}
                                   transition={{duration:1.5, delay:0.4}} 
                                     className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300 hover:shadow-2xl transition-all hover:bg-red-200 hover:scale-105 hover:shadow-sky-300'>
                                        <img src={Css} alt="" className='w-8' />
                                        <span className='font-semibold'>CSS</span>
                                    </motion.div>
                                    <motion.div
                                    initial={{opacity:0, scale:0.5}}
                                  whileInView={{opacity:1, scale:1}}
                                   transition={{duration:1.5, delay:0.4}} 
                                     className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300 hover:shadow-2xl transition-all hover:bg-red-200 hover:scale-105 hover:shadow-sky-300'>
                                        <img src={Javascript} alt="" className='w-10' />
                                        <span className='font-semibold'>Javascript</span>
                                    </motion.div>
                                    <motion.div
                                    initial={{opacity:0, scale:0.5}}
                                  whileInView={{opacity:1, scale:1}}
                                   transition={{duration:1.5, delay:0.4}} 
                                     className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300 hover:shadow-2xl transition-all hover:bg-red-200 hover:scale-105 hover:shadow-sky-300'>
                                        <img src={ReactLogo} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>React</span>
                                    </motion.div>
                                    <motion.div
                                    initial={{opacity:0, scale:0.5}}
                                  whileInView={{opacity:1, scale:1}}
                                   transition={{duration:1.5, delay:0.4}} 
                                    className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300 hover:shadow-2xl transition-all hover:bg-red-200 hover:scale-105 hover:shadow-sky-300'>
                                        
                                    </motion.div>
                                    <motion.div 
                                    initial={{opacity:0, scale:0.5}}
                                  whileInView={{opacity:1, scale:1}}
                                   transition={{duration:1.5, delay:0.4}} 
                                    className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300 hover:shadow-2xl transition-all hover:bg-red-200 hover:scale-105 hover:shadow-sky-300'>
                                        <img src={Tailwind} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>Tailwind Css</span>
                                    </motion.div>
                                    <motion.div
                                    initial={{opacity:0, scale:0.5}}
                                  whileInView={{opacity:1, scale:1}}
                                   transition={{duration:1.5, delay:0.4}} 
                                     className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300 hover:shadow-2xl transition-all hover:bg-red-200 hover:scale-105 hover:shadow-sky-300'>
                                        <img src={Bootstrap} alt="" className='w-10' />
                                        <span className='font-semibold'>Bootstrap</span>
                                    </motion.div>
                                    <motion.div
                                    initial={{opacity:0, scale:0.5}}
                                  whileInView={{opacity:1, scale:1}}
                                   transition={{duration:1.5, delay:0.4}} 
                                     className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300 hover:shadow-2xl transition-all hover:bg-red-200 hover:scale-105 hover:shadow-sky-300'>
                                        <img src={NodeLogo} alt="" className='w-10' />
                                        <span className='font-semibold'>Node Js</span>
                                    </motion.div>
                                    <motion.div 
                                    initial={{opacity:0, scale:0.5}}
                                  whileInView={{opacity:1, scale:1}}
                                   transition={{duration:1.5, delay:0.4}} 
                                    className='border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300 hover:shadow-2xl transition-all hover:bg-red-200 hover:scale-105 hover:shadow-sky-300'>
                                        <img src={Mongodb} alt="" className='w-10' />
                                        <span className='font-semibold'>Mongodb</span>
                                    </motion.div>
                                    <motion.div
                                    initial={{opacity:0, scale:0.5}}
                                  whileInView={{opacity:1, scale:1}}
                                   transition={{duration:1.5, delay:0.4}} 
                                     className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300 hover:shadow-2xl transition-all hover:bg-red-200 hover:scale-105 hover:shadow-sky-300'>
                                        <img src={Express} alt="" className='w-10' />
                                        <span className='font-semibold'>Express Js</span>
                                    </motion.div>
                                    <motion.div
                                    initial={{opacity:0, scale:0.5}}
                                  whileInView={{opacity:1, scale:1}}
                                   transition={{duration:1.5, delay:0.4}} 
                                     className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300 hover:shadow-2xl transition-all hover:bg-red-200 hover:scale-105 hover:shadow-sky-300'>
                                        <img src={NextJs} alt="" className='w-9' />
                                        <span className='font-semibold'>Next Js</span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                    initial={{opacity:0, scale:0.5}}
                                  whileInView={{opacity:1, scale:1}}
                                   transition={{duration:1.5, delay:0.4}} 
                     className='mt-12'>
                        <h3 className='text-2xl font-semibold text-gray-900'>More About Me</h3>
                        <p className='mt-4 text-lg text-gray-600'>
                            Apart from coding, I am passionate about learning new technologies and keeping myself up-to-date with the latest trends in web development. MERN Stack development, Wordpress and digital Marketing, helping others dive deep into the world of programming and technology.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About
