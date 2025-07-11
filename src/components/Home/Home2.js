import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { SiLeetcode } from "react-icons/si";
import {
  AiFillGithub,
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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            👨‍💻 I fell in love with programming, and ever since, I’ve been on a mission to build, learn, and grow every day.
              <br />
              <br />💼 I currently work as a Spring Boot Developer at UST, where I build scalable backend systems and also contribute across the full stack using
              <i>
                <b className="purple">React.js, Java, and Spring Boot.</b>
              </i>
              <br />
              <br />
              ☁️ I'm passionate about cloud technologies and DevOps, with hands-on experience in 
              <i>
                <b className="purple">Docker, CI/CD pipelines </b> and
                also in areas related to{" "}
                <b className="purple">
                Azure, and AWS.
                </b>
              </i>
              <br />
              <br />
              🛠️ Whether it's <b className="purple">coding APIs, designing UIs,</b>  or <b className="purple">automating deployments</b> , I love solving real-world problems through tech.<b className="purple"></b> 
              <i>
                <b className="purple">
                  {" "}
                  
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"> </b>
              </i>
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
                  href="https://github.com/rithishmamidala"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/Rithzz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                 <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ritish-mamidala-a8a069241/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/r_it_is_love?igsh=MXcxamh5NzI2cDkwaA=="
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
