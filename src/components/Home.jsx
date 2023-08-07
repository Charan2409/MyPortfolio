import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='bg-[#0a192f] w-full h-screen'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full sm:h-full'>
            <p className='text-pink-600'>Hi, my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Sai Charan Bandi</h1>
        <h2 className='text-[#8892b0] text-4xl sm:text-7xl font-bold'>I'm a Front End Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Experienced Front-End Developer with a passion for creating clean and intuitive user interfaces. Proficient in HTML, CSS, JavaScript & React.JS,  with a focus on responsive design and cross-browser compatibility. Collaborative team player with a track record of delivering high-quality projects on time. Let's build exceptional web experiences together.</p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600'>View work
                <span>
                     < HiArrowNarrowRight className='group-hover:rotate-90 duration-300 ml-3'/>
                </span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Home