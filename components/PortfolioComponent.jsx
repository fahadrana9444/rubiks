import Image from 'next/image'
import React from 'react'
import {webImage} from "../utils/assets"

export default function PortfolioComponent({image}) {
  return (
    <div>
        <Image src={image?image:webImage} className='border-4 rounded-3xl border-primary w-80 lg:w-full m-5' />
    </div>
  )
}
