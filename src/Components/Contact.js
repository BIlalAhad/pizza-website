import React from 'react'
import Topimg from './Topimg'

export default function Contact() {
  return (
    <div>
    <Topimg heading=" Contact us" />

    <div className='w-[50%] py-52 bg-gray-200 rounded-r-full '>
    <section className='grid items-center justify-end -mr-48 sm:-mr-36 '>
     <form action="" className='w-96 py-20  px-12  shadow-2xl space-y-3 '>
      <div className='flex flex-col text-center gap-1'>
        <label htmlFor="">Name</label>
        <input className='border-2' type="text " />
      </div>
      <div className='flex flex-col text-center gap-1'>
        <label htmlFor="">order number</label>
        <input className='border-2' type="text " />
      </div>
      <div className='flex flex-col text-center gap-1'>
        <label htmlFor="">message</label>
        <textarea className='border-2' type="text" />
      </div>
      <div className='text-center '>
      <button className='mx-auto text-center bg-black w-24 h-8 text-white mt-5 hover:opacity-70'>SEND</button>
      </div>
     </form>

    </section>
    </div>

    </div>
  )
}
