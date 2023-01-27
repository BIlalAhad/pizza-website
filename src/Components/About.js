import React from 'react'
import Topimg from './Topimg'
import aboutimg from '../Assets/pizza-top.jpeg'
import about1 from '../Assets/about1.jpeg'
import about2 from '../Assets/about2.jpeg'


export default function About() {
  return (
    <div>
        <Topimg heading="About us"/>
        <section className='mt-24 max-w-5xl mx-auto '>
              <div className='grid sm:grid-flow-col sm:grid-cols-2 shadow-2xl'>
              <div className='flex flex-col justify-center  p-7 space-y-4 text-center sm:text-start'>
                <h1 className='font-bold text-2xl border-b-2  border-black'>About PizzaHut</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cum iste harum assumenda quibusdam nobis illo maiores natus in quisquam libero itaque tempore iusto sapiente velit, sint ratione a saepe!</p>
              </div>
              <img className='w-full' src={aboutimg} alt="" />
            </div>
        </section>
        <section className='mt-24 max-w-5xl mx-auto'>
              <div className='grid sm:grid-flow-col sm:grid-cols-2 shadow-2xl'>
              <div className='flex flex-col justify-center  p-7 space-y-4 sm:order-2 text-center sm:text-start'>
                <h1 className='font-bold text-2xl border-b-2  border-black'>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cum iste harum assumenda quibusdam nobis illo maiores natus in quisquam libero itaque tempore iusto sapiente velit, sint ratione a saepe!</p>
              </div>
              <img className='w-full' src={about1} alt="" />
            </div>
        </section>
        <section className='mt-24 max-w-5xl mx-auto mb-24'>
            <div className='grid sm:grid-flow-col sm:grid-cols-2 shadow-2xl'>
            <div className='flex flex-col justify-center  p-7 space-y-4 text-center sm:text-start'>
              <h1 className='font-bold text-2xl border-b-2  border-black'>About Menu</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cum iste harum assumenda quibusdam nobis illo maiores natus in quisquam libero itaque tempore iusto sapiente velit, sint ratione a saepe!</p>
            </div>
            <img className='w-full' src={about2} alt="" />
            </div>
        </section>
    </div>
  )
}
