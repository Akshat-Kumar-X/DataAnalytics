import React from 'react'
import Typed from 'react-typed';

function Hero() {
  return (
    <div className="text-white">
        <div className="max-w-[800px] mt-[96px] text-center h-screen w-full mx-auto flex flex-col">
            <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Fast, flexible financing for</p>
                <Typed className='pl-2 md:text-5xl sm:text-4xl text-xl font-bold'
                       strings={['BTB', 'BTC', 'SASS']} 
                       typeSpeed={120} 
                       backSpeed={140}
                       loop/>
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-500">
                Monitor your Data Analytics to increase revenue for BTB,BTC, &SASS platforms
            </p>
            <button className="hover:scale-105 duration-300 rounded-[5px] w-[200px] text-black font-medium bg-[#00df9a] py-3 mx-auto my-6">
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Hero