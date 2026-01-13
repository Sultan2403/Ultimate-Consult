import "./App.css";
import Header from "./Components/Header/header";
import About_Sec from "./Components/Sections/About/about";
import Contact_Us from "./Components/Sections/Contact/contact";
import HeroSec from "./Components/Sections/Hero/HeroSection";
import Why_Choose_Us from "./Components/Sections/Mini Sections/why choose us";
import Services_Sec from "./Components/Sections/Services/services";

function App() {
  return (
    <>
      <Header />
      <HeroSec />
      <About_Sec />
      <Services_Sec />
      <Why_Choose_Us />
      <Contact_Us />
    </>
  );
}

export default App;
