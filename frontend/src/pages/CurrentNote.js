import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Note } from "../services/Services";
import Header from "../components/Header";
import { GrFormNext, GrFormEdit, GrFormTrash } from "react-icons/gr";


const CurrentNote = () => {
  const [note, setNote] = useState({});
  const { nid } = useParams();

  useEffect(() => {
    Note(nid, setNote);
  }, [nid]);

  console.log(note);
  return (
    <div className="flex font-body m-auto">
      <Header />
      <section className="flex justify-center h-[100vh] items-center m-auto">
        <div className="flex flex-col bg-gray-50 flex-grow flex-wrap justify-center items-center p-[40px] max-h-[90vh] overflow-hidden w-[900px] shadow-xl rounded-sm">
          <div>
            <header className="flex items-center gap-[50px] pb-[20px]">
              <Link to={'/profile/current'}><GrFormNext size={'40px'} className="block rotate-180 transition-transform ease-in-out duration-300 hover:scale-110 hover:cursor-pointer active:scale-95"/></Link>
              <div className=" flex items-center gap-[200px]">
              <h1 className=" text-4xl text-blue-500">{note.title}</h1>
              <p className="text-blue-500 text-sm">date: {note.created_at}</p>
              </div>
            </header>
            <div className=" w-[700px] flex justify-center items-center m-auto">
            <div className="text-left p-[20px] max-w-[100%] max-h-[380px] overflow-hidden overflow-y-scroll text-ellipsis whitespace-pre-line">
              <p className="text-lg">{note.content}</p>
            </div>
            </div>
            <footer className="flex justify-end">
            <GrFormEdit
              size={"40px"}
              className="transition-transform ease-in-out cursor-pointer hover:scale-110 hover:text-blue-500"
            />
            <GrFormTrash
              size={"40px"}
              className="transition-all ease-in-out cursor-pointer hover:scale-110 hover:text-blue-500"
            />
          </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentNote;
