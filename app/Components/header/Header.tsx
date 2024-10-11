import Image from "next/image"
import Link from "next/link"
import SearchBar from "./SearchBar"
import Navbar from "./Navbar"

const Header = ({placeholder}:{placeholder?:string}) => {
  return (
    <header className=" sticky start-0 z-50 bg-white shadow-md py-5">
        <div className=" container mx-auto grid grid-cols-3" >
            <Link href='/' className="relative flex items-center my-auto h-10">
                <Image src='https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' alt="logo-img" 
                fill
                className="object-contain object-left"
                />
            </Link>
            <SearchBar placeholder={placeholder}/>
            <Navbar/>
        </div>
    </header>
  )
}

export default Header