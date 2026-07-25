import "./Contact.css";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* ==========================
            SECTION HEADER
        ========================== */}

        <div className="contact-header">
          <span className="contact-badge">📩 Get In Touch</span>

          <h2 className="contact-title">
            Get In <span>Touch</span>
          </h2>

          <p className="contact-subtitle">Feel free to reach out.</p>
        </div>

        {/* ==========================
            CONTACT CARD
        ========================== */}

        <div className="contact-card">
          {/* Contact Details */}

          <div className="contact-details">
            {/* Email */}

            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div className="contact-info">
                <h3>Email</h3>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=veereshsannagire@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  veereshsannagire@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}

            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div className="contact-info">
                <h3>Location</h3>

                <p>Kalaburagi, Karnataka, India</p>
              </div>
            </div>
          </div>

          {/* Divider */}

          <div className="contact-divider"></div>

          {/* Social Links */}

          <div className="social-links">
            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/veeresh-s-a-1999lab/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            {/* GitHub */}

            <a
              href="https://github.com/Veeresh-1999"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaGithub />
              GitHub
            </a>

            {/* Discord */}

            <a
              href="https://discord.gg/2W52vhV7"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <FaDiscord />
              Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
