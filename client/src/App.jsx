import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {React,useState,useEffect} from "react"
import { Home } from './pages/home';
import { Create } from './pages/create';
import {Routes,Route} from "react-router-dom";
import { Link } from '@mui/material';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/create" element = {<Create/>}/>
          <Route path = "/create/:id" element = {<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
