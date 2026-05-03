import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Vanshika Rajput</span>{" "}
            from <span className="purple">Kanpur, India</span>.
            <br />
            I’m currently a 3rd-year B.Tech student at{" "}
            <span className="purple">Bennett University</span>, pursuing Computer Science.
            <br />
            <br />
            I previously served as the{" "}
            <span className="purple">Founder & President of SocioNet</span>, 
            an initiative aimed at connecting volunteers, NGOs, and communities 
            to create meaningful social impact.
            <br />
            <br />
            I have a strong interest in{" "}
            <span className="purple">Cybersecurity</span>, particularly in areas like 
            ethical hacking, network security, and vulnerability assessment.
            <br />
            <br />
            I also have hands-on experience working on{" "}
            <span className="purple">freelance projects</span>, having completed{" "}
            <span className="purple">2+ client-based projects across different domains.</span>
            <br />
            <br />
            Outside of coding, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies 🎬
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Vanshika Rajput</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;