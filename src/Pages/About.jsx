import React, { useState,useEffect } from "react";
import Testimoniall from "../Components/Testimoniall/Testimoniall.jsx";
import Counter from "../Components/Counter/Counter";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import History from "../Components/History/History";
import imgtwo from '../Images/Home/Essence/two.jpg'
import imgfour from '../Images/Home/Essence/four.jpg'
function About() {
  useEffect(()=>{
    document.title="Best Wedding Venue In Santacruz | Balaji Event & Decorators";
    document.querySelector("meta[name='description']").setAttribute("content",
      "Discover the best wedding venue in Santacruz with Balaji Event & Decorators. Elegant spaces, stunning decor, and exceptional service await."
    )
    
  })
  window.scrollTo(0, 0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div
        className="breadcrumb-area breadcrumb-padding bg-img"
        style={{
          backgroundImage:
            `url(${imgtwo})`,
        }}
      >
        <div className="container">
          <div className="breadcrumb-content text-center">
            <h1>About Us</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <i className="fa fa-angle-right" />
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>

      <History />

      <section className="cat_about_section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="cat_section_headings wow zoom"
                style={{ visibility: "visible", animationName: "zoom" }}
              >
                <span className="cat_subheading">Who we are</span>
                <h4>About Our Banquet Service & Catering Services</h4>
                <div className="cat_border" />
              </div>
            </div>
          </div>
          <div
            className="cat_about_contentt wow frombottom"
            style={{ visibility: "visible", animationName: "frombottom" }}
          >
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="cat_about_img cat_hover_img">
                  <img
                    src={imgfour}
                    alt="img"
                    style={{width:"100%",height:'300px',objectFit:'cover',borderRadius:"8px"}}
                    className="img-responsive"
                  />
                  <div className="cat_add_img_caption" />
                  <div className="cat_add_zoom cat_so_icons">
                    <ul>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                {/* <span className='sapan-bruh'>Etiam facilisis cursus mauris, id euismod ex porttitor at.</span> */}
                <p>
                  Founded in 1975 by the visionary Mr. Prakash Rambhau Kalekar,
                  our wedding planning business has been dedicated to turning
                  dreams into reality for nearly half a century. With a legacy
                  of excellence, we have successfully orchestrated over 500
                  weddings, each uniquely tailored to the couple's desires. Our
                  unwavering commitment to quality and attention to detail has
                  cemented our reputation as the go-to choice for creating
                  unforgettable wedding experiences.{" "}
                </p>
                {isExpanded && (
                  <>
                    Balaji Decorators and Caterers take pride in offering
                    customized solutions tailored to meet your unique needs and
                    preferences. Their expertise in the industry has earned them
                    a reputation as the best event decorator in Santacruz. From
                    elegant floral arrangements to stunning lighting setups,
                    they meticulously plan and execute every aspect of your
                    event decoration, ensuring a seamless and visually appealing
                    experience for you and your guests. What sets Balaji
                    Decorators and Caterers apart is their commitment to quality
                    and innovation. They stay updated with the latest trends and
                    technologies in event decoration, incorporating modern
                    elements to create a contemporary yet timeless look. Their
                    team of skilled professionals collaborates closely with
                    clients, understanding their vision and bringing it to life
                    with precision and creativity. No wonder they are often
                    referred to as the best event decorator in Santa Cruz. In
                    addition to their exceptional decorating services, Balaji
                    Decorators and Caterers also offer top-notch catering
                    solutions. Their diverse menu options cater to various
                    tastes and preferences, ensuring a delightful culinary
                    experience for all attendees. With a focus on quality
                    ingredients and impeccable presentation, their catering
                    services complement the overall ambiance of your event
                    perfectly. Choosing Balaji Decorators and Caterers means
                    choosing excellence and reliability. Their dedication to
                    creating memorable events and their reputation as the best
                    event decorator in Santacruz make them the go-to choice for
                    anyone looking to host an event that leaves a lasting
                    impression. Trust Balaji Decorators and Caterers to turn
                    your special occasion into an extraordinary celebration.
                  </>
                )}

                <button onClick={handleToggle} className="primaryy-btnn px-3 py-2">
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
                <a
                  href="javascript:void(0);"
                  className="cat_view"
                  data-hover="view menu"
                >
                  {" "}
                  {/* <button className="flaticon-food-2">More info </button> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimoniall />
      <Counter />
      <Footer />
    </>
  );
}

export default About;
