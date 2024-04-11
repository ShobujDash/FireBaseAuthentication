import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword } from "../firebase";
import { signInWithGoogle } from "../firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await loginWithEmailAndPassword(email, password);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSocialLogin = async () => {
    const user = await signInWithGoogle();
    console.log(user)
    navigate("/")
  }



  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Login</h1>
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
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="px-2 py-1 my-2 bg-blue-700 text-gray-500 rounded-md "
          type="submit"
          onClick={handleSocialLogin}
        >
          Login With Google
        </button>
      </form>
      <p>
        Already Have an Account? <NavLink to="/register">Register</NavLink>
      </p>
      <p>
        Forgot Password ?{" "}
        <NavLink
          to="/reset
        "
        >
          Reset Your Password
        </NavLink>
      </p>
    </div>
  );
}

export default Login;
