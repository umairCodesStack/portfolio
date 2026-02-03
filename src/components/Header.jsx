import React, { useEffect, useState } from "react";

/**
 * theme values: "dark" | "light" | "rainy-dark" | "rainy-light"
 */
const normalizeTheme = (t) => {
  if (
    t === "dark" ||
    t === "light" ||
    t === "rainy-dark" ||
    t === "rainy-light"
  )
    return t;
  return "dark";
};

export default function Header() {
  const [theme, setTheme] = useState(() =>
    normalizeTheme(localStorage.getItem("theme")),
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isRainy = theme.startsWith("rainy-");
  const isLight = theme.endsWith("light");

  const toggleLightDark = () => {
    if (isRainy) {
      setTheme((prev) =>
        prev === "rainy-light" ? "rainy-dark" : "rainy-light",
      );
    } else {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }
  };

  const toggleMode = () => {
    const nextSuffix = isLight ? "light" : "dark";
    setTheme(() => (isRainy ? nextSuffix : `rainy-${nextSuffix}`));
  };

  return (
    <header className="site-header">
      <div className="container">
        <a className="brand" href="#home" aria-label="Go to top">
          <span className="logo">UA</span>
          <span className="brand-text">UMAIR ASHRAF</span>
        </a>

        <nav className="nav">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        <div style={{ display: "flex", gap: 8 }}>
          {/* Light/Dark toggle: show sun in dark mode, moon in light mode */}
          <button
            className="icon-btn"
            aria-label="Toggle light/dark"
            onClick={toggleLightDark}
            title="Toggle light/dark"
          >
            <svg
              className="icon sun"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
            </svg>
            <svg
              className="icon moon"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>

          {/* Rainy mode toggle */}
          <button
            className="icon-btn"
            aria-label="Toggle rainy theme"
            onClick={toggleMode}
            title="Toggle rainy theme"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M16 16.5a4.5 4.5 0 0 0 0-9 5.5 5.5 0 0 0-10.687 1.614A4 4 0 0 0 6 16.5h10z"></path>
              <path d="M8 18l-1.5 3M12 18l-1.5 3M16 18l-1.5 3"></path>
            </svg>
            {isRainy && <span className="rainy-indicator" aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
