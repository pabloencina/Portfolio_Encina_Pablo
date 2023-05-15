import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import photoCv from "../Components/Images/photo-cv.jpg";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import styles from "../Components/css styles/boxStyles.module.css";
import "../Components/css styles/animate.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#03001C",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img
              src={photoCv}
              alt="logo"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              style={{ width: "275px", height: "250px" }}
            />
          </Link>
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
              <h4 align="center" component="a" href="/about-me">
                ENCINA PABLO DAVID
              </h4>

              <h4 align="center" component="a" href="/about-me">
                TESTER QA | JR
              </h4>
            </div>
          </Box>

          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              width: "50%",
            }}
          >
            <Button className={styles.buttonStyle} variant="text">
              <Link
                to={"/about-me"}
                variant="contained"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                About Me
              </Link>
            </Button>
            <Button className={styles.buttonStyle} variant="text">
              <Link
                to={"/my-skills"}
                style={{ textDecoration: "none", color: "white" }}
              >
                My Skills
              </Link>
            </Button>

            <Button className={styles.buttonStyle} variant="text">
              <Link
                to={"/projects"}
                variant="contained"
                style={{ textDecoration: "none", color: "white" }}
              >
                Projects
              </Link>
            </Button>
          </Box>
          <Box
            m={2}
            style={{
              width: "100px",
              display: "flex",
              justifyContent: "center",
            }}
            className="moveCardLink"
          >
            <Link
              style={{ color: "white" }}
              title="Curriculum"
              to="https://drive.google.com/file/d/1gs9c3NU_nmdS97i1MLJkemJS_9XgMsud/view?usp=share_link"
              target="_blank"
            >
              <AdsClickIcon />
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
