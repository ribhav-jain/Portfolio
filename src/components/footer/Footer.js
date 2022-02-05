import React from "react";
import { Fade } from "react-reveal";

import "./Footer.css";
import { greeting } from "../../portfolio";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Copyright <span role="img">©</span> {new Date().getFullYear()} by{" "}
          {greeting.title}
        </p>
      </Fade>
    </div>
  );
}
