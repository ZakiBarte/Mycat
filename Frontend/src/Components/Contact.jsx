import { useState } from "react"
const Contact = () => {   
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
 

       
          return( loading ?
          <div className="max-w-3xl mx-auto mt-30 mb-30 items-center " >
            <h1 className="text-center text-4xl font-bold">Contact Us</h1> 
        <h1 className="text-center text-2xl text-blue-700 font-medium ">
      🎉 We’ve received your message, Mr/Mrs {name}! </h1>
         <h1 className="text-center text-2xl  text-blue-700 font-medium">We’ll reach you at {email} soon. </h1>
    </div>
          
          :
          <div>
      <section  id="Contact" className="" >
      <div className="max-w-3xl mx-auto mt-30 mb-30 items-center ">
         <h1 className="text-center text-4xl font-bold">Contact Us</h1>
       <div className="mt-10">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} required placeholder='Your Name'  className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
        </div>
        <div className="mt-5 mb-5">
            <label  htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='you@example.com'  className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
        </div>
        
        <div className="flex justify-center">
           <button  onClick={()=> setLoading(true)} className=" bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 ">
            Send Message</button>
        </div>
      </div>
      </section>
            </div>
            
        
        )
      
    }
  

export default Contact
