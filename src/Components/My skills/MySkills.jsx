import { Box, CardMedia, Grid, Typography } from "@mui/material";
import backgroundAboutMe from "../Images/background-section-about-me.jpg";
import "../css styles/paragraphStyles.css";
import styles from "../css styles/boxStyles.module.css";
import ButtonSkillContainer from "./ButtonSkillContainer";
import React, { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";

function MySkills() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Spinner />
  ) : isLoading ? (
    <Spinner />
  ) : (
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
            <Box className={styles.boxStyleTitle}>
              <p className={styles.styleTitle}>
                TECHNOLOGIES AND SOFTWARE TOOLS
              </p>
            </Box>
          </Grid>
          <Grid container>
            <ButtonSkillContainer />
          </Grid>
          <Box className={styles.boxStyleTitle} style={{ width: "100%" }}>
            <p className={styles.styleTitle}>SOFT SKILLS</p>
            <Box className={styles.styleParagraph}>
              <p className={styles.styleParagraph}>
                I consider myself a person with good effective communication,
                since my last job as a manager in the casino business and having
                studied Ontological Coaching gave me tools to develop myself.
              </p>
              <p className={styles.boxStyleParagraph}>
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
