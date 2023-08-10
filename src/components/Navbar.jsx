import React,{useState} from 'react'
import SC from '../assets/SC.png'
import {FaBars,FaTimes,FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll';
import Home from './Home';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className='fixed w-full h-[80px] text-gray-300 flex flex-row justify-between items-center px-4 bg-[#0a192f] md:flex'>
        <div>
            <Link to='home' smooth={true} duration={500}>
              <img src={SC} className="h-[70px] cursor-pointer hover:scale-110 duration-300" alt='logo'/>
            </Link>
        </div>
       {/* Main Menu */}
            <ul className=' hidden md:flex '>
                <li className='hover:text-pink-500 hover:scale-110 duration-200'>
                  <Link to='home' smooth={true} duration={500}>Home</Link>
                </li>
                <li className='hover:text-pink-500 hover:scale-110 duration-200'><Link to='about' smooth={true} duration={500}>About</Link></li>
                <li className='hover:text-pink-500 hover:scale-110 duration-200'><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li className='hover:text-pink-500 hover:scale-110 duration-200'><Link to='work' smooth={true} duration={500}>Work</Link></li>
                <li className='hover:text-pink-500 hover:scale-110 duration-200'><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>
        {/* Hamburger */}
        <div onClick={handleNav} className='md:hidden z-10 cursor-pointer mr-0 ml-auto'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile device menu */}
        
            <ul className={!nav ? 'hidden ' : "flex flex-col p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] text-black z-10 rounded-xl"}>
                <li className='py-6 text-4xl'><Link onClick={handleNav} to='home' smooth={true} duration={500}>Home</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleNav} to='about' smooth={true} duration={500}>About</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleNav} to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleNav} to='work' smooth={true} duration={500}>Work</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleNav} to='contact' smooth={true} duration={500}>Contact</Link></li>
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