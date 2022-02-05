import React from "react";
import ReactTooltip from "react-tooltip";

import "./CompetitiveSites.css";

export default function CompetitiveSites(props) {
  return (
    <div className="competitive-sites-main-div">
      <ul className="dev-icons">
        {props.logos.map((logo) => {
          return (
            <>
              <li
                data-tip
                data-for={logo.siteName}
                className="competitive-sites-inline"
                name={logo.siteName}
              >
                <a
                  href={logo.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className="iconify"
                    data-icon={logo.icon}
                    style={logo.style}
                    data-inline="false"
                  ></span>
                </a>
              </li>
              <ReactTooltip id={logo.siteName} effect="solid">
                <strong>{logo.siteName}</strong>
              </ReactTooltip>
            </>
          );
        })}
      </ul>
    </div>
  );
}
