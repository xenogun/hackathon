"use client"

import { useState } from "react"

export default ()=>{
    const [firstname,setFirstName]=useState('')
    const [lastname,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    return(
        <>
        <div className="flex items-center justify-center w-screen h-screen bg-green-300  ">
           <form className="flex items-center gap-10 flex-col bg-white p-6 rounded-lg border shadow-xl">
<input type="text" value={firstname} placeholder="firstname..." className="rounded-full hover:bg-gray-200 p-2 w-80 border shadow-lg text-lg " onChange={(e)=>setFirstName(e.target.value)}  />
<input type="text" value={lastname}  placeholder="lastname...." className="rounded-full hover:bg-gray-200 p-2 w-80 border shadow-lg text-lg " onChange={(e)=>setLastname(e.target.value)}  />
<input type="text" value={email}     placeholder="email..." className="rounded-full hover:bg-gray-200 p-2 w-80 border shadow-lg text-lg " onChange={(e)=>setEmail(e.target.value)}/>
<input type="text" value={password}  placeholder="password...." className="rounded-full hover:bg-gray-200 p-2 w-80 border shadow-lg text-lg " onChange={(e)=>setPassword(e.target.value)}/>
<button className="rounded-full bg-black text-white px-6 py-2 font-semibold">Sign in</button>
           </form>
        </div>
        </>
    )
}