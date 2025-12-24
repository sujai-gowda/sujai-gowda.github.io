import "../App.css";

function About() {
  return (
    <section
      id="about"
      className="vh-100 text-black"
      style={{
        backgroundImage: "url('/About_BG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-5">
        <h2 className="heading text-center mb-5">
          <br />
          <i className="fas fa-user-alt"></i> About <span>Me</span>
        </h2>

        <div className="row align-items-center">
          {/* Left Column: Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src="/Sujai_Pic.jpeg"
              alt="Myself"
              className="img-fluid rounded-circle shadow-lg my-photo"
              style={{ maxWidth: "350px", border: "1px solid #fff" }}
            />
          </div>

          {/* Right Column: Details */}
          <div className="about-text col-md-7 text-black">
            <p>
              Hi, I'm <strong>Sujai</strong>. I am a computer science
              graduate. Currently<br />
              pursuing MTech in Software Engineering in R V College of <br/>Engineering, Bengaluru. Passionate about improving my
              <br />
              coding skills exploring new technologies and solving problems.
              <br /> I believe technology is a tool to create meaningful experiences,
              <br />
               and I'm always excited to learn and grow in this journey 🚀.<br />
              
            </p>

            {/* Contact Info */}
            <p>
              <strong>Email:</strong> jayaramsujaigowda@gmail.com
            </p>
            <p>
              <strong>Location:</strong> Bengaluru, India 🌍
            </p>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1efSnCf04a4d6Sj96hGBCyTKJQ1MRizVT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-4 py-2 rounded-pill mt-3"
            >
              <strong>Resume </strong>
              <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
