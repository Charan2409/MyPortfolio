import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full   gap-8'>
                <div className='sm:text-right md:text-left lg:text-left justify-start pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right lg:text-justify md:text-justify text-xl font-bold pl-4'>
                        <p>Hello, I'm  Sai Charan Bandi,</p>
                        <p className='text text-blue-500'>June 2021 - Present</p>
                        <p className='text text-lg'>Working as a Front End Developer at Tata Consultancy Services,Hyderabad.</p>
                        <p></p>
                </div>
                    <div className='mb-28'>
                        <p>Passionate about building excellent software that enriches lives,With a strong proficiency in React.js, I craft exceptional web experiences. I specialize in creating solutions for individuals, small businesses, and large enterprises alike. Imagine having a software expert readily available at your fingertips!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About