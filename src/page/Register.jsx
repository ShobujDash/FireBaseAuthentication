import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../firebase";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
     const user = await registerWithEmailAndPassword(email, password);
     console.log(user)
     navigate("/login")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Register</h1>
      <form className="flex flex-col">
        <div className="my-1">
          <label htmlFor="email">Email address :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
            className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="email">Password : </label>
          <input
            type="passworde"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
          />
        </div>
        <button
          className="px-2 py-1 bg-gray-700 text-white rounded-md "
          type="submit"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
      <p>
        Already Have an Account? <NavLink to="/login">Sing In</NavLink>
      </p>
    </div>
  );
}

export default Register;
