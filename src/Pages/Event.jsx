import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { Image } from "antd";
import GalleryData from "../Pages/GalleryData";
import imgone from '../Images/Home/Mission/one.jpg'
import imgtwo from '../Images/Home/Mission/two.jpg'
import imgthree from '../Images/Home/Mission/three.jpg'
import imgfour from '../Images/Home/Mission/four.jpg'
import imgfive from '../Images/Home/Mission/five.jpg'
import imgsix from '../Images/Home/Mission/six.jpg'

function Event() {
  const search = useLocation();
  const path = search.pathname;
  {GalleryData.filter(data=> data.slug===path).map((data,i) => {
          
    document.title=`${data.title}`;
    document.querySelector("meta[name='description']").setAttribute("content",
      `${data.desc}`
    )
    
 
  
})};
  const [serviceDetali, setDetali] = useState(GalleryData);
  const EventsF = serviceDetali.find((e) => e.slug == path);

  return (
    <>
      <main>
        <section
          className="wedding-banner wedding-sec anniversary-banner"
          id="anniversary-banner"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .4)), url(${EventsF.bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="wedd-banner-content">
                  <span>{EventsF.heading}</span>
                  <h1 dangerouslySetInnerHTML={{ __html: EventsF.detaulsh1 }} />
                  <p dangerouslySetInnerHTML={{ __html: EventsF.detailsTwo }} />
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </section>
        <section className="how-we-make-section wedding-sec">
          <div className="container">
            <div className="row wedding-top">
              <div className="col-lg-10">
                <span className="line" />
                <div className="inner-div">
                  <div className="heading-style">
                    <h2 dangerouslySetInnerHTML={{ __html: EventsF.detailsTwo }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*


  <section className="why-consider wedding-sec" id="anniversary-planners">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <figure className="anniversary-fig">
            <img
              src= "https://dreamzweddingplanner.com/img/phone2.jpg"
              alt="Trupp & Fest Anniversary Image"
            />
          </figure>
        </div>
        <div className="col-md-6">
          <div className="why-consider-info">
            <div className="heading-style">
              <h2>
                <span>Why are we considered one of the top</span>
                wedding anniversary event planners in Mumbai
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam molestiae sequi nisi cupiditate autem beatae expedita, veniam doloribus distinctio! Sunt sed, atque facere recusandae voluptas placeat quibusdam non doloremque facilis praesentium ducimus, enim, dolorum eum dicta ut ipsum asperiores molestiae. Dolore debitis recusandae minus quibusdam magni ullam cupiditate impedit excepturi eos porro. Consectetur, magni. Exercitationem.
            </p>
            <p>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, repellendus. Ex aut ipsa obcaecati veritatis voluptate quasi nostrum mollitia exercitationem autem voluptas tenetur odio optio nisi aspernatur consequatur laboriosam, deserunt nihil facilis. Corporis, enim unde.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
 */}

        <section className="why-are-we-section wedding-sec">
          <div className="row d-flex">
            <div className="col-md-6">
              <div className="why-consider-infoo">
                <div className="heading-style">
                  <h2>
                    <span>Housewarming planning and decoration service</span>
                  </h2>
                </div>
                <p dangerouslySetInnerHTML={{ __html: EventsF.housingp1 }} />
                 
                <p dangerouslySetInnerHTML={{ __html: EventsF.housingp2 }} />
                 
                <p dangerouslySetInnerHTML={{ __html: EventsF.housingp3 }} />
                  
                <p dangerouslySetInnerHTML={{ __html: EventsF.housingp4 }} />
                 
              </div>
            </div>
            <div className="col-md-6" id="h-100">
              <div className="display-desktop event-decor-desktop" style={{backgroundImage:`url(${EventsF.imagee})`}}></div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="parents">
              {/* <h2 className="Smalltitle"><span className='interial-con'>Gallery</span> </h2> */}
              {/* <h5 className='view-gall'> <a href='/workpage'>View more</a></h5> */}
              <div className="row">
                <div className="col-lg-4 col-lg-4 d-flex justify-content-center">
                  <div className="img-gallery">
                    <Image
                    
                    style={{height:'200px',objectFit:'cover'}}
                      src={imgone}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center">
                  <div className="img-gallery">
                    <Image
                    style={{height:'200px',objectFit:'cover'}}
                      src={imgtwo}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center">
                  <div className="img-gallery">
                    <Image
                    style={{height:'200px',objectFit:'cover'}}
                      src={imgthree}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 d-flex justify-content-center">
                  <div className="img-gallery">
                    <Image
                    style={{height:'200px',objectFit:'cover'}}
                      src={imgfour}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center">
                  <div className="img-gallery">
                    <Image
                    style={{height:'200px',objectFit:'cover'}}
                      src={imgfive}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center">
                  <div className="img-gallery">
                    <Image
                    style={{height:'200px',objectFit:'cover'}}
                      src={imgsix}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Event;
