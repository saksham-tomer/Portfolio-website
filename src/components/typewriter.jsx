"use client"

import { Camera } from 'lucide-react'
import React from 'react'
import  Typewriter from 'typewriter-effect'

const TypewriterProvider = (props) => {
  return (
    <div className='flex flex-row gap-4'>
        <Camera color="black" size={50} strokeWidth={1} className='mt-2' />
        <Typewriter
        options={{loop: true,}}
        onInit={(typewriter)=>{
            typewriter
            .typeString('Hey there welcome to my portfolio page')
            .pauseFor(1000)
            .deleteAll()
            .typeString("Visit the about section")
            .start()
        }}
        />
    </div>
  )
}

export default TypewriterProvider