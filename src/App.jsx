import styles from "./style"
import { Navbar, Home, Experience, Project, Contact } from './components';
import { jobs } from "./data/data.js";

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <Navbar className=""/>
      <Home/>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} pt-[100px] absolute -z-10`}>
        <div className={`${styles.boxWidth}`}>
          <Experience data={jobs} />
          <Project />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App