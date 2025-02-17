import React from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "./Essence.css";
import { useNavigate } from "react-router-dom";
import imgone from '../../Images/Home/Essence/one.jpg'
import imgtwo from '../../Images/Home/Essence/two.jpg'
import imgthree from '../../Images/Home/Essence/three.jpg'
import imgfour from '../../Images/Home/Essence/four.jpg'
import imgfive from '../../Images/Home/Essence/five.jpg'

function Essence() {
  const navigate = useNavigate();
  return (
    <>
      <section id="service-area" className="event-area pt-130">
        <div className="container">
          <div className="col-lg-12">
            <div
              className="cat_section_headings wow zoom dj-bottom"
              style={{ visibility: "visible", animationName: "zoom" }}
            >
              <span className="cat_subheading">
                Elegant Venue for Memorable Events
              </span>
              <h4>Our Services</h4>
              <div className="cat_border" />
            </div>
          </div>
          <div className="event-owl owl-carousel owl-theme owl-loaded">
            <div
              className="owl-stage-outer"
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              <div>
                <div className="row">
                  {/*               
            <Swiper className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
        <SwiperSlide>
        
        </SwiperSlide>
        <SwiperSlide>
        <div
              className="owl-item cloned"
              style={{  marginRight: 0 }}
            >
              <div className="col-md-12 co-lg-4">
                <div className="single-event text-center">
                  <div className="event-img">
                    <a href="#">
                      <img src="https://preview.hasthemes.com/panshi/img/event/event1.jpg" alt="event" />
                    </a>
                  </div>
                  <h4>
                    <a href="#">WEDDING LAWN
                    </a>
                  </h4>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
              className="owl-item cloned"
              style={{  marginRight: 0 }}
            >
              <div className="col-md-12 co-lg-4">
                <div className="single-event text-center">
                  <div className="event-img">
                    <a href="#">
                      <img src="https://preview.hasthemes.com/panshi/img/event/event1.jpg" alt="event" />
                    </a>
                  </div>
                  <h4>
                    <a href="#">CATERING SERVICES
                    </a>
                  </h4>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
              className="owl-item cloned"
              style={{  marginRight: 0 }}
            >
              <div className="col-md-12 co-lg-4">
                <div className="single-event text-center">
                  <div className="event-img">
                    <a href="#">
                      <img src="https://preview.hasthemes.com/panshi/img/event/event1.jpg" alt="event" />
                    </a>
                  </div>
                  <h4>
                    <a href="#">WEDDING PLANNER
                    </a>
                  </h4>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
              className="owl-item cloned"
              style={{  marginRight: 0 }}
            >
              <div className="col-md-12 co-lg-4">
                <div className="single-event text-center">
                  <div className="event-img">
                    <a href="#">
                      <img src="https://preview.hasthemes.com/panshi/img/event/event1.jpg" alt="event" />
                    </a>
                  </div>
                  <h4>
                    <a href="#">EVENT MANAGEMENT</a>
                  </h4>
                </div>
              </div>
            </div>
        </SwiperSlide>
        
      </Swiper> */}
                  <div className="col-lg-4">
                    <div className="owl-item cloned" style={{ marginRight: 0 }}>
                      <div className="col-md-12 co-lg-4">
                        <div className="single-event text-center essence-all-card-center">
                          <div className="event-img">
                            <img
                              src={imgone}
                              alt="event"
                            />
                          </div>
                          <h4>
                            <a href="#">BANQUET HALL</a>
                            <p className="collab-c">
                              Experience timeless elegance in our venue, perfect
                              for unforgettable and elegant banquets and
                              gatherings.
                            </p>
                          </h4>
                          <div className="button-ser">
                            <button onClick={() => navigate("/best-banqute-hall-santacruz")}>
                              View more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="owl-item cloned" style={{}}>
                      <div className="col-md-12 co-lg-4">
                        <div className="single-event text-center essence-all-card-center">
                          <div className="event-img">
                            <img
                              src={imgtwo}
                              alt="event"
                            />
                          </div>
                          <h4>
                            <a href="#">EVENT MANAGEMENT</a>
                            <p className="collab-c">
                              Discover an elegant, versatile venue, ideal for
                              hosting unforgettable and memorable events and
                              celebrations
                            </p>
                          </h4>
                          <div className="button-ser">
                            <button onClick={() => navigate("/event-management-santacruz")}>
                              View more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="owl-item cloned" style={{ marginRight: 0 }}>
                      <div className="col-md-12 co-lg-4">
                        <div className="single-event text-center essence-all-card-center">
                          <div className="event-img">
                            <img
                              src={imgthree}
                              alt="event"
                            />
                          </div>
                          <h4>
                            <a href="#">WEDDING PLANNER</a>
                            <p className="collab-c">
                              Specializing in creating perfect moments and
                              love-filled memories for your cherished
                              celebrations and events.
                            </p>
                          </h4>
                          <div className="button-ser">
                            <button onClick={() => navigate("/wedding-planner-santacruz")}>
                              View more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="parents-two">
              <div className="row justify-content-evenly">
                <div className="col-lg-4">
                  <div className="owl-item cloned" style={{ marginRight: 0 }}>
                    <div className="col-md-12 co-lg-4">
                      <div className="single-event text-center essence-all-card-center">
                        <div className="event-img">
                          <img
                            src={imgfour}
                            alt="event"
                          />
                        </div>
                        <h4>
                          <a href="#">CATERING SERVICES</a>
                          <p className="collab-c">
                            Exquisite flavors, served with meticulous care and
                            attention to detail, ensuring a memorable dining
                            experience.
                          </p>
                        </h4>
                        <div className="button-ser">
                          <button onClick={() => navigate("/best-catering-service-santacruz")}>
                            View more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="owl-item cloned" style={{ marginRight: 0 }}>
                    <div className="col-md-12 co-lg-4">
                      <div className="single-event text-center essence-all-card-center">
                        <div className="event-img">
                          <img
                            src={imgfive}
                            alt="event"
                          />
                        </div>
                        <h4>
                          <a href="#">WEDDING LAWN</a>
                          <p className="collab-c">
                            Idyllic outdoor setting offering scenic beauty,
                            perfect for memorable weddings and enchanting
                            celebrations of love.
                          </p>
                        </h4>
                        <div className="button-ser">
                          <button onClick={() => navigate("/wedding-lawn-santacruz")}>
                            View more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <span />
        </div>

        <span />
      </section>
    </>
  );
}

export default Essence;
