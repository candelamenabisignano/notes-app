import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Note } from "../services/Services";
import Header from "../components/Header";

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
      <section className="flex justify-center items-center m-auto">
        <div className="flex flex-col flex-grow bg-green-500 flex-wrap justify-center items-center h-[90vh] overflow-hidden w-[900px] shadow-xl rounded-sm">
          <div>
            <header className="gap-[400px]">
              <h1 className=" text-4xl">{note.title}</h1>
              <p>date: {note.created_at}</p>
            </header>
            <div className="flex overflow-auto max-w-[70%] max-h-[70%] bg-blue-500 text-ellipsis whitespace-pre-line">
              <p className="text-lg">{note.content}</p>
            </div>
            <footer></footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentNote;
