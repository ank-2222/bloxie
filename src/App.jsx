import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About';
import Blogs from './pages/Blogs'
import Login from './pages/Login';
import { useState } from 'react';
function App() {
   const[isAuth,setIsAuth]=useState(false);
  return (

   <BrowserRouter>
   <Routes> 
          <Route path="/" element={<Home setIsAuth={setIsAuth} isAuth={isAuth} />} />  
          <Route path="/about" element={<About/>} />  
          <Route path="/blogs" element={<Blogs setIsAuth={setIsAuth} isAuth={isAuth}/>} />  
          <Route path="/login" element={<Login setIsAuth={setIsAuth} isAuth={isAuth} />} />  
      </Routes> 
   </BrowserRouter>
    

  )
}

export default App
