import "./App.css";
import Header from "./Components/Header/header";
import About_Sec from "./Components/Sections/About/about";
import HeroSec from "./Components/Sections/Hero/HeroSection";
import Services_Sec from "./Components/Sections/Services/services";

function App() {
  return (
    <>
      <Header />
      <HeroSec />
      <About_Sec />
      <Services_Sec />
    </>
  );
}

export default App;
