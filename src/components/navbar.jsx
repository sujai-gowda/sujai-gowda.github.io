import { useState, useEffect, useRef } from "react";
import "../App.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const lastScrollY = useRef(0);

  // Handle Scroll (Smart Visibility + Scrolled State)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Determine if scrolled past threshold
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setVisible(true); // Always show when at top
      }

      // Determine Scroll Direction for Smart Visibility
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setVisible(false); // Scrolling Down -> Hide
      } else if (currentScrollY < lastScrollY.current) {
        setVisible(true); // Scrolling Up -> Show
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Auto-Hide (Hide after 3s if not hovered and in scrolled mode)
  useEffect(() => {
    if (scrolled && visible && !isHovered) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [scrolled, visible, isHovered]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
        scrolled ? "navbar-scrolled py-2" : "bg-transparent py-4"
      }`}
      style={{ 
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: visible ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-150%)", // Use TranslateX -50% because index.css centers it
        left: "50%", // Always center relative to screen
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "all" : "none",
        ...(scrolled ? {} : { transform: "translateY(0)", left: "0", width: "100%", maxWidth: "100%" }) 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container" style={{ justifyContent: scrolled ? "center" : "space-between" }}>
        {/* Branding - Hidden when scrolled */}
        <a 
            className={`navbar-brand d-flex align-items-center gap-2 ${scrolled ? "d-none" : "d-flex"}`} 
            href="#home" 
            style={{ color: "var(--text-primary)" }}
        >
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

        <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-4" style={{ margin: 0 }}>
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
