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
    <Grid xs>
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
