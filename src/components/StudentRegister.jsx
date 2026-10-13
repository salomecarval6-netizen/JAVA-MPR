import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../student.css";

function StudentRegister() {
  const navigate = useNavigate();
  const { hackathonName } = useParams();
  const decodedName = decodeURIComponent(hackathonName);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    teamName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Registration completed successfully for ${decodedName}!`);
    navigate("/student"); 
  };

  return (
    <div className="container form-page-container">
      <div className="form-card">
        <header className="form-header">
          <h1>Hackathon Registration</h1>
          <p className="hackathon-target-name">{decodedName}</p>
        </header>

        <form onSubmit={handleFormSubmit} className="styled-registration-form">
          <div className="form-group-block">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="Enter your first and last name"
            />
          </div>

          <div className="form-group-block">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group-block">
            <label htmlFor="teamName">Team Name <span className="optional-tag">(Optional)</span></label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={formData.teamName}
              onChange={handleInputChange}
              placeholder="Create or enter your team name"
            />
          </div>

          <button type="submit" className="form-submit-btn">
            Confirm Registration
          </button>
        </form>

        <div className="form-footer-nav">
          <button type="button" className="form-back-link" onClick={() => navigate("/student")}>
            ← Cancel & Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentRegister;
