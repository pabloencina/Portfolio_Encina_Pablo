import { Button, CardMedia, Grid, Typography } from "@mui/material";
import "../css styles/rotatedStyle.css";
import technologicalBackground from "../Images/technological-background.jpg";
import "../css styles/boxStyles.css";
import { nameProjects } from "../Data/dataProjects";
//import React, { useState } from "react";
//import ProjectCardsDescription from "./ProjectCardsDescription";

const ProjectCardsName = ({ handleCardClick, clickButton }) => {
  return (
    <>
      {nameProjects.map((card) => (
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Button
            key={card.id}
            id={card.id}
            onClick={() => handleCardClick(card.id)}
          >
            <CardMedia
              key={card.id}
              component="img"
              image={technologicalBackground}
              alt="Background Section About Me"
              style={{
                border: "1px solid white",
                width: "400px",
                height: "500px",
              }}
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
                  fontFamily: "monospace",
                }}
              >
                {card.name}
              </p>
            </Typography>
          </Button>
        </Grid>
      ))}
    </>
  );
};

export default ProjectCardsName;
