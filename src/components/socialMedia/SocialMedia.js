import React from "react";

import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.color = color;
};

const onMouseLeave = (event) => {
  const el = event.target;
  el.style.color = "#74808a";
};

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media) => {
        return (
          <a
            href={media.link}
            className="icon-button"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(event) => onMouseEnter(event, media.color)}
            onMouseLeave={(event) => onMouseLeave(event)}
          >
            <span
              className="iconify"
              data-icon={media.icon}
              data-inline="false"
            ></span>
          </a>
        );
      })}
    </div>
  );
}
