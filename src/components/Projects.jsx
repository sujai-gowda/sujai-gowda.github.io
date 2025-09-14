import "../App.css";

function Projects() {
  return (
    <section
      id="projects"
      className="vh-100 d-flex flex-column justify-content-center align-items-center bg-light"
      style={{
        backgroundImage: "url('/Home_BG.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center">
        <h2 className="text-white mb-4">Projects</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card project-card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Dapp_Cinemas</h5>
                <p className="card-text">
                  Web3.0 decentralised Application. Which is a ticket booking
                  platform which runs on ethereum blockchain network.
                </p>
                <a
                  href="https://github.com/sujai-gowda/Dapp_Cinemas"
                  target="_blank"
                  className="btn btn-outline-light"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card project-card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Time Tracker</h5>
                <p className="card-text">
                  React project which I build for myself to increase the
                  productivity and reaching daily goals for any particular
                  activity.
                </p>
                <a
                  href="https://github.com/sujai-gowda/TrackTime-"
                  target="_blank"
                  className="btn btn-outline-light"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card project-card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Prediction of Chronic Disease</h5>
                <p className="card-text">
                  Predicting the patient's disease using Naiye-Bayes
                  Algorithm,with symptoms as a input from the patient.
                </p>
                <a
                  href="https://github.com/sujai-gowda/Disease_prediction"
                  target="_blank"
                  className="btn btn-outline-light"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-4">
            <div className="card project-card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Creation of Rose Dataset</h5>
                <p className="card-text">
                  Created dataset for different colored rose of specie Rosa x
                  Damascena. Applied SVM to differentiate the rose with the
                  created dataset.
                </p>
                <a
                  href="https://github.com/sujai-gowda/Disease_prediction"
                  target="_blank"
                  className="btn btn-outline-light"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
