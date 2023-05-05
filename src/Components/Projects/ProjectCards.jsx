import { Button, CardMedia, Grid, Typography } from "@mui/material";
import technologicalBackground from "../Images/technological-background.jpg";
import React from "react";

const nameProjects = [
  "E-COMMERCE YOGA PRODUCTS",
  "MARVEL OFFICIAL PAGE MANUAL TESTING",
  " E-COMMERCE MANUAL TESTING YOGA PRODUCTS",
  "YOGA PRODUCTS E-COMMERCE DATABASE",
];

const ProjectCards = () => {
  return (
    <>
      {nameProjects.map((name) => (
        <Grid item xs={6}>
          <Button>
            <CardMedia
              component="img"
              image={technologicalBackground}
              alt="Background Section About Me"
              style={{ border: "1px solid white" }}
            />
            <Typography
              variant="h4"
              component="p"
              align="center"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "200px",
                }}
              >
                {name}
              </p>
            </Typography>
          </Button>
        </Grid>
      ))}
    </>
  );
};

export default ProjectCards;
