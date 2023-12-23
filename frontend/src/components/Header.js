import React, {  useState } from 'react'
import { GrAddCircle, GrFormNext, GrFormSearch, GrLogout, GrTrash } from "react-icons/gr"
import HeaderList from './HeaderList'
const Header = () => {
  const [header, setHeader]= useState(false)
  return (
    <aside className={` overflow-hidden sticky h-screen ${header ? 'w-[200px]' : 'w-[100px]'} transition-all ease-in-out duration-500 bg-green-300 pr-[20px] py-[10px]`}>
      <nav className='h-full flex flex-col gap-[20px]'>
        <div className='flex justify-end'>
        <button onClick={()=>{ setHeader(!header)}}>
          <GrFormNext size={'40px'} className={`${header ? 'rotate-180' : null} ease-in-out transition-transform duration-300`}/>
        </button>
        </div>
        <div className='flex justify-start pl-[20px] items-center gap-5'>
        <ul>
          <div className='items-center flex-col justify-start'>
          <HeaderList text={'search'} icon={<GrFormSearch size={'35px'} />} active={header}/>
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
