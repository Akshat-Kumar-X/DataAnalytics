import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 lg:grid grid-cols-3 gap-8 text-white">
        <div className='col-span-1'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nulla, expedita quos asperiores velit quisquam.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaDribbbleSquare size={30}/>
            </div>
        </div>
        <div className="flex justify-between lg:col-span-2  mt-6 ">
            <div>
                <h6 className='font-medium text-gray-400'>Solution</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Suppliment</li>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Recommendation</li>
                    <li className='py-2 text-sm'>API status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Footer