import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Features from "../components/Features/Features";
import WaitlistForm from "../components/WaitlistForm/WaitlistForm";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import "../index.css";

function HomePage() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <WaitlistForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
