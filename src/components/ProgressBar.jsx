import React from 'react'

const ProgressBar = ({skill,percentage,classPercentage}) => {
  return (
    <div className='h-20'>

    <div className='relative border border-[#00ABF0] w-[300px] flex-col h-6 flex justify-start items-center rounded-md py-2'>
       <span className='self-start relative top-[-35px] text-white'>{skill}</span>
      <span className='self-end  text-white top-[-55px] relative'>{percentage}%</span>
      <div className={`${classPercentage} h-3 bg-[#00ABF0] rounded-sm mx-1 absolute left-0 top-[5px]`}></div>
    </div>
    </div>
  )
}

export default ProgressBar
