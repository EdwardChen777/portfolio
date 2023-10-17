import React from 'react'

const ExperienceContent = (props) => {
    let data = props.data;

  return (
    <div
      key={props.index}
      className="text-left text-other "
      style={
        props.activeTabId === props.index
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <div>
        <h4 className='text-white sm:text-[30px] text-[25px] font-medium'>
          {data.role}
          <span className='text-green-500'> @{data.company}</span>
        </h4>
      </div>
      
      <h5 className='text-[15px] tracking-wider mb-[30px] text-green-500'>{data.time}</h5>
      {data.description.map(detail => (
        <div className='flex gap-5'>
          <p className='text-[18px] text-green-500'>&#x2022;</p>
          <p className="sm:text-[20px] text-[18px] mb-[10px] text-white">
            {detail}
          </p>
        </div>
        
      ))}
    </div>
  )
}

export default ExperienceContent