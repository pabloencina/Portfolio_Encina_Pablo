import { Box, CardMedia, Grid, Typography } from "@mui/material";
import backgroundAboutMe from "../Images/background-section-about-me.jpg";
import "../CssStyles/paragraphStyles.css";
import "../CssStyles/boxStyles.css";
import React from "react";

function AboutMe() {
  return (
    <div>
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
          top: "50%",
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
                ABOUT ME
              </p>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box className="boxStyleParagraph">
              <p className="paragraphStyle">I am a full stack developer.</p>
              <p className="paragraphStyle">
                I am looking for my first job in the IT universe.
              </p>
              <p className="paragraphStyle">
                I am currently focused on the area of ​​testing because I love
                working on software quality by running manual tests, identifying
                bugs.
                <p>
                  I am taking a SQL course to be able to add value to my CV and
                  to the company.
                </p>
              </p>
            </Box>
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
}

export default AboutMe;
