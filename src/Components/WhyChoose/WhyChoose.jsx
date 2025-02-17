import React from "react";
import "./WhyChoose.css";
// import mig from "../../Assets/title_bg_green.png"
import svg from "../../assets/download.png";
import svgg from "../../assets/download (1).png";
import svggg from "../../assets/download (2).png";
import { LuPartyPopper } from "react-icons/lu";
// import svgggg from "../../Assets/dance.png"
import svggggg from "../../assets/download (3).png";

function WhyChoose() {
  return (
    <>
      <section>
        <div className="container my-5">
          <section className="features-section-two py-5">
            <div className="auto-container py-5">
              <div className="anim-icons">
                <span
                  className="icon twist-line-1 wow zoomIn animated"
                  style={{ visibility: "visible", animationName: "zoomIn" }}
                />
                <span
                  className="icon twist-line-2 wow zoomIn animated"
                  data-wow-delay="1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "zoomIn",
                  }}
                />
                <span
                  className="icon twist-line-3 wow zoomIn animated"
                  data-wow-delay="2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "2s",
                    animationName: "zoomIn",
                  }}
                />
              </div>
              <div className="row">
                {/* Title Block */}
                <div
                  className="title-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="inner-box">
                    <div className="sec-title">
                      <span className="title">Features</span>
                      <h2>Our Services</h2>
                    </div>
                  </div>
                </div>
                {/* Feature Block */}
                <div
                  className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <span className="icon flaticon-lecture">
                        <img src={svg} alt="img" />
                      </span>
                    </div>
                    <h4>
                      <a href="about.html">Great Speakers</a>
                    </h4>
                    <div className="text">
                      Great speakers inspire and engage audiences with powerful,
                      persuasive messages.
                    </div>
                  </div>
                </div>
                {/* Feature Block */}
                <div
                  className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <span className="icon flaticon-search">
                        <img src={svgg} alt="img" />
                      </span>
                    </div>
                    <h4>
                      <a href="about.html">Experience</a>
                    </h4>
                    <div className="text">
                      Experience shapes our understanding, providing valuable
                      lessons and insights.
                    </div>
                  </div>
                </div>
                {/* Feature Block */}
                <div
                  className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                  data-wow-delay="400ms"
                  style={{
                    visibility: "visible",
                    animationDelay: "400ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <span className="icon flaticon-diamond-1">
                        <img src={svggg} alt="img" />
                      </span>
                    </div>
                    <h4>
                      <a href="about.html">Networking</a>
                    </h4>
                    <div className="text">
                      Effective networking enhances career growth and fosters
                      valuable business relationships.
                    </div>
                  </div>
                </div>
                {/* Feature Block */}
                <div
                  className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                  data-wow-delay="800ms"
                  style={{
                    visibility: "visible",
                    animationDelay: "800ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <span className="icon flaticon-success">
                        <i className="dj-dis">
                          <LuPartyPopper style={{color: '#d4a762'}} size={65}/>
                        </i>
                      </span>
                    </div>
                    <h4>
                      <a href="about.html">Party</a>
                    </h4>
                    <div className="text">
                      A party is a great way to celebrate with friends and
                      family.
                    </div>
                  </div>
                </div>
                {/* Feature Block */}
                <div
                  className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                  data-wow-delay="1200ms"
                  style={{
                    visibility: "visible",
                    animationDelay: "1200ms",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <span className="icon flaticon-employee">
                        <img src={svggggg} alt="img" />
                      </span>
                    </div>
                    <h4>
                      <a href="about.html">New People</a>
                    </h4>
                    <div className="text">
                      Meeting new people expands your social circle and broadens
                      perspectives.
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="img-fgn">
      <img src={mig} alt="img" />
    </div> */}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default WhyChoose;
