"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { loginAction } from "@/lib/store/authSlice";
import axios from "axios"

export default () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [users,setUsers]=useState([])

    const isConnected = useSelector((state) => state.user.isConnected);

    const dispatch = useDispatch();
    const router = useRouter();
  
    const submit = async (e) => {
      e.preventDefault(); 
      try {
        const response = await axios.post("http://localhost:5000/login", {
          email,
          password,
        });
          localStorage.setItem("token", response.data.token);
  dispatch(loginAction(response.data.user))
          router.push("/");
      } catch (error) {
        console.error("Login failed:", error);
      }
    };
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen p-4 mx-6">
        <form className="flex items-center flex-col gap-6 p-6 rounded-lg bg-white border shadow-xl" onSubmit={submit}>
            <div className="flex flex-col gap-2">
            <p className=" font-semibold flex-col">Email</p>
            <input type="email" value={email} className="rounded-full bg-gray-200 w-96 hover:bg-gray-300 p-2 text-lg hover:shadow-lg transition-all duration-200" onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col gap-2">
            <p className=" font-semibold text-lg">Password</p>
            <input type="password" value={password} className="rounded-full w-96 bg-gray-200 hover:bg-gray-300 p-2 text-lg transition-all duration-200 hover:shadow-lg " onChange={(e)=>setPassword(e.target.value)} />
            </div>
          <button className="bg-orange-200 px-6 py-2 font-semibold rounded-full ">Log in</button>
        </form>
        <div className="flex items-center justify-center">
<img src="healthygreen.png" />
        </div>
      </div>
    </>
  );
};
