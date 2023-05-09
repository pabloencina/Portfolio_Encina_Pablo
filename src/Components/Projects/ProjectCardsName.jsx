import { Button, CardMedia, Grid, Typography } from "@mui/material";
import "../css styles/rotatedStyle.css";
import technologicalBackground from "../Images/technological-background.jpg";
//import React, { useState } from "react";
//import ProjectCardsDescription from "./ProjectCardsDescription";

const nameProjects = [
  {
    id: 1,
    name: "E-COMMERCE YOGA PRODUCTS",
    description:
      "Abrazar el presente, Tienda Online es un e-commerce que permite, elegir y comprar productos relacionados a yoga, meditación.",
    link: "https://ecommerce-abrazar-el-presente.web.app/",
  },
  {
    id: 2,
    name: "MARVEL OFFICIAL PAGE MANUAL TESTING",
    description: "",
    link: "",
  },
  {
    id: 3,
    name: "E-COMMERCE MANUAL TESTING YOGA PRODUCTS",
    description: "",
    link: "",
  },
  {
    id: 4,
    name: "YOGA PRODUCTS E-COMMERCE DATABASE",
    description:
      "Se crea una base de datos para el proyecto 'Abrazar el presente' siendo este un e-commerce realizado en React.js.",
    link: "",
  },
];

const ProjectCardsName = ({ handleCardClick }) => {
  return (
    <>
      {nameProjects.map((card) => (
        <Grid item xs={6}>
          <Button
            key={card.id}
            id={card.id}
            onClick={() => handleCardClick(card.id)}
          >
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
                  fontFamily: "roboto",
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
