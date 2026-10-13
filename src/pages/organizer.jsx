import "../../organizer.css";

function Organizer() {
  return (
    <div className="container">

      {/* Hero Section */}
      <section className="hero">
        <h1>Organize. Innovate. Connect.</h1>

        <p>
          Create and manage hackathons, connect with talented participants,
          and build an exciting platform for innovation through HackConnect.
        </p>

      </section>

      {/* Why Organize Section */}
      <section className="why-sponsor">
        <h2>Why Organize With HackConnect?</h2>

        <div className="features">

          <div className="feature">
            <img src="/create.jpg" alt="Create Events" />

            <h3>Create Events</h3>

            <p>
              Create and publish your own hackathons and provide
              participants with exciting opportunities to innovate.
            </p>
          </div>

          <div className="feature">
            <img src="/community.png" alt="Build Community" />

            <h3>Build a Community</h3>

            <p>
              Connect with students, developers and innovators
              interested in technology and problem solving.
            </p>
          </div>

          <div className="feature">
            <img src="/talent.jpg" alt="Find Talent" />

            <h3>Discover Talent</h3>

            <p>
              Find talented participants and identify promising
              developers and innovators through your events.
            </p>
          </div>

        </div>
      </section>

      {/* Organizer Benefits */}
      <section className="benefits">
        <h2>What Organizers Get</h2>

        <ul>
          <li>Easy hackathon creation and management</li>
          <li>Access to talented participants</li>
          <li>Participant registration management</li>
          <li>Event promotion across HackConnect</li>
          <li>Community and networking opportunities</li>
        </ul>
      </section>

      {/* Manage Hackathons */}
      <section className="benefits">
        <h2>Manage Your Hackathons</h2>

        <ul>
          <li>Create and publish hackathons</li>
          <li>View registered participants</li>
          <li>Update event details</li>
          <li>Manage registrations</li>
        </ul>
      </section>

    </div>
  );
}

export default Organizer;