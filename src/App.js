import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/About me/AboutMe";
import MySkills from "./Components/My skills/MySkills";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#03001C", // Cambiar el color primario
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/my-skills" element={<MySkills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
