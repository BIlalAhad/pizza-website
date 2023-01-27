import React from 'react'
import logo from '../Assets/logo.png'
export default function Footer() {
  return (
   <>
        <div className=' h-[109vh]  sm:h-[65vh] w-full '>
        <div className='h-full bg-gray-200 grid sm:grid-flow-col sm:grid-cols-4 text-center sm:text-start px-5 items-center justify-between'>
            <img className='rounded-full w-40 h-40 mx-auto' src={logo} alt="" />
            <ul className='grid gap-3'>
                <li className='text-2xl font-bold uppercase'>info section</li>
                <li>Pizza hut</li>
                <li>Email:abc@gmail.com</li>
                <li>Address:pakistan</li>
                <li>Call:+9283985</li>
            </ul>
            <ul className='grid gap-3'>
                <li className='text-2xl font-bold uppercase'>Order-menu</li>
                <li>spegaty</li>
                <li>pizza</li>
                <li>burger</li>
                <li>beef shwarma</li>
            </ul>
            <p className='mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione laborum iusto rem repellendus! Nostrum, minus sed. Quibusdam itaque placeat, tenetur, facere, quis fugiat alias blanditiis rem harum neque debitis!</p>
        </div>
        </div>
        <div className='bg-black text-gray-600 text-center h-16 grid items-center'>
            Coaded by Bilal Ahad
        </div>
   </>
  )
}
