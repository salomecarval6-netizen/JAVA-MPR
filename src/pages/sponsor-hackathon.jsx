import { useState } from "react";
import { Link } from "react-router-dom";
import "../../sponsor.css";

function SponsorHackathon() {

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    hackathonName: "",
    package: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


const handleSubmit = (e) => {
  e.preventDefault();
  const existingSponsors = JSON.parse(localStorage.getItem("sponsorRequests")) || [];

  const newSponsor = { ...formData, id: Date.now() };

  const updatedSponsors = [...existingSponsors, newSponsor];

  localStorage.setItem("sponsorRequests", JSON.stringify(updatedSponsors));

  alert("Sponsorship request submitted successfully!");
  
  setFormData({
      companyName: "",
      email: "",
      hackathonName: "",
      package: "",
      message: "",
    });
};


  return (
    <div className="sponsor-hackathon">
      <div className="sponsor-form">
        <h1>Sponsor a Hackathon</h1>
        <p>
          Partner with HackConnect and support the next generation of innovators.
        </p>
        
        <form onSubmit={handleSubmit}>
          <label>Company / Organization Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter company name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label>Hackathon Name</label>
          <input
            type="text"
            name="hackathonName"
            value={formData.hackathonName}
            onChange={handleChange}
            placeholder="Enter hackathon name"
            required
          />

          <label>Sponsorship Package</label>
          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
            required
          >
            <option value="">Select a package</option>
            <option value="Bronze">Bronze - ₹5,000</option>
            <option value="Silver">Silver - ₹15,000</option>
            <option value="Gold">Gold - ₹30,000</option>
          </select>

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your sponsorship"
            rows="4"
          ></textarea>

          <button type="submit">Submit Sponsorship Request</button>
        </form>

        <Link to="/sponsor" className="back-link">
          ← Back to Sponsor Page
        </Link>
      </div>
    </div>
  );
}

export default SponsorHackathon;
