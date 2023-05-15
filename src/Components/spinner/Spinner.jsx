// import { Box } from "@mui/system";
// import React from "react";
// import { CircularProgress } from "@mui/material";

// const Spinner = () => {
//   return (
//     <Box
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         height: "400px",
//         width: "100%",
//         alignItems: "center",
//         backgroundColor: "black",
//       }}
//     >
//       <CircularProgress sx={{ color: "white" }} />
//     </Box>
//   );
// };

// export default Spinner;

import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        height: "400px",
        width: "100%",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <CircularProgress
        variant="determinate"
        sx={{ color: "white" }}
        {...props}
      />
      <Box>
        <Typography variant="caption" component="div" sx={{ color: "white" }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function Spinner() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
