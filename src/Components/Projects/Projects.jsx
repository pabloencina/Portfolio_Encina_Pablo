import "../css styles/paragraphStyles.css";
import "../css styles/boxStyles.css";
import React from "react";
import CardsContainer from "./CardsContainer";
import { Box } from "@mui/material";

const Projects = () => {
  return (
    <Box style={{ backgroundColor: "black" }}>
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
    </Box>
  );
};

export default Projects;
