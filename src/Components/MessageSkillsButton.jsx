import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function MessageSkillsButton() {
  return (
    <Stack sx={{ width: "20%" }} spacing={2}>
      <Alert severity="info" style={{ fontFamily: "monospace" }}>
        Click on the button, please!!!
      </Alert>
    </Stack>
  );
}
