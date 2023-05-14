import React, { useState } from "react";
import "../css styles/buttonSkillsStyles.css";
import { useSpring, animated } from "react-spring";
import "../css styles/animate.css";
import useHoverBtnKills from "../Hooks/useHoverBtnSkills";

const ButtonSkills = ({ skill }) => {
  const { isHover, handleMouseEnterBtnSkills, handleMouseLeaveBtnSkills } =
    useHoverBtnKills(false);
  const [isJumping, setIsJumping] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const jump = useSpring({
    transform: isJumping ? "translateY(1px)" : "translateY(150)",
    fontSize: "20px",
    fontFamily: "monospace",
    transition: "0.1s",
    backgroundColor: isHover ? "white" : "#03001C",
    color: isHover ? "#03001C" : "white",
    textDecoration: "none",
  });

  function handleJump(buttonId) {
    setActiveButton(buttonId);
    setIsJumping(!isJumping);
  }

  return (
    <>
      <div className="boxSkillsStyle" key={skill.id}>
        <div className="move-button">
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
    </>
  );
};
export default ButtonSkills;
