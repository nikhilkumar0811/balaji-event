import React, { useLayoutEffect, useState,useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import WorkTab from "./WorkTab";
import { Link } from "react-router-dom";
import imgone from '../Images/Gallery/galbg.jpg'
import { Image } from 'antd'
function Gallery() {





  useEffect(()=>{
    document.title="Party Hall In Santacruz | Balaji Event & Decorators";
    document.querySelector("meta[name='description']").setAttribute("content",
      "Discover the best Party Hall in Santacruz with Balaji Event & Decorators for memorable events, exceptional service, and stunning decor."
    )
    
  })
  const [items, setItems] = useState([]);
  const [type,setType]=useState('All')
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setItems(WorkTab);
  }, []);

  

  const filterItems = (category) => {
    if (category === "All") {
      setItems(WorkTab);
    } else {
      const updatedItems = WorkTab.filter((item) => item.category === category);
      setItems(updatedItems);
    }
  };

  return (
    <>
      <div
        className="breadcrumb-area breadcrumb-padding bg-img"
        style={{
          backgroundImage:
            `url(${imgone})`,
        }}
      >
        <div className="container">
          <div className="breadcrumb-content text-center">
            <h1>Gallery</h1>
            <ul>
              <li>
                <Link to="/">Gallery</Link>
              </li>
              <li>
                <i className="fa fa-angle-right" />
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <section id="project-version-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="cat_section_headings wow zoom"
                style={{ visibility: "visible", animationName: "zoom" }}
              >
                <span className="cat_subheading">Our Gallery</span>
                {/* <h4>Banquet & Events</h4> */}
                <div className="cat_border" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="gallery-filter">
                <li
                  data-filter="all"
                  onClick={() => setType("All")}
                  className={type==="All"?'filter active':'filter'}
                >
                  <span>All</span>
                </li>
                <li
                  data-filter=".meeting"
                  onClick={() => setType("banquitehall")}
                  className={type==="banquitehall"?'filter active':'filter'}
                >
                  <span>BANQUET HALL</span>
                </li>
                <li
                  data-filter=".talking"
                  onClick={() => setType("weddinglawn")}
                  className={type==="weddinglawn"?'filter active':'filter'}
                >
                  <span>WEDDING LAWN</span>
                </li>
                <li
                  data-filter=".conference"
                  onClick={() => setType("CATERINGSERVICES")}
                  className={type==="CATERINGSERVICES"?'filter active':'filter'}
                >
                  <span>CATERING SERVICES</span>
                </li>
                <li
                  data-filter=".events"
                  onClick={() => setType("weddingplanner")}
                  className={type==="weddingplanner"?'filter active':'filter'}
                >
                  <span>WEDDING PLANNER</span>
                </li>
                <li
                  data-filter=".party"
                  onClick={() => setType("eventmagagment")}
                  className={type==="eventmagagment"?'filter active':'filter'}
                >
                  <span>EVENT MANAGEMENT</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row nor4al-gallery" id="image-gallery-mix">
            <Image.PreviewGroup>
            {items.filter(data=>type==='All'?data:data.category===type).map((v, i) => {
              return (
                <>
                  
                  <div
                    className="col-lg-4 col-sm-6 col-xs-12 concert party mix"
                    style={{ display: "inline-block" }}
                  >
                    <Image style={{width:'100%',height:'300px',objectFit:"cover"}}
                    src={v.imageUr1} alt=""
                    />
                    {/* <div className="img-wrap w-100" style={{ width:'100%',height:'300px',objectFit:"cover"}}>
                      <img src={v.imageUr1} alt="" style={{height:'300px',objectFit:"cover"}} />
                      <a className="fancybox" href={v.imageUr1}>
                        <div className="content-wrap hvr-rectangle-out">
                          <div className="border">
                            <div className="content"> */}
                              {/* <h4>Awesome Image Really Awesome</h4>
                              <span>This is Our Gallery image</span> */}
                            {/* </div>
                          </div>
                        </div>
                      </a>
                    </div> */}
                  </div>
                </>
              );
            })}
            </Image.PreviewGroup>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );

}

export default Gallery;
