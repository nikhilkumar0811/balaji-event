import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./banner.css";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import imgone from '../../Images/Home/Banner/bannerone.jpg'
import imgtwo from '../../Images/Home/Banner/bannertwo.jpg'
import imgthree from '../../Images/Home/Banner/bannerthree.jpg'
import imgfour from '../../Images/Home/Banner/bannerfour.jpg'
import imgfive from '../../Images/Home/Banner/bannerfive.jpg'

function Banner() {
  const banners = [
    {
      image:
      imgfive
        ,
      title: "Wedding venue",
      description:
        "Transforming dreams into reality with expert wedding venue service.",
    },
    {
      image:
      imgtwo,
      title: " Banquet Lawn",
      description: "A Premium Banquet Lawn for Events and Weddings",
    },
    {
      image:
       imgthree,
      title: "Catering Services",
      description:
        "Exquisite catering delivering gourmet flavors and exceptional dining experiences.",
    },
    {
      image:
        imgfour,
      title: "Event Managment",
      description:
        "Expert event planning and management for seamless, memorable experiences",
    },

    {
      image:
      imgone,
      title: "Banquet  halll",
      description:
        "Elegant banquet hall for unforgettable celebrations and sophisticated gatherings.",
    },
  ];

  return (
    <section className="banner-area">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="banner-slide"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(49, 48, 48, 0.1), rgba(63, 62, 62, 0.1)), url(${banner.image})`
             }}
          >
            <div className="banner-content">
              <Fade direction="right">
                <h1>{banner.title}</h1>
              </Fade>
              <Fade direction="left">
                <p>{banner.description}</p>
              </Fade>

              <Fade direction="zoom" delay={1000}>
                <Link to="/best-wedding-venue-santacruz" className="banner-button">
                  Explore More
                </Link>
              </Fade>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Banner;
