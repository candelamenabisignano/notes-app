import React from 'react'

const HeaderList = ({text,icon,active}) => {
  return (
    <>
    {active?
    (<li className='pt-7 items-center'><a className='flex items-center gap-5'>{icon} <span className={`${!active && 'scale-0'} duration-500 transition-transform ease-in-out `}>{text}</span></a></li>)
    :
    (<li className='pt-7 items-center'><a>{icon}</a></li>)
    }
    </>
)
}

export default HeaderList
