import React from "react";
import { Fade } from "react-reveal";

import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard";
import { degrees } from "../../portfolio";

export default function Educations(props) {
  const theme = props.theme;
  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Degrees Received
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => {
          return <DegreeCard degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
}
