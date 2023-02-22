import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";

export default function Home({ setIsAuth, isAuth }) {
  const [postLists, setPostLists] = useState([]);
  const [imageLists, setImageLists] = useState([]);
  const postCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  const imageListRef = ref(storage, "images/");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostLists(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })));
    };

  

    getPosts();
  }, [deletePost]);

//------------------


  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageLists((prev) => [...prev, url]);

  //       });
  //     });
  //   })
  
  // }, [])
  
 console.log(imageLists);
  return (
    <>
      <Navbar setIsAuth={setIsAuth} isAuth={isAuth}></Navbar>

      <h2>Blogs</h2>
      <div>
        {postLists?.map((post) => {
          return (
            <>
              {isAuth && post.author.id === auth.currentUser.uid && (
                <div
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  &#128465;
                </div>
              )}

              <h3>{post.title}</h3>
            </>
          );
        })}
      </div>
    </>
  );
}
