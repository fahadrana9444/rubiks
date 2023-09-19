import {photoshop } from '@/utils/assets'
import Image from 'next/image'
import React from 'react'

export default function WorkComponent({image , title = "Photoshop"}) {
  return (
    <div className=' w-fit p-5 rounded-2xl m-5 text-center flex flex-col justify-between border border-primary'>
        <Image src={image?image:photoshop} />
        <p>{title}</p>
    </div>
  )
}
