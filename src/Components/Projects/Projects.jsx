import "../CssStyles/paragraphStyles.css";
import "../CssStyles/boxStyles.css";
import React from "react";
import CardsContainer from "./CardsContainer";

const Projects = () => {
  return (
    <div>
      <p
        style={{
          fontFamily: "monospace",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "200px",
          color: "white",
          fontSize: "30px",
        }}
      >
        PROJECTS
      </p>
      <CardsContainer />
    </div>
  );
};

export default Projects;
