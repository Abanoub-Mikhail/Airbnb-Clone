import React from 'react'
import Header from '../Components/header/Header'
import Footer from '../Components/Footer'
import { format } from 'date-fns';
import { getSearchResult } from '../Utilities/Fetch';
import { searchData } from '../Types/Types';
import ListingCard from '../Components/ListingCard';
import dynamic from 'next/dynamic';

type searchParams = {
    location:string;
    startDate :string;
    endDate:string;
    numOfGuests:string;
}

const DynamicMap =dynamic(()=>import ('../Components/Map'),{
  ssr:false,
})

const SearchResult = async ({ searchParams:{location ,startDate , endDate ,numOfGuests}}:{searchParams:searchParams}) => {

let formatedStartDate;
let formatedEndDate;
if (startDate && endDate) {
    formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
    formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
}

const range = `${formatedStartDate} - ${formatedEndDate}`

const filters = [
  'Cancellation Flexibility',
  'Type of Place',
  'Price',
  'Rooms and Beds',
  'More filters',
];

const searchData:searchData = await getSearchResult();

  return (
    <>
    <Header placeholder={`${location} | ${range} | ${numOfGuests} Guests`}/>

    <main>
      <section>
        <div className=' container md:flex mb-10 pt-8 overflow-hidden'>
        <div className='  pl-4'>
        <p className=' text-xs text-red-600 font-semibold'>300+ Stays - {range} - for {numOfGuests} Guests</p>
        <h1 className=' text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
        <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                {filters.map((filter) => (
                  <button type='button' className='filter-btn' key={filter}>
                    {filter}
                  </button>
                ))}
        </div>

        <div>
        {searchData.map((item)=>(
          <ListingCard key={item.title} img={item.img} title ={item.title} location={item.location} description={item.description}
          price={item.price} total={item.total} star={item.star}
          />
        ))}
        </div>
        </div>
        <div className='  w-full h-40 mt-3 md:h-[auto] md:py-10 md:px-5 '>
          <DynamicMap searchData = {searchData}/>
        </div>
        </div>
      </section>
    </main>
    
    <Footer/>
    </>
  )
}

export default SearchResult