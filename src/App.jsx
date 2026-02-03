import React, { useEffect } from "react";
import Header from "./components/Header.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Orbs from "./components/Orbs.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import RainLayer from "./components/RainLayer.jsx";

export default function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("active"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("active")
        ),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollProgress />
      {/* Rain layer sits above background orbs but below content */}
      <RainLayer />
      <Orbs />
      <Header />
      <main id="home">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
