import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import milkyWayBackground from "../Images/milky-way-background.jpg";
import { Link } from "react-router-dom";
import AddLinkIcon from "@mui/icons-material/AddLink";
import "../css styles/animate.css";

const ProjectCardsDescription = ({ project, handleCardClick }) => {
  return (
    <>
      <Grid
        item
        xs={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Button key={project.id} id={project.id} onClick={handleCardClick}>
          <CardMedia
            component="img"
            image={milkyWayBackground}
            alt="Background Section About Me"
            style={{
              border: "1px solid white",
              width: "400px",
              height: "500px",
            }}
          />
          <Typography
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
            <h1 style={{ fontSize: "18px", fontFamily: "monospace" }}>
              {project.name}
            </h1>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "200px",
                fontFamily: "monospace",
              }}
            >
              {project.description}
            </p>

            <Box
              className="moveCardLink"
              style={{ width: "200px", backgroundColor: "#03001C" }}
            >
              <Box>
                <AddLinkIcon style={{ color: "white" }}></AddLinkIcon>
              </Box>

              <Link
                title="Link"
                to={project.link}
                target="_blank"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "monospace",
                }}
              >
                Project link
              </Link>
            </Box>
          </Typography>
        </Button>
      </Grid>
    </>
  );
};

export default ProjectCardsDescription;
