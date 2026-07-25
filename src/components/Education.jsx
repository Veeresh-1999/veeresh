import "./Education.css";
import { FaGraduationCap, FaBuilding, FaUniversity } from "react-icons/fa";

import cukLogo from "../assets/images/companies/CUK.svg";
import gulbargaLogo from "../assets/images/companies/gug.jpg";

function Education() {
  return (
    <section id="education" className="education">
      <div className="education-container">
        {/* ===========================
            SECTION HEADER
        =========================== */}

        <div className="education-header">
          <span className="education-badge">🎓 Academic Journey</span>

          <h2 className="education-title">
            My <span>Education</span>
          </h2>

          <p className="education-subtitle">
            A focused academic journey in Computer Science and Software
            Development, building a strong foundation in programming, databases
            and software engineering.
          </p>
        </div>

        {/* ======================================================
                          MCA
        ====================================================== */}

        <div className="education-card">
          <div className="education-card-top">
            <img
              src={cukLogo}
              alt="Central University of Karnataka"
              className="education-logo"
            />

            <div className="education-content">
              <h3>
                <FaGraduationCap className="degree-icon" />
                Master of Computer Applications (MCA)
              </h3>

              <h4>
                <FaBuilding className="building-icon" />
                Central University of Karnataka
              </h4>
            </div>

            <span className="education-date">2019 – 2022</span>
          </div>

          <div className="education-divider"></div>

          <ul>
            <li>Specialized in Computer Science and Software Development.</li>

            <li>Completed an academic project: Smart Onion Grading System.</li>
          </ul>
        </div>

        {/* ======================================================
                          B.Sc.
        ====================================================== */}

        <div className="education-card">
          <div className="education-card-top">
            <img
              src={gulbargaLogo}
              alt="Gulbarga University"
              className="education-logo"
            />

            <div className="education-content">
              <h3>
                <FaGraduationCap className="degree-icon" />
                Bachelor of Science (B.Sc.)
              </h3>

              <h4>
                <FaBuilding className="building-icon" />
                S.B. College of Science, Kalaburagi</h4>

              <h5>
                <FaUniversity className="building-icon" />
                Gulbarga University, Kalaburagi</h5>
            </div>

            <span className="education-date">2016 – 2019</span>
          </div>

          <div className="education-divider"></div>

          <ul>
            <li>
              Specialized in Computer Science and Programming Fundamentals.
            </li>
            <li>
              Built a strong foundation in programming and problem-solving.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
