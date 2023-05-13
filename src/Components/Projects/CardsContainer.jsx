import { Grid } from "@mui/material";
import { nameProjects } from "../Data/dataProjects";
import ProjectCard from "./ProjectCard";

const CardsContainer = () => {
  return (
    <Grid
      container
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      {nameProjects.map((project) => {
        return (
          <Grid
            container
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
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
