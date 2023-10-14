import styles from "./style";
import { data } from "../data/data.js";
import {AiFillGithub, AiFillYoutube, AiFillChrome} from 'react-icons/ai';
import "./project.css";

const Project = () => {
  return (
    <div id="projects" className='mt-[200px] mx-auto ' >
      <div>
        <h1 className="text-[42px] text-center text-white font-montserrat">Project </h1>
      </div>
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-6 mt-[50px] place-content-center justify-center mx-auto '>
        {data.map((item, index) => (
              <div key={index} style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover"}} className='bg-cover container rounded-md flex justify-center items-center text-center h-[300px] item'>
                <div className='sm:opacity-0 sm:hover:opacity-100 transition duration-100 ease-in-out bg-green-600 rounded-md w-full h-full text-white font-opensans'>
                  <h1 className="text-2xl font-bold text-white tracking-wider pt-[80px]">{item.name}</h1>
                  <p className="text-sm mb-[10px] relative w-4/5 mx-auto">{item.description}</p>
                  <div className='flex justify-center '>
                    <a href={item.github} target="_blank" rel="noreferrer">
                      <button className={`${styles.iconButton}`}>
                        <AiFillGithub />
                      </button>
                      
                    </a>
                    <a href={item.youtube} target="_blank" rel="noreferrer">
                      <button className={`${styles.iconButton}`}>
                        <AiFillYoutube />
                      </button>
                      
                    </a>
                    <a href={item.live} target="_blank" rel="noreferrer">
                      <button className={`${styles.iconButton}`}>
                        <AiFillChrome />
                      </button>
                      
                    </a>
                  </div>
                </div>
              </div>
        ))}
      </div>
    </div>
  )
}

export default Project