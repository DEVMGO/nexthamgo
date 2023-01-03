import React from 'react'

const Courses_Data = ({ want, satisfaction, students }) => {
  return (
    <div className='w-full grid grid-cols-18 gap-10 items-center justify-center my-10 bg-courses-data'>
        <div className='w-full h-56 res3:h-44 flex items-center justify-between flex-col p-8 res4:p-3 rounded-xl border border-black66 shadow-2xl bg-white'>
            <h5 className='text-3xl text-blueHamgo'>{want}</h5>
            <p className='text-2xl res4:text-lg text-center w-2/3 text-blueHamgo'>تمایل به شرکت در این دوره را دارند</p>
        </div>
        
        <div className='w-full h-56 res3:h-44 flex items-center justify-between flex-col p-8 res4:p-3 rounded-xl border border-black66 shadow-2xl bg-white'>
            <h5 className='text-3xl text-blueHamgo'>{satisfaction}%</h5>
            <p className='text-2xl res4:text-lg text-center w-2/3 text-blueHamgo'>رضایت از دوره</p>
        </div>
        
        <div className='w-full h-56 res3:h-44 flex items-center justify-between flex-col p-8 res4:p-3 rounded-xl border border-black66 shadow-2xl bg-white'>
            <h5 className='text-3xl text-blueHamgo'>{students}</h5>
            <p className='text-2xl res4:text-lg text-center w-2/3 text-blueHamgo'>دانشجو در این دوره شرکت کرده اند</p>
        </div>
    </div>
  )
}

export default Courses_Data;

Courses_Data.defaultProps = {
    want: 70,
    satisfaction: 87,
    students: 45,
}