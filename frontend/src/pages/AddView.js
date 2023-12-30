import React, { useEffect, useState } from 'react'
import { addNote } from '../services/Services'
import { Navigate } from 'react-router-dom';
const AddView = () => {
    const [note, setNote]=useState({})
    const [navigate, setNavigate]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault()
        addNote(note, setNote);
        setNavigate(true)
    };
    if (navigate){
        return async()=>{
            new Promise(() => {
                setTimeout(() => {
                    <Navigate to={'/profile/current'}/>
                }, 1000);
            }).then((res)=> {return res}).catch((err)=> {return console.log(err.message)})
        };
    };
  return (
    <>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <div>
            <label>title</label>
            <input type='text' name='title' onChange={(e)=> setNote({...note, [e.currentTarget.name]:e.currentTarget.value})}/>
        </div>
        <div>
            <label>content</label>
            <input type='text' name='content' onChange={(e)=> setNote({...note, [e.currentTarget.name]:e.currentTarget.value})}/>
        </div>
        <input type='submit'/>
      </form>
    </>
  )
}

export default AddView
