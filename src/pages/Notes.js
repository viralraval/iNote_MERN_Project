import React, { useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  let navigate = useNavigate();
  if(localStorage.getItem('token')==null){
    navigate("/login");
  }
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font mt-5 mr-5 ml-5 ">
      <h1 className="m-2 text-gray-800 text-2xl font-medium">My Notes</h1>
      <hr style={{width:"50%",marginLeft:"25%",border:"1px solid lightgrey",marginBottom:"1rem"}}></hr>
        <div className="flex flex-wrap w-full">
            
          {notes.map((note) => {
            return <NoteItem key={note._id} note={note} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Notes;
