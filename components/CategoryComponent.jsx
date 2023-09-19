import React from 'react'

export default function CategoryComponent({title = "Website Development" , active}) {
  return (
    <div className='flex flex-col gap-1 items-center'>
        <button>{title}</button>
      {active &&   <hr className='w-28 border border-primary' />}
    </div>
  )
}
