import React from "react";

import "./Button.css";

const onMouseEnter = (event, bgColor) => {
  const el = event.target;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, bgColor) => {
  const el = event.target;
  el.style.backgroundColor = bgColor;
};

export default function Button({ text, className, href, newTab, theme }) {
  return (
    <div className={className}>
      <a
        class="main-button"
        href={href}
        target={newTab && "_blank"}
        style={{
          color: theme.body,
          backgroundColor: theme.buttonColor,
        }}
        onMouseEnter={(event) => onMouseEnter(event, theme.hoverButtonColor)}
        onMouseOut={(event) => onMouseOut(event, theme.buttonColor)}
      >
        {text}
      </a>
    </div>
  );
}
