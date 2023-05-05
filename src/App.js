import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/About me/AboutMe";
import MySkills from "./Components/My skills/MySkills";
import Projects from "./Components/Projects/Projects";

const theme = createTheme({
  palette: {
    primary: {
      main: "#150050", // Cambiar el color primario
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <AboutMe />
      <MySkills />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
