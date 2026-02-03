import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section reveal">
      <div className="container">
        <h2 className="section-title">Let’s work together</h2>
        <form
          className="contact-form"
          action="mailto:umair.ashraf.codes@gmail.com"
          method="POST"
          enctype="text/plain"
        >
          <div className="form-grid">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Jane Doe" required />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="jane@example.com"
                required
              />
            </label>
            <label className="span-2">
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </label>
          </div>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
          <p className="form-note">
            Prefer email?{" "}
            <a href="mailto:you@example.com">umar.ashraf.codes@gmail.com</a>
          </p>
        </form>
      </div>
    </section>
  );
}
