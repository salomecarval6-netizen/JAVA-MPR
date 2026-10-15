document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("sponsorForm");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newSponsor = {
      id: Date.now(),
      companyName: form.companyName ? form.companyName.value.trim() : "",
      email: form.email ? form.email.value.trim() : "",
      hackathonName: form.hackathonName ? form.hackathonName.value.trim() : "",
      package: form.package ? form.package.value.trim() : "",
      message: form.message ? form.message.value.trim() : ""
    };

    let existingSponsors = [];
    try {
      const stored = localStorage.getItem("sponsorRequests");
      existingSponsors = stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      existingSponsors = [];
    }

    const updatedSponsors = [...existingSponsors, newSponsor];
    localStorage.setItem("sponsorRequests", JSON.stringify(updatedSponsors));

    alert("Sponsorship request submitted successfully!");
    form.reset();
  });
});