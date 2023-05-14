import { Box, Typography } from "@mui/material";
import React from "react";

import "../css styles/paragraphStyles.css";
import "../css styles/boxStyles.css";
import "../css styles/myPortfolio.css";

const MyPortfolio = () => {
  return (
    <Box
      style={{
        height: "500px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Typography
        sx={{
          fontFamily: "monospace",
          fontSize: "40px",
          fontWeight: 200,
          letterSpacing: ".1rem",
          color: "white",
        }}
        className="cont"
      >
        My Portfolio
      </Typography>
    </Box>
  );
};
export default MyPortfolio;
