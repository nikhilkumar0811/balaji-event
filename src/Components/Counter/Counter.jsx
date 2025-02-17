import React from 'react'
import "./Counter.css"
import { CiFaceSmile } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

import { ImSpoonKnife } from "react-icons/im";

function Counter() {
  return (
    <>
      <div className="fun-factor ptb-100 text-center">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-4 col-6">
        <div className="single-fun-factor">
          <div className="fun-icon">
            <a href="#">
              <i><ImSpoonKnife /></i>
            </a>
            <h2 className="counter">300</h2>
            <h5>Menu Items</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-6">
        <div className="single-fun-factor">
          <div className="fun-icon">
            <a href="#">
              <i> <CiFaceSmile /></i>
            </a>
            <h2 className="counter">600</h2>
            <h5>Visitor Everyday</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-6">
        <div className="single-fun-factor">
          <div className="fun-icon">
            <a href="#">
              <i><IoIosPeople /></i>
            </a>
            <h2 className="counter">400</h2>
            <h5>Expert Chef</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-6 d-lg-block d-md-none d-block">
        <div className="single-fun-factor">
          <div className="fun-icon">
            <a href="#">
              <i><FaHeart /></i>
            </a>
            <h2 className="counter">100</h2>
            <h5>Test &amp; love</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Counter
