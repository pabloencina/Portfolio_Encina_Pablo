import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import milkyWayBackground from "../Images/milky-way-background.jpg";
import { nameProjects } from "../Data/dataProjects";
import { Link } from "react-router-dom";
import AddLinkIcon from "@mui/icons-material/AddLink";
//import React, { useState } from "react";

const ProjectCardsDescription = ({ handleCardClick }) => {
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
              component="img"
              image={milkyWayBackground}
              alt="Background Section About Me"
              style={{
                border: "1px solid white",
                width: "400px",
                height: "500px",
              }}
            />
            <Typography
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
              <h1 style={{ fontSize: "18px", fontFamily: "monospace" }}>
                {card.name}
              </h1>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "200px",
                  fontFamily: "monospace",
                }}
              >
                {card.description}
              </p>
              <Box>
                <AddLinkIcon style={{ color: "red" }}></AddLinkIcon>
              </Box>

              <Link
                to="https://ecommerce-abrazar-el-presente.web.app/"
                target="_blank"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "monospace",
                }}
              >
                {card.link}
              </Link>
            </Typography>
          </Button>
        </Grid>
      ))}
    </>
  );
};

export default ProjectCardsDescription;
