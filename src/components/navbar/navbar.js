import About from "../about/about";
import Home from "../home/home";
import { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import valorant from "../../assets/valorant.png";


import me from "../../assets/Me.png";
function Navbar() {
 
  return (
    <div className="portfolio">
      <nav>
        <div>
          <ul className="navbar">
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="tech"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Tech
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="home" id="home">
        <div className="home-text">
          <h4>Hello</h4>
          <h1>
            I'm Priya<span>dharshan</span>
          </h1>
          <h3>Full stack Developer</h3>
          <a href="#" className="btn">
            Resume
          </a>
        </div>
      </div>
      <div className="about" id="about">
        <div className="about-img">
          <img src={me} />
        </div>
        <div className="about-txt">
          <h2>About Me</h2>
          <h4>A Fresh Graduate</h4>
          <p>
            Graduated with a degree in Information Technology from
            <p>Sri Krishna college of Engineering and Technology</p>
          </p>
          <h5>
            Currently working as a Software engineer trainee at <h1>PSIOG</h1>
          </h5>
          <p>"Be strong enough to be gentle"</p>
        </div>
      </div>
      <div className="tech" id="tech">
        <h2>Technology I know</h2>
        <h4>As a Full Stack Developer I Know</h4>
        <h2>Front End</h2>
        <li className="front">HTML</li>
        <li className="front">CSS</li>
        <li className="front">JS</li>
        <li className="front">REACT.Js</li>
        <h2>Core</h2>
        <li className="core">C#</li>
        <li className="core">C++</li>
        <h2>Database</h2>
        <li className="db">SQL</li>
      </div>
      <div className="contact" id="contact">
        <div className="contact-left">
          <h2>Contact Me :<span className="email">priyadharshansenguttuvan@gmail.com</span></h2>
        </div>
        <button className="top">
        <Link 
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Back to top
        </Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
