import {BrowserRouter, Routes, Route} from "react-router-dom"
import React,{useEffect} from 'react'
import {HomePage,} from "./Routes.js"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
