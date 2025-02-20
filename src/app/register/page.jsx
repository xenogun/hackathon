"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { motion } from "framer-motion";
import axios from "axios"

export default ()=>{
    const [firstname,setFirstName]=useState('')
    const [lastname,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const router = useRouter();

    const submit = async (e) => {
  
      e.preventDefault();
  
      try {
        const response = await axios.post(
          "http://localhost:5000/register",{
          email,
          password,
          firstname,
          lastname,
          } 
        );
        router.push("/"); 
      } catch (err) {
        console.error("Login error:", err.message);
      }
    };
    
    const swipeAnimation = {
      initial: { opacity: 0, x: 200 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: "easeOut" },
    };


    return(
        <>
        <div className="flex items-center justify-center w-screen h-screen bg-green-300  ">
        <motion.form
            onSubmit={submit}
            className="flex bg-gray-100 items-center justify-center flex-col hover:shadow-lg transition-all duration-200 gap-10 p-4 rounded-lg"
            {...swipeAnimation}
          >
<input type="text" value={firstname} placeholder="firstname..." className="rounded-full hover:bg-gray-200 p-2 w-80 border shadow-lg text-lg " onChange={(e)=>setFirstName(e.target.value)}  />
<input type="text" value={lastname}  placeholder="lastname...." className="rounded-full hover:bg-gray-200 p-2 w-80 border shadow-lg text-lg " onChange={(e)=>setLastname(e.target.value)}  />
<input type="text" value={email}     placeholder="email..." className="rounded-full hover:bg-gray-200 p-2 w-80 border shadow-lg text-lg " onChange={(e)=>setEmail(e.target.value)}/>
<input type="password" value={password}  placeholder="password...." className="rounded-full hover:bg-gray-200 p-2 w-80 border shadow-lg text-lg " onChange={(e)=>setPassword(e.target.value)}/>
<button className="rounded-full bg-black text-white px-6 py-2 font-semibold">Sign in</button>
           </motion.form>
        </div>
        </>
    )
}