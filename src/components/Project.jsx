import React from 'react'
const Project = ({img,title,technology}) => {
  return (
    <div className={`w-[300px] h-[250px] bg-[#00ABF0] relative  rounded cardContainer flex flex-col gap-2 items-center justify-center`}>
        <img src={img} alt="0" className='absolute w-[97%] h-[97%] left-[50%] top-[50%] object-cover rounded-md'/>
      <div className="cover absolute w-full h-full  bg-black opacity-70 rounded flex flex-col items-center justify-center  top-0 left-0">
      </div>
      <h1 className='text-3xl text-white z-50 text-bold'>{title}</h1>
        <h1 className='text-xl text-white text-center z-50'>{technology}</h1>
        <span className="uncoverAnimation z-50 bg-[#081B29]"></span>
    </div>
  )
}

export default Project
