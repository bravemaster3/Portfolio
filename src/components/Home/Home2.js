import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              THERE IS <span className="purple"> MORE </span> ABOUT ME
            </h1>
            <p className="home-about-body">
              I am a dedicated 
              <i>
                <b className="purple"> GIS expert and Software Engineer </b>
              </i> with over five (5) years of experience in GIS analysis, application development, data analysis, and management.
              <br />
              <br />
              I am skilled in using tools and programming languages such as
              <i>
                <b className="purple"> C, Python, JavaScript, R and SQL.</b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for creating efficient applications with
              <i>
                <b className="purple"> GIS tools </b>
              </i>
              and modern software development practices.
              <br />
              <br />
              I possess strong 
              <i>
                <b className="purple"> communication </b>
              </i>, 
              <i>
                <b className="purple"> organizational </b>
              </i>, and 
              <i>
                <b className="purple"> problem-solving skills </b>
              </i>, and have a proven ability to 
              <i>
                <b className="purple"> work effectively in team environments </b>
              </i>.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bravemaster3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/bravemaster3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/koffi-dodji-noumonvi-8a578a89/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/bravemaster3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
