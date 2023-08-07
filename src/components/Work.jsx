import React from 'react'
import reactshopsense from '../assets/projects/reactshopsense.png'
import namastefoodapp from '../assets/projects/namastefoodapp.png'
import weather from "../assets/projects/weather.png"
import todo from '../assets/projects/todo.png'

const Work = () => {
  return (
    <div className='bg-[#0a192f] w-full md:h-screen text-gray-300' name="work">
        {/* work container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl border-b-4 border-pink-600 inline font-bold'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>
            {/* below is the card item div */}
            <div style={{ backgroundImage: `url(${reactshopsense})`}} className='grid sm:grid-cols-2 md:grid-cols-3 gap-4' >
                {/* card item  */}
                <div className='shadow-lg shadow-[#040c16] group container rounded-sm flex justify-center items-center mx-auto content-div'>
                    {/* hover effects for cards */}
                    <div>
                        <span>
                            {/* <img src={reactshopsense}/> */}
                        </span>
                        <div>
                            <a href='/'>
                                <button>Demo</button>
                            </a>
                            <a href='/'>
                                <button>GitHub</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work