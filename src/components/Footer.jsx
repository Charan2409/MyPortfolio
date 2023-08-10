import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <div className='bg-[#0a192f] lg:hidden mg:hidden xl:hidden text-gray-300 w-full  flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-2xl font-semibold py-2 my-3 text-blue-600'>Connect with me! </h1>
        </div>
        <div className='Links flex justify-between items-center mb-8'>
            <a href='https://www.linkedin.com/in/saicharanbandi1208/'><FaLinkedin size={30} className=' hover:scale-110 duration-100'/></a>
            <a href='https://github.com/Charan2409/'><FaGithub size={30} className='mx-6 hover:scale-110 duration-100'/></a>
            <a href='mailto:saicharanbandi1208@gmail.com'><HiOutlineMail size={35} className=' hover:scale-110 duration-100'/></a>
        </div>
    </div>
  )
}

export default Footer