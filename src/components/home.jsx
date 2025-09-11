import "../App.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="home"
      className="bg-transition vh-100 d-flex align-items-center text-white "
      style={{
        backgroundImage: "url('/BackGroundIMG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left side: Text */}
          <div className="col-md-6 text-start">
            <h1 className="display-3 fw-bold">
              Hi,
              <br /> I'm Sujai Gowda{" "}
            </h1>
            <p className="lead">
              A passionate developer building awesome projects.
            </p>
            <div>
              <a
                className="my-btn px-5 py-2 rounded-pill mb-4"
                href="#about"
                style={{ textDecoration: "none" }}
              >
                About Me ↓
              </a>

              {/* Social Media Buttons */}
              <div className="d-flex gap-2  mt-3">
                {/* GitHub */}
                <a
                  href="https://github.com/sujai-gowda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="fab fa-github"></i>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sujai-gowda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/sujai_gowda_j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#projects"
                  className="btn btn-primary px-5 py-2 rounded-pill mb-4"
                >
                  See My Work
                </a>
              </div>
            </div>
          </div>

          {/* Right side: Animated Image */}
          <div className="col-md-6 text-center">
            <motion.img
              src="/Sujai_BG_TranPT2.png"
              alt="Sujai"
              className="img-fluid"
              style={{ maxHeight: "710px", objectFit: "contain" }}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
