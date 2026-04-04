import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./assets/css/style.css";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import Testonomials from "./Components/Testonomials";
import Login from "./Components/Login";
import HoroScope from "./Components/HoroScope";
import Tarot from "./Components/Tarot";
import Appiontment from "./Components/Appiontment";
import Love from "./Components/Love";
import Kundli from "./Components/Kundli";
import Horo from "./Components/Horo";
import Puja from "./Components/Puja";
import Gemstone from "./Components/Gemstone";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>

      <Route element={<RootLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/testimonials" element={<Testonomials/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/horoscope" element={<HoroScope/>} />
         <Route path="/tarot" element={<Tarot/>} />
         <Route path="/appointment" element={<Appiontment/>} />
         <Route path="/love-marriage" element={<Love/>} />
         <Route path="/kundli" element={<Kundli/>} />
         <Route path="/horoscopes" element={<Horo/>} />
         <Route path="/puja-remedies" element={<Puja/>} />
         <Route path="/gemstone" element={<Gemstone/>} />
         
      </Route>

    </Routes>
  </BrowserRouter>,
);
