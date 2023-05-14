import { Grid } from "@mui/material";
import React, { useState } from "react";
import ProjectNameCard from "./ProjectNameCard";
import ProjectDescriptionCard from "./ProjectDescriptionCard";

const ProjectCard = ({ project }) => {
  const [showNewCard, setShowNewCard] = useState(false);

  const handleCardClick = () => {
    setShowNewCard(!showNewCard);
  };

  return (
    <Grid
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!showNewCard ? (
        <ProjectNameCard project={project} handleCardClick={handleCardClick} />
      ) : (
        <ProjectDescriptionCard
          project={project}
          handleCardClick={handleCardClick}
        />
      )}
    </Grid>
  );
};

export default ProjectCard;
