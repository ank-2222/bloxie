import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../scss/navbar.scss";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";


export default function Navbar({setIsAuth,isAuth}) {
  // const isAuth = localStorage.getItem("isAuth");
 
  const logoutUser=()=>{
    signOut(auth).then(()=>{
      setIsAuth(false);
      window.location.pathname="/login"
    })
  }
  return (
    <>
      <nav className="navbar">
        <div className="logo">BLOXIE</div>
        <div className="navigate">
          <ul>
            <li>
              <Link className="nav__link" to="/">
                Home
              </Link>
            </li>
            {/* <li>
              {
                isAuth?<Link className="nav__link" to="/blogs">
                Create Blogs &#10148;
 
               </Link>:null
              }
              
            </li> */}
            <li>
            <Link className="nav__link" to="/blogs">
                Create Blogs &#10148;
 
               </Link>
            </li>
            <li>
              {!isAuth?<Link className="nav__link" to="/login">
                Login
              </Link>:<button onClick={logoutUser}>Log Out</button>}
              
            </li>
            <li><h5>{isAuth?`Hi!,${auth.currentUser
.displayName}`:null}</h5>
{
  isAuth?<img src={auth.currentUser.photoURL} referrerpolicy="no-referrer" height={30} width={30} style={{ borderRadius:"50px"}}></img>:null
}

</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
