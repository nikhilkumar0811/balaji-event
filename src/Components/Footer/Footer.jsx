import React from "react";
import "./Footer.css";
import logo from "../../assets/BALAJI D&E LOGO-08.3443eaa0191f9039f235.png";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import imgone from '../../Images/Home/Homeabout/one.jpg'
import imgtwo from '../../Images/Home/Homeabout/two.jpg'
import imgthree from '../../Images/Home/Homeabout/three.jpg'
import imgfour from '../../Images/Home/Homeabout/four.jpg'
import imgfive from '../../Images/Home/Essence/one.jpg'
import imgsix from '../../Images/Home/Essence/two.jpg'
function Footer() {
  return (
    <>
      <footer className="mainn-footer">
        {/*Widgets Section*/}
        <div className="widgetss-section">
          <div className="container">
            <div className="row">
              {/*Big Column*/}
              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <div className="row">
                  {/*Footer Column*/}
                  <div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget about-widget">
                      <div className="logo">
                        <NavLink to="/">
                          <img src={logo} alt="" />
                        </NavLink>
                      </div>
                      <div className="text">
                        <p>
                          We have very good strength in innovative technology
                          and tools with over 35 years of experience. We makes
                          long-term investments goal in global companies in
                          different sectors, mainly in Europe and other
                          countries.
                        </p>
                      </div>
                      <ul className="social-icon-one social-icon-colored">
                        <li>
                          <a
                            href="https://www.facebook.com/balajidecoratorsevents/"
                            target="_blank"
                            style={{
                              color: "unset !important",
                              textDecoration: "none",
                            }}
                          >
                            <i>
                              <CiFacebook />{" "}
                            </i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/balajidecoratorevents/"
                            target="_blank"
                            style={{
                              color: "unset !important",
                              textDecoration: "none",
                            }}
                          >
                            <i>
                              <FaInstagram />
                            </i>
                          </a>
                        </li>

                        <li>
                          <i className="fab fa-youtube" />
                        </li>
                        <li>
                          <i className="fab fa-dribbble" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*Footer Column*/}
                  <div className="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget useful-links">
                      <h2 className="widget-title">Useful Links</h2>
                      <ul className="user-links">
                        <li>
                          <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                          <NavLink to="/best-wedding-venue-santacruz">About Us</NavLink>
                        </li>
                        <li>
                          <NavLink to="/best-banqute-hall-santacruz">Services</NavLink>
                        </li>
                        <li>
                          <NavLink to="/party-hall-santacruz">Gallery</NavLink>
                        </li>
                        {/* <li>
                          <NavLink to="blog.html">Blogs</NavLink>
                        </li> */}
                        <li>
                          <NavLink to="/event-decorator-santacruz">Contact Us</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*Big Column*/}
              <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <div className="row">
                  {/*Footer Column*/}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    {/*Footer Column*/}
                    <div className="footer-widget useful-links">
                      <h2 className="widget-title">Contact Us</h2>
                      <ul className="user-links">
                        <li>
                          <a style={{color:'white'}}>All 7 days working</a>
                        </li>
                        <li>
                          <a href="tel:(+91)77770 55255">(+91)77770 55255</a>
                        </li>
                        <li>
                          <a href="tel:7304846462 ">7304846462 </a>
                        </li>
                        <li>
                          <a href="mailto:balajidecoratorsandevents@gmail.com" style={{wordWrap:'wrap-word !important'}}>balajidecoratorsandevents@gmail.com</a>
                        </li>
                        <li>
                          <a style={{color:'white'}}>
                            Patuck polytechnic college near vakola bridge
                            Santacruz east Mumbai 400055
                          </a>
                        </li>
                        {/* <li>
                    <a href="blog.html">Blogs</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li> */}
                      </ul>
                    </div>
                  </div>
                  {/*Footer Column*/}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    {/*Footer Column*/}
                    <div className="footer-widget instagram-widget">
                      <h2 className="widget-title">Instagram Gallery</h2>
                      <div className="widget-content">
                        <div className="outer clearfix">
                          <figure className="image">
                            <NavLink
                              to="/party-hall-santacruz"
                              className="lightbox-image"
                              title="Image Title Here"
                            >
                              <img
                                src={imgone}
                                alt="img"
                              />
                            </NavLink>
                          </figure>
                          <figure className="image">
                            <NavLink
                              to="/party-hall-santacruz"
                              className="lightbox-image"
                              title="Image Title Here"
                            >
                              <img
                                src={imgtwo}
                                alt="img"
                              />
                            </NavLink>
                          </figure>
                          <figure className="image">
                            <NavLink
                              to="/party-hall-santacruz"
                              className="lightbox-image"
                              title="Image Title Here"
                            >
                              <img
                                src={imgthree}
                                alt="img"
                              />
                            </NavLink>
                          </figure>
                          <figure className="image">
                            <NavLink
                              to="/party-hall-santacruz"
                              className="lightbox-image"
                              title="Image Title Here"
                            >
                              <img
                                src={imgfour}
                                alt="img"
                              />
                            </NavLink>
                          </figure>
                          <figure className="image">
                            <NavLink
                              to="/party-hall-santacruz"
                              className="lightbox-image"
                              title="Image Title Here"
                            >
                              <img
                                src={imgfive}
                                alt="img"
                              />
                            </NavLink>
                          </figure>
                          <figure className="image">
                            <NavLink
                              to="/party-hall-santacruz"
                              className="lightbox-image"
                              title="Image Title Here"
                            >
                              <img
                                src={imgsix}
                                alt="img"
                              />
                            </NavLink>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Footer Bottom*/}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <div className="copyright-text">
                <p>
                  © Copyright 2024 All Rights Reserved by{" "}
                  <a href="index.html">balaji decorators & event</a>
                </p>
              </div>
              <div className="copyright-text">
                <p>
                  Designed by{" "}
                  <a href="https://skdm.in/" target="_blank">
                    Shree Krishna Digital Marketing
                  </a>
                </p>
              </div>
              {/* <div>
                Designed by
                <a href="https://skdm.in/" target='_blank' >Shree Krishna Digital Marketing</a> 
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
