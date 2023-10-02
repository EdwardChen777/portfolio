import styles from './style';
// import Typed from "typed.js";
import { useEffect, useState, useRef } from "react";
import profile from "../imgs/profile.png";
import Aos from "aos";
import "aos/dist/aos.css";


const Home = () => {
    useEffect(() => {
        Aos.init({duration:1500});
    },[]);

    // const el = useRef(null);

    // useEffect(() => {
    //   const typed = new Typed(el.current, {
    //     strings: ["Software Engineer", "Project Manager", "Entrepreneur"], // Strings to display
    //     // Speed settings, try diffrent values untill you get good results
    //     startDelay: 300,
    //     typeSpeed: 100,
    //     backSpeed: 50,
    //     backDelay: 1000,
    //     loop: true
    //   });
  
    //   // Destropying
    //   return () => {
    //     typed.destroy();
    //   };
    // }, []);

  return (
    <div className={`bg-primary ${styles.flexStart} pt-[100px]`}>
        <div className={`${styles.boxWidth}`}>
          
          <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
                <div className='flex flex-row justify-between items-center w-full'>
                    <h2 data-aos="fade-right" className={`flex-1 font-montserrat font-semibold ss:text-[44px] text-[32px] text-white ss:leading-[80px] leading-[75px]`}>
                        Hi, I am Edward!
                        {/* <br className="sm:block" />I am a <span ref={el}></span> */}
                        <br />
                        <span className=""> I am a Software Engineer</span>
                    </h2>
                </div>
                <p data-aos="fade-right" className={`${styles.paragraph} max-w-[600px] mt-5 font-opensans `}>
                    I am a recent graduate from Carnegie Mellon University studying <span className='text-green-500'>Information Systems</span> and 
                    <span className='text-green-500'> Business</span>. I am passionate in creating innovative solutions that will make positive impact on the world.
                </p>
                <div data-aos="fade-right" className={`mt-5 mb-5 md:mb-0 `}>
                    <a href='#contact' className='mr-5'>
                        <button className={`${styles.normalButton}`}>
                        <p className=''>Work with me</p>
                        </button>
                    </a>
                    <a href='#projects' className=''>
                        <button className={`${styles.normalButton}`}>
                            <p className=''>See My Past Work</p>
                        </button>
                    </a>
                </div>
                
            </div> 
            <div className={`flex-1 ${styles.flexEnd} flex-col xl:px-0 sm:px-16 px-6 mt-[15px] sm:mt-0 `} >
                <img data-aos="fade-left" src={profile} alt="profile" className='w-[300px] sm:w-[350px] m-auto'/>
            </div>

          </section>

        </div>
    </div>
  )
}

export default Home