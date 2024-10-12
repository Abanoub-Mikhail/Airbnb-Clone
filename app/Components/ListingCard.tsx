import React from 'react'
import { ListingCardItem } from '../Types/Types'
import Image from 'next/image'
import { HeartIcon, StarIcon } from '@heroicons/react/solid'
import * as motion from "framer-motion/client"


type ListingCardProps = Omit<ListingCardItem, 'long' | 'lat'>

const ListingCard = ({title, description,img , total, price, star , location}:ListingCardProps) => {
  return (
    <motion.div initial={{ translateX: -100 , opacity:0 }} whileInView={{ translateX: 0 , opacity:1} } transition={{duration:0.8}}
      className='flex flex-col md:flex-row py-2 px-2 border-b mb-4 cursor-pointer pr-4 hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
    <div className='relative h-24 w-full mb-3 md:m-0 md:h-52 md:w-80 flex-shrink-0'>
      <Image
        src={img}
        fill
        className='rounded-2xl object-cover'
        alt='Listing-Card'
      />
    </div>
    <div className='flex flex-col flex-grow pl-5'>
      <div className='flex justify-between'>
        <p>{location}</p>
        <HeartIcon className='h-7 cursor-pointer' />
      </div>
      <h4 className='text-xl'>{title}</h4>
      <div className='border-b w-10 pt-2' />
      <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
      <div className='flex justify-between items-end pt-5'>
        <p className='flex items-center'>
          <StarIcon className='h-5 text-red-400' />
          {star}
        </p>
        <div>
          <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
          <p className='text-right font-extralight '>{total}</p>
        </div>
      </div>
    </div>
  </motion.div>
  )
}

export default ListingCard