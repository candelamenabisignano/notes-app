import React, {  useState } from 'react'
import { GrAddCircle, GrFormNext, GrFormSearch, GrLogout, GrTrash } from "react-icons/gr"
const Header = () => {
  const [header, setHeader]= useState(false)
  const [rotate, setRotate]= useState('')
  return (
    <header className={header ? ' h-[100vh] bg-black w-[250px] transition-all duration-500 ease-in-out ': ' h-[100vh] bg-black w-[300px] translate-x-[-250px] transition-all duration-500 ease-in-out' }>
    <ul className='flex flex-col'>
    <div className='flex justify-end'>
    <li className='flex'><GrFormNext color='white' size={'30px'} rotate={'180deg'} onClick={()=> header ? (setHeader(false), setRotate('') ) : (setHeader(true),setRotate("180deg"))}/></li>
    </div>
    <div className='flex justify-end pt-[40px] pr-[10px] items-center'>
    <div className='flex flex-col justify-start gap-[50px] items-center'>
    <li className='flex items-center'>{header ? <input type="text" placeholder='search note...' className='h-[25px] w-[190px] text-center outline-none focus-visible:border-solid focus-visible:border-[1px] focus-visible: text-blue-600 focus-visible:border-blue-600 focus-visible:placeholder:text-blue-600'/> : null}<GrFormSearch color='white' size={"40px"}/></li>
    <li className={header ?'flex relative left-[50px] gap-7' :null}>{header? <p className='text-white'>add note</p> : null}<GrAddCircle color='white' size={"30px"}/></li>
    <li className={header ?'flex relative left-[46px] gap-5' :null}>{header ? <p className='text-white'>delete note</p> : null}<GrTrash color='white' size={"30px"}/></li>
    <li className={header ?'flex relative left-[54px] gap-10' :null}>{header ? <p className='text-white'>logout</p> : null}<GrLogout color='white' size={"29px"} className='relative left-[5px] m-auto'/></li>
    </div>
    </div>
    </ul>
    </header>
  )
}

export default Header
