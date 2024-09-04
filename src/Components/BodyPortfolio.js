import React from "react";
import "../Styles/BodyPortfolio.css";
import cv from "../CV/CVMariyah.pdf";

export default function BodyPortfolio(props) {
  const { about, img } = props;
  return (
    <div>
      <div className="outerContainerBody" style={{}}>
        <div>
          <img src={img} alt="" className="portFolioImage" />
        </div>
        <div className="textAboutContainer" style={{}}>
          <div className="textAbout">
            <p className="quesWho">Who Am I?</p>
            <h3 className="aboutText">About Me</h3>
            <p className="about">
              {/* As a recent graduate with a Bachelor of Computer Applications
              (BCA) degree, specializing in web development, I am enthusiastic
              about applying my growing skill set and passion for creating
              innovative, user-friendly websites in a professional environment.
              My academic background has provided me with a strong foundation in
              programming languages, front-end and back-end technologies, and
              responsive design principles, which I am eager to utilize and
              expand upon in a real-world setting. Throughout my studies, I have
              developed a keen eye for detail and a deep understanding of how to
              create seamless user experiences. I am particularly interested in
              joining a forward-thinking development team where I can contribute
              fresh ideas, collaborate on exciting projects, and continue
              learning from industry experts. My goal is to gain valuable
              hands-on experience, refine my technical abilities, and make
              meaningful contributions to the success of the projects I am
              involved in. I am actively seeking an internship or entry-level
              position that will allow me to immerse myself in the fast-paced
              world of web development. I am confident that my dedication to
              continuous learning, coupled with my strong problem-solving skills
              and creativity, will enable me to excel in this field and make a
              positive impact on the teams I join. */}
              {about}
            </p>
          </div>
          <div className="btnCvDown">
            <div className="cvDown">
              <a
                href={cv}
                style={{ position: "relative" }}
                download="CvMariyah"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
