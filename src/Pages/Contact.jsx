import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Footer from '../Components/Footer/Footer';
import { useEffect } from 'react';
import img from '../Images/Gallery/imgcobg.jpg'

function Contact() {
  useEffect(()=>{
    document.title="Event Decorator Near Santacruz| Balaji Event & Decorators";
    document.querySelector("meta[name='description']").setAttribute("content",
      "Looking for an event decorator near Santacruz? Balaji Event & Decorators offers exquisite designs and flawless execution for your events."
    )
    
  })
  window.scrollTo(0, 0);
  return (
    <>
      <div
  className="breadcrumb-area breadcrumb-padding bg-img"
  style={{ backgroundImage: `url(${img})` }}
>
  <div className="container">
    <div className="breadcrumb-content text-center">
      <h1>Contact Us</h1>
      <ul>
        <li>
            <Link to="/">
            Home
            </Link>
          
        </li>
        <li>
          <i className="fa fa-angle-right" />
        </li>
        <li>Contact Us</li>
      </ul>
    </div>
  </div>
</div>

  <section>
    <div className="container">
    <div className="section section-padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-md-6">
        <div className="contact-info-wrap">
          <div className="single-contact-info-wrap">
            <div className="info-icon">
              <i className="dlicon ui-1_home-51" />
            </div>
            <div className="info-content">
              <h3 className="title">Address</h3>
              <p className="width">
              Patuck polytechnic college near vakola bridge Santacruz east 
Mumbai 400055
              </p>
            </div>
          </div>
          <div className="single-contact-info-wrap">
            <div className="info-icon">
              <i className="dlicon ui-2_phone" />
            </div>
            <div className="info-content">
              <h3 className="title">Phone</h3>
              <p>
                {" "}
                Mobile: <span>(+91)77770 55255</span> <br />
                <span className='w-100 d-flex justify-content-center'>7304846462 </span>
                {/* Morning 10 am to 9 pm */}
              </p>
              <p>
                {" "}
                {/* Hotline: <span>1802550 - 1102456</span> */}
              </p>
            </div>
          </div>
          <div className="single-contact-info-wrap">
            <div className="info-icon">
              <i className="dlicon ui-1_email-85" />
            </div>
            <div className="info-content">
              <h3 className="title">Email</h3>
              <p>balajidecoratorsandevents@gmail.com </p>
              {/* <p>info@example.com</p> */}
            </div>
          </div>
          <div className="single-contact-info-wrap">
            <div className="info-icon">
              <i className="dlicon ui-2_share" />
            </div>
            <div className="info-content">
              <h3 className="title">Follow us</h3>
              <div className="social-icon-style mt-4">
                <a className="facebook" href="https://www.facebook.com/balajidecoratorsevents/" target='_blank'>
                  <i className="fa fa-facebook"><FaFacebookF /></i>
                </a>
                {/* <a className="twitter" href="#">
                  <i className="fa fa-twitter"><FaTwitter /></i>
                </a> */}
                <a className="google-plus" href="https://www.instagram.com/balajidecoratorevents/" target='_blank'>
                  <i className="fa fa-google-plus"><FaInstagram /></i>
                </a>
                {/* <a className="behance" href="#">
                  <i className="fa fa-behance" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-md-6 p-4">
        <div className="contact-from-wrap">
          <form
            id="contact-form"
            action="https://whizthemes.com/mail-php/tasnim/mail.php"
            method="post"
          >
            <input name="name" type="text" placeholder="Name" />
            <input name="email" type="email" placeholder="Email" />
            <input name="subject" type="text" placeholder="Event" />
            <textarea
              name="message"
              placeholder="Your message"
              defaultValue={""}
            />
            <input
              className="submit"
              type="submit"
              defaultValue="Send Message"
            />
          </form>
          <p className="form-messege" />
        </div>
      </div>
    </div>
    <div className="map  mt-md-12">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6044964392795!2d72.8496042!3d19.0811191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e14c7ea437%3A0x8601d399f3aa08dd!2sBALAJI%20DECORATORS%20AND%20EVENTS!5e0!3m2!1sen!2sin!4v1738239896988!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    </div>
    
  </div>
</div>

    </div>
    <Footer/>
  </section>
    </>
  )
}

export default Contact
