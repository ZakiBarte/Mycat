const Section = () => {
  return (
    <div>
      <section className=' bg-blue-50' >
        <div className=' flex justify-baseline sm:flex sm:flex-row  sm:gpa-3'>
        <div className='m-20 ml-40 mr-0 w-130 flex-col items-center'>
            <h1 className='tracking-tighter font-extrabold text-6xl ml-30'>Embrace The </h1>
            <h1 className='tracking-tighter font-extrabold text-6xl ml-40 mt-4'>Cozy Life.</h1>
            <p className='text-2xl text-gray-600 mb-8 mx-auto mt-4'>Discover the simple, elegant world of our feline <span className='ml-24'>friends. Less clutter, more purrs.</span> </p>
            <button className='ml-40 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50'>Explore Our Felines</button>
        </div>
        <img  className=' m-20 ml-0 mr-0 w-110 h-80 rounded-3xl' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/A-Cat.jpg/960px-A-Cat.jpg?20101227100718" alt="" />
        </div>
      </section>
    </div>
  )
}
export default Section
