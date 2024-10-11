import React from 'react'
import ExploreCard from './ExploreCard'
import { getExplore } from '../Utilities/Fetch'
import { ExploreData } from '../Types/Types';
import Title from './Title';
import * as motion from "framer-motion/client"


const Explore = async () => {
    const ExploreData :ExploreData = await getExplore();
    

  return (
    <section className='pt-6'>
        <div className="container">
          <Title title='Explore Nearby'/>
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        {ExploreData.map((item) =>(
          <motion.div initial={{ translateY: 100 , opacity:0 }} whileInView={{ translateY: 0 , opacity:1} } transition={{duration:0.8}}>
            <ExploreCard key={item.img} img={item.img} distance={item.distance} location = {item.location} />
          </motion.div>
        
        ))}
        </div>
        </div>
    </section>
  )
}

export default Explore