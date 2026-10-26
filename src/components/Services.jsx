import React from "react";

const services = [
  {
    title: "Business Portfolio Websites",
    description:
      "Professional, conversion-focused websites that help businesses showcase services, build trust, and attract leads.",
  },
  {
    title: "SaaS Tools Development",
    description:
      "Custom software products built for workflows, automation, dashboards, and scalable digital operations.",
  },
  {
    title: "CRMs Setup & Integration",
    description:
      "End-to-end CRM configuration, workflow automation, lead management, and system integrations for business efficiency.",
  },
  {
    title: "Stripe & QuickBooks Integration",
    description:
      "Secure payment flows, invoicing automation, accounting sync, and seamless financial operations using modern tools.",
  },
  {
    title: "E-commerce Store Development",
    description:
      "Modern online stores with product management, checkout flows, payment handling, and a polished customer experience.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section reveal">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-icon" aria-hidden="true">
                ✦
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
