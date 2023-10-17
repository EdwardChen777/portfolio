import React from 'react'

const ExperienceList = (props) => {
    const Clicked = () => {
        props.onClick(props.index);
    };

  return (
    <li key={props.index} style={{ listStyle: "none", textAlign: "left" }} className='sm:flex inline-block'>
      {/* <button
        className="section__Jobs-buttonCompany bg-transparent sm:border-l-[2px]  border-l-dimWhite text-[13px] sm:text-[15px] sm:w-full h-[50px] text-left px-[20px] hover:bg-testCard focus:bg-testCard sm:border-b-[0px] border-b-[2px] border-b-other w-[130px] "
        onClick={Clicked}
        style={
          props.activeTabId === props.index
            ? { color: "#22C55E", backgroundColor: "#2B2B42" }
            : { color: "#ffffffb3" }
        }
      >
        <p>{props.data.company}</p>
        {props.data.companyDescription}
      </button> */}
      {/* <button
        className={`section__Jobs-buttonCompany bg-transparent text-[13px] sm:text-[15px] sm:w-full sm:h-[90px] text-left px-[20px] hover:bg-testCard focus:bg-testCard sm:border-b-[0px] border-b-[2px] border-b-other w-[130px] pt-1 rounded-md mb-1
          ${props.activeTabId === props.index ? "text-white bg-testCard shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" : "text-dimWhite"}
        `}
        onClick={Clicked}
        // style={
        //   props.activeTabId === props.index
        //     ? { color: "#22C55E", backgroundColor: "#2B2B42" }
        //     : { color: "#ffffffb3" }
        // }
      >
        <p>{props.data.company}</p>
        <p className='mt-1 hidden sm:block'>{props.activeTabId === props.index ? props.data.companyDescription : ""}</p>
      </button> */}
      <div className="wrapper w-full">
        <div className={`tab px-5 shadow-lg mb-2 rounded-md hover:translate-x-4 duration-300 
          ${props.activeTabId === props.index ? "shadow-2xl shadow-blue-500/20 translate-x-4 duration-300 bg-testCard": ""}
        `}>
          <input type="radio" name="faq" id={`faq-${props.index+1}`} className="appearance-none peer" />
          <label htmlFor={`faq-${props.index+1}`}
            className="flex items-center cursor-pointer font-semibold text-lg"
            onClick={Clicked}
          >
            {/* <h2 class=" w-8 h-8 bg-cyan-300 text-white flex justify-center items-center rounded-sm mr-3">01</h2> */}
            <h3
              className={`${props.activeTabId === props.index ? "": "text-dimWhite"}`}
            >{props.data.company}</h3>
          </label>
          <div className="answer content mt-1 pb-1 h-0 transition ease-in-out duration-300 delay-300 overflow-hidden peer-checked:h-full">
            <p className='text-[14px] text-dimWhite'>
              {props.data.companyDescription}
            </p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ExperienceList