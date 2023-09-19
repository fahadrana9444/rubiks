import { graduation } from '@/utils/assets'
import Image from 'next/image'
import React from 'react'

export default function SolutionComponent({image , title = "Education"}) {
  return (
    <div className='bg-white w-fit p-5 rounded-2xl text-center flex flex-col justify-between'>
        <Image src={image?image:graduation} />
        <p>{title}</p>
    </div>
  )
}
