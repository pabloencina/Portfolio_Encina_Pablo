import styles from "../css styles/boxStyles.module.css";
import { Box } from "@mui/material";
import CardsContainer from "./CardsContainer";
import React, { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <Box style={{ backgroundColor: "black" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className={styles.styleTitle}>PROJECTS</p>
      </Box>

      <CardsContainer />
    </Box>
  );
};

export default Projects;
