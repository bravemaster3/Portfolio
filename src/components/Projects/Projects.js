import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import posteddypro from "../../Assets/Projects/posteddypro.png";
import tutorplan from "../../Assets/Projects/tutorplan.png";
import huhola from "../../Assets/Projects/huhola.png";
import MireVegetation from "../../Assets/Projects/MireVegetation.png";
import alxhalloffame from "../../Assets/Projects/alxhalloffame.png";
import MireChronosequence from "../../Assets/Projects/MireChronosequence.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Check out some of my recent projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MireVegetation}
              isBlog={false}
              title="Mire vegetation WebMap"
              description="This is a webGIS made with ArcGIS online after performing vegetation classification with machine learning (random forest) in QGIS. This webGIS allows you to visualize a mire complex vegetation classes, and can serve in the field as a solid basemap."
              demoLink="https://gis-slu.maps.arcgis.com/apps/View/index.html?appid=7d485f469233422aa98a5d49e031fd44"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MireChronosequence}
              isBlog={false}
              title="Mire Chronosequence webGIS"
              description="A webGIS created with QGIS2Web, but then customized the html, javascript and css code to be able to show images and search locations. This application is like a storymap. Click on points or polygons to see images, change the basemap, search sites by name, ..."
              ghLink="https://github.com/bravemaster3/MiresChrono"
              demoLink="https://slughg.github.io/MiresChrono/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={huhola}
              isBlog={false}
              title="HuHoLa python package"
              description="HuHoLa is a simple python package for mapping mire microtopography with a single input, a digital elevation model. The package allows you to classify microtopography in 3 classes (Lawns, hollows and hummocks), with a bonus water table depth proxy."
              ghLink="https://github.com/bravemaster3/huhola"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={posteddypro}
              isBlog={false}
              title="PostEddyPro R package"
              description="An R package developed to ease and streamline eddy covariance flux data processing following raw flux calculation in eddypro. The package includes different functions for quality control, gapfilling with machine learning (XGBoost or Random forest), etc."
              ghLink="https://github.com/bravemaster3/PostEddyPro"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tutorplan}
              isBlog={false}
              title="TutorPlan"
              description="Platform for registering for private courses and booking time in the tutor's calendar. The calendar is made such that it avoids double booking for everyone. This platform was developped with MySQL + Flask in the backend, and React JS in the frontend. Collaborators found on the about page."
              ghLink="https://github.com/bravemaster3/TutorPlan"
              demoLink="https://tutor-plan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alxhalloffame}
              isBlog={false}
              title="ALX Hall Of Fame"
              description="This is a repository for projects made by ALX students and alumni. The idea is to spark innovation, and ignit collaboration. The app features a users map and a public portfolio page for each user, useful to include in your CV. Developped with PostgreSQL, Django and React JS."
              ghLink="https://github.com/bravemaster3/alx-hall-of-fame"
              demoLink="https://alxhof.kndev.org"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
