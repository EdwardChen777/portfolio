import React from 'react'
import styles from './style'
import { FaLinkedin, FaGithub} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className='my-[200px] lg:mx-[300px] md:mx-[150px] mx-[50px]'>
      <div>
        <h1 className={`${styles.sectionHeader}`}>Contact Me</h1>
      </div>
      <div className='mt-[50px]'>
        <p className='text-white font-opensans text-[20px]'>I am currently looking for a software engineer position and I would love to get connected. If you have a question or want to work together on a project, feel free to reach out!</p>
        <div className='mt-[30px] flex justify-center'>
          <a href='https://www.linkedin.com/in/edwardchen777/' className=' mr-[10px]'>
            <FaLinkedin className='text-[30px] text-white hover:text-green-500' />
          </a>
          <a href='' className='ml-[10px]'>
            <FaGithub className='text-[30px] text-white hover:text-green-500'/>
          </a>
        </div>
        <div className='w-full flex justify-center mt-[35px]'>
          <a href='mailto:edwardchen5414@gmail.com' className=''>
            <button className={`${styles.normalButton}`}>
              <p className=''>Let&#39;s Connect</p>
            </button>
          </a>
        </div>
        
        
      </div>
    </div>
  )
}

export default Contact