import React from 'react'
import {IoMdMail ,AiOutlineCaretDown} from '../utils/assets'
export default function AdminDropDown({icon , title}) {
  return (
    <div className='flex items-center gap-2 my-2'>
        <IoMdMail className='text-primary text-xl' />
        <p>Mail</p>
        <AiOutlineCaretDown className='text-primary ml-auto' />
    </div>
  )
}
