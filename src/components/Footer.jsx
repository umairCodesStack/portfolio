import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          © <span>{year}</span> Muhammad Umair Ashraf. All rights reserved.
        </p>
        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
