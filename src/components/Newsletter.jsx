import React from 'react'

function Newsletter() {
    
  return (
    <div className="w-full py-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className='lg:col-span-2 my-2'>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                    Want tips & tricks to optimize your flow?
                </h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className="my-4">
                <div className='flex flex-col sm:flex-row items-center'>
                    <input className='p-3 w-full rounded-[5px] text-black' type="text" placeholder='Enter Email' />
                    <button className=" hover:scale-105 duration-300 rounded-[5px] w-[200px] text-black font-medium bg-[#00df9a] py-3 sm:ml-4 ms-0 my-6">
                        Notify Me
                    </button>
                </div>
                <p>We care about the protection fo your data. Read our <span className="underline text-[#00df9a] hover:cursor-pointer">Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter