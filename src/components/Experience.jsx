import React, { useState } from "react";
// import { Container, Row, Col } from "reactstrap";
import Experiencelist from "./ExperienceList";
import Experiencecontent from "./ExperienceContent";
import "./Experience.css";

const Experience = (props) => {
  const [activeTabId, setActiveTabId] = useState(0);

  function btnClick(id) {
    setActiveTabId(id);
  }

  return (
    <div id="experience" className="mt-[100px]">
      <div>
        <h1 className="text-[42px] text-center text-white font-montserrat">Experience </h1>
      </div>
      <div className="grid sm:grid-cols-9 grid-cols-1 w-full text-white mt-[50px] max-w-[700px] relative mx-auto">
        <div className="sm:col-span-3">
          <div>
            <ul className="sm:max-w-[130px] p-0 ">
              {
                props.data.map((job,index) => (
                  <Experiencelist 
                    key={index}
                    onClick={btnClick}
                    data={job}
                    index={index}
                    activeTabId={activeTabId}
                  />
                ))
              }
            </ul>
          </div>
        </div>
        <div className="sm:col-span-6 mt-3 sm:mt-0">
          {props.data.map((job, index) => (
              <Experiencecontent
                data={job}
                key={index}
                index={index}
                activeTabId={activeTabId}
              />
            ))}
        </div>
        <span
          className={`
            border-l-[130px] border-green-500 absolute inline-block  transition-transform duration-500
            sm:top-0 sm:left-15 sm:w-[2px] sm:h-[42px] top-[40px] left-15 h-[2px] sm:border-l-[2px]
            ${activeTabId === 0
              ? "index1-chosen"
              : activeTabId === 1
              ? "index2-chosen"
              : "index3-chosen"}
            
            `
          }
        >
          &nbsp;
        </span>
      </div>
    </div>
  )
}

export default Experience