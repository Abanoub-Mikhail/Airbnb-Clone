import Image from "next/image"
import Link from "next/link"

type OutDoorsType = {
    img :string
    description:string
    title :string
    linkText: string
}


const OutDoors = ({img , description, title , linkText} :OutDoorsType) => {
  return (
    <div className=" container relative mt-10 py-5 mb-2">
    <div className=" relative h-96 min-w-[300px]">
        <Image src={img} alt="outdoors-img" fill className="rounded-2xl -z-10 object-cover"/>
    </div>
    <div className=" absolute top-32 left-12 text-white">
        <h3 className=" text-4xl mb-3 w-64 font-bold drop-shadow-md">{title}</h3>
        <p className=" mb-4 font-bold">{description}</p>
        <Link href='/' className="text-sm px-4 block w-fit py-2 rounded-lg mt-5 text-white bg-gray-900 hover:bg-red-400 hover:text-white transition duration-200">
            {linkText}
        </Link>
    </div>
    </div>
  )
}

export default OutDoors