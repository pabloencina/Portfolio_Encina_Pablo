import { useState } from "react";

const useHoverBtnKills = () => {
  const [isHover, setIsHover] = useState(false);

  const btnSkills = {
    backgroundColor: isHover ? "white" : "#564592",
    color: isHover ? "#564592" : "white",
    textDecoration: "none",
    fontFamily: "Roboto",
    //borderRadius: "5%",
  };
  const handleMouseEnterBtnSkills = () => {
    setIsHover(true);
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
