import React from "react";
import Banner from "../Components/Banner/Banner";
import About from "../Components/About/About";
import Essence from "../Components/Essence/Essence";
import WhyChoose from "../Components/WhyChoose/WhyChoose";
import Counter from "../Components/Counter/Counter";
import Testimoniall from "../Components/Testimoniall/Testimoniall";
import Mission from "../Components/Mission/Mission";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";

function Home() {
  useEffect(()=>{
    document.title="Best Event Decorator In Santacruz| Balaji Event & Decorators";
    document.querySelector("meta[name='description']").setAttribute("content",
      "Discover the best event decorator in Santacruz with Balaji Event & Decorators, ensuring stunning and memorable decor for any occasion."
    )
    
  })
  window.scrollTo(0, 0);
  return (
    <>
      {/* <Navibar/> */}
      <Banner />
      <About />
      <Essence />
      <WhyChoose />
      <Counter />
      <Testimoniall />
      <Mission />
      <Footer />
    </>
  );
}

export default Home;
