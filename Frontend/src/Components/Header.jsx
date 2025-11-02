import React from 'react'

const Header = () => {
  return (
    <> 
    
    <header className='py-4 px-6 md:px-5 bg-white shadow-sm border-b border-gray-100 sticky top-0 z-10'>
     <div className='flex justify-between items-center p-1 '>
        <h1 className='text-2xl font-bold tracking-wider'>Purrfectly Minimal</h1>
        <nav>
            <ul className='flex space-x-6 text-gray-700'>
                <li>
                    <a href="#About" className='hover:text-indigo-600  text-1xl transition duration-150'>About</a>
                </li>
                <li>
                    <a href="#Gallery" className='hover:text-indigo-600 text-1xl transition duration-150'>Gallery</a>
                </li>
                <li>
                    <a href="#Contact"className='hover:text-indigo-600 text-1xl transition duration-150'>Contact</a>
                </li>
            </ul>
        </nav>
    </div> 
    </header>
    </>
  )
}

export default Header
