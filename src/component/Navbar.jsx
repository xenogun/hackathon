"use client";

import Link from "next/link";

export default function Navbar () {
  return (
    <>
      <div className="flex flex-col items-center sticky bg-white z-50 top-0">
        <div className="flex items-center justify-between w-full p-5 border shadow-xl ">
        <div className="flex items-center ">
          <div className="flex items-center gap-2">
            <Link href={"/"}><img src="yoga.png" alt="" height={50} width={50} /></Link>
            <div className="flex flex-col">
              <p className="font-semibold text-lg">Habit <span className="text-green-500">Forge</span> </p>
              <p className="text-gray-500 font-semibold ">Build healthy habits</p>
            </div>
          </div>
        </div>
        <div>
            <ul className="flex items-center justify-center gap-10">
               <Link href={"/membership"}> <li className="text-lg font-semibold hover:underline">Become a member</li></Link>
                <Link href={"/help"} ><li className="text-lg font-semibold hover:underline">Assistance</li></Link>
              <Link href={"/aboutus"}> <li className="text-lg font-semibold hover:underline">About us</li></Link>
            </ul>
        </div>
        <div className="flex items-center gap-4">
           <Link href={"/register"}><button className="rounded-full px-4 py-2 text-white hover:bg-green-900 bg-green-400 text-lg transition-all duration-200 font-semibold">Sign up</button></Link> 
         <Link href={"/login"}><button className="rounded-full px-4 py-2 bg-orange-950 text-white hover:bg-orange-800 transition-all duration-200 text-lg font-semibold">Log in</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};
