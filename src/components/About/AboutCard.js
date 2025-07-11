import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rithish Mamidala</span>
            from <span className="purple"> Telangana, India.</span>
            <br />
            I am currently working as a <span className="purple"> Software Developer</span> at  <span className="purple">UST.</span>
            <br />
            I hold a strong foundation in  <span className="purple"> Java and Spring Boot,</span> and I also work across the<span className="purple"> full stack, </span> building web applications using React.js on the frontend.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech Stacks
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Learning from Experiences
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Write less. Do more. Make it matter.!"{" "}
          </p>
          <footer className="blockquote-footer">Ritish Mamidala</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
