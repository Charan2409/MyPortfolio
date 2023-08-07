import React,{useState} from 'react'
import SC from '../assets/SC.png'
import {FaBars,FaTimes,FaGithub, FaLinkedin} from 'react-icons/Fa'
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className='fixed w-full h-[80px] text-gray-300 flex flex-row justify-between items-center px-4 bg-[#0a192f] md:flex'>
        <div>
            <img src={SC} className="h-[70px] cursor-pointer" alt='logo'/>
        </div>
       {/* Main Menu */}
            <ul className=' hidden md:flex'>
                <li >Home</li>
                <li >About</li>
                <li >Skills</li>
                <li >Work</li>
                <li >Contact</li>
            </ul>
        {/* Hamburger */}
        <div onClick={handleNav} className='md:hidden z-10 cursor-pointer mr-0 ml-auto'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile device menu */}
        
            <ul className={!nav ? 'hidden ' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "}>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
                <li className='py-6 text-4xl'>Home</li>
            </ul>
        
        {/* social links */}
         <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/saicharanbandi1208/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Charan2409/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:saicharanbandi1208@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1NHFwcboXni4nr8u9Cz4CVnUNx-XYFuva/view?usp=drive_link'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar