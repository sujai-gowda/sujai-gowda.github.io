function Contact() {
  return (
    <section
      id="contact"
      className="py-5"
      style={{
        backgroundColor: "#0d1b2a",
        color: "white",
        minHeight: "33vh",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Left column - Hero’s Portfolio text */}

          <div className="col-md-6 align-items-start">
            <h4 className="mb-3">Sujai's Portfolio</h4>
            <p className="lead mb-2">
              Thank you for visiting my portfolio. I truly appreciate your time
              and interest in my work. Connect with me over socials.
            </p>
          </div>

          {/* Right column - Contact details */}
          <div className="col-md-5">
            <h4 className="mb-3 text-md-10">Contact Me!</h4>
            <p className="text-md-10 mb-1">
              <strong>Email:</strong> jayaramsujaigowda@gmail.com
            </p>
            <p className="text-md-10 mb-1">
              <strong>Location:</strong> Bengaluru, India
            </p>

            {/* Social links */}
            <div className="d-flex justify-content-md-10 gap-3 mt-3">
              <a
                href="https://github.com/sujai-gowda"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "30px", height: "30px" }}
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sujai-gowda/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "30px", height: "30px" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://instagram.com/sujai_gowda_j"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "30px", height: "30px" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Separator line */}
        <hr className="border-light my-4" />

        {/* Footer text */}
        <div className="row">
          <div className="col text-center">
            <small>
              Made with ❤️ by <strong>Sujai Gowda</strong>
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
