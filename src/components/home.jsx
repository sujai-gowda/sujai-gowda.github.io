import "../App.css";
import { motion } from "framer-motion";
import TechStack from "./TechStack";

function Home() {
  return (
    <section
      id="home"
      className="d-flex align-items-center position-relative bg-grid-pattern"
      style={{
        minHeight: "100vh",
        overflow: "hidden"
      }}
    >
      {/* Abstract Background Elements */}
      

      <div className="container position-relative z-1">
        <div className="row align-items-center">
          {/* Left side: Text */}
          <div className="col-lg-7 text-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-secondary fw-bold text-uppercase mb-3" style={{ letterSpacing: "3px", color: "var(--accent-color)" }}>
                Welcome to my world
              </h4>
              <h1 className="display-2 fw-bold mb-4 lh-sm text-white">
                Hi, I'm <span className="text-gradient">Sujai Gowda</span>
              </h1>
              <p className="lead text-secondary mb-5 w-75">
                A passionate developer building awesome projects. I craft high-performance digital experiences with cutting-edge technologies.
              </p>
            </motion.div>

            <motion.div
              className="d-flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a
                className="btn-primary-custom"
                href="#projects"
              >
                View My Work
              </a>
              <a
                className="btn-outline-custom"
                href="#about"
              >
                About Me
              </a>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div 
              className="d-flex gap-4 mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
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
                  className="text-white fs-4 transition-transform"
                  style={{ transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.color = "var(--accent-color)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.color = "white";
                  }}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right side: Image */}
          <div className="col-lg-5 text-center mt-5 mt-lg-0 position-relative">
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="position-relative"
            >
                {/* Decorative circle behind image */}
                <div 
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(45, 212, 191, 0.2) 0%, transparent 70%)',
                        zIndex: -1
                    }}
                ></div>
                <TechStack />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
