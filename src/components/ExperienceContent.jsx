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
      <h4 className='text-white text-[22px] font-medium'>{data.role}</h4>
      <h5 className='text-[13px] tracking-wider mb-[30px] text-green-500'>{data.time}</h5>
      {data.description.map(detail => (
        <p className="text-[16px] mb-[10px] text-dimWhite">{detail}</p>
      ))}
    </div>
  )
}

export default ExperienceContent