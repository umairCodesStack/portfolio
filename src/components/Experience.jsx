import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="section reveal">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="dot"></div>
            <div className="content">
              <time>May 1, 2026 — Oct 1, 2026</time>
              <h3>Associate Software Engineer · DevKiosk</h3>
              <p>
                Worked as a full-stack engineer, contributing to the development
                of SaaS products using Django and Next.js. Developed backend
                functionality, implemented user-facing features, and
                collaborated on end-to-end product development.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="dot"></div>
            <div className="content">
              <time>Mar 2025 — May 2025</time>
              <h3>Associate Software Engineer Intern · Sortup Pvt. Ltd.</h3>
              <p>
                Developed backend modules for e-commerce operations using the
                MERN stack. Designed database schemas, contributed to feature
                development, and collaborated with Agile teams to deliver
                features efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
