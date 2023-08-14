import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import {styles} from '../style'
import {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index,title,icon}) =>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right','spring',0.5*index,0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options ={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' 
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div>
      <p className={styles.heroSubText}> Introduction</p>
      <h2 className={styles.heroHeadText}>Overview</h2>


    </motion.div>
    <motion.p
      variants={fadeIn("","",0.1,1)}    
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' 
    >
      I am a masters student currently pursuing my degree in Computer Science from Rochester Institute of Technology. 
      I am interested in the Software & Web Development field with experience in Python, DSA, javaScript, ReactJs, NodeJs & Databases and am seeking exciting opportunities related to the same.  
      I am always curious about things and enjoy learning. I like to solve problems and love to create 
      beautiful and fast Software & Web apps. I am a detail-oriented person and I keep my goals and tasks organized to maintain
      productivity. I believe that the skills that I am gaining from the creative and competitive college life define me and I am looking forward to implementing and polishing them in any opportunity I receive.

    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key= {service.title} index={index} {...service} />
      ))}

    </div>
    </>
  )
}

export default SectionWrapper(About,'about')