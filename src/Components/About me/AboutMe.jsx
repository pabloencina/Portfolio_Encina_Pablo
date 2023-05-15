import { Box, CardMedia, Grid, Typography } from "@mui/material";
import backgroundAboutMe from "../Images/background-section-about-me.jpg";
import "../css styles/paragraphStyles.css";
import React, { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";

function AboutMe() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        image={backgroundAboutMe}
        alt="Background Section About Me"
      />
      <Typography
        variant="h4"
        component="p"
        align="center"
        style={{
          position: "absolute",
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
    </Box>
  );
}

export default AboutMe;
