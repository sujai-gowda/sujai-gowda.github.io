import { useState, useEffect } from "react";
import "../App.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
        scrolled ? "glass-panel py-2" : "bg-transparent py-4"
      }`}
      style={{ 
        transition: "all 0.3s ease",
        padding: scrolled ? "10px 0" : "20px 0"
      }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#home" style={{ color: "var(--text-primary)" }}>
          <img
            src="/Profile_Pic.jpeg"
            alt="Profile"
            className="rounded-circle border border-2 border-primary"
            style={{ width: "45px", height: "45px", objectFit: "cover" }}
          />
          <span style={{ fontWeight: "700", letterSpacing: "0.5px" }}>Sujai.dev</span>
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <span className="fas fa-bars" style={{ color: "white" }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-4">
            {["Home", "About", "Education", "Projects", "Contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a 
                  className="nav-link" 
                  href={`#${item.toLowerCase()}`}
                  style={{ 
                    color: "var(--text-primary)", 
                    fontWeight: "500",
                    position: "relative"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent-color)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-primary)"}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
