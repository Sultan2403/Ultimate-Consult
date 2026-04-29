import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import About_Sec from "./Components/Sections/About/about";
import Contact_Us from "./Components/Sections/Contact/contact";
import HeroSec from "./Components/Sections/Hero/HeroSection";
import FeatureBanner from "./Components/Sections/Mini Sections/featureBanner";
import Services_Sec from "./Components/Sections/Services/services";
import AdminConsultationDetailsPage from "./Pages/AdminConsultationDetailsPage";
import AdminConsultationsPage from "./Pages/AdminConsultationsPage";
import AdminLoginPage from "./Pages/AdminLoginPage";
import "./App.css";

function HomePage() {
  useEffect(() => {
    const revealSections = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    revealSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin/consultations"
          element={
            <ProtectedRoute>
              <AdminConsultationsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/consultations/:consultationId"
          element={
            <ProtectedRoute>
              <AdminConsultationDetailsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
