import React from "react";
import ReactTooltip from "react-tooltip";

import "./ProjectLanguages.css";

export default function ProjectLanguages(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {props.logos.map((logo) => {
            return (
              <>
                <li
                  data-tip
                  data-for={logo.name}
                  className="software-skill-inline-languages"
                  name={logo.skillName}
                >
                  <span
                    className="iconify"
                    data-icon={logo.icon}
                    data-inline="false"
                  ></span>
                </li>
                <ReactTooltip id={logo.name} effect="solid">
                  {logo.name}
                </ReactTooltip>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
