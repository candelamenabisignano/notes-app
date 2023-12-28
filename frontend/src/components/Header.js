import React, {  useState } from 'react'
import { GrAddCircle, GrFormNext, GrFormSearch, GrLogout, GrTrash } from "react-icons/gr"
import HeaderList from './HeaderList'
const Header = () => {
  const [header, setHeader]= useState(false)
  return (
    <aside className={` overflow-hidden sticky h-screen ${header ? 'w-[280px]' : 'w-[70px]'} transition-all ease-in-out duration-500 bg-white border-r-[1px] border-gray-400 py-[10px]`}>
      <nav className='h-full flex flex-col gap-[20px]'>
        <div className='flex justify-end'>
        <button onClick={()=>{ setHeader(!header)}}>
          <GrFormNext size={'40px'} className={`${header ? 'rotate-180' : null} ease-in-out transition-transform duration-300`}/>
        </button>
        </div>
        <div className='h-[1px] w-full bg-gray-400 flex justify-center items-center'></div>
        <div className='flex justify-start pl-[20px] items-center gap-5'>
        <ul>
          <div className='items-center flex-col justify-start'>
          <div className='flex justify-start  items-center h-8 w-[100%] '>
          <GrFormSearch size={'35px'} onClick={()=> setHeader(true)} className='hover:cursor-pointer hover:text-blue-500'/>
            <input type='search' placeholder='search note...' className={`h-9 outline-none rounded-sm relative left-1 border-[1px] border-gray-400 focus:placeholder:text-blue-500 focus:border-[2px] focus:transition-none focus:border-blue-500 ${!header && 'scale-0'} origin-left transition-transform ease-[cubic-bezier(.27, 1.35, 0.17, 0.99)] duration-500 `}/>
          </div>
          <HeaderList text={'add'} icon={<GrAddCircle size={'35px'}/>} active={header}/>
          <HeaderList text={'delete'} icon={<GrTrash size={'35px'}/>} active={header}/>
          <HeaderList text={'logout'} icon={<GrLogout size={'35px'} className='relative left-1'/>} active={header}/>
          </div>
        </ul>
        </div>
      </nav>
    </aside>
  )
}

export default Header
