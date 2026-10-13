import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../student.css";

const hackathons = [
  {
    name: "AI Frontier 2026",
    category: "AI",
    date: "12 - 14 October 2026",
    location: "Online",
    description: "Build innovative solutions using Artificial Intelligence.",
  },
  {
    name: "Web Wizards Hackathon",
    category: "Web Development",
    date: "20 - 22 October 2026",
    location: "Mumbai",
    description: "Create the next generation of web applications.",
  },
  {
    name: "CyberSecure 2026",
    category: "Cybersecurity",
    date: "5 - 7 November 2026",
    location: "Online",
    description: "Build solutions to make the digital world safer.",
  },
  {
    name: "FinTech Innovators",
    category: "Fintech",
    date: "15 - 17 November 2026",
    location: "Bangalore",
    description: "Create innovative solutions for the future of finance.",
  },
  {
    name: "GreenHack India",
    category: "Web Development",
    date: "1 - 3 December 2026",
    location: "Pune",
    description: "Build technology solutions for a sustainable future.",
  },
  {
    name: "FutureTech Hackathon",
    category: "AI",
    date: "10 - 12 December 2026",
    location: "Online",
    description: "Explore emerging technologies and create something impactful.",
  },
];

function Student({ view }) {
  const navigate = useNavigate();
  const { hackathonName } = useParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    teamName: "",
  });

  const filteredHackathons = hackathons.filter((h) => {
    const matchesSearch = h.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || h.category === category;
    return matchesSearch && matchesCategory;
  });

  // Navigate to URL registration endpoint
  const handleRegisterClick = (name) => {
    navigate(`/register/${encodeURIComponent(name)}`);
  };

  // Navigate back to home dashboard path
  const handleBackToMain = () => {
    setFormData({ fullName: "", email: "", teamName: "" });
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Registration completed successfully for ${decodeURIComponent(hackathonName)}!`);
    handleBackToMain();
  };

  // Dedicated Screen view variant: Registration Form Layout
  if (view === "register") {
    return (
      <div className="container registration-page">
        <header>
          <h1>Register for Hackathon</h1>
          <p>{decodeURIComponent(hackathonName)}</p>
        </header>

        <section className="form-section">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="teamName">Team Name (Optional)</label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                value={formData.teamName}
                onChange={handleInputChange}
                placeholder="Enter your team or startup name"
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit Registration
            </button>
          </form>

          <div className="back-navigation">
            <button type="button" className="back-btn" onClick={handleBackToMain}>
              ← Back to Hackathons List
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Primary Screen view variant: Hackathon Explorer Dashboard
  return (
    <div className="container">
      <header>
        <h1>HackConnect</h1>
        <p>Discover Hackathons & Start Building</p>
      </header>

      <section className="search-section">
        <input
          type="text"
          id="search"
          placeholder="Search hackathons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="AI">AI</option>
          <option value="Web Development">Web Development</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Fintech">Fintech</option>
        </select>
      </section>

      <section>
        <h2>Upcoming Hackathons</h2>
        <div id="hackathonContainer" className="hackathon-container">
          {filteredHackathons.length > 0 ? (
            filteredHackathons.map((hackathon, index) => (
              <div className="hackathon-card" key={index}>
                <span className="category">{hackathon.category}</span>
                <h3>{hackathon.name}</h3>
                <p><strong>Date:</strong> {hackathon.date}</p>
                <p><strong>Location:</strong> {hackathon.location}</p>
                <p>{hackathon.description}</p>
                <button 
                  className="register-btn"
                  onClick={() => handleRegisterClick(hackathon.name)}
                >
                  Register Now
                </button>
              </div>
            ))
          ) : (
            <p>No hackathons found.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Student;
