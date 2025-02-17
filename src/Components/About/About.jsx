import React, { useState } from "react";
import "./About.css";
import imgone from '../../Images/Home/Homeabout/one.jpg'
import imgtwo from '../../Images/Home/Homeabout/two.jpg'
import imgthree from '../../Images/Home/Homeabout/three.jpg'
import imgfour from '../../Images/Home/Homeabout/four.jpg'

function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="NewAbout-Section-1">
      <div className="container">
        <div className="NewAbout_Section-Con">
          <div className="row">
            <div className="col-md-6">
              <div className="NewAboutUS-Image-Main-con">
                <div className="row">
                  <div className="col-md-6">
                    <div className="NewAboutUS-Image-con">
                      <img
                        src={imgone}
                        alt="Event"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 displaynone">
                    <div className="NewAboutUS-Image-Second-con">
                      <div className="NewAboutUS-Image-Second">
                        <img
                          src={imgtwo}
                          alt="Event"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 displaynone">
                    <div className="NewAboutUS-Image-Third-con">
                      <div className="NewAboutUS-Image-Third">
                        <img
                          src={imgthree}
                          alt="Event"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 displaynone">
                    <div className="NewAboutUS-Image-Forth-con">
                      <img
                        src={imgfour}
                        alt="Event"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="NewAbout-Section-con-details-Info">
                <div className="NewAbout-Section-con-details-con">
                  <div className="NewAbout-Section-con-details-Info-con">
                    <h2 className="NewAboutUs-tagLlines paddingtopr">
                      About Us
                    </h2>
                    <h3 className="textcent">
                      Welcome to Balaji Decorators and Caterers
                    </h3>
                    <p style={{ textAlign: "justify" }}>
                      Balaji Decorators and Caterers: Best Event Decorator in
                      Santacruz
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      When it comes to creating unforgettable events, Balaji
                      Decorators and Caterers stands out as the best event
                      decorator in Santacruz. Renowned for their exceptional
                      attention to detail and creative flair, Balaji Decorators
                      and Caterers have been transforming ordinary venues into
                      extraordinary spaces for years. Whether you are planning a
                      wedding, corporate event, birthday party, or any other
                      special occasion, their team ensures that your event is
                      nothing short of spectacular.
                    </p>

                    {showMore && (
                      <>
                        <p style={{ textAlign: "justify" }}>
                          Balaji Decorators and Caterers take pride in offering
                          customized solutions tailored to meet your unique needs
                          and preferences. Their expertise in the industry has
                          earned them a reputation as the best event decorator in
                          Santacruz.
                        </p>
                        <p style={{ textAlign: "justify" }}>
                          From elegant floral arrangements to stunning lighting
                          setups, they meticulously plan and execute every aspect of
                          your event decoration, ensuring a seamless and visually
                          appealing experience for you and your guests. What sets
                          Balaji Decorators and Caterers apart is their commitment
                          to quality and innovation. They stay updated with the
                          latest trends and technologies in event decoration,
                          incorporating modern elements to create a contemporary yet
                          timeless look. Their team of skilled professionals
                          collaborates closely with clients, understanding their
                          vision and bringing it to life with precision and
                          creativity. No wonder they are often referred to as the
                          best event decorator in Santa Cruz.
                        </p>
                        <p style={{ textAlign: "justify" }}>
                          In addition to their exceptional decorating services,
                          Balaji Decorators and Caterers also offer top-notch
                          catering solutions. Their diverse menu options cater to
                          various tastes and preferences, ensuring a delightful
                          culinary experience for all attendees. With a focus on
                          quality ingredients and impeccable presentation, their
                          catering services complement the overall ambiance of your
                          event perfectly.
                        </p>
                        <p style={{ textAlign: "justify" }}>
                          Choosing Balaji Decorators and Caterers means choosing
                          excellence and reliability. Their dedication to creating
                          memorable events and their reputation as the best event
                          decorator in Santacruz make them the go-to choice for
                          anyone looking to host an event that leaves a lasting
                          impression. Trust Balaji Decorators and Caterers to turn
                          your special occasion into an extraordinary celebration.
                        </p>
                      </>
                    )}
                    <touchableHilight className={'NewAboutUs-ReadMore'}  onClick={toggleShowMore}>
                    {showMore ? "read less" : "...read more"}

                    </touchableHilight>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
