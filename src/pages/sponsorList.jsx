import { useEffect, useState } from "react";

function SponsorList() {
  const [sponsors, setSponsors] = useState([]);

  // Fetch the data from localStorage when the component mounts
  useEffect(() => {
    const storedSponsors = localStorage.getItem("sponsorRequests");
    if (storedSponsors) {
      setSponsors(JSON.parse(storedSponsors));
    }
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Sponsor List</h2>
      
      {sponsors.length === 0 ? (
        <p>No sponsorship requests submitted yet.</p>
      ) : (
        <div style={{ display: "grid", gap: "15px", marginTop: "20px" }}>
          {sponsors.map((sponsor) => (
            <div 
              key={sponsor.id} 
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                backgroundColor: "#f9f9f9"
              }}
            >
              <h3>{sponsor.companyName}</h3>
              <p><strong>Email:</strong> {sponsor.email}</p>
              <p><strong>Hackathon:</strong> {sponsor.hackathonName}</p>
              <p><strong>Package:</strong> {sponsor.package}</p>
              {sponsor.message && (
                <p><strong>Message:</strong> {sponsor.message}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SponsorList;
