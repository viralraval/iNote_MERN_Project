import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();
  const FuncSignUp = async () => {
    // API Call
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("username").value,
        password: document.getElementById("password").value,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.authtoken) {
      alert("Account Created Successfully")
      navigate("/login");
    }
  };
  return (
    <div className="p-5">
      <div className="bg-white border-2 border-gray-200 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col lg:p-10 lg:m-16">
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="name"
            type="text"
            placeholder="name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={FuncSignUp}
            className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
