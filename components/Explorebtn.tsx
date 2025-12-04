"use client"

import Image from 'next/image'
import React from 'react'
import Arrowdown from '../public/icons/arrow-down.svg'
import { title } from 'process'

const Explorebtn = () => {
  return (
   <button type="button" id="explore-btn" className='mt-7 mx-auto' onClick={()=>console.log("CLICK")}>
    <a href='#events'>Explore Events
    <Image src={Arrowdown} alt='arrow-down' width={24} height={24}/>
   

   
    </a>
   </button>
  )
}

export default Explorebtn