import React from "react";
import lights from "../Image/lights.jpeg";
import spotLight from "../Image/Modern spot light background.jpg";
import "../Styles/HeaderPortfolio.css";

export default function HeaderPortfolio(props) {
  const { name, profession } = props;
  const gitHubAccount = process.env.REACT_APP_GITHUB_ACCOUNT;
  console.log(gitHubAccount);
  return (
    <div>
      <div>
        <div>
          <img
            className="imgSpot"
            src={spotLight}
            alt=""
            style={{ width: "100%" }}
          />
          <div className="imgContainer"></div>
          <div className="textContainer">
            <div className="innerTextContainer">
              {" "}
              <h1 className="intro" style={{ color: "#444" }}>
                HI!
              </h1>
              <div>
                <h1 className="intro" style={{ color: "#212529" }}>
                  I am {name}
                </h1>
                <p className="dev">{profession}</p>
              </div>
              <div className="visitWorkBtn">
                <a href={gitHubAccount} target="_blank">
                  Visit My Works
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
