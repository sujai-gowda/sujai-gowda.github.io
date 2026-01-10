import "../App.css";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Dapp_Cinemas",
      desc: "Web3.0 decentralized Application. A ticket booking platform running on the Ethereum blockchain network.",
      link: "https://github.com/sujai-gowda/Dapp_Cinemas"
    },
    {
      title: "Time Tracker",
      desc: "React project built to increase productivity and track daily goals for specific activities.",
      link: "https://github.com/sujai-gowda/TrackTime-"
    },
    {
      title: "Prediction of Chronic Disease",
      desc: "Predicting patient diseases using Naive-Bayes Algorithm with symptoms as input.",
      link: "https://github.com/sujai-gowda/Disease_prediction"
    },
    {
      title: "Rose Dataset Classification",
      desc: "Created dataset for Rosa x Damascena species. Applied SVM to differentiate roses with the created dataset.",
      link: "https://github.com/sujai-gowda/Disease_prediction"
    }
  ];

  return (
    <section
      id="projects"
      style={{ background: "linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))" }}
      className="position-relative"
    >
      <div className="bg-glow-1" style={{ top: "30%", left: "50%" }}></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="section-title">
          <span className="text-gradient">My Projects</span>
          </h2>
          <p className="lead text-secondary">
            Here are some of the projects I've worked on recently.
          </p>
        </motion.div>

        <div className="row g-4 justify-content-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="custom-card h-100 p-4 d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold text-white mb-3">{project.title}</h5>
                  <p className="text-secondary mb-4">{project.desc}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-custom text-center py-2"
                >
                  View Code <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
