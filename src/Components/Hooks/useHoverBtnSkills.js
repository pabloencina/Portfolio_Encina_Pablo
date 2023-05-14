import { useState } from "react";
import MessageSkillsButton from "../MessageSkillsButton";

const useHoverBtnKills = () => {
  const [isHover, setIsHover] = useState(false);

  const btnSkills = {
    backgroundColor: isHover ? "white" : "#564592",
    color: isHover ? "#564592" : "white",
    textDecoration: "none",
    fontFamily: "monospace",
    //borderRadius: "5%",
  };
  const handleMouseEnterBtnSkills = () => {
    setIsHover(true);
    <MessageSkillsButton />;
  };
  const handleMouseLeaveBtnSkills = () => {
    setIsHover(false);
  };

  return {
    isHover,
    setIsHover,
    handleMouseEnterBtnSkills: handleMouseEnterBtnSkills,
    handleMouseLeaveBtnSkills: handleMouseLeaveBtnSkills,
    btnSkills,
  };
};

export default useHoverBtnKills;
