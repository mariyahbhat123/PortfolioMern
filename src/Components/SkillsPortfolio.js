import React from "react";

import Slider from "react-slick";
import "../Styles/SkillsPortfolio.css";
import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import htmL from "../Images/html.png";
import css from "../Images/css.png";
import js from "../Images/js.png";
import react from "../Images/react.png";
import node from "../Images/node.png";
import mongo from "../Images/mongo.png";
import express from "../Images/express.png";
import git from "../Images/git.png";
import github from "../Images/github.png";
import reactRedux from "../Images/redux.png";

export default function SkillsPortfolio() {
  const skillPortfolio = [
    {
      technologyName: "HTML",
      Description:
        " Proficient in writing clean, semantic HTML code to structure web content effectively. I ensure that websites are accessible, SEO-friendly, and built with a solid foundation, allowing for easy maintenance and scalability.",
      image: htmL,
    },
    {
      technologyName: "CSS",
      Description:
        "Skilled in using CSS to style and layout web pages, creating visually appealing and responsive designs. I have experience with advanced CSS techniques, including Flexbox, Grid, and animations, to enhance the user experience and ensure consistency across different browsers and devices.",
      image: css,
    },
    {
      technologyName: "JavaScript",
      Description:
        " Skilled in vanilla JavaScript as well as modern ES6+ syntax. I leverage JavaScript to create interactive and dynamic web pages, enhancing user experiences with smooth transitions, animations, and responsive features.",
      image: js,
    },
    {
      technologyName: "React.js",
      Description:
        "Experienced in building component-based user interfaces with React.js. I utilize hooks and state management tools like Redux to develop single-page applications (SPAs) that are fast, scalable, and easy to maintain.",
      image: react,
    },
    {
      technologyName: "Node.js",
      Description:
        "Proficient in developing server-side applications using Node.js, leveraging its non-blocking, event-driven architecture to build scalable and efficient web servers. I focus on creating robust back-end systems that handle high traffic and ensure smooth data processing.",
      image: node,
    },
    {
      technologyName: "Express.js",
      Description:
        " Experienced in using Express.js to build fast and scalable web applications. I develop RESTful APIs and middleware to handle routing, authentication, and data management, ensuring a seamless connection between the front-end and back-end.",
      image: express,
    },
    {
      technologyName: "MongoDB",
      Description:
        " Adept at working with MongoDB, a NoSQL database, to design and manage databases that are flexible, scalable, and optimized for storing large volumes of data. I implement CRUD operations and manage data efficiently in full-stack applications.",
      image: mongo,
    },
    {
      technologyName: "Git",
      Description:
        "Skilled in using Git for version control, allowing for effective collaboration and code management. I employ Git commands to track changes, manage branches, and resolve merge conflicts, ensuring that development is organized and that code history is preserved.",
      image: git,
    },
    {
      technologyName: "GitHub",
      Description:
        "Experienced in leveraging GitHub as a platform for hosting and sharing code repositories. I utilize GitHub for version control, project collaboration, and deploying web applications, ensuring that projects are well-documented and accessible to team members and clients.",
      image: github,
    },
    {
      technologyName: "Responsive Web Design",
      Description:
        "Proficient in designing responsive websites that provide optimal user experiences across a variety of devices, from desktops to mobile phones. I implement media queries and flexible grid systems to achieve seamless layouts on any screen size.",
      image: "#",
    },
    {
      technologyName: "RESTFUL APIs",
      Description:
        "Skilled in designing and consuming RESTful APIs to enable smooth communication between client and server. I ensure that APIs are well-documented, secure, and efficient, facilitating the integration of different services and platforms.",
      image: "#",
    },
    {
      technologyName: "Redux",
      Description:
        " Proficient in writing clean, semantic HTML code to structure web content effectively. I ensure that websites are accessible, SEO-friendly, and built with a solid foundation, allowing for easy maintenance and scalability.",
      image: reactRedux,
    },
  ];

  var settings = {
    dots: true,
    infinite: false,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    useCSS: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div style={{ width: "100%" }}>
        <p className="QuesSkill">What Skills Do I Have?</p>
        <h1 className="skill">Skills</h1>
      </div>
      <div style={{ width: "100%" }}>
        {/* <Row md={3} sm={2}> */}

        <Slider {...settings}>
          {skillPortfolio.map((item, idx) => {
            return (
              <div className="cardData">
                <div className="insideCard">
                  <div className="techName">
                    <div className="imgContainerr">
                      <img src={item.image} alt="" className="imgElement" />

                      <h4 className="tech">{item.technologyName}</h4>
                    </div>
                  </div>
                  <div className="description">
                    <p>{item.Description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      {/* </Row> */}
    </div>
  );
}
