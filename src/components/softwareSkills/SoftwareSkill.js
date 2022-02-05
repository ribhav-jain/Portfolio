import React from "react";
import ReactTooltip from "react-tooltip";

import "./SoftwareSkill.css";

export default function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
            return (
              <>
                <li
                  data-tip
                  data-for={logo.skillName}
                  className="software-skill-inline"
                  name={logo.skillName}
                >
                  <span
                    className="iconify"
                    data-icon={logo.icon}
                    style={logo.style}
                    data-inline="false"
                  ></span>
                </li>
                <ReactTooltip id={logo.skillName} effect="solid">
                  <strong>{logo.skillName}</strong>
                </ReactTooltip>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
