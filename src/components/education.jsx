import "../App.css";

function Education() {
  return (
    <section
      className="vh-100 justify-content-center align-items-center education "
      id="education"
      style={{ backgroundColor: "#aabdccff" }}
    >
      <h1 className="heading text-center">
        <br />
        <i className="fas fa-graduation-cap"></i>
        My <span>Education</span>
      </h1>

      <p className="qoute text-center">
        Education is not the learning of facts, but the training of the mind to
        think.
      </p>

      <div className="box-container">
        <div className="container my-4">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row align-items-center bg-light text-black rounded shadow-lg">
                <div className="col-md-4 text-center">
                  <img
                    draggable="false"
                    src="/GAT.jpg"
                    alt="College"
                    className="img-fluid rounded"
                    style={{ maxHeight: "180px", objectFit: "cover" }}
                  />
                </div>

                <div className="col-md-8">
                  <div className="content p-3">
                    <h3>Bachelor of Engineering in Computer Science</h3>
                    <p>Global Academy of Technology | Bengaluru</p>
                    <h4>
                      <span>2021-2025 | Completed</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-4">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row align-items-center bg-light text-black rounded shadow-lg">
                <div className="col-md-4 text-center">
                  <img
                    draggable="false"
                    src="/vidya-mandir.jpg"
                    alt="School"
                    className="img-fluid rounded"
                    style={{ maxHeight: "180px", objectFit: "cover" }}
                  />
                </div>

                <div className="col-md-8">
                  <div className="content p-3">
                    <h3>PreUniversity | PCMB </h3>
                    <p>Vidhya Mandir IND PU College | Bengaluru</p>
                    <h4>2019-2021 | Completed</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
