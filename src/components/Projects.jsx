import React, { useEffect } from "react";

export default function Projects() {
  // Tilt effect for cards
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const cards = document.querySelectorAll(".card.tilt");
    const onEnter = (e, card) => card.getBoundingClientRect();
    cards.forEach((card) => {
      let bounds = null;
      const reset = () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
      };
      const onMouseEnter = () => {
        bounds = onEnter(null, card);
      };
      const onMouseMove = (e) => {
        if (prefersReduced) return;
        if (!bounds) bounds = card.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;
        const rx = (y / bounds.height - 0.5) * -6;
        const ry = (x / bounds.width - 0.5) * 8;
        card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      };
      card.addEventListener("mouseenter", onMouseEnter);
      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseleave", reset);
      // Cleanup
      return () => {
        card.removeEventListener("mouseenter", onMouseEnter);
        card.removeEventListener("mousemove", onMouseMove);
        card.removeEventListener("mouseleave", reset);
      };
    });
  }, []);

  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <h2 className="section-title">Selected Projects</h2>
        <div className="grid cards">
          <article className="card tilt">
            <div className="card-media">
              <div
                className="card-media"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <iframe
                  src="https://serene-haven-nine.vercel.app/dashboard"
                  title="Project live preview"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "250px",
                    border: "none",
                    pointerEvents: "auto", // Enable scrolling
                    display: "block",
                    overflow: "hidden",
                  }}
                />
              </div>
            </div>{" "}
            <div className="card-content">
              <h3>Serene Haven</h3>
              <p>
                Hotel management system built with React and Supabase. Manages
                bookings, cabins, and guests with real-time sync, server-state
                caching (React Query), and responsive UI (Styled Components).
              </p>
              <div className="card-actions">
                <a
                  href="https://serene-haven-nine.vercel.app/dashboard"
                  className="btn btn-ghost"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/umairCodesStack/serene-haven"
                  className="btn btn-ghost"
                >
                  Source
                </a>
              </div>
            </div>
          </article>

          <article className="card tilt">
            <div className="card-media">
              <img
                src="./image.png"
                alt="E-commerce landing page preview"
                loading="lazy"
              />
            </div>
            <div className="card-content">
              <h3>Shop Easy</h3>
              <p>
                Multi-vendor marketplace built with .NET Core and React.
                Features role-based authentication, vendor product/order
                management, analytics dashboards.
              </p>
              <div className="card-actions">
                <a
                  href="https://github.com/umairCodesStack/Shop-Easy-Website"
                  className="btn btn-ghost"
                >
                  Source
                </a>
              </div>
            </div>
          </article>

          <article className="card tilt">
            <div className="card-media">
              <iframe
                src="https://fast-react-pizza-co-ehtt.vercel.app/menu"
                title="Project live preview"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "250px",
                  border: "none",
                  pointerEvents: "auto",
                  display: "block",
                  overflow: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
                className="hide-scrollbar"
              />{" "}
            </div>
            <div className="card-content">
              <h3>Fast React Pizza App</h3>
              <p>
                Simple website for local pizza vendors built in React js, vite
                and redux js for state management.
              </p>
              <div className="card-actions">
                <a
                  href="https://fast-react-pizza-co-ehtt.vercel.app/"
                  className="btn btn-ghost"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/umairCodesStack/fast-react-pizza-co"
                  className="btn btn-ghost"
                >
                  Source
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
