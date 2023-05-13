import { Grid } from "@mui/material";
import React, { useState } from "react";
import ProjectCardsName from "./ProjectCardsName";
import ProjectCardsDescription from "./ProjectCardsDescription";

const CardsContainer = () => {
  const [showNewCard, setShowNewCard] = useState(false);
  const [clickButton, setClickButton] = useState(null);

  const handleCardClick = (id) => {
    console.log(id);
    setClickButton(id);
    setShowNewCard(true);
  };

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
      {!showNewCard ? (
        <ProjectCardsName
          handleCardClick={handleCardClick}
          clickButton={clickButton}
        />
      ) : (
        <ProjectCardsDescription
          handleCardClick={handleCardClick}
          clickButton={clickButton}
        />
      )}
    </Grid>
  );
};

export default CardsContainer;
