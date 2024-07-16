import React from "react";
import { Col, Row } from "react-bootstrap";
// import { C } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiMysql,
} from "react-icons/di";
import { FaRProject } from "react-icons/fa";
import {
  SiRedis,
  SiPostgresql,
  SiC,
  SiExpress,
  SiLeaflet,
  SiDjango,
  SiFlask,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="C">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Django">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Flask">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node JS">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Express JS">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React JS">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Leaflet">
        <SiLeaflet />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Redis">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL & PostGIS">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="R">
        <FaRProject />
      </Col>
    </Row>
  );
}

export default Techstack;
