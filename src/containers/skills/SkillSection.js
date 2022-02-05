import React from "react";
import { Fade } from "react-reveal";

import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import DataScienceLottie from "../../assets/lottie/data_science.json";
import FrontendLottie from "../../assets/lottie/frontend.json";
import BackendLottie from "../../assets/lottie/backend.json";
import { skills } from "../../portfolio";

function GetSkillImgLottie(props) {
  if (props.fileName === "DataScienceLottie")
    return <DisplayLottie animationData={DataScienceLottie} />;
  else if (props.fileName === "FrontendLottie")
    return <DisplayLottie animationData={FrontendLottie} />;
  else if (props.fileName === "BackendLottie")
    return <DisplayLottie animationData={BackendLottie} />;
  else if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  return "";
}

export default function SkillSection(props) {
  const theme = props.theme;
  return (
    <div>
      {skills.data.map((skill) => {
        return (
          <div className="skills-main-div">
            <Fade left duration={2000}>
              <div className="skills-image-div">
                <GetSkillImgLottie fileName={skill.fileName} theme={theme} />
              </div>
            </Fade>
            <div className="skills-text-div">
              <Fade right duration={1000}>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
              </Fade>
              <Fade right duration={1500}>
                <SoftwareSkill logos={skill.softwareSkills} />
              </Fade>
              <Fade right duration={2000}>
                <div>
                  {skill.skills.map((skillSentence) => {
                    return (
                      <p
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </Fade>
            </div>
          </div>
        );
      })}
    </div>
  );
}
