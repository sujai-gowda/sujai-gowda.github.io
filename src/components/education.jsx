import "../App.css";
import { motion } from "framer-motion";

function Education() {
  const educationData = [
    {
      img: "/Rvce.jpg",
      degree: "MTech in Software Engineering",
      school: "R V College of Engineering | Bengaluru",
      year: "2025 | Pursuing"
    },
    {
      img: "/GAT.jpg",
      degree: "Bachelor of Engineering in CS",
      school: "Global Academy of Technology | Bengaluru",
      year: "2021-2025 | Completed"
    },
    {
      img: "/vidya-mandir.jpg",
      degree: "PreUniversity | PCMB",
      school: "Vidhya Mandir IND PU College | Bengaluru",
      year: "2019-2021 | Completed"
    }
  ];

  return (
    <section
      id="education"
      className="position-relative"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="bg-glow-2" style={{ top: "10%", left: "5%" }}></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="section-title">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-secondary lead">
            "Education is not the learning of facts, but the training of the mind to think."
          </p>
        </motion.div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="d-flex flex-column gap-4">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="custom-card p-4"
                >
                  <div className="row align-items-center">
                    <div className="col-md-3 text-center mb-3 mb-md-0">
                      <img
                        src={edu.img}
                        alt="College"
                        className="img-fluid rounded-3 shadow"
                        style={{ height: "120px", width: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-md-9">
                      <h3 className="h4 fw-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-info mb-1">{edu.school}</p>
                      <span className="badge bg-dark border border-secondary text-secondary">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
