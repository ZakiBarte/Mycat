
const About = () => {
  return (
    <div>
      <section id='About' className='bg-white pt-10'>
        <div className='flex justify-between gap-10 m-10 '> 
            <img className=' w-150 h-100 rounded-2xl' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Greycat.jpg/960px-Greycat.jpg?20060625143415" alt="" />
            <div className='mt-15 w-300'>
            <h1 className='text-4xl font-bold mb-6'>Our Philosophy: Simplicity, Serenity, Purrs.</h1>
            <p className='mb-6 text-gray-600'>We believe that true happiness is found in the little things: a warm sunbeam, a comfortable nap, and the quiet, unwavering companionship of a contented cat. This page reflects that ethos – less clutter, more moments of peace.</p> 
            <p className='text-gray-600'>Our mission is to celebrate the minimalist charm of feline life and inspire a more tranquil existence.</p> 
            </div>
             
        </div>
      </section>
   
    </div>
  )
}

export default About
