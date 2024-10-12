import React from 'react'
import { LiveItem } from '../Types/Types'
import Image from 'next/image'
import * as motion from "framer-motion/client"


type LiveCardProps =LiveItem

const LiveCard = ({title , img}:LiveCardProps) => {
  return (
    <motion.div initial={{ translateX: -50 , opacity:0.2 }} whileInView={{ translateX: 0 , opacity:1} } transition={{duration:0.8}}>
          <div  className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out shadow-md pb-4 rounded-lg'>
          <div className=' relative h-80 w-80'>
            <Image src={img} alt='Live-img' fill/>
        </div>
        <h3 className=' text-2xl mt-3 text-center font-mono'>{title}</h3>
          </div>
        
    </motion.div>
  )
}

export default LiveCard