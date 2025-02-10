// Ensure the DOM is fully loaded before inserting the navigation
document.addEventListener("DOMContentLoaded", function () {
    fetch("../navigation/index.html") // Adjust path if needed
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;

            // Ensure CSS is loaded
            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "../navigation/style.css"; // Adjust path if needed
            document.head.appendChild(link);

            // Wait for the navbar to be inserted, then add event listener
            setTimeout(() => {
                const hamburger = document.querySelector(".hamburger");
                const navLinks = document.querySelector(".nav-links");

                if (hamburger && navLinks) {
                    hamburger.addEventListener("click", function () {
                        navLinks.classList.toggle("active");
                    });
                }
            }, 100); // Slight delay to ensure elements exist
        })
        .catch(error => console.error("Error loading navbar:", error));
});