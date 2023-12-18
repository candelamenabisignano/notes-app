import React, { useEffect, useState } from 'react'
import { Navigate, redirect } from 'react-router-dom'
import Loader from '../components/Loader';
import Header from '../components/Header';

const Current = () => {
    const[user,setUser]=useState({});
    const [navigate,setNavigate]=useState(false)
    const [loading,setLoading]=useState(false);
    
    useEffect(()=>{
        new Promise(()=>{
            setTimeout(() => {
                fetch('http://localhost:8080/api/users/profile/current',{
                    method:'GET',
                    credentials:'include',
                    headers:{
                        "Content-Type": "application/json",
                    }
                }).then((data)=> {
                    if(data.status != 200) return setNavigate(true)
                    else return data.json()
                }).then((datajson)=>{
                    return setUser(datajson.payload)
                }).catch((err)=>{
                    console.log(err.message)
                })
                
            }, 2000);
        })
    },[])
    if(navigate) return <Navigate to='/login'/>
  return (
    <div className='flex'>
        <Header/>
    <div className='flex justify-center items-center h-[100vh] m-auto'>
        <div className='absolute top-2 left-[100px]'>
        <h1>hola {user.username}!</h1>
        </div>
    </div>
    </div>
  )
}

export default Current
