import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards() {
  return (
    <div className="w-full bg-gray-100 px-4 py-[10rem]">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <div className="w-full shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300 bg-white">
                <img className='w-20 mx-auto mt-[-3rem] ' src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                </div>
                <button className='rounded-[5px] w-[200px] text-black font-medium bg-[#00df9a] py-3  mx-auto my-6'>
                    Start Trial
                </button>
            </div>
            <div className="w-full shadow-xl rounded-lg flex flex-col p-4 my-4 md:my-0 hover:scale-105 duration-300 bg-gray-200">
                <img className='w-20 mx-auto mt-[-3rem] ' src={Double} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Double Users</h2>
                <p className='text-center text-4xl font-bold'>$299</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b border-gray-300 mx-8 mt-8'>1TB Storage</p>
                    <p className='py-2 border-b border-gray-300 mx-8'>2 Granted User</p>
                    <p className='py-2 border-b border-gray-300 mx-8'>Send up to 10GB</p>
                </div>
                <button className='rounded-[5px] w-[200px] text-[#00df9a] font-medium bg-black py-3  mx-auto my-6'>
                    Start Trial
                </button>
            </div>
            <div className="w-full shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300 bg-white">
                <img className='w-20 mx-auto mt-[-3rem] ' src={Triple} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Multiple Users</h2>
                <p className='text-center text-4xl font-bold'>$499</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>10TB Storage</p>
                    <p className='py-2 border-b mx-8'>10 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 500GB</p>
                </div>
                <button className='rounded-[5px] w-[200px] text-black font-medium bg-[#00df9a] py-3  mx-auto my-6'>
                    Start Trial
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cards