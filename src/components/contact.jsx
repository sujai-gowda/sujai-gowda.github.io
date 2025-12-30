function Contact() {
  return (
    <section
      id="contact"
      className="py-5"
      style={{
        background: "linear-gradient(to top, #0f172a, #1e293b)",
        color: "var(--text-primary)",
        minHeight: "40vh",
        marginTop: "auto"
      }}
    >
      <div className="container">
        <div className="row gy-5 align-items-center">
          {/* Left column - Intro */}
          <div className="col-md-6">
            <h4 className="fw-bold mb-3 display-6">Sujai's Portfolio</h4>
            <p className="text-secondary lead mb-4 w-75">
              Thank you for visiting. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="d-flex gap-3">
              {[
                { icon: "github", link: "https://github.com/sujai-gowda" },
                { icon: "linkedin-in", link: "https://www.linkedin.com/in/sujai-gowda/" },
                { icon: "instagram", link: "https://instagram.com/sujai_gowda_j" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center transition-all"
                  style={{ width: "45px", height: "45px" }}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right column - Contact details */}
          <div className="col-md-5 offset-md-1">
            <h4 className="fw-bold mb-4">Contact Info</h4>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h6 className="mb-0 text-white">Email Me</h6>
                  <p className="mb-0 text-secondary">jayaramsujaigowda@gmail.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h6 className="mb-0 text-white">Location</h6>
                  <p className="mb-0 text-secondary">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator line */}
        <hr className="my-5" style={{ borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Footer text */}
        <div className="row">
          <div className="col text-center">
            <p className="mb-0 text-secondary small">
              &copy; {new Date().getFullYear()} Sujai Gowda. All rights reserved. <br />
              Made with <i className="fas fa-heart text-danger mx-1"></i> & React
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
