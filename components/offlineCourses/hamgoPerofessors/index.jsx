import React from 'react'
import SliderPesofessors from './sliderPesofessors'

const HamgoPerofessors = () => {
  return (
    <div className='w-full flex items-center justify-between flex-col bg-blueHamgo mt-20 pt-10'>
        <h3 className='text-white text-3xl'>اساتید همگو</h3>

        <div className='w-11/12 mt-10'>
            <SliderPesofessors />
        </div>

        <div className='w-full h-72 z-50 border-l-[100vw] border-l-transparent border-solid border-b-[25vh] border-b-white'></div>
    </div>
  )
}

export default HamgoPerofessors