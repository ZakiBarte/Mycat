import {useEffect, useState } from "react"
const  Gallery = () => {
    const [cat, setCat] = useState([])
    const catsArry = async ()=>{
            try {
            
                const res = await fetch("https://localhost:5000")
                const data = await res.json()
                setCat( data)
            } catch (error) {
                console.error("there is no data stored in the server", error)
                
            }finally{
        
      } 
        }
       useEffect(()=>{
        catsArry()
       }, [])
  return (
    <div >
        <section id="Gallery" className="bg-gray-50 pt-10 ">
        <div className="grid grid-cols-3 gap-4 w-300 m-10  mb-5 p-10  ">
            {cat.map((cat, index)=>(
           <img   key={index} src={cat.url} alt="cat"    className="w-90 h-64 object-cover rounded-2xl shadow-md "/> 
        ))}
      </div>
      </section>
      </div>
    
  )
}

export default  Gallery
