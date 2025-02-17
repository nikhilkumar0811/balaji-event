import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
// import EventData from '../EventData/EventData';
import Logo from "../../assets/BALAJI D&E LOGO-08.3443eaa0191f9039f235.png";
import GalleryData from "../../Pages/GalleryData";
// import JsonBanquet2 from "../BanquetJson/JsonBanquet2";

const Navibar = () => {
  const [color, setColor] = useState(false);
  const className = "dropdownShow";
  // const textColor = "text-black";
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 78) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div>
      <section className="NavSection">
        <div className="container-fluid">
          <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            className={color ? "NavBar NavBar-bg" : "NavBar"}
          >
            <Container>
              <Navbar.Brand to="/">
              <NavLink to="/">
                <img src={Logo} alt="best-event-management-company-andheri" />
                </NavLink>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className="main-nav">
                <Nav>
                  <Nav.Link to="/">
                    <Link className="hjkl" to="/">
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link to="/best-wedding-venue-santacruz">
                    <Link className="hjkl" to="/best-wedding-venue-santacruz">
                      About Us
                    </Link>
                  </Nav.Link>
                  {/* <Nav.Link to="/best-banquet-andheri">
                    <Link className="hjkl"  to="/banquet-page">Banquet</Link>
                  </Nav.Link> */}

                  <Nav.Link to="/party-hall-santacruz">
                    <Link className="hjkl" to="/party-hall-santacruz">
                      Gallery
                    </Link>
                  </Nav.Link>
                  <button className={`${className}  $"hjkl"`}>
                    Our Services
                    <div className="dorpdown">
                      <div className="dropdown_list">
                        {GalleryData.map((v) => {
                          return (
                            <>
                              <NavLink to={v.slug}>{v.heading}</NavLink>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </button>

                  <Nav.Link to="/event-decorator-santacruz">
                    <Link className="hjkl" to="/event-decorator-santacruz">
                      Contact Us
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </section>
    </div>
  );
};

export default Navibar;
