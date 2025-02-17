// Import Swiper React components

// Import Swiper styles
import "swiper/css";

import "./Testimoniall.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img from '../../Images/Home/User Avatar.png'
function Testimoniall() {
    
  return (
    <>
      <div className="parents">
        <div className="col-lg-12">
          <div
            className="cat_section_headings wow zoom dj-bottom"
            style={{ visibility: "visible", animationName: "zoom" }}
          >
            {/* <span className="cat_subheading">Highly recommend their exceptional service <br />and unforgettable event coordination expertise.</span> */}
            <h4 className="text-center mt-5 pt-5">What Our client say</h4>
            <div className="cat_border" />
          </div>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-container">
            <div className="testimonial-avatar">
              <img
                src={img}
                alt="User Avatar"
              />
            </div>
            <div className="testimonial-text">
              <p className="testimonial-name">Amit Sharma</p>
              {/* <p className="testimonial-role">Marketing Manager, Axme Inc.</p> */}
              <p>
                "Balaji Events & Decorators truly made our wedding
                unforgettable. Their attention to detail and creative designs
                were beyond our expectations. Highly recommend them for any
                special occasion!"
              </p>
            </div>
          </div>
          {/* Testimonial containers... */}
          <div className="testimonial-container">
            <div className="testimonial-avatar">
              <img
                src={img}
                alt="User Avatar"
              />
            </div>
            <div className="testimonial-text">
              <p className="testimonial-name">Sneha Patel</p>
              {/* <p className="testimonial-role">CEO at XYZ</p> */}
              <p>
                "The team at Balaji Events & Decorators provided exceptional
                service for our corporate event. Their professionalism and
                ability to bring our vision to life were impressive. Thank you
                for a job well done!"
              </p>
            </div>
          </div>
          {/* Testimonial containers... */}
          <div className="testimonial-container">
            <div className="testimonial-avatar">
              <img
                src={img}
                alt="User Avatar"
              />
            </div>
            <div className="testimonial-text">
              <p className="testimonial-name">Ravi Kumar</p>
              {/* <p className="testimonial-role">CEO at ABC Company</p> */}
              <p>
                "We were thrilled with the decorations and arrangements for our
                daughter's birthday party, thanks to Balaji Events & Decorators.
                They made it a memorable day for all of us. Great work!"
              </p>
            </div>
          </div>
          {/* <div className="fingg">
      <img src={fing} alt="" />
    </div> */}
        </div>
      </div>
    </>
  );
}

export default Testimoniall;
