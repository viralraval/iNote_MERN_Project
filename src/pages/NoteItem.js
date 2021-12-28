import React from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";

function NoteItem(props) {
  const context = useContext(noteContext);
  const { deleteNote,editNote } = context;
  const { note } = props;
  const modal = document.querySelector('.modal');

  const showModal = () => {
    modal.classList.remove('hidden')
  }
  const closeModal = () => {
    modal.classList.add('hidden')
  }
  const handleUpdate = () => {
    editNote(
      document.getElementById("hid").value,
      document.getElementById("title").value,
      document.getElementById("description").value,
      document.getElementById("tag").value
    );
    closeModal();
    
  };

  return (
    <div className="xl:w-1/4 md:w-1/3 p-5 w-full">
      <div className="bg-gray-800 p-6 rounded-lg object-cover">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src="https://images.unsplash.com/photo-1636632520175-720680b6b819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=892&q=80https://images.unsplash.com/photo-1636632520175-720680b6b819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=892&q=80"
          alt="content"
        />
        <div>
          <h2 className="text-lg text-gray-100 title-font mb-1">
            TITLE: {note.title}
          </h2>
          <p className="leading-relaxed text-gray-100">
            DESCRIPTION: {note.description}
          </p>
          <h2 className="tracking-widest text-green-400 text-sm title-font mt-1">
            TAG: {note.tag}
          </h2>
        </div>
        <div className="icon mt-5 flex flex-wrap">
          <button className="flex-1 hover:bg-red-500 border border-gray-700 rounded-lg"
            onClick={() => {
              deleteNote(note._id);
              alert("Note Deleted Successfully")
            }}
          >
            <i
              className="fa fa-trash  mx-10"
              style={{ fontSize: "1.5rem", color: "white" }}
            ></i>
          </button>
          <button className="ml-1 flex-1 hover:bg-indigo-500 border border-gray-700 rounded-lg"
            onClick={() => {
              showModal();
              
              document.getElementById("title").value = note.title;
              document.getElementById("description").value = note.description;
              document.getElementById("tag").value = note.tag;
              document.getElementById("hid").value = note._id;
            }}
          >
            <i
              className="fa fa-edit"
              style={{ fontSize: "1.5rem", marginTop: "3px", color: "white" }}
            ></i>
          </button>
        </div>
      </div>

  
      <div className=" hidden modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">

        <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
          <div className="border-b px-4 py-2 flex justify-between items-center">
            <h3 className="font-semibold text-lg">Edit Note</h3>
            <button className="text-black close-modal" onClick={closeModal}>X</button>
          </div>
          <div className="p-3">
          <form>
           <label htmlFor="title">Title : </label> 
           <input className="title border p-2 rounded block w-full" id="title" type="text" placeholder="enter updated title"/><br/>
           <label htmlFor="description">Description : </label>
           <input className="description border p-2 rounded block w-full" id="description" type="text" placeholder="enter updated description"/><br/>
           <label htmlFor="tag">Tag : </label>
           <input className="tag border p-2 rounded block w-full" type="text" id="tag" placeholder="enter updated tag"/><br/>
           <input type="text" className="hidden" id="hid"/>
          </form>
          </div>
          <div className="flex justify-end items-center w-100 border-t p-3">
            <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1" onClick={closeModal}>Cancel</button>
            <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white" onClick={handleUpdate}>Ok</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default NoteItem;
