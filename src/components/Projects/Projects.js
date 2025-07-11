import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import Spring from "../../Assets/Projects/Spring.png";
import Azure from "../../Assets/Projects/Azure.png";
import suicide from "../../Assets/Projects/suicide.png";
import DSA from "../../Assets/Projects/DSA1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Certifiates I got  recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Azure}
              isBlog={false}
              title="Azure Developer Associate"
              description="Certified in designing, building, testing, and maintaining cloud applications using Azure services, including Azure Functions, App Services, Storage, and DevOps pipelines."
              
              demoLink="https://learn.microsoft.com/en-gb/users/rithishmamidala-2145/credentials/e082ac6c18d557fc?ref=https%3A%2F%2Fwww.linkedin.com%2F"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DSA}
              isBlog={false}
              title="SMART CODER"
              description="Successfully completed the Smart Coder certification program, demonstrating strong problem-solving, programming fundamentals, and practical coding skills."
              
              demoLink="https://smartinterviews.in/certificate/01831246"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spring}
              isBlog={false}
              title="SpringBoot"
              description="Completed an in-depth course on building Java applications using Spring and Spring Boot frameworks. Covered core concepts like dependency injection, RESTful APIs, and application configuration."
              
              demoLink="https://www.linkedin.com/learning/certificates/5bf7ca20d40c0cc815ab34c90853f06f7843c627afdd1feff98b5f61b1e1bea3?trk=share_certificate"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
