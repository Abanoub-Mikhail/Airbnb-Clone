import React from 'react'
import { getLive } from '../Utilities/Fetch'
import { LiveData } from '../Types/Types';
import LiveCard from './LiveCard';

const Live =async () =>  {
    const liveData:LiveData = await getLive();

  return (
    <section className=' pt-6'>
        <div className=' container'>
        <div className=' flex space-x-3 overflow-scroll no-scroll-bar p-3 -ml-3'>
        {liveData.map((item)=>(
            <LiveCard key={item.img} img={item.img} title={ item.title}/>
        ))}
        </div>
        </div>
    </section>
  )
}

export default Live