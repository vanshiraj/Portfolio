import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import socionet from "../../Assets/socionet.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>

        <p style={{ color: "white" }}>
          Here is my main project.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socionet}
              isBlog={false}
              title="SocioNet (ServiceXchange)"
              description="A social service platform connecting NGOs, hospitals, restaurants, and volunteers. It enables surplus food distribution, blood donation tracking, and volunteer coordination with a clean and user-friendly interface."
              ghLink="https://github.com/vanshiraj"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;