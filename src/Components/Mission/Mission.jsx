import React from 'react'
import "./Mission.css"
import { Link, NavLink } from 'react-router-dom'
import imgone from '../../Images/Home/Mission/one.jpg'
import imgtwo from '../../Images/Home/Mission/two.jpg'
import imgthree from '../../Images/Home/Mission/three.jpg'
import imgfour from '../../Images/Home/Mission/four.jpg'
import imgfive from '../../Images/Home/Mission/five.jpg'
import imgsix from '../../Images/Home/Mission/six.jpg'

function Mission() {
  return (
    <>
      <section>
        <div className="container mb-5">
        <div className="row">
      <div className="col-lg-12">
        <div
          className="cat_section_headings wow zoom"
          style={{ visibility: "visible", animationName: "zoom" }}
        >
          {/* <span className="cat_subheading">Who we are</span> */}
          <h4 className="text-center mt-5 pt-5">Our Gallery</h4>
          <div className="cat_border" />
        </div>
      </div>
    </div>
        <h5 className='view-gall'> <NavLink to='/party-hall-santacruz'>View more</NavLink></h5>
          <div className="row">
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <div className="banq-imq">
                <NavLink to='/party-hall-santacruz'><img src={imgone} alt="img" /></NavLink>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <div className="banq-imq">
                 <NavLink to='/party-hall-santacruz'><img src={imgtwo} alt="img" /></NavLink>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <div className="banq-imq">
              <NavLink to='/party-hall-santacruz'><img src={imgthree} alt="img" /></NavLink>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <div className="banq-imq">
                <NavLink to='/party-hall-santacruz'><img src={imgfour} alt="img" /></NavLink>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <div className="banq-imq">
                <NavLink to='/party-hall-santacruz'><img src={imgfive} alt="img" /></NavLink>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <div className="banq-imq">
              <NavLink to='/party-hall-santacruz'><img src={imgsix} alt="img" /></NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Mission
