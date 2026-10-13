// Wait for the DOM to load, then attach the redirect logic
document.addEventListener("DOMContentLoaded", () => {
    
    const firstButton = document.getElementById("first");
    firstButton.addEventListener("click", () => {
        window.location.href = "plans.html"; 
    });
    
});
