import React from "react";
import "./about.css";
import ME from "../../assets/about-me.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { aboutData } from "../../constants/aboutData";

const About = () => {
  const { preTitle, title, experience, about } = aboutData;
  return (
    <section id="about">
      <h5>{preTitle}</h5>
      <h2>{title}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Img About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {experience.map((item) => (
              <article className="about__card">
                {item.title === "Experiência" && (
                  <FaAward className="about__icon" />
                )}
                {item.title === "Projetos" && (
                  <VscFolderLibrary className="about__icon" />
                )}
                <h5>{item.title}</h5>
                <small>{item.description}</small>
              </article>
            ))}
          </div>

          <p>{about}</p>
          <a href="#contact" className="btn btn-primary">
            Fale comigo
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
