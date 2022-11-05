import React from "react";
import "./App.css";
import Home from './pages/homepage/home'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";






function App() {


  return (
    <div>
        <Home/>
    </div>
  );
}

export default App;
