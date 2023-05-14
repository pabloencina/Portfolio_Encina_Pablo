import { Box, CardMedia, Grid, Typography } from "@mui/material";
import backgroundAboutMe from "../Images/background-section-about-me.jpg";
import "../css styles/paragraphStyles.css";
import "../css styles/boxStyles.css";
import React from "react";
import ButtonSkillContainer from "./ButtonSkillContainer";

function MySkills() {
  return (
    <>
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
          top: "100%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Box className="boxStyleTitle">
              <p
                style={{
                  fontFamily: "monospace",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                TECHNOLOGIES AND SOFTWARE TOOLS
              </p>
            </Box>
          </Grid>
          <Grid container>
            <ButtonSkillContainer />
          </Grid>
          <Box className="boxStyleTitle" style={{ width: "100%" }}>
            <p
              style={{
                fontFamily: "monospace",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              SOFT SKILLS
            </p>
            <Box
              className="boxStyleTitle"
              style={{
                width: "100%",
                height: "300px",
              }}
            >
              <p
                style={{
                  fontFamily: "monospace",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                I consider myself a person with good effective communication,
                since my last job as a manager in the casino business and having
                studied Ontological Coaching gave me tools to develop myself.
              </p>
              <p
                style={{
                  fontFamily: "monospace",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                I have experienced teamwork when I worked in the kitchen
                section, always developing together with my colleagues and
                helping to meet the objectives.
              </p>
            </Box>
          </Box>
        </Grid>
      </Typography>
    </>
  );
}

export default MySkills;
