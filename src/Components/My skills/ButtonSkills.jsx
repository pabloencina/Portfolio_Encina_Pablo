import { Button } from "@mui/material";
import React from "react";
import "../css styles/buttonSkillsStyles.css";
import { nameSkills } from "../Data/dataSkills";

const ButtonSkills = () => {
  console.log(nameSkills);
  return (
    <>
      {nameSkills.map((skill) => (
        <div className="boxSkillsStyle">
          <div className="item">
            <Button className="buttonSkillsStyle" key={skill.id} id={skill.id}>
              {skill.nameSkill}
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ButtonSkills;
