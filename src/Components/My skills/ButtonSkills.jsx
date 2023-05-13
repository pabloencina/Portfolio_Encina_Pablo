import React, { useState } from "react";
import "../css styles/buttonSkillsStyles.css";
import { nameSkills } from "../Data/dataSkills";
import { useSpring, animated } from "react-spring";
import "../css styles/animate.css";
import useHoverBtnKills from "../Hooks/useHoverBtnSkills";
import { Button } from "@mui/material";

const ButtonSkills = () => {
  const { isHover, handleMouseEnterBtnSkills, handleMouseLeaveBtnSkills } =
    useHoverBtnKills(false);
  const [isJumping, setIsJumping] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const jump = useSpring({
    transform: isJumping ? "translateY(1px)" : "translateY(150)",
    //color: "white",
    // backgroundColor: "#343434",
    fontSize: "20px",
    fontFamily: "Roboto",
    transition: "0.5s",
    backgroundColor: isHover ? "#150050" : "#343434",
    color: "white",
    textDecoration: "none",
  });

  function handleJump(buttonId) {
    setActiveButton(buttonId);
    setIsJumping(!isJumping);
  }

  return (
    <>
      {nameSkills.map((skill) => (
        <div className="boxSkillsStyle" key={skill.id}>
          <div className="item">
            <animated.button
              className={
                activeButton === skill.id
                  ? "jumping-button active"
                  : isJumping
                  ? "jumping-button"
                  : ""
              }
              style={jump}
              onClick={() => handleJump(skill.id)}
              onMouseEnter={handleMouseEnterBtnSkills}
              onMouseLeave={handleMouseLeaveBtnSkills}
            >
              {skill.nameSkill}
            </animated.button>
          </div>
        </div>
      ))}
    </>
  );
};
export default ButtonSkills;
