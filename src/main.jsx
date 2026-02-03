import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./styles.css";

import AOS from "aos";

function initAOS() {
  try {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!prefersReduced) {
      AOS.init({
        duration: 800,
        once: true,
        offset: 80,
        easing: "ease-out-cubic",
      });
      document.documentElement.classList.add("aos-enabled");
    } else {
      document.documentElement.classList.remove("aos-enabled");
    }
  } catch {
    document.documentElement.classList.remove("aos-enabled");
  }
}

initAOS();

createRoot(document.getElementById("root")).render(<App />);
