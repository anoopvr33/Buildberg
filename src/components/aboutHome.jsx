import "../assets/aboutHome.css";

export default function AboutSection() {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-heading">About</h2>
        <p style={{ textAlign: "center" }}>
          BUILDBERG CONTRACTING Company, we turn visions into reality. Let us
          build your future.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3 className="about-name">Mr. VIJISH P R</h3>
            <p className="about-role">OPERATION MANAGER</p>
            <p className="about-text">
              Our visionary founder laid the cornerstone of excellence and
              innovation in every project we undertake.
            </p>
            <img
              src="/Faceless businessman avatar_ Man in suit with blue tie_.jpg"
              alt="Founder"
              className="about-image"
            />
          </div>

          <div className="about-card">
            <img
              src="/Avatar businesswoman portraits in four circles_ Vector user pics.jpg"
              alt="CEO"
              className="about-image"
            />
            <h3 className="about-name">Mrs. SRIKRUPA AMBALE LAKSHMI</h3>
            <p className="about-role">GENERAL MANAGER</p>
            <p className="about-text">
              Our GM leads with passion and precision, steering the company to
              new heights in the construction industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
