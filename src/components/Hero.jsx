import "./Hero.css";
import profile from "../assets/images/myprofile.jpeg";
import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import resume from "../assets/resume.pdf";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-card">
        {/* LEFT */}

        <div className="hero-left">
          <span className="hero-badge">🚀 AVAILABLE FOR OPPORTUNITIES</span>

          <p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-title">Veeresh S A</h1>

          <h2 className="hero-role">Full Stack Java Developer</h2>

          <p className="hero-tech">
            Java • Spring Boot • React • Oracle • MySQL
          </p>

          <p className="hero-description">
            Passionate Full Stack Java Developer with experience building
            scalable web applications using Java, Spring Boot, React, Oracle and
            MySQL. I enjoy solving real-world problems and creating clean,
            user-friendly applications.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              <a href="#contact">Contact Me</a>
            </button>

            <button className="secondary-btn">
              <a href={resume} target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </button>
          </div>

          <div className="hero-social">
            <a
              href="https://github.com/Veeresh-1999"
              target="_blank"
              rel="noreferrer"
              className="social-circle"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/veeresh-s-a-1999lab/"
              target="_blank"
              rel="noreferrer"
              className="social-circle"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=veereshsannagire@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle"
            >
              <MdEmail />
            </a>

            <a
              href="https://discord.gg/2W52vhV7"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle"
            >
              <FaDiscord />
            </a>
          </div>
        </div>

        {/* RIGHT */}

        <div className="hero-right">
          <div className="profile-wrapper">
            <div className="profile-image">
              <img src={profile} alt="Veeresh S A" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
