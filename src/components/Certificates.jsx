import React, { useState } from "react";

const certificates = [
  {
    title: "Ultimate React Course",
    image: "/ultimate-react-course.jpg",
  },
  {
    title: ".NET Blazor Course",
    image: "/dotnet-blazor-course.jpg",
  },
];

function CertificateCard({ title, image }) {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <article className="certificate-card">
      <div className="certificate-preview">
        {imageAvailable ? (
          <img
            src={image}
            alt={`${title} certificate`}
            loading="lazy"
            onError={() => setImageAvailable(false)}
          />
        ) : (
          <div className="certificate-placeholder" aria-hidden="true">
            <span className="certificate-placeholder-label">
              Certificate of completion
            </span>
            <span className="certificate-placeholder-title">{title}</span>
            <span className="certificate-placeholder-issuer">Udemy</span>
          </div>
        )}
      </div>
      <div className="certificate-content">
        <span className="certificate-issuer">Udemy Certificate</span>
        <h3>{title}</h3>
      </div>
    </article>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="section reveal">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.title} {...certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}
