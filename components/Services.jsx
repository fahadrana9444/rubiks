import React from 'react'
import ServiceCard from './ServiceCard'
import { service } from '@/constants/arrays'

export default function Services({title = "Our Services" , array = service}) {
  return (
    <div className="my-5 lg:px-10 px-5">
      <h1 className='font-semibold'>{title}</h1>
      <hr className='w-12 border border-primary' />
        <div className='flex flex-wrap justify-center gap-10'>
        {
          array?.map((item , index)=>(<ServiceCard key={index} PColor={item.PColor} SColor={item.SColor} title={item.title} description={item.description} image={item.image} />))
        }
        </div>
    </div>
  )
}
