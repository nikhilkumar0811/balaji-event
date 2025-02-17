import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Event from "./Pages/Event";
import Navibar from "./Components/Navibar/Navibar";
import GalleryData from "./Pages/GalleryData";
import { IoCall } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";


function App() {
  return (
    <BrowserRouter>
      <Navibar />
  <div className="" style={{position:'fixed',bottom:'20px',left:'10px',backgroundColor:"white",borderRadius:"50%",padding:'10px',zIndex:"10"}}>
      <a   href="tel:77770 55255">
          <IoCall color="blue" size={30}  />
      </a>
  </div>
  <div className="" style={{position:'fixed',bottom:'20px',right:'10px',backgroundColor:"white",borderRadius:"50%",padding:'10px',zIndex:"10"}}>
    <a  href="https://wa.me/7777055255">
        <BsWhatsapp color="green" size={30}  />
    </a>

  </div>

    



      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best-wedding-venue-santacruz" element={<About />} />
        <Route path="/party-hall-santacruz" element={<Gallery />} />
        <Route path="/event-decorator-santacruz" element={<Contact />} />
        {GalleryData.map((v, i) => (
          <Route key={i} exact path={v.slug} element={<Event />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
