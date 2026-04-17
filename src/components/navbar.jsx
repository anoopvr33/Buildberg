import { Menu, X } from "lucide-react";
import "../assets/navbar.css";
import { useState } from "react";

export default function Navbar({ color }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar ${color}`}>
      <div className="navbar-container">
        {/* Logo */}
        <img src="/BuildBurg.jpg" className="navbar-logo" />

        {/* Desktop Links */}
        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <a href="/" onClick={() => setIsOpen(false)}>
          Home
        </a>
        <a href="/projects" onClick={() => setIsOpen(false)}>
          Projects
        </a>
        <a href="/about" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="/services" onClick={() => setIsOpen(false)}>
          Services
        </a>
        <a href="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  );
}
