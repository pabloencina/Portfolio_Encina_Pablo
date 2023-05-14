import { Grid } from "@mui/material";
import { nameProjects } from "../Data/dataProjects";
import ProjectCard from "./ProjectCard";

const CardsContainer = () => {
  return (
    <Grid
      container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {nameProjects.map((project) => {
        return (
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ProjectCard key={"project-card-" + project.id} project={project} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardsContainer;
