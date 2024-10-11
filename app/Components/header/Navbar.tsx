'use client'
import { GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid"
import { useState } from "react"
import Menu from "./Menu"


const Navbar = () => {

  const [open , setOpen] = useState(false)

  return (
    <div className=" flex space-x-4 items-center justify-end text-gray-500">
        <div className=" flex items-center space-x-2 hover:text-red-400 cursor-pointer transition duration-200">
        <p className=" hidden lg:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        </div>
        <div onClick={()=> setOpen(!open)} className='flex space-x-2 border-2 p-2 rounded-full items-center cursor-pointer hover:bg-red-400 hover:text-white transition duration-200'>
        <MenuIcon className='h-6' />
        <UserCircleIcon className='h-6' />
        </div>

        {open&&<Menu/>}
    </div>
  )
}

export default Navbar