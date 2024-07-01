import {BrowserRouter, Routes, Route} from "react-router-dom"
import React,{useEffect} from 'react'
import {GalleryPage, HomePage, GenerateImg} from "./Routes.js"

import "./App.css"
import SingleImg from "./pages/SingleImg.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Gallery' element={<GalleryPage/>}/>
        <Route path="/singlePage/:id" element={<SingleImg />} />
        <Route path="/Generate" element={<GenerateImg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
