const hackathons = [

    {
        name: "AI Frontier 2026",
        category: "AI",
        date: "12 - 14 October 2026",
        location: "Online",
        description: "Build innovative solutions using Artificial Intelligence."
    },

    {
        name: "Web Wizards Hackathon",
        category: "Web Development",
        date: "20 - 22 October 2026",
        location: "Mumbai",
        description: "Create the next generation of web applications."
    },

    {
        name: "CyberSecure 2026",
        category: "Cybersecurity",
        date: "5 - 7 November 2026",
        location: "Online",
        description: "Build solutions to make the digital world safer."
    },

    {
        name: "FinTech Innovators",
        category: "Fintech",
        date: "15 - 17 November 2026",
        location: "Bangalore",
        description: "Create innovative solutions for the future of finance."
    },

    {
        name: "GreenHack India",
        category: "Web Development",
        date: "1 - 3 December 2026",
        location: "Pune",
        description: "Build technology solutions for a sustainable future."
    },

    {
        name: "FutureTech Hackathon",
        category: "AI",
        date: "10 - 12 December 2026",
        location: "Online",
        description: "Explore emerging technologies and create something impactful."
    }

];


const container = document.getElementById("hackathonContainer");


// Display hackathons
function displayHackathons(list) {

    container.innerHTML = "";

    list.forEach(function(hackathon) {

        const card = document.createElement("div");

        card.classList.add("hackathon-card");

        card.innerHTML = `
            <span class="category">${hackathon.category}</span>

            <h3>${hackathon.name}</h3>

            <p><strong>Date:</strong> ${hackathon.date}</p>

            <p><strong>Location:</strong> ${hackathon.location}</p>

            <p>${hackathon.description}</p>

            <button class="register-btn">
                Register Now
            </button>
        `;

        container.appendChild(card);
    });

}



displayHackathons(hackathons);

document.getElementById("search").addEventListener("input", function() {

    const searchText = this.value.toLowerCase();

    const filtered = hackathons.filter(function(hackathon) {

        return hackathon.name.toLowerCase().includes(searchText);

    });

    displayHackathons(filtered);

});


// Category filter

document.getElementById("category").addEventListener("change", function() {

    const selectedCategory = this.value;

    if (selectedCategory === "all") {

        displayHackathons(hackathons);

    } else {

        const filtered = hackathons.filter(function(hackathon) {

            return hackathon.category === selectedCategory;

        });

        displayHackathons(filtered);
    }

});