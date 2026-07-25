import "./Experience.css";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";
import razorflow from "../assets/images/companies/rf.svg";
import synchronoss from "../assets/images/companies/synchronoss.svg";
import kodnest from "../assets/images/companies/kodnest.png";
import reubro from "../assets/images/companies/reubro.svg";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        {/* Section Header */}

        <div className="experience-header">
          <span className="experience-badge">💼 Career Journey</span>

          <h2 className="experience-title">
            My <span>Experience</span>
          </h2>

          <p className="experience-subtitle">
            A timeline of my professional journey building enterprise
            applications, solving real-world problems, and delivering scalable
            software solutions.
          </p>
        </div>

        {/* Timeline */}

        <div className="timeline">
          {/* Exp 1 */}
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>

            <div className="timeline-card">
              <div className="company-info">
                <img
                  src={razorflow}
                  alt="RazorFlow Technologies"
                  className="company-logo"
                />
              </div>
              <div className="card-header">
                <div>
                  <h3>
                    Role : Software Developer & Technical Support Engineer
                  </h3>
                  <h3>Company : RazorFlow Technologies</h3>
                </div>

                <span className="date-badge">Jul 2024 – Feb 2025</span>
              </div>

              <ul>
                <li>
                  Developed scalable backend applications using Java and Spring
                  Boot.
                </li>
                <li>
                  Designed and implemented RESTful APIs with DTO validation.
                </li>
                <li>Optimized SQL queries and Oracle PL/SQL operations.</li>
                <li>
                  Resolved production issues through debugging and log analysis.
                </li>
                <li>
                  Collaborated with Agile teams to deliver high-quality
                  features.
                </li>
              </ul>

              {/* Tech Stack */}

              <div className="tech-stack">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>REST API</span>
                <span>Oracle</span>
                <span>PL/SQL</span>
                <span>Git</span>
              </div>
            </div>
          </div>

          {/* Exp 2 */}

          <div className="timeline-item">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>

            <div className="timeline-card">
                <div className="company-info">
                <img
                  src={synchronoss}
                  alt="Synchronoss Technologies"
                  className="company-logo"
                />
              </div>
              <div className="card-header">
                <div>
                  <h3>
                    Role : Software Developer & Technical Support Engineer
                  </h3>
                  <h3>Company : Synchronoss Technologies</h3>
                </div>

                <span className="date-badge">Aug 2023 – July 2024</span>
              </div>

              <ul>
                <li>
                  Developed scalable backend applications using Java and Spring
                  Boot.
                </li>
                <li>Designed and implemented secure REST APIs.</li>
                <li>Optimized SQL queries for improved system performance.</li>
                <li>Diagnosed and resolved production issues efficiently.</li>
                <li>
                  Collaborated with cross-functional Agile teams to deliver
                  features.
                </li>
              </ul>

              {/* Tech Stack */}

              <div className="tech-stack">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>REST API</span>
                <span>Oracle</span>
                <span>PL/SQL</span>
                <span>Git</span>
              </div>
            </div>
          </div>

          {/* =======================
              Experience 3
          ======================== */}

          <div className="timeline-item">
            <div className="timeline-icon">
              <FaLaptopCode />
            </div>

            <div className="timeline-card">
                <div className="company-info kdlogo">
                <img
                  src={kodnest}
                  alt="KodNest Technologies"
                  className="company-logo"
                />
              </div>
              <br />
              <div className="card-header">
                <div>
                  <h3>Role : Full Stack Java Developer Intern</h3>
                  <h3>Institute : KodNest Technologies</h3>
                </div>

                <span className="date-badge">Jan 2023 – Jul 2023</span>
              </div>

              <ul>
                <li>
                  Completed Full Stack Java Development training using Java,
                  Spring Boot, Angular, and MySQL.
                </li>
                <li>
                  Developed a full-stack Furniture Rental & E-Commerce web
                  application.
                </li>
                <li>
                  Developed RESTful APIs and integrated frontend with backend
                  services.
                </li>
                <li>
                  Designed and managed MySQL databases with CRUD operations and
                  optimized SQL queries.
                </li>
                <li>
                  Used Git and GitHub for version control and source code
                  management.
                </li>
              </ul>

              {/* Tech Stack */}

              <div className="tech-stack">
                <span>HTML & CSS</span>
                <span>Java Script</span>
                <span>Angular</span>
                <span>Java</span>
                <span>Spring Boot</span>
                <span>REST API</span>
                <span>MySQL</span>
                <span>Git</span>
              </div>
            </div>
          </div>

          {/* =======================
              Experience 4
          ======================== */}

          <div className="timeline-item">
            <div className="timeline-icon">
              <FaLaptopCode />
            </div>

            <div className="timeline-card">
                <div className="company-info">
                <img
                  src={reubro}
                  alt="Reubro International"
                  className="company-logo"
                />
              </div>
              <div className="card-header">
                <div>
                  <h3>Role : Web Developer Intern</h3>
                  <h3>Company : Reubro International</h3>
                </div>

                <span className="date-badge">Jan 2022 – May 2022</span>
              </div>

              <ul>
                <li>
                  Learned core web technologies including HTML, CSS, JavaScript,
                  and Bootstrap.
                </li>
                <li>
                  Worked with REST APIs for data integration and communication.
                </li>
                <li>
                  Used Git and GitHub for version control and source code
                  management.
                </li>
                <li>
                  Collaborated with the development team to build responsive web
                  application <b>Product Branding Assistant</b>.
                </li>
                <li>
                  Contributed to the development of a Product Slogan
                  Recommendation System that helps product owners manage product
                  details and generate suitable marketing slogans.
                </li>
              </ul>

              {/* Tech Stack */}

              <div className="tech-stack">
                <span>HTML & CSS</span>
                <span>Java Script</span>
                <span>Bootstrap</span>
                <span>REST API</span>
                <span>Git & GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
