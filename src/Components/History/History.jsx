import React, { useState } from 'react'
import "./History.css"
import { Image } from 'antd'
import { Link } from 'react-router-dom'
import imgone from '../../Images/Home/Essence/one.jpg'
import imgtwo from '../../Images/Home/Essence/five.jpg'
import imgthree from '../../Images/Home/Essence/three.jpg'

import imgfifteen from '../../Images/Home/Mission/five.jpg'


function History() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <section className="about-us spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-left">
                <div className="section-title">
                  <span>a memorable holliday</span>
                  <h2>
                    {/* Since 1975 <br />
                    for Service */}
                    Welcome To Balaji Decorators And Caterers
                  </h2>
                </div>
                <div className="second-text">
                  <p>
                    Balaji Decorators and Caterers: Best Event Decorator in Santacruz

                    When it comes to creating unforgettable events, Balaji Decorators and Caterers stands out as the best event decorator in Santacruz. Renowned for their exceptional attention to detail and creative flair, Balaji Decorators and Caterers have been transforming ordinary venues into extraordinary spaces for years. Whether you are planning a wedding, corporate event, birthday party, or any other special occasion, their team ensures that your event is nothing short of spectacular.
                    {isExpanded && (
                      <>
                        Balaji Decorators and Caterers take pride in offering customized solutions tailored to meet your unique needs and preferences. Their expertise in the industry has earned them a reputation as the best event decorator in Santacruz. From elegant floral arrangements to stunning lighting setups, they meticulously plan and execute every aspect of your event decoration, ensuring a seamless and visually appealing experience for you and your guests.

                        What sets Balaji Decorators and Caterers apart is their commitment to quality and innovation. They stay updated with the latest trends and technologies in event decoration, incorporating modern elements to create a contemporary yet timeless look. Their team of skilled professionals collaborates closely with clients, understanding their vision and bringing it to life with precision and creativity. No wonder they are often referred to as the best event decorator in Santa Cruz.

                        In addition to their exceptional decorating services, Balaji Decorators and Caterers also offer top-notch catering solutions. Their diverse menu options cater to various tastes and preferences, ensuring a delightful culinary experience for all attendees. With a focus on quality ingredients and impeccable presentation, their catering services complement the overall ambiance of your event perfectly.

                        Choosing Balaji Decorators and Caterers means choosing excellence and reliability. Their dedication to creating memorable events and their reputation as the best event decorator in Santacruz make them the go-to choice for anyone looking to host an event that leaves a lasting impression. Trust Balaji Decorators and Caterers to turn your special occasion into an extraordinary celebration.
                      </>
                    )}
                  </p>
                  <button onClick={handleToggle} className="primaryy-btnn px-3 py-2 ">
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                </div>

                {/* <button data-bs-toggle="modal"
                  data-bs-target=""
                  className="primaryy-btnn">
                  <Link to="/contact">
                    Make a Reservation
                  </Link>

                </button> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className=" col-12 col-lg-6 col-md-6">
                  <div className="about-img w-100">
                    <Image  style={{height:'250px',width:"100%",objectFit:"cover"}}  src={imgone} alt="img" />
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6 d-flex justify-content-start align-items-end">
                  <div className="about-img w-100 second-img">
                    <Image style={{height:'200px',width:"100%",objectFit:"cover"}} src={imgtwo} alt="img" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6 col-md-6">
                  <div className="about-img w-100 third-img d-flex justify-content-end">
                    <Image  style={{height:'200px',width:"100%",objectFit:"cover"}} src={imgfifteen} alt="img" />
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6">
                  <div className="about-img w-100">
                    <Image style={{height:'250px',width:"100%",objectFit:"cover"}} src={imgthree} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default History
