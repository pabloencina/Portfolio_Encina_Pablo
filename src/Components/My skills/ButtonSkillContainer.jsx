import React from "react";
import { nameSkills } from "../Data/dataSkills";
import ButtonSkills from "./ButtonSkills";

const ButtonSkillContainer = () => {
  return (
    <>
      {nameSkills.map((skill) => {
        return <ButtonSkills key={skill.id} skill={skill} />;
      })}
    </>
  );
};

export default ButtonSkillContainer;
