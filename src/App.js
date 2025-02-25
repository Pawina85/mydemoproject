import logo from "./logo.svg";
import "./App.css";
import NavBar from "./sections/NavBar/NavBar";
import About from "./sections/AboutSection/About";
import MidSection from "./sections/MidSection/MidSection";
import HeroSection from "./sections/HeroSection/HeroSection";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <MidSection></MidSection>
      <About />
    </div>
  );
}

export default App;
