import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header.js";
import OutsideNote from "../components/OutsideNote.js";
import { CurrentPromise } from "../services/Services.js";
import { GrAddCircle } from "react-icons/gr";

const CurrentProfile = () => {
  const [user, setUser] = useState({});
  const [navigate, setNavigate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notes, setNotes]= useState([])

  useEffect(()=>{
    CurrentPromise(setNavigate, setUser, setNotes);
  },[])

  if (navigate) return <Navigate to="/login" />;
  return (
    <div className="flex font-body">
      <Header />
      <section className="flex flex-col justify-center items-center h-[100vh] m-auto">
        <div className="relative bottom-[80px] right-[275px]">
            <h1 className=" text-3xl">hola <strong className="text-blue-500">{user.username}!</strong></h1>
        </div>
        <div className="w-[90%]">
            <section className="flex flex-wrap gap-5 justify-center">
                <article className="flex flex-col justify-center items-center gap-3 bg-white shadow-xl h-[170px] w-[170px] p-[5px] overflow-hidden cursor-pointer transition-all ease-in-out hover:scale-105 hover:text-blue-500">
                    <GrAddCircle size={'50px'}/>
                    <p>add note</p>
                </article>
                {notes.map(n=>(
                    <OutsideNote id={n._id} title={n.title} content={n.content}/>
                ))}
            </section>
        </div>
      </section>
    </div>
  );
};

export default CurrentProfile;
