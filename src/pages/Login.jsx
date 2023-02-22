import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";


export default function Login({setIsAuth}) {

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    if(result){
      setIsAuth(true);
      localStorage.setItem("isAuth",true);
      navigate("/");
    }
  }
    return (
      <div className="loginpage">
        <Navbar></Navbar>
        <p className="login__text">Login to Bloxie!</p>
        <button onClick={signInWithGoogle} className="login-with-google-btn">
          Signup with Google
        </button>
      </div>
    );
  };

