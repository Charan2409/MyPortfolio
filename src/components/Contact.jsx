import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-[#0a192f] w-full h-screen flex justify-center items-center text-gray-300'>
        <form action='https://getform.io/f/e3c7bc80-80b3-4143-9127-ff46d7893eae' className='flex flex-col max-w-[600px] w-full' method='POST'>
            <div className='pb-6'>
                <p className='text-4xl font-bold border-b-4 border-pink-600 inline'>Contact</p>
                <p className='py-2'>Submit the form below or shootme an email - saicharanbandi1208@gmail.com</p>
            </div>
                <input className="bg-[#ccd6f6] p-2 border-2 text-black" type='text' placeholder='Name' name='name'></input>
                <input className='my-4 bg-[#ccd6f6] p-2 border-2 text-black' type='email' placeholder='Email' name='email'></input>
                <textarea className='bg-[#ccd6f6] p-2 border-2 text-black' placeholder='Message' name='message' rows="10"></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-4 mx-auto flex items-center'>Let's collaborate</button>
        </form>
    </div>
  )
}

export default Contact;