// Replaces useEffect: runs as soon as the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sponsorContainer");

  const storedSponsors = localStorage.getItem("sponsorRequests");
  let sponsors = [];

  if (storedSponsors) {
    try {
      sponsors = JSON.parse(storedSponsors);
    } catch (error) {
      console.error("Invalid JSON format in localStorage:", error);
    }
  }

  if (sponsors.length === 0) {
    container.innerHTML = `<p>No sponsorship requests submitted yet.</p>`;
    return;
  }

  const cardsHtml = sponsors
    .map((sponsor) => `
      <div 
        data-id="${sponsor.id || ""}" 
        style="border: 1px solid #ccc; border-radius: 8px; padding: 15px; background-color: #f9f9f9;"
      >
        <h3>${sponsor.companyName || ""}</h3>
        <p><strong>Email:</strong> ${sponsor.email || ""}</p>
        <p><strong>Hackathon:</strong> ${sponsor.hackathonName || ""}</p>
        <p><strong>Package:</strong> ${sponsor.package || ""}</p>
        ${
          sponsor.message
            ? `<p><strong>Message:</strong> ${sponsor.message}</p>`
            : ""
        }
      </div>
    `)
    .join("");

  container.innerHTML = `
    <div style="display: grid; gap: 15px; margin-top: 20px;">
      ${cardsHtml}
    </div>
  `;
});