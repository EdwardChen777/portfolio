import React from 'react'

const ExperienceContent = (props) => {
    let data = props.data;

  return (
    <div
      key={props.index}
      className="text-left text-other"
      style={
        props.activeTabId === props.index
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <h4 className='text-white sm:text-[30px] text-[25px] font-medium'>{data.role}</h4>
      <h5 className='text-[15px] tracking-wider mb-[30px] text-green-500'>{data.time}</h5>
      {data.description.map(detail => (
        <p className="sm:text-[20px] text-[18px] mb-[10px] text-dimWhite">{detail}</p>
      ))}
    </div>
  )
}

export default ExperienceContent