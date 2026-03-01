import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import About_Sec from "./Components/Sections/About/about";
import Contact_Us from "./Components/Sections/Contact/contact";
import HeroSec from "./Components/Sections/Hero/HeroSection";
import What_We_Offer from "./Components/Sections/Mini Sections/whatWeOffer";
import Why_Choose_Us from "./Components/Sections/Mini Sections/why choose us";
import Services_Sec from "./Components/Sections/Services/services";
import ConsultationPaymentPage from "./Pages/ConsultationPaymentPage";
import ConsultationVerifyPage from "./Pages/ConsultationVerifyPage";
import "./App.css";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSec />
      <About_Sec />
      <What_We_Offer />
      <Services_Sec />
      <Why_Choose_Us />
      <Contact_Us />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/consultation/pay" element={<ConsultationPaymentPage />} />
      <Route path="/consultation/verify" element={<ConsultationVerifyPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
