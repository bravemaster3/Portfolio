import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Koffi Dodji Noumonvi </span>
            from <span className="purple"> Togo</span>, but I have travelled the world, having studied in <span className="purple">Morocco</span>, <span className="purple">Italy</span>, <span className="purple">Portugal</span>, 
            worked in <span className="purple"> Slovenia</span> and now in <span className="purple">Sweden</span>.
            <br />
            I am currently PhD candidate at the Swedish University of Agricultural sciences in Umeå where I am working on the <span className="purple">spatial modelling of methane emissions</span> in boreal peatlands.
            <br />
            I am a geomatician and forest engineer, but also a full stack software engineer.
            <br />
            <br />
            When I am not coding or doing some geospatial stuff, I like
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing music (drums, piano and guitar)
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving quizes
            </li>
            <li className="about-activity">
              <ImPointRight /> Making <a href="https://www.youtube.com/@Bravemaster3" target="_blank" rel="noreferrer" className="purple">Youtube</a> videos
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Whatever your hand finds to do, do it with all your might ..."{" "}
          </p>
          <footer className="blockquote-footer">Ecclesiastes 9:10</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
