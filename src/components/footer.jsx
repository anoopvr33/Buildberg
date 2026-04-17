import "../assets/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-section">
          <img src="/BuildBurg.jpg" className="footer-logo" />
          <p className="footer-description">
            The company specializes in Building Contracting and Steel
            Constructions Contracting.
          </p>
        </div>

        {/* Explore Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Explore</h3>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <p>Email: info@buildberg.ae</p>
          <p>Phone: +971-43301209, +971 5666 88 164 </p>
          <p>G-14, Arenco Building-4 , DIP-1,</p>
          <p>Dubai, UAE</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} All Rights Reserved By BUILDBERG
        CONTRACTING LLC
      </div>
    </footer>
  );
}
