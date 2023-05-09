import { Button, CardMedia, Grid, Typography } from "@mui/material";
import milkyWayBackground from "../Images/milky-way-background.jpg";
//import React, { useState } from "react";

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

const ProjectCardsDescription = ({ handleCardClick }) => {
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
              image={milkyWayBackground}
              alt="Background Section About Me"
              style={{ border: "1px solid white" }}
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
              <h1 style={{ fontSize: "18px", fontFamily: "roboto" }}>
                {card.name}
              </h1>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "200px",
                  fontFamily: "roboto",
                }}
              >
                {card.description}
              </p>
              <p>{card.link}</p>
            </Typography>
          </Button>
        </Grid>
      ))}
    </>
  );
};

export default ProjectCardsDescription;
