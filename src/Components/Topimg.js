import React from 'react'
import headerpic from '../Assets/pizza-top1.jpeg'

export default function Topimg(props) {
  return (
    <div>
     <img src={headerpic} alt="" className='w-full h-[85vh] object-cover' />
     <h1 className='text-3xl sm:text-5xl md:text-7xl font-extralight  absolute top-72 sm:top-52 font-serif text-gray-600 italic -rotate-12 right-0 left-0 text-center animate-pulse'>{props.heading}</h1>
    </div>
  )
}
