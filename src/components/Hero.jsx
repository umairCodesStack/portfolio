import React from "react";

export default function Hero() {
  return (
    <section id="home" className="section hero reveal">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">
              <span className="wave" aria-hidden="true">
                👋
              </span>{" "}
              Hello,
            </div>
            <h1 className="hero-title">
              <span className="text-gradient">Umair Ashraf</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Web Developer</h2>
            <p className="hero-description">
              Passionate about creating beautiful, functional, and user-centered
              digital experiences. I transform ideas into reality through clean
              code and innovative solutions.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <span>View My Work</span>
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </a>
              <a href="#contact" className="btn btn-outline">
                <span>Let's Talk</span>
                <i className="fas fa-paper-plane" aria-hidden="true"></i>
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/umairCodesStack"
                className="social-link"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
              >
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/umair-ashraf-694949261/"
                className="social-link"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="#"
                className="social-link"
                target="_blank"
                rel="noopener"
                aria-label="Dribbble"
              >
                <i className="fab fa-dribbble" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-card card-1">
              <i className="fas fa-code" aria-hidden="true"></i>
              <span>Clean Code</span>
            </div>
            <div className="floating-card card-2">
              <i className="fas fa-mobile-alt" aria-hidden="true"></i>
              <span>Responsive</span>
            </div>
            <div className="floating-card card-3">
              <i className="fas fa-rocket" aria-hidden="true"></i>
              <span>Fast Performance</span>
            </div>
            <div className="floating-card card-4">
              <i className="fas fa-palette" aria-hidden="true"></i>
              <span>Modern Design</span>
            </div>

            <div className="hero-image-container">
              <div className="hero-image">
                <img
                  src="/profile.png"
                  alt="Profile picture"
                  className="hero-photo"
                />
              </div>

              {/* Bigger umbrella overlay that covers the top of the photo */}
              <div className="umbrella-cover" aria-hidden="true">
                <svg
                  className="umbrella-svg"
                  viewBox="0 0 320 200"
                  preserveAspectRatio="xMidYMin meet"
                >
                  <defs>
                    <linearGradient
                      id="umbrellaGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="var(--brand)" />
                      <stop offset="50%" stopColor="var(--accent)" />
                      <stop offset="100%" stopColor="var(--brand-2)" />
                    </linearGradient>
                    <filter
                      id="umbrellaShadow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="6"
                        stdDeviation="6"
                        floodColor="rgba(0,0,0,0.35)"
                      />
                    </filter>
                  </defs>

                  {/* Canopy: wide semicircle */}
                  <path
                    d="M160,14
                       C 95,14 40,60 24,110
                       L 296,110
                       C 280,60 225,14 160,14
                       Z"
                    fill="url(#umbrellaGradient)"
                    filter="url(#umbrellaShadow)"
                  />
                  {/* Scallops along the bottom edge of canopy */}
                  <path
                    d="M24,110
                       C 44,126 64,126 84,110
                       C 104,126 124,126 144,110
                       C 164,126 184,126 204,110
                       C 224,126 244,126 264,110
                       C 280,120 296,115 296,110"
                    fill="url(#umbrellaGradient)"
                  />
                  {/* Central rib and handle */}
                  <path
                    d="M160,16 L160,146"
                    stroke="rgba(12,18,32,0.85)"
                    strokeWidth="3"
                  />
                  <path
                    d="M160,146 C160,170 145,182 132,182"
                    stroke="rgba(12,18,32,0.85)"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-down" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}
