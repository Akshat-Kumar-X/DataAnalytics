import React from 'react'
import Dashboard from "../assets/laptop.jpg"

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 justify-center">
            <img className='w-[500px] mx-auto my-4' src={Dashboard} alt="Dashboard" />
            <div className="flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2">
                    Manage Data Analytics Centrally
                </h1>
                <p>
                        Managing data analytics centrally is crucial to ensure consistency, security, and efficiency in data analytics processes across an organization.
                </p>
                <div className="mt-3">

                    <p >
                        → Standardization of Analytics Tools and Practices.
                    </p>
                    <p>
                        → Data Catalog and Metadata Management.
                    </p>
                    <p>
                        → Centralized Analytics Team.
                    </p>
                    <p>
                        → Data Access Control and Permissions.
                    </p>
                </div>
                
                <button className="hover:scale-105 duration-300 rounded-[5px] w-[200px] bg-black font-medium text-[#00df9a] py-3 mx-auto md:mx-0 my-6">
                    Get Started
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default Analytics