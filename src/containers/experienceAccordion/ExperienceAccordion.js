import React from "react";

import "./ExperienceAccordion.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";

export default function ExperienceAccordion(props) {
  const theme = props.theme;
  return (
    <div className="experience-accord">
      {props.sections.map((section) => {
        return (
          <div
            className="accord-panel"
            title={section["title"]}
            key={section["title"]}
          >
            {section["experiences"].map((experience) => {
              return <ExperienceCard experience={experience} theme={theme} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
