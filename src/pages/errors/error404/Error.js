import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

import "./Error.css";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import TopButton from "../../../components/topButton/TopButton";

export default function Error(props) {
  const theme = props.theme;
  return (
    <div className="error-main">
      <Header theme={theme} />
      <div className="error-class">
        <Fade bottom duration={2000} distance="40px">
          <h1
            style={{
              color: theme.text,
            }}
          >
            Oops!
          </h1>
          <h1
            style={{
              color: theme.text,
            }}
            className="error-404"
          >
            404
          </h1>
          <p
            style={{
              color: theme.secondaryText,
            }}
          >
            The requested page is unavailable at the moment!
          </p>
          <Link
            className="main-button"
            to="/home"
            style={{
              color: theme.body,
              backgroundColor: theme.buttonColor,
              border: `solid 1px ${theme.buttonColor}`,
              display: "inline-flex",
            }}
          >
            Go Home
          </Link>
        </Fade>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
