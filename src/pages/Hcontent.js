import React from "react";
import { Link } from "react-router-dom";

const Hcontent = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              iNote
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptas fugit aliquid iusto, consectetur nostrum voluptates? Facilis dolore delectus, quidem fuga nulla sed recusandae ab eos beatae consectetur sequi! Ipsam.
            </p>
            <div className="flex justify-center">
              <Link to="/login" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Login
              </Link>
              <Link  to="/signup" className="ml-4 inline-flex text-gray-100 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">
                SignUp
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-lg h-max"
              alt="hero"
              src="https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hcontent;
