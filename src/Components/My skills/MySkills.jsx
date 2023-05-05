import { Box, CardMedia, Grid, Typography } from "@mui/material";
import backgroundAboutMe from "../Images/background-section-about-me.jpg";
import "../CssStyles/paragraphStyles.css";
import "../CssStyles/boxStyles.css";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import React from "react";

function MySkills() {
  return (
    <>
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
          top: "120%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        <Grid container style={{ width: "100%", margin: 0 }}>
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

          <Grid item xs={6}>
            <Box className="boxStyleParagraph">
              <HtmlIcon />
              <CssIcon />
              <JavascriptIcon />
            </Box>
          </Grid>
        </Grid>
      </Typography>
    </>
  );
}

export default MySkills;
