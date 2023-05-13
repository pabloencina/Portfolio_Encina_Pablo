import { Button, CardMedia, Grid, Typography } from "@mui/material";
import "../css styles/rotatedStyle.css";
import technologicalBackground from "../Images/technological-background.jpg";
import "../css styles/boxStyles.css";

const ProjectNameCard = ({ project, handleCardClick }) => {
  console.log(handleCardClick);

  return (
    <>
      <Grid
        key={project.id}
        xs={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Button key={project.id} id={project.id} onClick={handleCardClick}>
          <CardMedia
            key={project.id}
            id={project.id}
            component="img"
            image={technologicalBackground}
            alt="Background Section About Me"
            style={{
              border: "1px solid white",
              width: "400px",
              height: "500px",
            }}
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
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "200px",
                fontFamily: "monospace",
              }}
            >
              {project.name}
            </p>
          </Typography>
        </Button>
      </Grid>
    </>
  );
};

export default ProjectNameCard;
