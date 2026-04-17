// ContactPage.jsx
import { div } from "framer-motion/client";
import "../assets/contactPage.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function ContactPage() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="contact-title">Get in Touch with Us</h1>
      <p className="contact-title-p">
        Fill the form below to get in touch with us.
      </p>
      <section className="contact-page">
        <div className="contact-top">
          {/* Map Section */}
          <div className="contact-map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1807.9658745865102!2d55.165946!3d25.002435!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAwJzEwLjUiTiA1NcKwMTAnMDEuMCJF!5e0!3m2!1sen!2sin!4v1772095453979!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Address Section */}
          <div className="contact-info">
            <h3>OFFICE ADDRESS</h3>
            <p>BUILDBERG CONTRACTING LLC</p>
            <p>G-14, Arenco Building-4 , DIP-1,</p>
            <p>Dubai, UAE</p>

            <br />

            <p>
              <strong>Tel: </strong>+971-43301209, +971 5666 88 164
            </p>
            <p>
              <strong>Email:</strong> info@buildberg.ae
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <h2>Send us an Email</h2>

          {/* <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name *</label>
                <input type="text" required />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input type="email" required />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Subject *</label>
              <input type="text" required />
            </div>

            <div className="form-group full-width">
              <label>Message *</label>
              <textarea rows="6" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form> */}
          <form
            id="contactForm"
            action="https://formsubmit.co/info@buildberg.ae"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input
              type="hidden"
              name="_next"
              value="http://127.0.0.1:5500/contact.html?success=true"
            />

            <div class="form-row">
              <div class="form-group">
                <label class="text-black" for="fname">
                  First name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fname"
                  name="First Name"
                  required
                />
              </div>

              <div class="form-group">
                <label class="text-black" for="lname">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="Email"
                  required
                />
              </div>
              <div class="form-group">
                <label class="text-black" for="lname">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="phone"
                  name="Phone"
                  required
                />
              </div>
            </div>

            <div class="form-group full-width">
              <label class="text-black" for="email">
                Subject
              </label>
              <input type="text" required />
            </div>

            <div class="form-group full-width">
              <label class="text-black" for="message">
                Message
              </label>
              <textarea
                class="form-control"
                id="message"
                name="Message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
