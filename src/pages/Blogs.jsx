import React from "react";
import Navbar from "../component/Navbar";
import "../scss/createblog.scss";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db,storage } from "../firebase";
import { useNavigate } from "react-router-dom";
import {ref,uploadBytes} from "firebase/storage";
import {v4} from "uuid";


export default function Blogs({setIsAuth, isAuth }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const postCollectionRef = collection(db, "posts");
  const [imageUpload,setImageUpload]= useState(null);
  
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      description,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });

    const imageRef = await ref(storage,`images/${imageUpload.name+v4()}`)
    uploadBytes(imageRef,imageUpload).then(()=>{
      console.log("image Uploaded");
    })


    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }

  }, []);

  return (
    <>
      <Navbar setIsAuth={setIsAuth} isAuth={isAuth}></Navbar>
      <h2 className="head">Create Blogs Here.</h2>

      <div className="createpost">
        <form>
        <input
          className="title text__input"
          type="text"
          placeholder="Title"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        <textarea
          className="description text__input"
          placeholder="Write your thoughts here..."
          maxLength={1000}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></textarea>
        <input type="file" accept="image/png, image/jpeg"
        onChange={(event)=>{setImageUpload(event.target.files[0]);}}
        required
        ></input>
        {/* <button onClick={createPost}>Post</button> */}
        <input referrerpolicy="no-referrer" type="button" onClick={createPost} value="submit"></input>

        </form>
       
        <br></br>
      </div>
    </>
  );
}
