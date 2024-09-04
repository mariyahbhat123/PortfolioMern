import React from "react";
import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../Styles/FooterPortfolio.css";

export default function FooterPortfolio() {
  return (
    <div>
      <div className="footerParentContainer">
        <div className="copyRightText">
          <p>Copyright 2024 © DevCRUD Distribution ThemeWagon</p>
        </div>
        <div>
          <button className="btnIcon">
            <FacebookIcon className="icons" />
          </button>
          <button className="btnIcon">
            <XIcon className="icons" />
          </button>
          <button className="btnIcon">
            <GoogleIcon className="icons" />
          </button>
          <button className="btnIcon">
            <PinterestIcon className="icons" />
          </button>
          <button className="btnIcon">
            <InstagramIcon className="icons" />
          </button>
        </div>
      </div>
    </div>
  );
}
