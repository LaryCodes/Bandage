import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Card {
    id: string
    title: string
    price: number
    thumbnail: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>}

const Cards = (props:Card) => {
  return (
    <div className="py-[5px] px-[25px] flex flex-col items-center justify-center gap-[10px] border border-gray-200 rounded-lg shadow-lg">
        <div className="flex justify-center">
          <Image 
          width="500"
          height="500"
          src={props.thumbnail} 
          alt={props.title} />
        </div>
      <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
        {props.title}
      </h5>
     
      <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD] ">
          {props.price}
        </h5>
        {/* <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
          $6.48
        </h5> */}
      </div>
      <div className="w-full flex justify-center gap-[5px]">
      <Link href="/cart">   
      <button
      onClick={props.onClick}
        className=" py-[10px] px-[20px] w-full font-Montserrat font-bold text-[14px] text-white bg-gradient-to-r from-blue-200   to-blue-500 rounded-md hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2 transition-all"
      >
        Add to Cart
      </button>
      </Link>
      <Link href="/id">
      <button
        // onClick={notify}
        className=" py-[10px] px-[20px] w-full font-Montserrat font-bold text-[14px] text-white bg-[#23A6F0] rounded-md hover:bg-[#1d91d0] focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2 transition-all"
      >
        View Detail
      </button>
      </Link>
      </div>
      </div>
  )
}

export default Cards
