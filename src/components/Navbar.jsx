import styles from "./style"
import logo from "../imgs/logo.png";
import close from "../imgs/close.svg";
import menu from "../imgs/menu.svg";
import { useState, useEffect } from "react";
import { navLinks, resumeLink } from "../constants/index";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY
    
        if(currentScrollPos > prevScrollPos){
            setVisible(false)
        }else{
            setVisible(true)
        }
    
        setPrevScrollPos(currentScrollPos)
    }
    
    useEffect( () => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll)
    })
    // ${visible ? 'visible' : 'invisible'} 
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} ${visible ? 'opacity-100 bg-primary' : 'opacity-0'} fixed w-full transition ease-in-out duration-300 h-[100px]`}>
        <div className={`${styles.boxWidth}`}>

          <nav className='w-full flex py-6'>
            <div className='flex justify-start items-center flex-1'>
                <a href="#home">
                    <img src={logo} alt="edward chen's logo" className='h-[45px]'/>
                </a>
                
                <a href="#home" className={`ml-3 text-white font-montserrat ${active === "home" ? "text-green-500" : "text-dimWhite"} `} onClick={() => setActive("home")}>
                    Edward Chen
                </a>
            </div>
            

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={`font-montserrat font-normal cursor-pointer text-[16px] 
                    ${active === nav.title ? "text-green-500" : "text-dimWhite"} 
                    ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                    onClick={() => setActive(nav.title)}
                >
                    {index === navLinks.length - 1 ? <a href={resumeLink} target="_blank" rel="noreferrer" className="cursor-pointer rounded-md px-2 py-1  transition duration-300 ease-in-out border-2 border-green-500 hover:bg-green-500 text-green-500 hover:text-white">
                    <span className="">Resume</span></a> : 
                    <a href={`#${nav.id}`} className='hover:text-green-500'>{nav.title}</a>}
                </li>
                ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle(!toggle)}
                />

                <div
                className={`${
                    !toggle ? "hidden" : "flex"
                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-medium cursor-pointer text-[16px] ${
                            active === nav.title ? "text-white" : "text-dimWhite"
                            } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>

          </nav>

        </div>
      </div>
  )
}

export default Navbar