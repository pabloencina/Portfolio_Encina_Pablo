import { Box, CardMedia, Grid, Typography } from "@mui/material";
import backgroundAboutMe from "../Images/background-section-about-me.jpg";
import "../css styles/paragraphStyles.css";
import "../css styles/boxStyles.css";
import React from "react";
import ButtonSkills from "../My skills/ButtonSkills";

function MySkills() {
  return (
    <Box style={{ backgroundColor: "yellow" }}>
      <CardMedia
        component="img"
        image={backgroundAboutMe}
        alt="Background Section About Me"
        height="400px"
      />
      <Typography
        variant="h4"
        component="p"
        align="center"
        style={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 1000,
          }}
        >
          <Grid item xs={6}>
            <Box className="boxStyleTitle">
              <p
                style={{
                  fontFamily: "monospace",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "200px",
                }}
              >
                MY SKILLS
              </p>
            </Box>
          </Grid>

          <ButtonSkills />
        </Grid>
      </Typography>
    </Box>
  );
}

export default MySkills;
