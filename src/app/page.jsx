"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ParallaxPage() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex items-center max-w-screen-xl flex-col m-auto pt-24"> {/* Add padding top to prevent image overlap with navbar */}
        <div className="flex gap-3 items-center w-full relative overflow-hidden">
          <img
            src="/mindfulness.jpg"
            alt="Mindfulness"
            className="w-screen h-screen object-cover"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          />
          <div className="flex mt-56 flex-col absolute inset-0 gap-10 text-center">
            <p className="text-white font-semibold text-6xl">Change your bad habits</p>
            <p className="text-white font-semibold text-6xl">Build your healthy lifestyle</p>
            <p className="text-white font-semibold text-6xl">Enhance your mindset</p>
          </div>
        </div>

        {/* Parallax section */}
        <section className="w-full flex flex-col items-center gap-10 py-20">
          {["heartfruit.jpg", "oldwoman.jpg", "yoga.jpg"].map((image, index) => (
            <div
              key={image}
              className="relative bg-black border rounded-lg  hover:-translate-y-4 transition-all duration-200 group h-96 w-full"
              style={{ transform: `translateY(${offsetY * (0.4 - index * 0.1)}px)` }}
            >
              <img
                src={`/${image}`}
                alt={image.split(".")[0]}
                className="absolute inset-0 object-cover w-full h-full"  
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition-all duration-300"></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <Link href="/about">
                  <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-gray-300">
                    View the collection
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </section>
        {/* Parallax section */}
      </div>
    </>
  );
}
