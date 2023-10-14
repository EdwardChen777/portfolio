import React from 'react'

const ExperienceList = (props) => {
    const Clicked = () => {
        props.onClick(props.index);
    };

  return (
    <li key={props.index} style={{ listStyle: "none", textAlign: "left" }} className='sm:flex inline-block'>
      <button
        className="section__Jobs-buttonCompany bg-transparent sm:border-l-[2px]  border-l-dimWhite text-[13px] sm:text-[15px] sm:w-full h-[50px] text-left px-[20px] hover:bg-focusBG focus:bg-focusBG sm:border-b-[0px] border-b-[2px] border-b-other w-[130px] "
        onClick={Clicked}
        style={
          props.activeTabId === props.index
            ? { color: "#22C55E" }
            : { color: "#ffffffb3" }
        }
      >
        {props.data.company}
      </button>
    </li>
  )
}

export default ExperienceList