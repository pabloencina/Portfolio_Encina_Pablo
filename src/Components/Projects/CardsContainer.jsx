import { Grid } from "@mui/material";
import React, { useState } from "react";
import ProjectCardsName from "./ProjectCardsName";
import ProjectCardsDescription from "./ProjectCardsDescription";

const CardsContainer = () => {
  const [showNewCard, setShowNewCard] = useState(false);

  const handleCardClick = (e) => {
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
      }}
    >
      {!showNewCard ? (
        <ProjectCardsName handleCardClick={handleCardClick} />
      ) : (
        <ProjectCardsDescription handleCardClick={handleCardClick} />
      )}
    </Grid>
  );
};

export default CardsContainer;
