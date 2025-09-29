import logo from "./logo.svg";
import "./App.css";
import NavBar from "./sections/NavBar/NavBar";
import About from "./sections/AboutSection/About";
import MidSection from "./sections/MidSection/MidSection";
import HeroSection from "./sections/HeroSection/HeroSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="mid">
        <MidSection />
      </div>
      <div id="about">
        <About />
      </div>
    </div>
  );
}

export default App;
