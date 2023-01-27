import React from 'react'
import Topimg from './Topimg'
import pizza1 from '../Assets/pizza1.jpeg'
import pizza2 from '../Assets/pizza2.jpeg'
import pizza3 from '../Assets/pizza3.jpeg'
import pizza4 from '../Assets/pizza4.jpeg'
import spegaty from '../Assets/spegaty.jpeg'
import spegaty1 from '../Assets/spegaty1.jpeg'

export default function Index() {
  return (
    <div>
        <Topimg heading=" Welcome to Pizza hut" />
      <section className='max-w-7xl mx-auto'>
          <div className='text-center mt-32 mb-10 grid gap-1'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque minima alias?</p>
            <h1 className='text-3xl font-bold italic w-44 mx-auto  border-b-2 border-yellow-600'>Most Testy</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

        <section className='grid grid-flow-col grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto'>
          <div className='text-center'>
            <img className='rounded-lg hover:brightness-50' src={pizza2} alt="" />
            <p className='mt-2'>Lorem ipsum dolor sit.</p>
          </div>
          <div className='text-center'>
            <img className='rounded-lg hover:brightness-50' src={pizza1} alt="" />
            <p className='mt-2'>Lorem ipsum dolor sit.</p>
          </div>
          <div className='text-center'>
            <img className='rounded-lg hover:brightness-50' src={pizza3} alt="" />
            <p className='mt-2'>Lorem ipsum dolor sit.</p>
          </div>
        </section>



        <section className='grid sm:grid-flow-col sm:grid-cols-2 items-center gap-6 bg-gray-300  mt-40 h-[70vh] sm:h-[62vh] max-w-5xl mx-auto sm:p-0 p-5'>
            <img className=' -mt-24 ' src={pizza4} alt="" />
            <div>
              <p className='text-center sm:text-start'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quae, eaque odit at, est aliquam delectus, itaque exercitationem tempore perspiciatis accusamus iure officia provident doloribus? Suscipit distinctio voluptate voluptates blanditiis?
              </p>
              <div className='text-center sm:text-start pb-24 sm:pb-0'>
                <button className='mt-7 bg-black uppercase text-white w-44 h-10 hover:opacity-70'>
                order now
              </button>
              </div>
            </div>
        </section>

        <section className='grid sm:grid-cols-3 text-center sm:text-start sm:grid-flow-col max-w-5xl mx-auto gap-6 mb-24 px-10 sm:px-0'>
          <div>
            <img className='rounded-md mt-24 border-x-4 border-yellow-700 shadow-2xl' src={spegaty} alt="" />
            <address className='text-right font-bold text-yellow-700 mt-4'>20$</address>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus, ex minus, iusto in odit maxime rerum ea nihil corporis distinctio dignissimos ut fugiat aliquam obcaecati? Voluptates porro facilis earum?</p>
            <button className='mt-7 bg-black uppercase text-white w-44 h-10 hover:opacity-70'>
                order now
              </button>
          </div>
          <div>
            <img className='rounded-md mt-24 border-x-4 border-yellow-700 shadow-2xl' src={spegaty1} alt="" />
            <address className='text-right font-bold text-yellow-700 mt-4'>20$</address>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus, ex minus, iusto in odit maxime rerum ea nihil corporis distinctio dignissimos ut fugiat aliquam obcaecati? Voluptates porro facilis earum?</p>
            <button className='mt-7 bg-black uppercase text-white w-44 h-10 hover:opacity-70'>
                order now
              </button>
          </div>
          <div>
            <img className='rounded-md mt-24 border-x-4 border-yellow-700 shadow-2xl' src={spegaty} alt="" />
            <address className='text-right font-bold text-yellow-700 mt-4'>20$</address>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus, ex minus, iusto in odit maxime rerum ea nihil corporis distinctio dignissimos ut fugiat aliquam obcaecati? Voluptates porro facilis earum?</p>
            <button className='mt-7 bg-black uppercase text-white w-44 h-10 hover:opacity-70'>
                order now
              </button>
          </div>
        </section>

      </section>
    </div>
  )
}
