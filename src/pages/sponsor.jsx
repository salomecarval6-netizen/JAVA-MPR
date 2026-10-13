import { Link } from "react-router-dom";
import "../../sponsor.css";


function Sponsor() {
  return (
    <div className="container">

      {/* Hero Section */}
      <section className="hero">
        <h1>Put Your Brand in Front of Future Innovators</h1>

        <p>
          Connect with talented students, showcase your technology, and build
          your brand presence through HackConnect.
        </p>

        <div className="buttons">
          <Link to="/plans" className="btn-secondary">
              View Plans
          </Link>

          <Link to="/sponsor-hackathon" className="btn-secondary">
              Sponsor a Hackathon
          </Link>
        </div>
      </section>


      <section className="why-sponsor">
        <h2>Why Become a Sponsor?</h2>

        <div className="features">

          <div className="feature">
            <img src="/target.jpg" alt="Targeted Reach" />
            <h3>Targeted Reach</h3>
            <p>
              Reach ambitious students, developers and future innovators
              interested in technology.
            </p>
          </div>

          <div className="feature">
            <img src="/technology.webp" alt="Technology Showcase" />
            <h3>Technology Showcase</h3>
            <p>
              Put your products, APIs and technologies directly in front of
              potential users and developers.
            </p>
          </div>

          <div className="feature">
            <img src="/talent.jpg" alt="Discover Talent" />
            <h3>Discover Talent</h3>
            <p>
              Identify talented students and potential future employees
              through hackathon participation.
            </p>
          </div>

        </div>
      </section>

      <section className="benefits">
        <h2>What Sponsors Get</h2>

        <ul>
          <li>Brand visibility across HackConnect events</li>
          <li>Mentorship opportunities</li>
          <li>Social media promotion</li>
          <li>Access to talented students</li>
        </ul>
      </section>

      <Link to='/sponsorList' className="btn-primary">VIEW SPONSORS</Link>

    </div>
  );
}

export default Sponsor;