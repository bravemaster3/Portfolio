import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiUbuntu,
  SiWindows,
  SiDocker,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="GIS">
        GIS
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Ubuntu">
        <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Windows">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="VSCode">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons"  title="Docker">
        <SiDocker />
      </Col>
    </Row>
  );
}

export default Toolstack;
