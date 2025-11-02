import React from 'react'

const Footer = () => {
  return (
    <div>
      <section className='bg-blue-600 p-20 text-center'>
        <div>
            <h1 className='text-white text-4xl pb-2 font-bold'>Ready for More Purrfection?</h1>
            <p className='text-gray-200 p-5'>Connect with us to share your own minimalist cat moments or learn more about our philosophy.</p>
            <button className=' bg-white   text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50'>Get in Tech</button>      
        </div>
        
      </section>
      <div className='bg-gray-800 h-15 text-center p-4 '>
          <h1 className='text-gray-400 font-light pl-3'>© 2025 Purrfectly Minimal. All rights reserved. | Contact: <a className='hover:text-white' href="meow@minimal.com">meow@minimal.com</a></h1>
        </div>
    </div> 
  )
}

export default Footer
