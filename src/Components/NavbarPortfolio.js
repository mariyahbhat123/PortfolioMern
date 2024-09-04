import React, { useState, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

export default function NavbarPortfolio(props) {
  const [toggle, setToggle] = useState(false);
  const [menuName, setMenuName] = useState("close-menu");
  const handleToggleBurger = () => {
    if (toggle === false && menuName === "close-menu") {
      setToggle(true);
      setMenuName("open-menu");
    } else {
      setToggle(false);
      setMenuName("close-menu");
    }
  };

  const navBackground = props.navBackground;
  const handleScroll = props.handleScroll;
  console.log("navback", navBackground);

  const { home, about, skill, project, contact } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "1%",
        paddingBottom: "1%",
        paddingLeft: "10%",
        paddingRight: "10%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bolder",
        }}
      >
        <h3>Meyawo</h3>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className={menuName}
          style={
            toggle === true
              ? {
                  fontSize: "17px",

                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                }
              : { visibility: "hidden" }
          }
        >
          <button
            className="navButton me-3 ms-3"
            style={
              navBackground === true ? { color: "black" } : { color: "white" }
            }
            onClick={() => handleScroll(home.current)}
          >
            Home
          </button>
          <button
            className="navButton me-3 ms-3"
            style={
              navBackground === true ? { color: "black" } : { color: "white" }
            }
            onClick={() => handleScroll(about.current)}
          >
            About
          </button>
          <button
            className="navButton me-3 ms-3"
            style={
              navBackground === true ? { color: "black" } : { color: "white" }
            }
            onClick={() => handleScroll(skill.current)}
          >
            Skill
          </button>
          <button
            className="navButton me-3 ms-3"
            style={
              navBackground === true ? { color: "black" } : { color: "white" }
            }
            onClick={() => handleScroll(project.current)}
          >
            Projects
          </button>
          <button
            className="navButton me-3 ms-3"
            style={
              navBackground === true ? { color: "black" } : { color: "white" }
            }
            onClick={() => handleScroll(contact.current)}
          >
            Contact
          </button>
        </div>
        <div>
          {toggle === false ? (
            <button
              style={{ background: "transparent", border: "none" }}
              onClick={handleToggleBurger}
            >
              {" "}
              <MenuIcon
                sx={
                  navBackground === false
                    ? { fontSize: "44px", color: "white" }
                    : { fontSize: "44px", color: "black" }
                }
              />
            </button>
          ) : (
            <button
              style={{ background: "transparent", border: "none" }}
              onClick={handleToggleBurger}
            >
              <ClearIcon
                sx={
                  navBackground === false
                    ? { fontSize: "44px", color: "white" }
                    : { fontSize: "44px", color: "black" }
                }
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
