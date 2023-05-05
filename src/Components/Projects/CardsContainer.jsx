import { Grid } from "@mui/material";
import React from "react";
import ProjectCards from "./ProjectCards";

const CardsContainer = () => {
  return (
    <Grid
      container
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProjectCards />
    </Grid>
  );
};

export default CardsContainer;
