import { Card } from "@mui/material";
import React, { useState } from "react";

function UseRotatingCard() {
  const [isRotated, setIsRotated] = useState(false);

  const handleCardClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <Card className={isRotated ? "rotated" : ""} onClick={handleCardClick}>
      {/* Contenido de la tarjeta */}
    </Card>
  );
}

export default UseRotatingCard;
