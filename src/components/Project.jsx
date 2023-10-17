import styles from "./style";
import { data } from "../data/data.js";
import {AiFillGithub, AiFillYoutube, AiFillChrome} from 'react-icons/ai';
import "./project.css";

// const ProjectCard = ({index,item}) => {
//   return (
//     <div key={index} style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover"}} className='bg-cover container rounded-md flex justify-center items-center text-center h-[300px] item'>
//       <div className='sm:opacity-0 sm:hover:opacity-100 transition duration-100 ease-in-out bg-green-600 rounded-md w-full h-full text-white font-opensans'>
//         <h1 className="text-2xl font-bold text-white tracking-wider pt-[80px]">{item.name}</h1>
//         <p className="text-sm mb-[10px] relative w-4/5 mx-auto">{item.description}</p>
//         <div className='flex justify-center '>
//           <a href={item.github} target="_blank" rel="noreferrer">
//               <button className={`${styles.iconButton}`}>
//                 <AiFillGithub />
//               </button>
//           </a>
//           <a href={item.youtube} target="_blank" rel="noreferrer">
//               <button className={`${styles.iconButton}`}>
//                 <AiFillYoutube />
//               </button>
//           </a>
//           <a href={item.live} target="_blank" rel="noreferrer">
//             <button className={`${styles.iconButton}`}>
//               <AiFillChrome />
//             </button>
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// };

const ProjectCard = ({index,item}) => {
  return (
    <div className="bg-testCard text-white p-5 rounded-2xl sm:w-[400px] w-full font-opensans duration-500 hover:-translate-y-4 hover:shadow-[0_10px_20px_rgba(34,_197,_194,_0.8)]">
      <div className="w-full h-[230px]">
        <img src={item.image} alt="project_image" className="w-full h-full object-cover rounded-2xl"/>
      </div>

      <div className="mt-5">
        <div className="flex flex-wrap justify-between items-center">
          <h3 className="font-bold text-[24px]">{item.name}</h3>
          <a href={item.github} target="_blank" rel="noreferrer" className="hover:text-green-500 duration-300 ease-in-out">
            <AiFillGithub className="text-[24px]"/>
          </a>
        </div>
        <p className="mt-2 text-[14px]">{item.description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-1">
        {item.skills.map((skill) => (
          <p className="text-[14px] rounded-md bg-primary px-2">
            {skill}
          </p>
        ))}
      </div>
    </div>
    
  )
};

const Project = () => {
  return (
    <div id="projects" className='mt-[200px] mx-auto ' >
      <div>
        <h1 className="text-[42px] text-center text-white font-montserrat">Project </h1>
      </div>
      {/* <div className='grid sm:grid-cols-2 grid-cols-1 gap-6 mt-[50px] place-content-center justify-center mx-auto '>
        {data.map((item, index) => (
              <ProjectCard key={`project-${index}`} index={index} item={item} />
        ))}
      </div> */}
      <div className='mt-20 flex flex-wrap gap-8'>
        {data.map((item, index) => (
              <ProjectCard key={`project-${index}`} index={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Project