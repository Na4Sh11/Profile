import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";

function App() {
  return (
    <>
    <Navbar/>
    {/* <Home/> */}
    {/* <About /> */}
    </>
  );
}

export default App;
