import React from "react";
import { GrFormEdit, GrFormTrash } from "react-icons/gr";

const OutsideNote = ({ id, title, content }) => {
  return (
    <li key={id} className="list-none">
      <a href={`/notes/${id}`}>
        <article className="bg-white shadow-xl h-[170px] w-[170px] p-[5px] overflow-hidden cursor-pointer transition-transform ease-in-out hover:scale-105">
          <div className=" h-[120px] overflow-hidden">
            <h5 className="font-bold">{title}</h5>
            <p>{content}</p>
          </div>
          <footer className="flex">
            <GrFormEdit
              size={"30px"}
              className="transition-transform ease-in-out cursor-pointer hover:scale-110 hover:text-blue-500"
            />
            <GrFormTrash
              size={"30px"}
              className="transition-all ease-in-out cursor-pointer hover:scale-110 hover:text-blue-500"
            />
          </footer>
        </article>
      </a>
    </li>
  );
};

export default OutsideNote;
