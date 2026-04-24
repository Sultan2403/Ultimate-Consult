import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import About_Sec from "./Components/Sections/About/about";
import Contact_Us from "./Components/Sections/Contact/contact";
import HeroSec from "./Components/Sections/Hero/HeroSection";
import FeatureBanner from "./Components/Sections/Mini Sections/featureBanner";
import Services_Sec from "./Components/Sections/Services/services";
import ConsultationVerifyPage from "./Pages/ConsultationVerifyPage";
import ConsultationPaymentPage from "./Pages/ConsultationPaymentPage";
import "./App.css";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSec />
      <Services_Sec />
      <About_Sec />
      <FeatureBanner />
      <Contact_Us />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/Ultimate-Consult">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Consultation pages retained, but not linked from homepage for now. */}
        <Route path="/consultation/verify" element={<ConsultationVerifyPage />} />
        <Route path="/consultation/pay" element={<ConsultationPaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
