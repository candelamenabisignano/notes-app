import React, { useState } from 'react'

const HeaderList = ({text,icon,active}) => {
  const[search,setSearch]=useState(false)
  return (
    <>
    <li className='pt-7 items-center'><a className='flex items-center gap-5 hover:text-blue-500' href='./'>{icon} <span className={`text-lg transition-all ease-[cubic-bezier(.27, 1.35, 0.17, 0.99)] duration-500 origin-left`}>{text}</span></a></li>
    </>
)
}

export default HeaderList
