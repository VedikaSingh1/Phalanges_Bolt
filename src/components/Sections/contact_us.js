import React from "react";
import "./contact_us.css";

export default function ContactUs({ title, subtitle, dark, id }) {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>

        <div className="contact-us-container">
          <div className="member">
            <div className="contact-card">
              <div className="info">
                <div className="name">
                  <h1>Vedika Singh</h1>
                </div>
                <div className="email">vedikasingh3153@gmail.com</div>
                <div
                  className="linkedIn"
                  onClick={() =>
                    handleRedirect(
                      "https://www.linkedin.com/in/vedika-singh-90840a24b/"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  LinkedIn: https://www.linkedin.com/in/vedika-singh-90840a24b/
                </div>
                <div
                  className="gitHub"
                  onClick={() =>
                    handleRedirect("https://github.com/VedikaSingh1")
                  }
                  style={{ cursor: "pointer" }}
                >
                  GitHub: https://github.com/VedikaSingh1
                </div>
              </div>
            </div>
          </div>

          <div className="member">
            <div className="contact-card">
              <div className="info">
                <div className="name">
                  <h1>Akarsh Shukla</h1>
                </div>
                <div className="email">akarsh0603@gmail.com</div>
                <div
                  className="linkedIn"
                  onClick={() =>
                    handleRedirect(
                      "https://www.linkedin.com/in/akarsh-shukla-627447219/"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  LinkedIn: https://www.linkedin.com/in/akarsh-shukla-627447219/
                </div>
                <div
                  className="gitHub"
                  onClick={() =>
                    handleRedirect("https://github.com/akarsh1263")
                  }
                  style={{ cursor: "pointer" }}
                >
                  GitHub: https://github.com/akarsh1263
                </div>
              </div>
            </div>
          </div>

          <div className="member">
            <div className="contact-card">
              <div className="info">
                <div className="name">
                  <h1>Vedika Singh</h1>
                </div>
                <div className="email">vedikasingh3153@gmail.com</div>
                <div
                  className="linkedIn"
                  onClick={() =>
                    handleRedirect(
                      "https://www.linkedin.com/in/vedika-singh-90840a24b/"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  LinkedIn: https://www.linkedin.com/in/vedika-singh-90840a24b/
                </div>
                <div
                  className="gitHub"
                  onClick={() =>
                    handleRedirect("https://github.com/VedikaSingh1")
                  }
                  style={{ cursor: "pointer" }}
                >
                  GitHub: https://github.com/VedikaSingh1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
