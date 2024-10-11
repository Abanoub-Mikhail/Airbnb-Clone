import React from 'react'

const Menu = () => {
  return (
    <div className=' absolute top-20 bg-white py-3 rounded-lg text-center w-28 shadow-lg border'>
        <ul>
            <li className=' mb-2 px-2 py-1 cursor-pointer hover:bg-red-400 hover:text-white duration-200'>Home</li>
            <li className=' mb-2 px-2 py-1 cursor-pointer hover:bg-red-400 hover:text-white duration-200'>Discover</li>
            <li className=' mb-2 px-2 py-1 cursor-pointer hover:bg-red-400 hover:text-white duration-200'>Offers</li>
            <li className=' mb-2 px-2 py-1 cursor-pointer hover:bg-red-400 hover:text-white duration-200'>Login</li>
        </ul>
    </div>
  )
}

export default Menu