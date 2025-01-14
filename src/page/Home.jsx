import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
function Home() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const handleLogout=()=> {
    signOut(auth).then(() => {
      navigate('/login')
      console.log("SignedOut")
    }).catch((error) => {
      console.error(error)
    })
  }

  if(loading) return <p>User info loading...</p>

  return (
    <>
      <div>Welcom, {user.email}</div>
      <button
        className="bg-black text-white rounded p-1"
        onClick={handleLogout}
      >Logout</button>
    </>
  );

}

export default Home;
