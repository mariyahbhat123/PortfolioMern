import React from "react";
import "../Styles/ProjectsPortfolio.css";
import ssr from "../ProjectImages/home.png";

export default function ProjectsPortfolio() {
  const SSR = process.env.REACT_APP_GITHUB_SSR;
  const QUIZ = process.env.REACT_APP_GITHUB_QUIZ;
  const MUSIC = process.env.REACT_APP_GITHUB_MUSIC;
  const projects = [
    {
      name: "Student Space Rents",
      image: ssr,
      goTo: SSR,
    },
    {
      name: "QuizGk",
      image: "#",
      goTo: QUIZ,
    },
    {
      name: "MusicPlayer",
      image: "#",
      goTo: MUSIC,
    },
    {
      name: "Portfolio",
      image: "#",
      goTo: "",
    },
  ];

  return (
    <div>
      <div>
        <p className="ques">What I Did?</p>
        <h1 className="info">My Projects</h1>
      </div>

      <div className="projectCard">
        {projects.map((item) => {
          return (
            <div className="cardProject">
              <div>
                <img src={item.image} alt="" className="imgProject" />
              </div>
              <div className="infoProject">
                <div className="innerInfoProject">
                  <div>
                    <h3>{item.name}</h3>
                  </div>
                  <div>
                    <a
                      href={item.goTo}
                      style={{ color: "#fff" }}
                      target="_blank"
                    >
                      Visit Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
