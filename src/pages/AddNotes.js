import React, { useState } from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";

const AddNotes = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const handleClick = () => {
    addNote(
      document.getElementById("title").value,
      document.getElementById("description").value,
      document.getElementById("tag").value
    );
    alert("Note Added Successfully");
  };


  return (
    <div className="p-1">
        <h1 className="m-5 text-gray-800 text-xl font-medium">Add Notes</h1>
      <form className="lg:ml-56 lg:w-2/3 bg-gray-800  border rounded-lg p-2">
        <input type="hidden" id="hid" />
        <div className="md:flex md:items-center mb-6 p-2">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Title
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="title"
              type="text"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 p-2">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Description
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="description"
              type="text"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 p-2">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Tag
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="tag"
              type="text"
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              id="buto"
              onClick={handleClick}
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNotes;
