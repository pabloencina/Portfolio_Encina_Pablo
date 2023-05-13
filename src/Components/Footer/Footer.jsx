import { Box, Grid } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Link } from "react-router-dom";
//import { useState } from "react";

const Footer = () => {
  //   const [isHover, setIsHover] = useState(false);

  //   const handleMouseEnter = () => {
  //     setIsHover(true);
  //   };
  //   const handleMouseLeave = () => {
  //     setIsHover(false);
  //   };
  return (
    <Box
      style={{
        height: "200px",
        variant: "contained",
        backgroundColor: "#03001C",
        display: "flex",
        justifyContent: "start",
        //alignItems: "center",
      }}
    >
      <Grid
        container
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "5%",
        }}
      >
        <Grid xs>
          <Link
            to="https://github.com/pabloencina"
            target="_blank"
            title="GitHub"
            // onMouseEnter={handleMouseEnter}
            //onMouseLeave={handleMouseLeave}
          >
            <GitHubIcon style={{ color: "white" }} />
          </Link>
        </Grid>
        <Grid xs>
          <Link
            title="LinkedIn"
            target="_blank"
            to="https://www.linkedin.com/in/pablo-david-encina-597399164/"
            //onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
          >
            <LinkedInIcon style={{ color: "white" }} />
          </Link>
        </Grid>
        <Grid>
          <Link
            title="Email"
            target="_blank"
            to="mailto:encina.pd@gmail.com"
            //onMouseEnter={handleMouseEnter}
            //onMouseLeave={handleMouseLeave}
          >
            <AttachEmailIcon style={{ color: "white" }} />
          </Link>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "150px",
          }}
          mr={4}
        >
          <div>
            <p variant="h6" align="center">
              <LocalPhoneIcon style={{ color: "white" }} />
            </p>

            <p
              variant="h6"
              align="center"
              style={{ color: "white" }}
              sx={{
                fontFamily: "monospace",
                fontWeight: 300,
                letterSpacing: ".1rem",
                textDecoration: "none",
              }}
            >
              2994231917
            </p>

            <p variant="h6" align="center">
              <AddLocationAltIcon style={{ color: "white" }} />
            </p>

            <p
              variant="h6"
              align="center"
              style={{ color: "white" }}
              sx={{
                fontFamily: "monospace",
                fontWeight: 300,
                letterSpacing: ".1rem",
                textDecoration: "none",
              }}
            >
              Ciudad de Córdoba
            </p>
          </div>
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
