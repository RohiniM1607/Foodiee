document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleBtn");
    const navLinks = document.getElementById("navLinks");
    const loginBtn = document.querySelector(".login-btn");
    const forgotPassword = document.getElementById("forgotPassword");
    const forgotPasswordModal = document.getElementById("forgotPasswordModal");
    const closeForgotModal = document.getElementById("closeForgotModal");
    const facebookLogin = document.getElementById("facebookLogin");

    toggleBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
    
    loginBtn.addEventListener("click", function () {
        document.getElementById("loginBox").style.display = "block";
    });
    
    forgotPassword.addEventListener("click", function () {
        forgotPasswordModal.style.display = "flex";
    });
    
    closeForgotModal.addEventListener("click", function () {
        forgotPasswordModal.style.display = "none";
    });
    
    window.onclick = function (event) {
        if (event.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = "none";
        }
    };

    facebookLogin.addEventListener("click", function () {
        alert("Facebook login functionality will be added soon!");
    });

    // Adjusting social icons size and alignment
    document.querySelectorAll(".social-icon").forEach(icon => {
        icon.style.width = "40px";
        icon.style.height = "40px";
        icon.style.margin = "5px";
        icon.style.display = "inline-block";
    });

    // Adjust login form alignment
    const loginContainer = document.querySelector(".login-container");
    loginContainer.style.display = "flex";
    loginContainer.style.flexDirection = "column";
    loginContainer.style.alignItems = "center";
    loginContainer.style.justifyContent = "center";

    // Center navigation menu items properly
    const navBar = document.querySelector(".navbar");
    navBar.style.display = "flex";
    navBar.style.justifyContent = "space-between";
    navBar.style.alignItems = "center";

    // Responsive design tweaks
    function adjustLayout() {
        if (window.innerWidth <= 768) {
            loginContainer.style.width = "90%";
            loginContainer.style.padding = "10px";
        } else {
            loginContainer.style.width = "50%";
            loginContainer.style.padding = "20px";
        }
    }
    window.addEventListener("resize", adjustLayout);
    adjustLayout();
});

function sendResetLink() {
    const resetEmail = document.getElementById("resetEmail").value;
    if (resetEmail) {
        alert("A password reset link has been sent to " + resetEmail);
        document.getElementById("forgotPasswordModal").style.display = "none";
    } else {
        alert("Please enter a valid email address.");
    }
}
