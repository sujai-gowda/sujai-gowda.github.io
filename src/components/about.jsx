
import "../App.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="d-flex align-items-center"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container">
        <motion.div 
          className="row align-items-center justify-content-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="col-lg-10">
            <div className="glass-panel p-5">
              <div className="row align-items-center">
                
                {/* Left Column: Image */}
                <div className="col-md-5 text-center mb-4 mb-md-0">
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="position-relative d-inline-block"
                  >
                    <div 
                      style={{
                        position: 'absolute',
                        inset: '-10px',
                        background: 'linear-gradient(45deg, var(--accent-color), #06b6d4)',
                        filter: 'blur(20px)',
                        opacity: 0.5,
                        borderRadius: '50%',
                        zIndex: -1
                      }}
                    ></div>
                    <img
                      src="/Sujai_Pic.jpeg"
                      alt="Myself"
                      className="img-fluid rounded-circle"
                      style={{ 
                        width: "300px", 
                        height: "300px", 
                        objectFit: "cover",
                        border: "3px solid rgba(255,255,255,0.1)"
                      }}
                    />
                  </motion.div>
                </div>

                {/* Right Column: Details */}
                <div className="col-md-7 text-white">
                  <h2 className="display-5 fw-bold mb-4">
                    About <span className="text-gradient">Me</span>
                  </h2>
                  <p className="lead text-secondary mb-4">
                    Hi, I'm <strong className="text-white">Sujai</strong>. A computer science graduate and MTech student at R V College of Engineering, Bengaluru.
                  </p>
                  <p className="text-secondary mb-4">
                    I am passionate about exploring new technologies and solving complex problems through code. I believe technology is a powerful tool to create meaningful experiences, and I'm always excited to learn and grow in this ever-evolving journey 🚀.
                  </p>

                  <div className="d-flex flex-column gap-2 mb-4">
                    <div className="d-flex align-items-center gap-3">
                      <i className="fas fa-envelope text-info"></i>
                      <span>jayaramsujaigowda@gmail.com</span>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <i className="fas fa-map-marker-alt text-info"></i>
                      <span>Bengaluru, India 🌍</span>
                    </div>
                  </div>

                  {/* Resume Button */}
                  <a
                    href="https://drive.google.com/file/d/1efSnCf04a4d6Sj96hGBCyTKJQ1MRizVT/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary-custom"
                  >
                    Download Resume <i className="fas fa-download ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

