import React, { useState, useEffect, useRef } from "react";
import NavbarPortfolio from "../Components/NavbarPortfolio";
import HeaderPortfolio from "../Components/HeaderPortfolio";
import "../Styles/Home.css";
import BodyPortfolio from "../Components/BodyPortfolio";
import SkillsPortfolio from "../Components/SkillsPortfolio";
import ProjectsPortfolio from "../Components/ProjectsPortfolio";
import EmailPortfolio from "../Components/EmailPortfolio";
import FooterPortfolio from "../Components/FooterPortfolio";

export default function Home() {
  const [aboutData, setAboutData] = useState();
  console.log("ABOUT", aboutData);
  const [navBackground, setNavBackground] = useState(false);
  const TOP_OFFSET = 100;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };
    //ON SCROLL CALLING FUNCTION HANDLESCROLL
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const home = useRef(null);
  const about = useRef(null);
  const project = useRef(null);
  const skill = useRef(null);
  const Contact = useRef(null);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/aboutGet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      if (!json) {
        console.log("ERROR");
      } else {
        setAboutData(json.about);
        console.log("JSON", json);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleAboutData();
  }, []);

  const [aboutt] = aboutData ? aboutData : "";
  // console.log("ABOUTT", aboutt.name ? aboutt.name : "");
  return (
    <div>
      <nav className="navBarPort">
        <div
          className="navHome"
          style={
            navBackground === false
              ? {
                  width: "100%",

                  position: "sticky",
                  top: 0,
                  zIndex: 10,
                  color: "white",
                }
              : {
                  width: "100%",

                  position: "sticky",
                  top: 0,
                  zIndex: 10,
                  backgroundColor: "white",
                  color: "#695aa6",
                  transition: "2s ease-in-out",
                }
          }
        >
          <NavbarPortfolio
            navBackground={navBackground}
            handleScroll={handleScroll}
            home={home}
            about={about}
            skill={skill}
            project={project}
            contact={Contact}
          />
        </div>
      </nav>
      <header ref={home}>
        <div>
          <HeaderPortfolio
            name={aboutt ? aboutt.name : ""}
            profession={aboutt ? aboutt.profession : ""}
          />
        </div>
      </header>
      <body>
        <div style={{ marginBottom: "10%" }} ref={about}>
          <BodyPortfolio
            about={aboutt ? aboutt.about : ""}
            img={aboutt ? aboutt.img : ""}
          />
        </div>
        <div style={{ marginBottom: "10%" }} ref={skill}>
          <SkillsPortfolio />
        </div>
        <div style={{ marginBottom: "10%" }} ref={project}>
          <ProjectsPortfolio />
        </div>
        <div style={{ marginBottom: "10%" }} ref={Contact}>
          <EmailPortfolio />
        </div>
      </body>
      <footer>
        <FooterPortfolio />
      </footer>
    </div>
  );
}
