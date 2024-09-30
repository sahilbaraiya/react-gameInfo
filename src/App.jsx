import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import AllGames from "./components/AllGames";
import DetailGame from "./components/DetailGame";
import About from "./components/About";

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/all-games" element={<AllGames/>} />
        <Route path="/detail-game/:id" element={<DetailGame/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
